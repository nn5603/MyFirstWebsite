export default function WritingSystems() {
  const scripts = [
    {
      name: 'Devanagari',
      languages: 'Hindi, Sanskrit, Marathi, Nepali',
      description: 'The most widely used script in India, used for many North Indian languages.',
      link: '/writing-systems/devanagari'
    },
    {
      name: 'Bengali',
      languages: 'Bengali, Assamese',
      description: 'Used in West Bengal and Bangladesh, known for its curved letters.',
      link: '/writing-systems/bengali'
    },
    {
      name: 'Tamil',
      languages: 'Tamil',
      description: 'One of the oldest scripts, used in Tamil Nadu and Sri Lanka.',
      link: '/writing-systems/tamil'
    },
    {
      name: 'Telugu',
      languages: 'Telugu',
      description: 'Used in Andhra Pradesh and Telangana, known for its round shapes.',
      link: '/writing-systems/telugu'
    },
    {
      name: 'Kannada',
      languages: 'Kannada',
      description: 'Used in Karnataka, similar to Telugu but with distinct features.',
      link: '/writing-systems/kannada'
    },
    {
      name: 'Malayalam',
      languages: 'Malayalam',
      description: 'Used in Kerala, evolved from Tamil and Grantha scripts.',
      link: '/writing-systems/malayalam'
    },
    {
      name: 'Gujarati',
      languages: 'Gujarati',
      description: 'Used in Gujarat, derived from Devanagari.',
      link: '/writing-systems/gujarati'
    },
    {
      name: 'Gurmukhi',
      languages: 'Punjabi',
      description: 'Used for Punjabi in Punjab, developed by Guru Angad.',
      link: '/writing-systems/gurmukhi'
    },
    {
      name: 'Oriya',
      languages: 'Odia',
      description: 'Used in Odisha, also known as Odia script.',
      link: '/writing-systems/oriya'
    },
    // Add more as needed
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
              <a href="/writing-systems" className="text-gray-900 font-medium">Writing Systems</a>
              <a href="/blogs" className="text-gray-500 hover:text-gray-900">Blogs</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Indian Writing Systems</h2>
          <p className="mt-4 text-lg text-gray-500">
            Explore the diverse scripts used across India and their cultural significance.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scripts.map((script) => (
            <div key={script.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{script.name}</h3>
                <p className="mt-1 text-sm text-gray-500">Languages: {script.languages}</p>
                <p className="mt-2 text-sm text-gray-600">{script.description}</p>
                <div className="mt-4">
                  <a href={script.link} className="text-indigo-600 hover:text-indigo-500">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}