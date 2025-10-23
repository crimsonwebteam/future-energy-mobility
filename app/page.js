'use client'

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: 'white',
      gap: '2rem'
    }}>
      <h1 style={{
        fontSize: '2rem',
        fontWeight: 'normal',
        color: 'black',
        marginBottom: '1rem'
      }}>
        Future Mobility
      </h1>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center'
      }}>
        <a 
          href="/documents/AUP_Future-Mobility-LLC_10.21.2025.pdf" 
          target="_blank"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#0070f3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0051a2'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#0070f3'}
        >
          📄 Acceptable Use Policy
        </a>
        
        <a 
          href="/documents/PRIVACY-POLICY_Future Mobility-LLC_10.21.2025.pdf" 
          target="_blank"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#0070f3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0051a2'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#0070f3'}
        >
          🔒 Privacy Policy
        </a>
        
        <a 
          href="/documents/Terms-Conditions_Future-Mobility-LLC_10.21.2025.pdf" 
          target="_blank"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#0070f3',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0051a2'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#0070f3'}
        >
          📋 Terms & Conditions
        </a>
      </div>
    </main>
  )
}
