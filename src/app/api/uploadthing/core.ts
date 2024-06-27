import { db } from '@/db'
import sharp from 'sharp'
import { createUploadthing, type FileRouter } from 'uploadthing/next'
import { z } from 'zod'

const f = createUploadthing()

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: '4MB' } })
    .input(z.object({ configId: z.string().optional() }))
    .middleware(async ({ input }) => {
      return { input }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const { configId } = metadata.input

      const res = await fetch(file.url)
      const buffer = await res.arrayBuffer()

      const imgMetaData = await sharp(buffer).metadata()
      const { height, width } = imgMetaData

      if (!configId) {
        const configuration = await db.configuration.create({
          data: {
            imgUrl: file.url,
            height: height || 500,
            width: width || 500,
          },
        })
        return { configId: configuration.id }
      } else {
        const updatedCondiguration = await db.configuration.update({
          where: {
            id: configId,
          },
          data: {
            croppedImgUrl: file.url,
          },
        })
        return { configId: updatedCondiguration.id }
      }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
