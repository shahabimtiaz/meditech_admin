import React from 'react'
import { Link } from 'react-router-dom'

const Medicine = () => {
  return (
    <div>
         <main id="main" className="main">
        <div className="pagetitle">
          <h1>Medicine</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">Medicine</li>
            </ol>
          </nav>
        </div>
        </main>
    </div>
  )
}

export default Medicine