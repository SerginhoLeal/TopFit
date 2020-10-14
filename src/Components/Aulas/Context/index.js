import React, {createContext, useState, useEffect, useContext} from 'react';

import {localhost} from "../../../Services";

import {Alert} from 'react-native';

import {myHooksContext} from "../../../Context/authContext";

const AulasContext = createContext({});

export const AulasProvider = ({children}) => {

  const {data, token} = myHooksContext();

  const [docs, setDocs] = useState([])
  const [myClass, setMyClass] = React.useState([])

  const MarcarHora = (Aulas) => {
    fetch(`${localhost}/7Ypo2iYtfLi8RrH1TRRC/${Aulas._id}/H1TRRC`,{
      method:'post',
      headers:{
        'Content-Type':'application/json',
        user: data._id,
        'Authorization':`Bearer ${token}`
      }
    }).then(res => res.json())
    .then(res => {
      if(res.error == "Limite_de_aulas"){
        Alert.alert("Limite de aulas","Você só pode marcar uma aula por vez")
      }
      if(res.error == "Você_já_está_incluido"){
        Alert.alert("Incluido","Você já está incluido")
      }
      loadingLessons()
      myClasses()
    })
  }

  const DesmarcarHorario = (Aulas) => {
    fetch(`${localhost}/7Ypo2iYtfLi8RrH1TRRC/${Aulas._id}/CRRT1H`,{
      method:'post',
      headers:{
        'Content-Type':'application/json',
        user: data._id,
        'Authorization':`Bearer ${token}`
      }
    }).then(res => res.json())
    .then(res => {
      if(res.error == "Limite_de_aulas"){
        Alert.alert("Limite de aulas","Você só pode marcar uma aula por vez")
      }
      loadingLessons()
      myClasses()
    })
  }

  const loadingLessons = () => {
    fetch(`${localhost}/C7Ypo2iYtfLi8RrH1TRR`,{
      method:'get',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${token}`
      }
    }).then(res => res.json())
    .then(res => {
      setDocs(res)
    })
  }

  const myClasses = () => {
    fetch(`${localhost}/iYtfLi8C7Ypo2RrH1TRR`,{
      method:'get',
      headers:{
        'Content-Type':'application/json',
        user:data._id,
        'Authorization':`Bearer ${token}`
      }
    }).then(res => res.json())
    .then(res => {
      setMyClass(res.myClass)
    })
  }

  React.useEffect(()=>{
    loadingLessons();
    myClasses();
  },[])
  
  return(
    <AulasContext.Provider value={{ loadingLessons, docs, myClasses, myClass, MarcarHora, DesmarcarHorario }}>

      {children}

    </AulasContext.Provider>
  )
};

// export default AuthContext;

export function HooksAulasContext(){
  const context = useContext(AulasContext)

  return context;
}