import { CheckBox } from "@mui/icons-material"
import { useSelector } from "react-redux"
function Subcategory(){
    const models=useSelector(state=>state.book.list)
  
return(
    <div className="w-full flex flex-col items-center">
        <form className="w-full flex flex-col items-center gap-[20px]">
        <select>
          
        </select>
</form>
    </div>
)
}
export default Subcategory