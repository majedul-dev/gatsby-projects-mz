import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Title from "../components/title"

import { FaShareSquare, FaGithub } from "react-icons/fa"

const query = graphql`
  {
    allStrapiProjects {
      nodes {
        title
        desc
        github
        id
        url
        sourcelink
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiProjects: { nodes: projects },
  } = data
  projects.map(project => {
    const { stack } = project
    const stackArray = stack[0]
    console.log(stackArray)
  })

  return (
    <section className="section">
      <Title title="Projects" />
      {/* <form className="filter-form">
        <div className="form-group">
          <label>filter by project</label>
          <select name="" id="" className="form-control">
            {projects.map(project => {
              const { stack } = project
              const stackArray = stack[0]
              return (
                <option key={stackArray.id} value="">
                  {stackArray.title}
                </option>
              )
            })} */}
      {/* <option value="">all</option>
            <option value="">Javascript</option>
            <option value="">React</option>
            <option value="">Node</option> */}
      {/* </select>
        </div>
      </form> */}
      <div className="projects section-center">
        {projects.map(project => {
          const {
            id,
            title,
            desc,
            github,
            url,
            sourcelink,
            image,
            stack,
          } = project
          return (
            <article key={id} className="single-project">
              <div className="image-wrapper">
                <Image
                  fluid={image.childImageSharp.fluid}
                  className="img"
                  alt=""
                />
              </div>
              <div className="content-wrapper">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="fa-share-square"
                >
                  {/* <i className="fas fa-share-square"></i> */}
                  <FaShareSquare />
                </a>
                <div className="project-info">
                  <h4>{title}</h4>
                  <div className="stack-items">
                    {stack.map(item => (
                      <span key={item.id}>{item.title}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="single-project-footer">
                <a href={github} target="blank">
                  <i className="fab fa-github">
                    <FaGithub />
                  </i>
                </a>
                <a href="#">About Project</a>
                <a href={sourcelink} target="_blank" rel="noreferrer">
                  source code
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
