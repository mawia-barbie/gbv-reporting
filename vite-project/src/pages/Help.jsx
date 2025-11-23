function Help() {
  // List of resources with description and contact info
  const resources = [
    {
      name: "Gender Violence Recovery Centre (GVRC)",
      description: "Provides counseling, legal aid, and medical referrals for survivors of GBV.",
      contact: "0800 720 565",
      url: "https://gvrc.or.ke/",
    },
    {
      name: "Sexual Gender Based Violence Survivor Center(SGBV) and Patient Initiated Testing and Counseling Services(PITC)",
      description: "Offers medical and mental health support for survivors.",
      contact: "+254 719073000",
      url: "https://www.materkenya.com/sgbv-details",
    },
    {
      name: "Legal Rights & Protection Info",
      description: "Provides legal guidance and rights information for victims.",
      contact: "-",
      url: "https://www.kenyalaw.org",
    },
    {
      name: "Usikimye",
      description: "Supports survivors of sexual assault and GBV. Provides hospital access, safe houses, and helps survivors seek justice.",
      contact: "0800-000-999",
      url: "https://www.usikimye.org/",
    },
  ];

  return (
     <div className="min-h-screen bg-blue-50 p-6">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6 text-center">
        Support & Help
      </h2>

      <div className="mb-8 text-gray-800 space-y-1 text-center md:text-left">
        <p><strong>Emergency Hotline (Kenya):</strong> 999 / 1195</p>
        <p><strong>GBV Hotline:</strong> 1195</p>
        <p><strong>Police Hotline:</strong> 112</p>
        <p><strong>Usikimye Emergency Helpline:</strong> 0800-000-999</p>
      </div>

      <h3 className="text-2xl font-semibold text-blue-700 mb-4">Useful Resources</h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {resources.map((res, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
          >
            <h4 className="text-lg font-semibold mb-2 text-gray-800">{res.name}</h4>
            <p className="text-gray-600 mb-2">{res.description}</p>
            <p className="text-gray-700 mb-2"><strong>Contact:</strong> {res.contact}</p>
            <a
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Help;
