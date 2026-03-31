export default function Blogs() {
  const posts = [
    {
      title: 'The Evolution of Devanagari Script',
      date: '2024-03-15',
      excerpt: 'Explore the historical development of Devanagari and its role in Indian literature.',
      link: '/blogs/evolution-devanagari'
    },
    {
      title: 'Digital Tools for Learning Indian Scripts',
      date: '2024-02-28',
      excerpt: 'A guide to modern applications and websites for practicing Indian writing systems.',
      link: '/blogs/digital-tools-indian-scripts'
    },
    {
      title: 'Cultural Significance of Tamil Script',
      date: '2024-02-10',
      excerpt: 'Understanding the deep cultural roots and modern usage of Tamil writing.',
      link: '/blogs/cultural-significance-tamil'
    },
    // Add more posts
  ];

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
              <a href="/blogs" className="text-gray-900 font-medium">Blogs</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Periodic Blogs</h2>
          <p className="mt-4 text-lg text-gray-500">
            Stay updated with our latest insights on Indian writing systems.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {posts.map((post) => (
            <article key={post.title} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{post.date}</p>
                <p className="mt-4 text-gray-600">{post.excerpt}</p>
                <div className="mt-4">
                  <a href={post.link} className="text-indigo-600 hover:text-indigo-500">
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}