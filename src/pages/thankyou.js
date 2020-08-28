import React from "react"
import { Link } from "gatsby"
import "./App.css"

export default function Thankyou() {
  return (
    <div className="pb-20 pt-16 xl:pt-24 relative block bg-gray-300 h-screen">
      <div
        className="bottom-auto top-0 left-0 pt-10 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ transform: "translateZ(0)" }}
      ></div>
      <div className="flex flex-wrap text-center justify-center">
        <div className="w-full lg:w-6/12 px-4">
          <h2 className="text-3xl font-semibold ">Thank You!</h2>
          <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
            We recieved your message. We will respond as soon as possible.
          </p>
          <div className="text-center mt-8">
            <Link
              to="/"
              className="text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg bg-gray-900 hover:bg-gray-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out mr-1 mb-1"
              style={{ transition: "all .15s ease" }}
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
