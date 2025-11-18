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
    <div style={styles.container}>
      <h2 style={styles.title}>Support & Help</h2>

      <p><strong>Emergency Hotline (Kenya):</strong> 999 / 1195</p>
      <p><strong>GBV Hotline:</strong> 1195</p>
      <p><strong>Police Hotline:</strong> 112</p>
      <p><strong>Usikimye Emergency Helpline:</strong> 0800-000-999</p>

      <h3 style={styles.subTitle}>Useful Resources</h3>
      <div style={styles.grid}>
        {resources.map((res, index) => (
          <div key={index} style={styles.card}>
            <h4 style={styles.cardTitle}>{res.name}</h4>
            <p style={styles.cardDesc}>{res.description}</p>
            <p><strong>Contact:</strong> {res.contact}</p>
            <a 
              href={res.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.cardLink}
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "30px" },
  title: { fontSize: "28px", marginBottom: "15px" },
  subTitle: { fontSize: "22px", marginTop: "20px", marginBottom: "15px" },
  grid: { display: "grid", gap: "15px", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" },
  card: { padding: "20px", borderRadius: "12px", border: "1px solid #ccc", backgroundColor: "#f9f9f9" },
  cardTitle: { fontSize: "18px", fontWeight: "600", marginBottom: "8px" },
  cardDesc: { fontSize: "14px", marginBottom: "8px", color: "#555" },
  cardLink: { color: "#1d4ed8", textDecoration: "underline" },
};

export default Help;
