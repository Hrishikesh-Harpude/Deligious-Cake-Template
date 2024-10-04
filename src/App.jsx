import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import About from "./Components/About"
import Product from "./Components/Product"
import Blog from "./Components/Blog"
import Contact from "./Components/Contact"




function App() {

  const Nav=[
    'Home','About','Product','Blog','Contact'
  ]
  const Homepa=[
    {
      img1:'/images/illustration/hero-shape.png',
      title:'Delicious Cake',
      title1:'For Everyone',
      head:'Land behold it created good saw after shed Our set living. Signs ',
      head1:'midst dominion creepeth morning',

      // Popular Section Start
      title2:'Most Popular',
      img11:'/images/illustration/item4.png',
      img22:'/images/illustration/items1.png',
      img33:'/images/illustration/items2.png',
      img44:'/images/illustration/items3.png',
      img55:'/images/illustration/about.png',

      
      heading:'Our Exclusive Cakes',
      headline:'Chocolate',
      headline1:'Sweetheart',
      headline2:'Blackforest ',
      headline3:'Land behold it created good saw after shed our set.',

      // Feature Section End
      fe_title:'Our Features',
      fe_heading:'Quality is Our First Priority',
      fe_h4:'Pet Boarding',
      fe_pp:'consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna aliqua.',

      // Testing Section Start
      test_title:'Testimonial',
     test_heading:'What Customers Say',
     
    //  Cake Section Start
     imm1:'/images/illustration/instra1.png',
     imm2:'images/illustration/instra2.png',
     imm3:'/images/illustration/instra3.png',
     imm4:'/images/illustration/instra4.png',

    //  Contact Section Start
    imgg:'/images/illustration/logo2_footer.png',
    con_line:'Land behold it created good saw after shed Our set living. Signs midst dominion creepeth morning laboris nisi ufsit aliquip.',

                

    }
  ]

  const ab=[
    {
      img1:'/images/illustration/hero-shape.png',
      title:'About Us',

      img55:'/images/illustration/about.png',

      
      heading:'Our Exclusive Cakes',
      headline:'Chocolate',
      headline1:'Sweetheart',
      headline2:'Blackforest ',
      headline3:'Land behold it created good saw after shed our set.',

      fe_title:'Our Features',
      fe_heading:'Quality is Our First Priority',
      fe_h4:'Pet Boarding',
      fe_pp:'consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna aliqua.',
      


    }
  ]

  const pr=[
    {
      img1:'/images/illustration/hero-shape.png',
      title:'Our Products',

      // Popular Section Start
      title2:'Most Popular',
      img11:'/images/illustration/item4.png',
      img22:'/images/illustration/items1.png',
      img33:'/images/illustration/items2.png',
      img44:'/images/illustration/items3.png',
      img55:'/images/illustration/about.png',

      
      heading:'Our Exclusive Cakes',
      headline:'Chocolate',
      headline1:'Sweetheart',
      headline2:'Blackforest ',
      headline3:'Land behold it created good saw after shed our set.',

      img111:'/images/illustration/item_cake1.jpg',
      img222:'/images/illustration/item_cake2.jpg',
      img333:'/images/illustration/item_cake3.jpg',
      img444:'/images/illustration/item_cake4.jpg',
      

      img1111:'/images/illustration/item_cake5.jpg',
      img2222:'/images/illustration/item_cake6.jpg',
      img3333:'/images/illustration/item_cake7.jpg',
      img4444:'/images/illustration/item_cake8.jpg',


      //  Cake Section Start
     imm1:'/images/illustration/instra1.png',
     imm2:'/images/illustration/instra2.png',
     imm3:'/images/illustration/instra3.png',
     imm4:'/images/illustration/instra4.png',
      


    }
  ]

  const bl=[
    {
      img1:'/images/illustration/hero-shape.png',
      title:'Blog',
      


    }
  ]
  const co=[
    {
      img1:'/images/illustration/hero-shape.png',
      title:'Contact',
      //  Contact Section Start
    imgg:'/images/illustration/logo2_footer.png',
    con_line:'Land behold it created good saw after shed Our set living. Signs midst dominion creepeth morning laboris nisi ufsit aliquip.',

      


    }
  ]

 

 

  
  
  

  return (
   <>
   <BrowserRouter>
   <Navbar Nab={Nav}/>
   <Routes>
    <Route path="/" element={<Home page={Homepa}/>}/>
    <Route path="/About" element={<About abpage={ab}/>}/>
    <Route path="/Product" element={<Product prpage={pr}/>}/>
    <Route path="/Blog" element={<Blog blpage={bl}/>}/>
    <Route path="/Contact" element={<Contact copage={co}/>}/>
    
    
   </Routes>
   </BrowserRouter>






    
    </>  
    
  )
}

export default App
