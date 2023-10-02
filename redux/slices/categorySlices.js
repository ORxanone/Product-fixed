import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const categories=[
    {
        key:0,
        name:"Telefon",
        models:["Iphone","Samsung","Huawei","Honor","Xiaomi","Alcatel","Realme","Nokia","Hisense","Fly","Tecno","Htc","ZTE","Casper","BlackBerry","Sony","Philips","Oppo","Hoffman","Infinix","Lg"],
    icon:"../phone.png"
  
    },
    {
        key:1,
        name:"Komputer",
        models:["Toshiba","Fijutsi","Macbook","Hp","Asus","Acer","Dell","Lg","Nexus","Samsung","Casper","Honor","Lenevo","Sony"],
        icon:"../laptop-screen.png"
    },
    {
        key:2,
        name:"Televizor",
        models:["Toshiba","Arcelik","Shiwaki","Vestel","Zimmer","Acer","Thomson","Lg","Supra","Samsung","Supermax","Vestel","Westburg","Sony","Crystal","Corfug","Elenberg","Discovery","Daewo","Braun","Benq","Artel","Akai","Akira","Awai"],
icon:"../tv.png",
    },
    {
        key:3,
        name:"Aksessuar",
        models:["Qulaqciq","Mouse","Klavyiatura","Antiudar","Batareya","Usb","Flaskart","Adapter","Printer","Web kamera","Modem","Router","Kabro","Ekran"],
  icon:"../headphone.png"
    },
    {
        key:4,
        name:"Oyun konsolu",
        models:["Playstation","Xbox","Sega","Nintendo"],
  icon:"../controller.png"
    },
]
const city=["Ağcabədi","Ağdam","Ağdaş","Ağstafa","Ağsu","Astara","Ağdərə","Bakı","Balakən","Beyləqan","Bərdə","Biləsuvar","Cəbrayıl","Cəlilabad","Culfa","Daşkəsən","Füzuli","Gədəbəy","Gəncə","Goranboy","Göyçay","Göygöl","Hacıqabul","Imişli","Saatlı","Kürdəmir","Kəlbəcər","Laçın","Lerik","Lənkəran","Masallı","Mingəçevir","Naftalan","Neftçala","Oğuz","Ordubad","Qax","Qazax","Qəbələ","Qobustan","Quba","Qubadlı","Qusar","Sabirabad","Səlyan","Samux","Şamaxı","Şəki","Şəmkir","Şərur","Şirvan","Siyəzən","Sumqayıt","Şuşa","Tərtər","Tovuz","Ucar","Xaçmaz","Xankəndi","Xocalı","Xocavənd","Xudat","Yardımlı","Yevlax","Zaqatala","Zəngilan","Zərdab"]

const colors=["Qara","Ağ","Qırmızı","Yaşıl","Boz","Qəhvəyi","Sarı","Narıncı","Qızılı"]


export  const booksData = createSlice({
  name: 'counter',
  initialState:{
    list:categories,
    brands:[],
    city:city,
    colors:colors,
   openCategory:false,
   border:0,
   isScroll:false,
},
  reducers: {
        openMenu:(state)=>{
state.menuShow=true
        },
        closeMenu:(state)=>{
            state.menuShow=false
        },
        goDarkMode:(state)=>{
          if(state.darkMode===false){
            state.darkMode=true
          }else{
            state.darkMode=false
          }
        },
        openCategory:(state)=>{
           state.openCategory= true
        },
        closeCategory:(state)=>{
            state.openCategory=false
        },
        setBorder:(state,action)=>{
state.border=action.payload.id
        },
        changeForm:(state,action)=>{
           state.formData.title=action.payload.title
           state.formData.description=action.payload.description
           state.formData.price=action.payload.price
            console.log(state.formData.title)
        },
      
      
  },
});

export const {openMenu,closeMenu,goDarkMode,openCategory,closeCategory,setBorder,changeForm} = booksData.actions;

export default booksData.reducer;
