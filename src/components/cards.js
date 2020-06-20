import React from "react"
import cardStyles from "./cards.module.scss"
import { Link } from "gatsby"

export default function CardBlog({ props }) {
  return (
    <div className={`${cardStyles.card} card text-center`}>
      <Link to={`/blog/${props.node.slug}`}>
        <div className="overflow-auto">
          <img
            alt={props.node.backgroundImage.title}
            src={props.node.backgroundImage.file.url}
            className="card-img-top"
          />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{props.node.title}</h4>
          <p className="card-text text-secondary">{props.node.description}</p>
        </div>
      </Link>
    </div>
  )
}
