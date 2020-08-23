import { useRouter } from 'next/router'

import React, { useState, useEffect } from 'react'

import newsData from '../../components/list-news/db'

import HeaderLayout from '../../components/layout'
import FooterLayout from '../../components/layout/footer'

import TitleHeader from '../../components/header-title/news'

import ListNews from '../../components/list-news'

import NewsContent from '../../components/news'
import News from '.'



const NewsElem = ({ news }) => {
  const router = useRouter()
  const content = news[router.query.id-1].content
  if(news[router.query.id-1] === undefined) return 404;
  return (
    <>
      <HeaderLayout>
      <TitleHeader />
      </HeaderLayout>
     
      <NewsContent 
        content={content}
      />
      
      <ListNews />
      <FooterLayout />
    </>
    
  )
}

NewsElem.getInitialProps = () => {
 
  const news = newsData
  return {
    news
  }
}

export default NewsElem