import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import citatimg from "../../images/tango_citat.svg"
import { CitatWrapper } from "./styles/CitatStyles"

const Quote = () => {
  const data = useStaticQuery(graphql`
    query {
      wordpressPage(wordpress_id: { eq: 47 }) {
        acf {
          citat_1_text
          citat_1_author
        }
      }
    }
  `)
  return (
    <CitatWrapper>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={citatimg} alt="Quote" />
            <h6>{data.wordpressPage.acf.citat_1_text}</h6>
            <p>{data.wordpressPage.acf.citat_1_author}</p>
          </div>
        </div>
      </div>
    </CitatWrapper>
  )
}

export default Quote
