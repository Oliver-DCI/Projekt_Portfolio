import React, { Children, type ReactNode } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProfileMeta from '../components/ProfileMeta'

const MainLayout = ({children}:{children: ReactNode}) => {
  return (
    <div>
        <Header />
        <Hero />
        <ProfileMeta />
      {children}
    </div>
  )
}

export default MainLayout
