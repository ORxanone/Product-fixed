import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Login from './Login';
import Register from './Register';
import CancelIcon from '@mui/icons-material/Cancel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
function LoginBox({closeLogin}){
    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
    <div className="fixed bottom-[-50%] z-[10000] bg-[#00000073] flex justify-center max-[490px]:items-end  items-center w-[100%] h-[100%] min-[490px]:top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
<div className="w-[35%] bg-white max-[490px]:h-[75%] max-[475px]:w-[100%] max-[1019px]:w-[70%] object-contain h-[55%] relative bg-[#F8F9FD] pt-[40px] flex flex-col items-center max-[490px]:rounded-b-[0px] anime rounded-[10px] shadow-sm shadow-black">
<CancelIcon onClick={()=>{closeLogin(false)}} className='absolute right-2 top-2 ' fontSize='large'/>
<Box  sx={{ width: '100%', typography: 'body1', display:"flex",flexDirection:"column",alignItems:"CENTER" }}>
      <TabContext value={value} className="w-full flex justify-center bg-red-600">
        <Box sx={{ borderBottom: 1,width:"100%",display:"flex",justifyContent:"center", borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Giriş" value="1" />
            <Tab label="Qeydiyyat" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{width:"100%"}}><Login/></TabPanel>
        <TabPanel value="2" sx={{width:"100%"}}><Register/></TabPanel>
        
      </TabContext>
    </Box>
</div>

    </div>
    )
}
export default LoginBox