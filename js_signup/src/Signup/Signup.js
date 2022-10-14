import React,{Component} from 'react'
import './Signupcss.css'

export default class Signup extends Component {
    state = {
        disabled:true
    }
  
    handleChange =(e) =>{
        if(e.target.value.length === 10)
        {
            this.setState({
                disabled:false
            });
        }
        else{
          this.setState({
            disabled:true 
          });
        }
  
    }

    
render(){
  return ( 
    <div className="Parent">
        <div className="left">
            <div className='container d-flex justify-content-center'>
                <section>
                    <h2> Logo</h2>
                    <h3>Where the job finds you</h3>
                </section>
            </div>
            
        </div>
        <div className="right">
            <div className='container d-flex justify-content-center'>
            <form>
                <section className='copy'>
                    <h2>Sign Up for Job Seeker</h2>
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
                        <div className="pass col-6">
                            <input type='password' id = 'password' name = "password" placeholder='Password' data-bs-toggle="tooltip" data-bs-placement ="bottom" title="Password Requirement"/> 
                            {/* <span className='tooltip'>Password requirements</span> */}
                        </div>
                        <div className="col-6 conpass">
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

                <div className='input-container-mobile'>
                    <div className="row g-3 justify-content-start">
                            <div className='col-sm-2'>
                                <input type="text" id="isd" name ="isd" placeholder='ISD'/>
                            </div>
                            
                            < div className='col-sm-6'>
                                 <input className='required' type="tel"  id="mobile" name ="mobile"  placeholder='Mobile No' onChange={this.handleChange} />
                            </div>

                        
                            <div className="col-sm-4">
                                <button className='genotp' 
                                id="btngenotp"
                                name = "genotp" type ="submit" disabled={this.state.disabled} > Generate OTP</button>
                            </div> 
                        </div>
                </div>
                

                <div className ="input-container-otp">
                    <input type="text" id ="otp" name = "otp" placeholder='Enter OTP'/>
                </div>

                <div className='signup-button'>
                    <button className="signup" type="submit">Sign Up</button>
                </div> 

                
            </form>
            </div>
        </div>
    </div>
    
  )
}
}
