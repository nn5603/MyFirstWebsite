export default function EvolutionDevanagari() {
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

      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <article className="bg-white shadow rounded-lg p-8">
          <header>
            <h1 className="text-3xl font-extrabold text-gray-900">The Evolution of Devanagari Script</h1>
            <p className="mt-2 text-sm text-gray-500">Published on March 15, 2024</p>
          </header>

          <div className="mt-8 prose prose-gray max-w-none">
            <p>
              Devanagari, meaning "script of the city of the gods," has a rich history spanning over two millennia.
              As one of the most important scripts in the Indian subcontinent, its evolution reflects the cultural,
              religious, and linguistic developments of South Asia.
            </p>

            <h2>Origins in Brahmi</h2>
            <p>
              The Devanagari script evolved from the Brahmi script around the 1st century CE. Brahmi itself
              is believed to have originated from the Aramaic script brought by traders and invaders from
              the northwest. The earliest known inscriptions in Brahmi date back to the 3rd century BCE
              during the reign of Emperor Ashoka.
            </p>

            <h2>Development Through the Centuries</h2>
            <p>
              Over time, Brahmi gave rise to several regional scripts. The northern variety, known as
              Gupta Brahmi, eventually evolved into what we now call Devanagari. The script gained prominence
              during the Gupta period (4th-6th centuries CE) and became the standard for writing Sanskrit.
            </p>

            <h2>Modern Standardization</h2>
            <p>
              The modern form of Devanagari was largely standardized in the 19th century. It became the
              official script for Hindi in 1949 when India adopted it as one of its official languages.
              Today, it's used by over 600 million people and continues to evolve with digital typography.
            </p>

            <h2>Digital Age</h2>
            <p>
              In the 21st century, Devanagari has adapted to the digital world. Unicode support has made
              it accessible globally, and modern fonts have improved readability and aesthetic appeal.
              The script continues to be a vital part of India's cultural heritage and linguistic diversity.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}