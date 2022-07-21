import React from 'react'

export default function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <main>
        <section>
          <h1 className="text-xl text-emerald-600 font-bold leading-none font-signature lg:leading-snug home-name">
            Kurtis Casperson
          </h1>
          <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-xl sm:text-2xl text-gray-200 font-bold">
                {' '}
                Developer loading...
              </h2>
              <p className="text-xl sm:text-2xl text-gray-300 py-1 max-w-lg">
                Combining my testing skills with my ever growing development
                skills, I am helping users get the best experience{' '}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
