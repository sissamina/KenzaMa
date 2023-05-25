import React, { useState } from 'react'
import {AnimatePresence, motion} from "framer-motion"
import {BiSearch} from "react-icons/bi"
import {BsChevronDown, BsPerson} from "react-icons/bs"
import {BsPersonFillSlash, BsPersonLinesFill} from "react-icons/bs"
import {GiCalendar} from "react-icons/gi"
import {AiOutlineDatabase, AiOutlineLogout} from "react-icons/ai"
import {FaFileAlt, FaBars} from "react-icons/fa"
import {CgProfile} from "react-icons/cg" 
import {TbDatabaseImport} from "react-icons/tb"
import {FaRegClock} from "react-icons/fa"
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'


const routes =[
    {
        path:"/",
       name:"Profil",
       icon: <CgProfile />,
     
   },
    {
        path:"/Gestionemployes",
        name:"Gestion Empl ",
        icon: <BsPerson/>,
      
    },
    {
        path:"/Gestionjustification",
        name:"Gestion d'abscense",
        icon: <BsPersonFillSlash/>,
      
     
    },
    {
        path:"/Jourferie",
        name:"Jours feries",
        icon: <GiCalendar/>
    },
    {
        path:"/HoraireManagement",
        name: "Création Horaire",
        icon: <FaRegClock/>
    },
    {
        path:"/RecuperF",
        name:"Recuperer Rapport ",
        icon: <AiOutlineDatabase/>
    },
    {
        path:"/Feuilleprésence",
        name:"Feuille Présence",
        icon: <FaFileAlt />
    },
    {
         path:"/ImportData",
        name:"Impoter BD",
        icon: <TbDatabaseImport />
    },
    {   path: "/",
        name: "Logout",
        icon: <AiOutlineLogout/>
       
    }
]

export const Slidebar = ({children}) => {
    const [isOpen, setIsOpen]= useState(false);
  
    
    const toggle = () => setIsOpen(!isOpen);

    const inputAnimation ={ 
        hidden:{
            width: 0,
            padding: 0,
            opacity: 0,
          
        },
        show:{
           with: "140",
            padding: "5px 75px",
          //  color: "rgb(247, 241, 241)",
            opacity: 2,
          
            transition: {
                duration: 0.2,
            },

        },
    };
    const showAnimation ={ 
        hidden:{
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
            },
        show:{
           with: "auto",
            opacity: 1,
               transition: {
                duration: 0.2,
            },
            },
    };
  return (
    <div className="main-container" color='$yellow-500'> 
        <motion.div animate={{width:  isOpen ? "200px" : "40px",
    transition:{
        duration: 0.5,
        type:"spring",
        damping: 11,
    }}} className="sidebar">
            <div className=" top_section">
               {isOpen &&(
                 <motion.h1 variants={showAnimation}
               initial="hidden"
               animate="show"
               exit="hidden"
                className="logo">PrésenceApp</motion.h1>)}
                <div className="bars">
                    <FaBars onClick={toggle}/>
                 </div>
            </div>
            <div className="search">
                
                <div className="search_icon">
                     <BiSearch />
                     </div>
                     <AnimatePresence> 
                     {isOpen &&(
                        <motion.input
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                         variants={inputAnimation}
                           placeholder="Search..."
                        /> 
                        )}
                       </AnimatePresence>
                 </div>
           
        <section className="routes">
            {routes.map((route) =>(
                <NavLink activeClassName="active" 
                to={route.path} 
                key={route.name} className="Link">
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                    {isOpen &&(
                    <motion.div 
                     variantes={showAnimation} 
                     initial="hidden"
                     animate="show"
                     exit="hidden"
                     className="Link_text"
                     >{route.name}</motion.div>)}

        
                          
               
            
                    </AnimatePresence>

             
                </NavLink>
            ))}
          
        </section>
        </motion.div>
      <main>{children}</main>
    </div>
  );
}
