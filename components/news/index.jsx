import React from 'react';

import styles from './news.module.scss'

import renderHTML from 'react-render-html';

const News = (props) => {
  const { content } = props
  return (
    <>
      <div className={styles.container}>
        <p className={styles.content}>
          {renderHTML(content)}
        </p>
        <button className={styles.button}>Download Full Report</button>
      </div>
      <h1 className={styles.related}>Related Insights</h1>
    </>
  );
}

export default News;
