import Header from '../components/Header'
import Hero from '../components/Hero'
import ProfileMeta from '../components/ProfileMeta'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ProfileMeta />

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
