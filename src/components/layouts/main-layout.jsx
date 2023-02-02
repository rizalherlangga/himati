import { ReactNode } from 'react'
import { FooterLayout, HeaderLayout } from './components'

const MainLayout = ({ children }) => {
  return (
    <div className="mx-auto">
      <HeaderLayout />
      <main className="min-h-[calc(100vh-(80px*2))]">{children}</main>
      <FooterLayout />
    </div>
  )
}

export default MainLayout
