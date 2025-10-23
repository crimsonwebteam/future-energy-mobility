import './globals.css'

export const metadata = {
  title: 'Future Mobility',
  description: 'A simple Next.js application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
