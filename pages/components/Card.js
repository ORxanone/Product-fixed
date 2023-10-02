import { useSelector,useDispatch } from "react-redux"
import { products } from "@/redux/slices/products"
import { useEffect } from "react"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
function Card({title,image,price}){

return(
    <div className="w-full relative bg-white h-[250px] pb-[5px] max-[632px]:w-1/1 sm:w-1/1 md:w-1/1 lg:w-1/1 xl:w-1/1 rounded-[7px]">
<BookmarkBorderIcon fontSize="large" className="absolute p-[4px] text-black bg-white rounded-[50%] top-2 right-2"></BookmarkBorderIcon>
<div className="flex justify-center h-[150px] w-full">
<img className="rounded-t-[7px] h-full w-full object-cover" src={image}></img>
</div>
<div className="flex flex-col  pl-2  gap-[5px]">
    <h1 className="text-black text-[21px] font-bold">{price}</h1>
    <p className="text-[18px] h-[30px] w-[90%] overflow-ellipsis overflow-hidden">{title}</p>
    <p className="text-[12px] text-[grey] ">21.09.2023</p>
</div>
    </div>
)
}
export default Card