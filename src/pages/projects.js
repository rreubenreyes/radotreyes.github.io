import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
// import TransitionLink from 'gatsby-plugin-transition-link'
import Helmet from 'react-helmet'

// import QuadDoors from '../components/QuadDoors'
import Layout from '../components/Layout'
import Marquee from '../components/Marquee'

class Projects extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  }

  state = {
    currentProjectsIndex: 0,
  }

  handleProjectClick = (e) => {
    console.log(e.target.classList)
    e.target.classList.toggle(`active`)
  }

  handleNextProject = () => {
    const { currentProjectsIndex } = this.state
    const {
      data: {
        allContentfulProject: { edges: projects },
      },
    } = this.props
    const nextProjectsIndex = currentProjectsIndex + 2
    this.setState({
      currentProjectsIndex:
        nextProjectsIndex < projects.length
          ? nextProjectsIndex
          : currentProjectsIndex,
    })
  }

  handlePrevProject = () => {
    const { currentProjectsIndex } = this.state
    const prevProjectsIndex = currentProjectsIndex - 2
    this.setState({
      currentProjectsIndex:
        prevProjectsIndex >= 0 ? prevProjectsIndex : currentProjectsIndex,
    })
  }

  render() {
    const {
      data: {
        allContentfulProject: { edges },
      },
      location,
    } = this.props
    const projects = edges.map(({ node }) => ({
      ...node,
      description: node.description.internal.content,
      featuredImage: node.featuredImage.file.url,
      technologiesUsed: node.technologiesUsed.join(` // `),
    }))
    const { currentProjectsIndex } = this.state

    return (
      <Layout location={location} title="Reuben Reyes">
        <>
          <div className="projects--grid">
            <Marquee>Projects</Marquee>
            <section className="projects">
              {projects
                .slice(currentProjectsIndex, currentProjectsIndex + 2)
                .map(
                  ({
                    description,
                    externalLink,
                    technologiesUsed,
                    title,
                    featuredImage,
                  }) => (
                    <div
                      className="projects--project"
                      onClick={this.handleProjectClick}
                    >
                      <img src={featuredImage} alt={title} />
                      <span className="project--title">
                        <span
                          className="project--title__title"
                          data-content={title}
                        >
                          {title}
                        </span>
                        <span className="project--title__link">
                          <a href={externalLink} className="link--external">
                            [go to project]
                          </a>
                        </span>
                      </span>
                      <span className="project--meta">
                        <span>{description}</span>
                        <span>{technologiesUsed}</span>
                      </span>
                    </div>
                  ),
                )}
            </section>
            <div className="projects--buttons">
              <button type="button" onClick={this.handlePrevProject}>
                prev
              </button>
              <button type="button" onClick={this.handleNextProject}>
                next
              </button>
            </div>
          </div>
        </>
        {/* {windowIsLandscape && (
          <QuadDoors
            menuItems={{
              first: `home`,
              second: `projects`,
              third: `about`,
              fourth: `blog`,
            }}
          />
        )} */}
      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          title
          externalLink
          technologiesUsed
          description {
            internal {
              content
            }
          }
          featuredImage {
            id
            file {
              url
            }
          }
        }
      }
    }
  }
`
