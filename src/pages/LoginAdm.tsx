// src/pages/LoginAdm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/LoginContext';
import logo from "../assets/logo_pavan.png"
import BackgroundAnimated from "../Components/BackgroundAnimated/BackgroundAnimated"


const LoginAdm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {

    const adminUsername = import.meta.env.VITE_ADMIN_USERNAME;
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (username === adminUsername && password === adminPassword) {
      setIsAuthenticated(true);
      navigate('/adm');
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  return (
    <div className='flex justify-start items-center h-[100vh] px-6 flex-col gap-y-12 pt-20'>
        <BackgroundAnimated/>

        <div className='flex justify-center items-center z-10'>
            <img src={logo} className='h-[8rem] w-[8rem]'/>
        </div>

        <div className='h-[15rem] w-full flex justify-evenly flex-col items-center bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
'>
              <h1 className='font-inter text-xl text-slate-800 uppercase font-semibold'>Painel Administrativo</h1>
              <h2 className='font-inter text-xl text-slate-800 font-bold'>Log-in</h2>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Usuário"
                className='w-fit rounded-md text-center h-[2rem] font-inter'
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
                className='w-fit rounded-md text-center h-[2rem] font-inter'
              />
              <button className='border-[0.15rem] border-slate-300 px-[0.5rem] py-[0.25rem] rounded-xl font-bold font-inter' onClick={handleLogin}>Entrar</button>
            
        </div>
    </div>
  );
};

export default LoginAdm;
