import React from "react"
import Recaptcha from "react-google-recaptcha"
import useForm from "./useForm"
import validateForm from "./validateForm"
import { navigate } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const RECAPTCHA_KEY = process.env.GATSBY_APP_SITE_RECAPTCHA_KEY
if (typeof RECAPTCHA_KEY === "undefined") {
  throw new Error(`
  Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined! 
  You probably forget to set it in your Netlify build environment variables. 
  Make sure to get a Recaptcha key at https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings
  Note this demo is specifically for Recaptcha v2
  `)
}

export default function Form() {
  const recaptchaRef = React.createRef()

  const submitForm = form => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        "g-recaptcha-response": recaptchaRef.current.getValue(),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  const { handleSubmit, handleChange, handleBlur, state, errors } = useForm(
    recaptchaRef,
    validateForm,
    submitForm
  )

  return (
    <section className="relative block py-24 lg:pt-0 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold">
                  Want to work with us?
                </h4>
                <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                  Complete this form and we will get back to you in 24 hours.
                </p>

                <form
                  name="contact"
                  method="post"
                  action="/thankyou/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  data-netlify-recaptcha="true"
                  onSubmit={handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={handleChange} />
                    </label>
                  </p>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Full Name"
                      style={{ transition: "all .15s ease" }}
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && (
                      <p className="text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Email"
                      style={{ transition: "all .15s ease" }}
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && (
                      <p className="text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      cols="80"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Type a message..."
                      name="message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.message && (
                      <p className="text-red-600">{errors.message}</p>
                    )}
                  </div>
                  <Recaptcha ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />
                  {errors.recaptcha && (
                    <p className="text-red-600">{errors.recaptcha}</p>
                  )}
                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      style={{ transition: "all .15s ease" }}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
