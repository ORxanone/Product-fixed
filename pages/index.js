
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Books from './components/Books'
import LoginBox from './components/LoginBox'
import { useState } from 'react'
import AdvancedSearch from './components/AdvancedSearch'
import SelectCategory from './components/SelectCategory'
import NavbarSkleton from './components/NavbarSkeleton'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const [login,setLogin]=useState(false)
  return (
    <main>
     <Header openLogin={setLogin}/>
     <SelectCategory/>
     <AdvancedSearch/>
     <div className='flex w-full  max-[1015px]:flex-col'>
      <Books/>
     </div>
     {login===true ? <LoginBox  closeLogin={setLogin}></LoginBox> : null}
    </main>
  )
}
