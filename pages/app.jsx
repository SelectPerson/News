import Link from 'next/link'
import Head from 'next/head'
import HeaderLayout from '../components/layout'
import FooterLayout from '../components/layout/footer'

import TitleHeader from '../components/header-title/main'
import ListNews from '../components/list-news'

const App = () => {
  return (
    <>
    <HeaderLayout>
      <TitleHeader />
    </HeaderLayout>
    <ListNews />
    <FooterLayout />
    </>
    
  )
}

export default App