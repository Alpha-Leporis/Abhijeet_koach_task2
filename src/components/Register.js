import React, {useState} from 'react';
import { toast} from 'react-toastify';

/**
* @author Abhijeet Rathore
**/

const Register = ({ registerUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobilenumber, setMobileNumber] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password){
            return toast.error("Please fill in all fields..!")
        }

        if(password.length < 6){
            return toast.error("Password must be of 6 or more characters");
        }

        if(mobilenumber.length < 10){
            return toast.error("Mobile Number must be of 10 characters");
        }

        const data = {
            email, password, mobilenumber
        };

        registerUser(data);

    };

    return (
            <div class="float-container">
                <div class="float-child">
                    <div className="mb-13">
                        <h1 className="text-primary text center">Register</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <input 
                                            type="email" 
                                            placeholder="Enter email id" 
                                            name="email" 
                                            className="form-control"
                                            value = {email}
                                            onChange={(e)=> setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input 
                                            type="password"
                                            placeholder="Enter password"
                                            name="password"
                                            className="form-control"
                                            value = {password}
                                            onChange={(e)=> setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input 
                                            type="mobile number" 
                                            placeholder="Enter mobile no" 
                                            name="mobile number" 
                                            className="form-control"
                                            value = {mobilenumber}
                                            maxLength = "10"
                                            onChange={(e)=> setMobileNumber(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="RegisterButton">Register</button>
                                    </div>
                                </form>
                    </div>
                </div>
            </div>
    )
}

export default Register
