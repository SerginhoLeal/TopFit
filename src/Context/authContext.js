import React, {createContext, useState, useEffect, useContext} from 'react';

import AsyncStorage from '@react-native-community/async-storage'

const AuthContext = createContext({ codeForNext: true, signed: true, user: {}});

export const AuthProvider = ({children}) => {

    /*------------ Estados ------------*/
    const [data, setData] = useState(null);
    const [token, setToken] = useState(null);
    const [num, setNum] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [carregando, setCarregando] = useState(false)

    /*------------ Estados ------------*/

    useEffect(()=>{
        async function LoadStorageData(){
            const storageUser = await AsyncStorage.getItem('@RNAuth:user');
            const storageToken = await AsyncStorage.getItem('@RNAuth:token');
            const numeroToken = await AsyncStorage.getItem('@RNAuth:numero');

            if(storageUser && storageToken){
                setData(JSON.parse(storageUser));
                setNum(numeroToken)
                setToken(storageToken)
                setLoading(false)
            }
            setLoading(false)
        }
        LoadStorageData();
    },[])

    /************* Enviando o Código *************/

    async function sendCode(numero){
        fetch('http://localhost:3000/NRBQlog6f2Pwnqe3adQJ',{
            method:'post',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                telefone:numero,
            })
        })
        .then(res => res.json())
        .then(async(res) =>{ 
            res != "inexistente"
                ?
            await AsyncStorage.setItem('@RNAuth:numero', numero)|
            setNum(numero)
                :
            console.log('fail')
        })
    }

    /************* Enviando o Código *************/

    /************* Pegando o Código *************/

    async function getCode(GetCode){
        setError(false)
        setCarregando(true)

        fetch('http://localhost:3000/PwbsOs9YtfLi85clN8Sz',{
            method:'post',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                codigo:GetCode,
                telefone:num
            })
        })
        .then(res => res.json())
        .then(async(res) =>{
            res.error != 'Codigo_não_existe'
                ?
            await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(res.user)) |
            await AsyncStorage.setItem('@RNAuth:token', res.token)|
            setCarregando(false)|
            setData(res.user)
                :
            setCarregando(false)
            setError(true)
        })
    }

    /************* Pegando o Código *************/

    /************* Deslogar *************/
        function signOut(){
            AsyncStorage.clear().then(()=>{
                setData(null)
                setNum(null)
                setLoading(false)
            })
        }
    /************* Deslogar *************/

    return(
        <AuthContext.Provider value={{ 
            codeForNext: !!num,
            signed: !!data, 
            data, 
            token,
            loading, 
            sendCode, 
            getCode, 
            signOut, 
            error,
            carregando 
        }}>

            {children}

        </AuthContext.Provider>
    )
};

// export default AuthContext;

export function myHooksContext(){
    const context = useContext(AuthContext)

    return context;
}