'use client'

export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="site-title">Future Mobility</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
        <div style={{ background: 'white', padding: '1.5rem', border: '1px solid #003e72', width: '100%', maxWidth: '500px' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#00556e', textAlign: 'center' }}>Acceptable Use Policy</h3>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/aup" className="btn btn-tertiary btn-default">
              <span>View Online</span>
            </a>
            <a
              href="/documents/AUP_Future-Mobility-LLC_10.21.2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-default"
            >
              <span>Download PDF</span>
            </a>
          </div>
        </div>
        
        <div style={{ background: 'white', padding: '1.5rem', border: '1px solid #003e72', width: '100%', maxWidth: '500px' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#00556e', textAlign: 'center' }}>Privacy Policy</h3>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/privacy" className="btn btn-tertiary btn-default">
              <span>View Online</span>
            </a>
            <a
              href="/documents/PRIVACY-POLICY_Future-Mobility-LLC_10.21.2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-default"
            >
              <span>Download PDF</span>
            </a>
          </div>
        </div>
        
        <div style={{ background: 'white', padding: '1.5rem', border: '1px solid #003e72', width: '100%', maxWidth: '500px' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#00556e', textAlign: 'center' }}>Terms & Conditions</h3>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/terms-and-conditions" className="btn btn-tertiary btn-default">
              <span>View Online</span>
            </a>
            <a
              href="/documents/Terms-Conditions_Future-Mobility-LLC_10.21.2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-default"
            >
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
