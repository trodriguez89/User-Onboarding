import React from 'react';
import Forms from "./components/Forms"
import logo from './logo.svg';
import './App.css';
import FormikForms from './components/Forms';
import styled from "styled-components";

const BigDivStyled = styled.div`
    
`;

function App() {
  return (
    <div className="App">
      <BigDivStyled>
        <h1>Please register!</h1>
        </BigDivStyled>
     <FormikForms />
    </div>
  );
}




export default App;
