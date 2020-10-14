import React, {createContext, useState, useEffect, useContext} from 'react';

import {localhost} from "../../../Services";

import {Alert} from 'react-native';

import ImagePicker from "react-native-image-picker"

import {myHooksContext} from "../../../Context/authContext";

const FeedContext = createContext({});

export const FeedProvider = ({children}) => {

  const {data, token} = myHooksContext();

  /*************** useState *****************/

  const [imagens, setImagens] = useState(null)
  const [imageUrl, setImageUrl] = useState("")
  const [load, setLoad] = useState(false)

  /*************** useState *****************/

  /*************** sendPost *****************/
  const sendPost = () => {
    setLoad(true)
    fetch(`${localhost}/kW24SJmbA6surYp5qWPJ`,{
      method:'post',
      headers:{
        'Content-Type':'application/json',
        "Authorization":`Bearer ${token}`
      },
      body:JSON.stringify({
        clienteNome:data.nome,
        imgCliente:imageUrl
      })
    })
    .then(res => res.json())
    .then(sendResult=>{
      setImagens(null)
      setLoad(false)
    }).catch(err=>{})
  }

  /*************** sendPost *****************/

  /*************** _uploadGalery *****************/

  const _uploadGalery = () => {
    setLoad(true)
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (res) => {
      if(res.didCancel){
        setLoad(false)
      }else if(res.pronto){
        console.log('imagem pronto', res.pronto)
      }else{
        const uri = res.uri
        const type = 'image/jpg'
        const name = res.fileName
        const source = {uri, type, name}
        handleUpdate(source)
      }
    })
  }

  /*************** _uploadGalery *****************/

  /*************** _uploadCamera *****************/

  const _uploadCamera = () => {
    setLoad(true)
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (res) => {
      if(res.didCancel){
        setLoad(false)
      }else if(res.pronto){
        console.log('imagem pronto', res.pronto)
      }else{
        const uri = res.uri
        const type = 'image/jpg'
        const name = res.fileName
        const source = {uri, type, name}
        handleUpdate(source)
      }
    })
  }

  /*************** _uploadCamera *****************/

  /*************** handleUpdate *****************/

  const handleUpdate = (photo) => {
    const data = new FormData()
    data.append('file',photo)
    data.append('upload_preset','TopFitness')
    data.append('cloud_name','zasetrewsqw')
    fetch('https://api.cloudinary.com/v1_1/zasetrewsqw/image/upload',{
      method:'POST',
      body:data,
      headers:{
        'Accept':'application/json',
        'Content-Type':'multipart/form-data'
      }
    }).then(res => res.json())
    .then(data => {
      setImageUrl(data.url)
      setImagens(data.url)
      setLoad(false)
    }).catch(err=>{})
  }

  /*************** handleUpdate *****************/
  
  return(
    <FeedContext.Provider value={{ sendPost, _uploadGalery, _uploadCamera, imagens, load }}>

      {children}

    </FeedContext.Provider>
  )
};

// export default AuthContext;

export function HooksFeedContext(){
  const context = useContext(FeedContext)

  return context;
}