import React from 'react'

export default function Signup() {
  return (
    <div className="Parent">
        <div className="left">
            <section className='copy'>
                <h1>Logo</h1>
                <h4>iQuizuAnswer</h4>
            </section>
            
        </div>
        <div className="right">
            <form>
                <section className='copy'>
                    <h2>Sign Up</h2>
                    <div className='login-container'>
                        <p> Already have an account? <a href="/">
                            <strong>Log In </strong></a></p>
                    </div>
                </section>

                <div className="input-container-name">
                    <div className='row justify-content-start'>
                        <div className='col-6'>
                            <input type="text" name="firstname" placeholder="First Name"/>
                        </div>

                        <div className='col-6'>
                            <input type="text" name="lastname" placeholder="Last Name"/>
                        </div>
                    </div>
                </div>

                <div className='input-container-email'>
                    <input type="text" id = "email" name = "email" placeholder='Email Address'/>
                </div>

                <div className='input-container-password'>
                    <div className="row justify-content-start">
                        <div className="col-6">
                            <input type='password' id = 'password' name = "password" placeholder='Password'/> 
                        </div>
                        <div className="col-6">
                        <input type='password' id = 'conpassword' name = "conpassword" placeholder=' Confirm Password'/> 
                        </div>
                    </div>
                </div>

                <div className='input-container-dropdown'>
                    <select name="jobsector" id ="dropdown" placeholder='Job Sector'>
                        <option value="">Job Sector</option>
                        <option value="IT">IT</option>
                        <option value="Pharma">Pharma</option>
                        <option value="HR">HR</option>
                    </select>
                </div>

                <div className='input-container-dropdown'>
                    <select name="jobrole" id ="dropdown" placeholder='Job Role'>
                        <option value="">Job Role</option>
                        <option value="softdev">Software Developer</option>
                        <option value="HR">HR</option>
                        <option value="Marketing">BDA</option>
                    </select>
                </div>


                <div className='input-container-dropdown'>
                    <select name="country" id ="dropdown" placeholder='Country'>
                        <option value="">Country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="France">France</option>
                        <option value="Pakistan">Pakistan</option>

                    </select>
                </div>

                
            </form>
            
        </div>
    </div>
  )
}
