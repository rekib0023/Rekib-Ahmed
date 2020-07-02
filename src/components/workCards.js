import React from "react"
import cardStyles from "./workCards.module.scss"
import { Link } from "gatsby"
import { Card, Button } from "react-bootstrap"

export default function CardBlog({ props }) {
  return (
    <div className={`${cardStyles.card} card text-center`}>
        <div className="overflow-auto">
          <img
            alt={props.node.displayImage.title}
            src={props.node.displayImage.file.url}
            className="card-img-top"
          />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{props.node.name}</h4>
          <p className="card-text text-secondary">{props.node.description}</p>
          <a href={props.node.livePreviewLink} class="" target="_blank">Live Preview</a>
          <a href={props.node.sourceCodeLink} class="" target="_blank">Source Code</a>
        </div>
    </div>
  )
}
