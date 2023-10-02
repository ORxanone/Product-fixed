import { useState } from 'react';
import TextField from '@mui/material/TextField';
function Register() {
  const [User, setUser] = useState({});
  const CreateUser = (e) => {
    const { name, value } = e.target; 
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }))};
  const Usercreate =async () => {
    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(User),
      });
  
      if (!response.ok) {
        throw new Error('HTTP Hatası: ' + response.status);
      }
  
      const responseData = await response.json();
  
      console.log('API Response:', responseData);
  
      
    } catch (error) {
      console.error('Hata:', error);
  
  
    }
  };
  
  return (
    <div className='flex flex-col items-center gap-[20px] w-full'>
      <TextField
        id="outlined-password-input"
        label="Ad"
        name='name'
        value={User.value}
        type="text"
        autoComplete="current-password"
        size='small'
        required
        className='w-full'
        onChange={CreateUser}

      />
      <TextField
        id="outlined-password-input"
        label="Email"
        type="text"
        name='email'
        value={User.value}
        autoComplete="current-password"
        size='small'
        required
        className='w-full'
       onChange={CreateUser}
      />
      <TextField
        id="outlined-password-input"
        label="Şifrə"
        type="password"
        name='password'
        value={User.value}
        size='small'
        required
        className='w-full'
        onChange={CreateUser}
      />
      <button onClick={Usercreate} className='outline-none bg-[#FF6617] rounded-[5px] w-full h-[40px] flex items-center justify-center p-[5px] text-white'>
        Tamamla
      </button>
    </div>
  );
}
export default Register