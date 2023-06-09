import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api';
function TeacherLogin() {
  const [teacherLogin, setTeacherLogin] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setTeacherLogin({
      ...teacherLogin, 
      [e.target.name]: e.target.value
    })
  }

  const submitForm = () => {
    const teacherLoginData = new FormData();
    teacherLoginData.append('email', teacherLogin.email);
    teacherLoginData.append('password', teacherLogin.password);
    try{
      axios.post(`${baseUrl}/teacher-login/`, teacherLoginData)
      .then((res) => {
        if(res.data.bool === true){
          localStorage.setItem('teacherLoginStatus', true);
          window.location.href = '/teacher-dashboard';
        }else{
          alert('Invalid credentials');
        }
      });
    }catch(err){
        console.log(err);
    }
  }

  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus')
  if(teacherLoginStatus === 'true'){
    window.location.href = '/teacher-dashboard';
  }


  useEffect(() => {
    document.title = 'Teacher Login'
  }, [])
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4>Teacher Login</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label for="email" className="form-label">Email address</label>
                  <input type="email" name='email' onChange={handleChange} value={teacherLogin.email} className="form-control" />
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">Password</label>
                  <input type="password" name='password' onChange={handleChange} value={teacherLogin.password} className="form-control" id="password" placeholder="Password" />
                </div>
                {/* <div className="form-check mb-3">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" for="rememberMe">Remember me</label>
                </div> */}
                <button type="submit" onClick={submitForm} className="btn btn-secondary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherLogin