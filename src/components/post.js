import React from "react"
import styles from "./post.module.css"
import ListLink from "./link"
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Post = props => (
  <div className={styles.post}>
    <div className={styles.thumbnail}>
      <PreviewCompatibleImage
        imageInfo={{
          image: props.thumbnail,
          alt: props.title
        }}
      />
    </div>
    <div className={styles.description}>
      <h4 className={styles.title}>{props.title}</h4>
      <p className={styles.excerpt}>{props.excerpt}</p>
      <footer>
        <div className={styles.actions}>
          <ListLink to={ props.slug } >Continue Reading</ListLink>
        </div>
        <div className={styles.stats}>
          <ul>
            <li>{props.date}</li>
            <li><em>{props.timeToRead > 1 ? `${props.timeToRead} mins` : `${props.timeToRead} min`}</em></li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
)

export default Post;
