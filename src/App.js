import React, {useState, useEffect} from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { toast, ToastContainer } from 'react-toastify';
import fire from './config/fire';
import { Container } from 'react-bootstrap';

/**
* @author Abhijeet Rathore
**/

function App() {
  console.log(fire);
  const [isLogined, setIsLogined] = useState(false);
  const [user, setUser] = useState({});

  //auth checking
  useEffect(() => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        setIsLogined(true);
        return setUser(user);
      }
    })
  }, [isLogined,user])

  //register user
  const registerUser = ({email, password}) => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .then((res)=>{
        setUser(res.user);
        return toast.success("Registered Successfully...!")
    })
    .catch((err) => {
      if(err.code === "auth/email-already-in-use"){
        return toast.warning("This Email is Already Registered!");
      }
    });
  };


  //Login user
  const loginUser = ({email, password}) => {
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      setUser(res.user);
      return toast.success("Logged In successfully...!")
    }) 
    .catch(err => {
      if(err.code === "auth/wrong-password"){
        return toast.error("Email or Password is Invalid!");
      }else if(err.code === "auth/user-not-found"){
        return toast.error("Email or Password is Invalid!");
      }
    });
  };


  //logout user
  const logoutUser = () => {
    fire
    .auth()
    .signOut()
    .then(() => {
      setIsLogined(false);
      return toast.success("Logged Out successfully...!")
    })
    .catch(err => {
      return toast.error(err.massage);
    })
  }


  return (
    <div className="container">
      <ToastContainer />
      <h1 className="text-center py-5 display-4"> </h1>
      <div className="row text-center">
        { 
            isLogined ? (
              <>
                <h1>Welcome to Home Page { user.email }</h1>
                <button type="button" className="btn btn-outline-dark mx-5" onClick={logoutUser}>Logout</button>
              </>
              
            ):(
              <>
              <Container className="container">
                <Login loginUser={loginUser}/>
                <Register registerUser={registerUser}/>
              </Container>

                  
              </>
            )
        }
      </div>
    </div>
  );
}

export default App;
