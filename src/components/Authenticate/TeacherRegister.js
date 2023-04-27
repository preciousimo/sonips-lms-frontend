import React from 'react'
import { Link } from "react-router-dom";

function TeacherRegister() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Teacher Register</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label for="email" className="form-label">Full Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">Email</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">Qualification</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">Mobile Number</label>
                  <input type="number" className="form-control" />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">Skills</label>
                  <textarea className='form-control'></textarea>
                  <div id='emailHelp' className='form-text'>Python, JavaScript, Mathematics, etc.</div>
                </div>
                <button type="submit" className="btn btn-secondary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherRegister