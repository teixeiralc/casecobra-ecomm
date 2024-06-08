import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import MaxWidthWrappper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'

const NavBar = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  const isAdmin = user?.email === process.env.ADMIN_EMAIL

  return (
    <nav className="sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrappper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="z-40 text-lg font-semibold">
            case<span className="text-green-600">cobra</span>
          </Link>

          <div className="flex h-full items-center space-x-4">
            {user ? (
              <>
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({
                    size: 'default',
                    variant: 'ghost',
                  })}
                >
                  Sign out
                </Link>
                {isAdmin ? (
                  <Link
                    href=""
                    className={buttonVariants({
                      size: 'default',
                      variant: 'ghost',
                    })}
                  >
                    Dashboard ✨
                  </Link>
                ) : null}
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: 'default',
                    className: 'hidden items-center gap-1 text-white sm:flex',
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({
                    size: 'default',
                    variant: 'ghost',
                  })}
                >
                  Sign up
                </Link>
                <Link
                  href="/api/auth/login"
                  className={buttonVariants({
                    size: 'default',
                    variant: 'ghost',
                  })}
                >
                  Login
                </Link>
                <div className="hidden h-8 w-px bg-zinc-200 sm:block" />
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: 'default',
                    className: 'hidden items-center gap-1 text-white sm:flex',
                  })}
                >
                  Create case
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrappper>
    </nav>
  )
}

export default NavBar
