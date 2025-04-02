import React, { useState } from 'react'

const HomePage = () => {

  const [url, setUrl] = useState("")


  return (
    <div className="mt-5 mb-5">
      <form className="d-flex flex-column align-items-center">
        <input
          type="text"
          className="form-control form-control-sm w-50"
          id="URL"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className='btn btn-primary mt-3' type="submit">
          Genarate URL
        </button>
      </form>
    </div>
  )
}

export default HomePage