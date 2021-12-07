import React, {useState} from 'react';
import { toast} from 'react-toastify';

/**
* @author Abhijeet Rathore
**/

const Login = ({ loginUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password){
            return toast.error("Please fill in all fields..!")
        }

        if(password < 6){
            return toast.error("Password must be of 6 or more characters");
        }

        const data = {
            email, password
        };

        loginUser(data);
    };

    return (
       
            <div class="float-container">
                <div class="float-child">
                        <div className="mb-5"> 
                            <h1 className="text-primary text center">Login</h1>
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
                                            <button type="submit" className="LoginButton">Login</button>
                                        </div>
                                    </form>
                        </div>
                </div>
            </div>
    )
}

export default Login


// className="col-md-5 mx-auto p-5 my-2 border"
