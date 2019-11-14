import React from 'react';
import Forms from "./components/Forms"
import logo from './logo.svg';
import './App.css';
import FormikForms from './components/Forms';
import styled from "styled-components";
import Form from "./components/Forms";
import Users from "./components/Users";
import {Route} from "react-router-dom";

const BigDivStyled = styled.div`
    
`;

function App() {
  return (
    <div className="App">
      <BigDivStyled>
        <h1>Register Here!</h1>
        </BigDivStyled>
      <Route exact path ="/" render ={props => <FormikForms/>}/>  
      <Route path = "/users" render ={props => <Users/>} />
     
    </div>
  );
}




export default App;
