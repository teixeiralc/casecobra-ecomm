'use client'

import ResizeHandle from '@/components/ResizeHandle'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { cn } from '@/lib/utils'
import NextImage from 'next/image'
import { Rnd } from 'react-rnd'

interface DesignConfiguratorProps {
  configId: string
  imgUrl: string
  imageDimensions: { height: number; width: number }
}

const DesignConfigurator = ({
  configId,
  imgUrl,
  imageDimensions,
}: DesignConfiguratorProps) => {
  return (
    <div className="relative mb-20 mt-20 grid grid-cols-3 pb-20">
      <div className="focus: relative col-span-2 flex h-[37.5rem] w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-gray-300 p-12 text-center ring-offset-2 focus:outline-none focus:ring-2 focus:ring-primary">
        <div className="pointer-events-none relative aspect-[896/1831] w-60 bg-opacity-50">
          <AspectRatio
            ratio={896 / 1831}
            className="pointer-events-none relative z-50 aspect-[896/1831] w-full"
          >
            <NextImage
              alt="phone image"
              src="/phone-template.png"
              className="pointer-events-none z-50 select-none"
              fill
            />
          </AspectRatio>
          <div className="absolute inset-0 bottom-px left-[3px] right-[3px] top-px z-40 rounded-[32px] shadow-[0_0_0_9999px_rgba(229,231,235,0.6)]" />
          <div
            className={cn(
              'absolute inset-0 bottom-px left-[3px] right-[3px] top-px rounded-[32px]',
              `bg-blue-900`,
            )}
          />
        </div>

        <Rnd
          default={{
            x: 150,
            y: 205,
            height: imageDimensions.height / 4,
            width: imageDimensions.width / 4,
          }}
          lockAspectRatio
          resizeHandleComponent={{
            topLeft: <ResizeHandle />,
            topRight: <ResizeHandle />,
            bottomRight: <ResizeHandle />,
            bottomLeft: <ResizeHandle />,
          }}
          className="absolute z-20 border-[2px] border-primary"
        >
          <div className="relative h-full w-full">
            <NextImage
              src={imgUrl}
              fill
              alt="your image"
              className="pointer-events-none"
            />
          </div>
        </Rnd>
      </div>
    </div>
  )
}

export default DesignConfigurator
