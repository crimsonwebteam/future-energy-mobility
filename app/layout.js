import './globals.css'

export const metadata = {
  title: 'Future Energy Mobility',
  description: 'A simple Next.js application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
