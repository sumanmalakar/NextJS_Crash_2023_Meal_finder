import './globals.css'
import Header from './components/Header';

export const metadata = {
  title: 'SUMAN MALAKAR',
  description: 'Web development tutorials and courses',
  keywords:'React, Angular, View'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        
    <Header />
    <main className = "container">{children}</main>
        
        </body>
    </html>
  )
}
