export default function Tamil() {
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
              <a href="/writing-systems" className="text-gray-900 font-medium">Writing Systems</a>
              <a href="/blogs" className="text-gray-500 hover:text-gray-900">Blogs</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Tamil Script</h2>
          <p className="mt-4 text-lg text-gray-500">
            Tamil is one of the oldest continuously used scripts in the world, dating back to at least the 5th century BCE.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900">History</h3>
            <p className="mt-2 text-gray-600">
              The Tamil script evolved from the Brahmi script and has remained largely unchanged for over two millennia.
              It is the official script of Tamil Nadu and is also used in Sri Lanka, Singapore, and among Tamil diaspora communities.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900">Features</h3>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Consists of 12 vowels and 18 consonants</li>
              <li>Written from left to right</li>
              <li>Does not use conjunct consonants like other Indian scripts</li>
              <li>Known for its classical literature, including the Sangam poetry</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900">Languages</h3>
            <p className="mt-2 text-gray-600">
              Used primarily for Tamil language.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900">Resources</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="https://en.wikipedia.org/wiki/Tamil_script" className="text-indigo-600 hover:text-indigo-500" target="_blank" rel="noopener noreferrer">Wikipedia - Tamil Script</a></li>
              <li><a href="https://www.omniglot.com/writing/tamil.htm" className="text-indigo-600 hover:text-indigo-500" target="_blank" rel="noopener noreferrer">Omniglot - Tamil</a></li>
              <li><a href="https://fonts.google.com/?subset=tamil" className="text-indigo-600 hover:text-indigo-500" target="_blank" rel="noopener noreferrer">Google Fonts - Tamil</a></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}