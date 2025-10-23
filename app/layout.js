import './globals.css'

export const metadata = {
  title: 'Future Mobility',
  description: 'Future Mobility legal documents and policies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
