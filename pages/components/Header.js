import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { openCategory} from '@/redux/slices/categorySlices';
import { useDispatch,useSelector } from 'react-redux';
function Header({openLogin}){
    const dispatch=useDispatch()
    const darkMode=useSelector(state=>state.book.darkMode)

    return(
    <div className='w-full top-0 left-0 z-[1]  h-[70px] bg-red-600 flex justify-between pl-4 pr-2 items-center'>
<div className='flex items-center justify-center gap-[10px]'>
    <h1 className="text-2xl text-white font-bold">Axtar.az</h1>
</div>
<div className='flex items-center justify-between gap-[15px] pr-[10px]'>
<div onClick={()=>{dispatch(openCategory())}} className='w-[30px] h-[30px] rounded-[10px] bg-white  flex items-center justify-center'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ">
  <path strokeLinecap="round" strokeLinejoin="round"  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
</svg>
</div>
   <div className='w-[30px] h-[30px] rounded-[10px] bg-white flex items-center justify-center'>
   <Link href="/newpost">
   <AddIcon fontSize='medium' className='text-black font-bold'/>
   </Link>
   </div>
   <div className='w-[30px] h-[30px] rounded-[10px] bg-white flex items-center justify-center'>
   <PersonIcon fontSize='medium' className='text-black font-bold' onClick={()=>{openLogin(true)}}/>
   </div>
</div>
</div>
    )
}
export default Header