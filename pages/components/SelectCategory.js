
import { useSelector, useDispatch } from 'react-redux';
import { setBorder } from '@/redux/slices/categorySlices';


function SelectCategory() {
  const categories = useSelector((state) => state.book.list);
  const dispatch = useDispatch();
  const border = useSelector((state) => state.book.border);
  return (
<div className='flex  overflow-scroll bg-white  p-2 gap-[20px] noscroll items-center'>
    {categories.map(item=>{
        return <div onClick={()=>{dispatch(setBorder({id:item.key}))}} className=" h-[100px] hover:text-red-600 flex flex-col items-center justify-center">
       <div className={`h-[60px] w-[60px] bg-[#F1F3F7;] p-3 rounded-[10px] ${border===item.key ? "active" : null} `}>
       <img className='w-full h-full' src={item.icon}></img>
       </div>
            <h1 className={`text-[16px] w-[70px] truncate ${border===item.key ? "active-text" : null}`}>{item.name}</h1>
        </div>
    })}
</div>
  );
}

export default SelectCategory;