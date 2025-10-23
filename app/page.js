'use client'

export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#0070f3', marginBottom: '2rem' }}>Future Mobility</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', width: '100%', maxWidth: '500px' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#333', textAlign: 'center' }}>Acceptable Use Policy</h3>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/aup" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#0070f3', color: 'white', textDecoration: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '500' }}>View Online</a>
            <a href="/documents/AUP_Future-Mobility-LLC_10.21.2025.pdf" target="_blank" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '500' }}>Download PDF</a>
          </div>
        </div>
        
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', width: '100%', maxWidth: '500px' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#333', textAlign: 'center' }}>Privacy Policy</h3>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/privacy" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#0070f3', color: 'white', textDecoration: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '500' }}>View Online</a>
            <a href="/documents/PRIVACY-POLICY_Future-Mobility-LLC_10.21.2025.pdf" target="_blank" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '500' }}>Download PDF</a>
          </div>
        </div>
        
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', width: '100%', maxWidth: '500px' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#333', textAlign: 'center' }}>Terms & Conditions</h3>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/terms" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#0070f3', color: 'white', textDecoration: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '500' }}>View Online</a>
            <a href="/documents/Terms-Conditions_Future-Mobility-LLC_10.21.2025.pdf" target="_blank" style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '8px', fontSize: '1rem', fontWeight: '500' }}>Download PDF</a>
          </div>
        </div>
      </div>
    </main>
  )
}