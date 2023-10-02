import Card from "./Card"
import Link from "next/link"
import { useSelector,useDispatch } from "react-redux"
import { products } from "@/redux/slices/products"
import { useEffect } from "react"
import Skeleton from '@mui/material/Skeleton';
import Skeletons from "./Skeletons"
function Books(){
    const dispatch=useDispatch()
    const data=useSelector(state=>state.products.data)
    const loading=useSelector(state=>state.products.loading)
    useEffect(()=>{
        dispatch(products())
        console.log(data);
    },[dispatch])
    useEffect(()=>{
        console.log(data);
    },[data])
    return(
<div className={`mx-auto h-full w-full basis-[100%]  max-[1015px]:border-[#E8E8E8]  `}>

 <h1 className="mt-2 pl-2 text-xl text-blue-600">Bütün elanlar</h1>
 {loading===true ? <Skeletons/> : 
 
 <div className="grid p-2 max-[480px]:gap-[5px] basis-[100%] grid-cols-3 max-[480px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
 {data.map(product=>{
  return <Link href={`/detail/${product.id}`}>
      <Card title={product.name} image={product.image}  price={product.price}/>
  </Link>
 })
 }
</div>
 }
</div>
    )
}
export default Books

