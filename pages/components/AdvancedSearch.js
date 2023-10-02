import { useSelector,useDispatch } from "react-redux"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { closeCategory } from "@/redux/slices/categorySlices";
import { selectModels } from "@/redux/slices/categorySlices";
function AdvancedSearch(){
    const options=useSelector(state=>state.book.list)
    const models=useSelector(state=>state.book.brands)
    const city=useSelector(state=>state.book.city)
    const brands=models.map(item=>item.models)
    const components=useSelector(state=>state.book.components)
   const form=useSelector(state=>state.book.formId)
    const show=useSelector(state=>state.book.openCategory)
    const dispatch=useDispatch()
    return(
        <div className={`flex overflow-scroll noscroll flex-col justify-start   fixed ${show ? 'left-0' : 'left-[-300%]'}  z-[999] anime top-0 left-0  bg-[#00000063] min-h-full h-[100vh]   w-[100%] max-[900px]:w-full  gap-[10px]`}>
        <div className={`flex overflow-scroll noscroll flex-col justify-start   fixed ${show ? 'left-0' : 'left-[-300%]'}  z-[999] anime top-0 left-0  bg-[#F1F3F7] min-h-full h-[100vh]   w-[30%] max-[900px]:w-full  gap-[10px]`}>
<div className="flex shrink-0 w-full h-[40px] bg-white justify-center  items-center justify-end pr-2 ">
    <h1>Axtarış</h1>
<ArrowBackIosIcon className="left-2 top-2 absolute"  onClick={()=>{dispatch(closeCategory())}}/>
</div>
<div className="p-2 flex flex-col gap-[20px]">
<div className="flex searchinput shadow-sm shadow-[#f1f3f7] w-full bg-white justify-between p-[2px] items-center  rounded-[10px]">
    <input type="text" placeholder="Elan axtar" className="search-input w-[90%] pl-2 box-border outline-0 border-none bg-[#F8F9FD]"></input>
    <span className=" bg-red-600 flex items-center justify-center w-[80px] p-[5px] rounded-[10px] text-white font-bold">Axtar</span>
</div>
<div className={`flex shadow-sm shadow-[#F1F3F7] p-2 flex-col bg-white rounded-[7px] w-full pt-[10px] gap-[10px]`}>
    <h1 className="pl-2">Ətraflı axtarış</h1>
<div className="w-[100%] noscroll h-full  custom  gap-[20px]  grid grid-cols-1 justify-center  place-items-center">
                <select   className='w-full text-[#a9a9a9] rounded-[7px] h-[40px] p-[5px] outline-none shadow-[15px] shadow-[grey]'>
                  <option hidden>Kateqoriya</option>
                  {options.map(item=>{
                    return <option value={item.key} >{item.name}</option>
                  })}
                </select>
                <div className="w-full flex gap-[10px]">
                <input required placeholder='Min qiymət' type='text' className='w-full h-[40px] p-[5px] outline-none shadow-[15px] shadow-[grey]'></input>
                <input required placeholder='Max qiymət' type='text' className='w-full h-[40px] p-[5px] outline-none shadow-[15px] shadow-[grey]'></input>
                </div>
  

                <select  className='w-full text-[#a9a9a9] rounded-[7px] h-[40px] p-[5px] outline-none shadow-[15px] shadow-[grey]'>
<option hidden>Şəhər</option>
{city.map(city=>{
  return <option>{city}</option>
})}
                </select>
    
        
    
                 
                <button className="bg-red-600 outline-none border-0 w-full p-2 rounded-[10px] text-white mt-[20px]">Axtar</button>
            </div>
</div>
</div>
</div>
</div>
    )
}
export default AdvancedSearch