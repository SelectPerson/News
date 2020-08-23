import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './news.module.scss'

import Arrow from './img/arrow.svg'

const ItemNews = (props) => {
  const router = useRouter()
  const { id, src, title, about, index } = props
  const [ showMore, setShowMore ] = useState(false)
  const getShowMore = showMore ? '100%' : '58px'
  const clickShow = () => showMore ? setShowMore(false) : setShowMore(true)
  
  return (
    <li className={styles.blockNews} key={index}> 
      <Link href={"/news/[id]"} as={`/news/${id}`}>
        <a>
          <img src={src} className={styles.titleImg} alt="News"/>
          <h4>{title}</h4>
          <p style={{ height: getShowMore}}>
            {about}
          </p>
          </a>
      </Link>
      <div className={styles.show} onClick={clickShow}> 
        <img src={Arrow} alt="Arrow"/>
        <span>Show more</span>
      </div>
    </li>
  );
}

export default ItemNews;
