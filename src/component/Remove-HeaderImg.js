import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function HeaderImg() {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1267, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div
      className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{
        minHeight: "75vh",
      }}
    >
      <div className="absolute top-0 w-full h-full">
        <Img
          fluid={data.imageOne.childImageSharp.fluid}
          className="object-center object-cover h-64 z-0"
        />
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-75 bg-black z-10"
        ></span>
      </div>
      <div className="container relative mx-auto z-20">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-5xl">
                Your story starts with us.
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                This is a simple example of a Landing Page you can build using
                Tailwind Starter Kit. It features multiple CSS components based
                on the Tailwindcss design system.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden z-30"
        style={{ height: "70px", transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
  )
}
