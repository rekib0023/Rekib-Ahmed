import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export default function Head({ title }) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author
                }
            }
        }
    `)
    return (
        <Helmet title={`${data.site.siteMetadata.author} | ${data.site.siteMetadata.title}`}/>
    )
}