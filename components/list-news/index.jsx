import styles from './news.module.scss'

import ItemNews from './item'

import NewsData from './db.js'


const ListNews = () => {
  const getDataNews = NewsData.map((elem, index) => {
    return (
      <ItemNews 
        key={index}
        src={elem.src}
        title={elem.title}
        about={elem.about}
        id={elem.id}
      />
    )
  })


  return (
    <div className={styles.container}>
      <ul className={styles.newsList}>
      {getDataNews}
     
      {/* {getDataNews} */}
      </ul>
    </div>
   
  );
}

export default ListNews;
