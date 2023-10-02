import { useState } from 'react';
import TextField from '@mui/material/TextField';

function Login() {
  
  return (
   <div className='flex flex-col items-center gap-[20px]'>
  <TextField
          id="outlined-password-input"
          label="Ad və ya email"
          type="text"
          autoComplete="current-password"
        size='small'
        className='w-full'
      
        />
        <TextField
          id="outlined-password-input"
          label="Şifrə"
          type="password"
          autoComplete="current-password"
        size='small'
        className='w-full'
    
        />
        <button className='outline-none bg-[#FF6617] rounded-[5px] w-full h-[40px] flex items-center justify-center p-[5px] text-white'>
            Giriş et
        </button>
   </div>
  );
}

export default Login;