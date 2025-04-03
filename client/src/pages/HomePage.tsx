import React, { useEffect, useState } from 'react'

const HomePage = () => {

  const [url, setUrl] = useState("")



  useEffect(() => {
    async function getdata(){
      const responce = await fetch("http://localhost:3000/api/v1/user")
      const data = await responce.json();
      
      console.log(data)

      return data;
    }

    getdata();
  },[])

  function printUrl(event: any) {
    event.preventDefault()

    console.log(url)

    setUrl("")
  }

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
        <button className='btn btn-primary mt-3' type="submit" onClick={e => printUrl(e)}>
          Genarate URL
        </button>
      </form>
    </div>
  )
}

export default HomePage