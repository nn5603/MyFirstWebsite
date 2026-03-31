export default function Devanagari() {
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
          <h2 className="text-3xl font-extrabold text-gray-900">Devanagari Script</h2>
          <p className="mt-4 text-lg text-gray-500">
            Devanagari is the most widely used script in India, serving as the writing system for Hindi, Sanskrit, Marathi, and several other languages.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900">History</h3>
            <p className="mt-2 text-gray-600">
              Devanagari evolved from the Brahmi script around the 1st century CE. The name "Devanagari" means "script of the gods" in Sanskrit.
              It has been used for writing Sanskrit texts for centuries and became the standard script for Hindi in the 19th century.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900">Features</h3>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Uses a horizontal line (shirorekha) above the letters</li>
              <li>Has 33 consonants and 12 vowels</li>
              <li>Written from left to right</li>
              <li>Includes conjunct consonants for consonant clusters</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900">Languages</h3>
            <p className="mt-2 text-gray-600">
              Primarily used for Hindi, Sanskrit, Marathi, Nepali, and Konkani.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900">Resources</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="https://en.wikipedia.org/wiki/Devanagari" className="text-indigo-600 hover:text-indigo-500" target="_blank" rel="noopener noreferrer">Wikipedia - Devanagari</a></li>
              <li><a href="https://www.omniglot.com/writing/devanagari.htm" className="text-indigo-600 hover:text-indigo-500" target="_blank" rel="noopener noreferrer">Omniglot - Devanagari</a></li>
              <li><a href="https://fonts.google.com/?subset=devanagari" className="text-indigo-600 hover:text-indigo-500" target="_blank" rel="noopener noreferrer">Google Fonts - Devanagari</a></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}