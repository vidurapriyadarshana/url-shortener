import React from 'react'
import { NavLink } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="mb-3">About Our URL Shortener</h2>
          <p className="lead">
            Our <strong>URL Shortener</strong> helps you convert long and complex links into short, 
            easy-to-share URLs. Whether for social media, emails, or business use, our tool ensures 
            your links remain clean and professional.
          </p>

          <div className="card shadow-sm p-4 mt-4">
            <h4 className="mb-3">Key Features</h4>
            <ul className="list-group list-group-flush text-start">
              <li className="list-group-item">✅ <strong>Instant Shortening</strong> – Shorten links in seconds.</li>
              <li className="list-group-item">✅ <strong>Custom Short URLs</strong> – Personalize your links.</li>
              <li className="list-group-item">✅ <strong>Easy Copy & Share</strong> – Quick sharing of your URLs.</li>
              <li className="list-group-item">✅ <strong>Analytics Tracking</strong> – View click statistics (if enabled).</li>
              <li className="list-group-item">✅ <strong>Secure & Reliable</strong> – Your links never expire unless deleted.</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4>Why Use a URL Shortener?</h4>
            <p>✔ **Saves Space** – Perfect for platforms with character limits.</p>
            <p>✔ **Improves Readability** – Shorter links look cleaner and more professional.</p>
            <p>✔ **Boosts Engagement** – Custom short links are more trustworthy.</p>
            <p>✔ **Track Performance** – Monitor clicks and engagement (if tracking enabled).</p>
          </div>

          <button className="btn btn-primary mt-3">
            <NavLink to={'/'} className='nav-link'>
              Start Shortening URLs 🚀
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutPage