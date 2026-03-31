export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Indian Writing Systems</h1>
            </div>
            <nav className="flex space-x-8">
              <a href="/" className="text-gray-500 hover:text-gray-900">Home</a>
              <a href="/writing-systems" className="text-gray-500 hover:text-gray-900">Writing Systems</a>
              <a href="/blogs" className="text-gray-500 hover:text-gray-900">Blogs</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Explore Indian Writing Systems
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Discover the rich diversity of scripts used in India, from ancient to modern times.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Writing Systems</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Learn about various Indian scripts, their history, and usage.
                </p>
                <div className="mt-4">
                  <a href="/writing-systems" className="text-indigo-600 hover:text-indigo-500">
                    Explore →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Periodic Blogs</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Read our latest articles on linguistics, culture, and technology related to Indian scripts.
                </p>
                <div className="mt-4">
                  <a href="/blogs" className="text-indigo-600 hover:text-indigo-500">
                    Read Blogs →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">Resources</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Find links to tools, fonts, and learning materials for Indian writing systems.
                </p>
                <div className="mt-4">
                  <a href="/writing-systems" className="text-indigo-600 hover:text-indigo-500">
                    View Resources →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
