import Header from "./components/header.component";
import Body from "./components/body/body.component";
import "./sass/App.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentProjects } from "./app/features/projectSlice";
import { Route, Routes } from "react-router-dom";
import About from "./components/body/about.component";
import Project from "./components/body/project.component";
import CustomError from "./components/customError";
import Home from "./components/body/homePage.component";
import { useState } from "react";
import SignInSignup from "./components/signInSignup";

function App() {
  const [error , setError] = useState(null);
  const { projects } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((resposnse) => {
          if(!resposnse.ok){
            throw Error('could not detch data for that resource')
          }
          setError(null)
          return resposnse.json();
        })
        .then((users) => dispatch(setCurrentProjects(users)))
        .catch((err) => setError(err.message));
    }, 1000);
  }, []);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/authentication' element={<SignInSignup />} />
        <Route path='/projects'>
          <Route index element={ error ? <CustomError  message ={error}/> : <Body props={projects} />} />
          <Route path=':id' element={<Project />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<CustomError message ={'sorry, that page doesnt exist'}/>} />
      </Routes>
    </div>
  );
}

export default App;
