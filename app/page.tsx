import Image from 'next/image'
import { PushNotificationManager, InstallPrompt } from '@/app/PWA'

export default function Page() {
  return (
    <>
      <div className={'flex flex-col items-center justify-center'}>
        <div className={'flex items-center justify-center w-100'}>
          <div className={'border-2'}>
            <PushNotificationManager />
          </div>
          <div className={'border-2'}>
            <InstallPrompt />
          </div>
        </div>
        <div className={'flex flex-col items-center justify-center'}>
          <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-100">
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <h1 className={''}>Daankh Next.js Project Template</h1>
              </div>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Image
                  className="dark:invert"
                  src="/logo.svg"
                  alt="Daankh Next.js Project Template"
                  width={180}
                  height={180}
                  priority
                />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}
