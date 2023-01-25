import Header from "./components/navigation/header.component";
import Projects from "./pages/projects.page";
import "./sass/App.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentProjects } from "./app/features/projectSlice";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about.page";
import Project from "./components/body/project.component";
import CustomError from "./components/customError";
import Home from "./pages/homePage.component";
import { useState } from "react";
import SignInSignup from "./components/signInSignup";
import Footer from "./components/footer.component";

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
          <Route index element={ error ? <CustomError  message ={error}/> : <Projects props={projects} />} />
          <Route path=':id' element={<Project />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<CustomError message ={'sorry, that page doesnt exist'}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
