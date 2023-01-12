import {motion} from 'framer-motion'
import Link from 'next/link'
import React, { useState } from "react";
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    return ( 
        <div className="header">
            <div id='navbar' class="navbar">
                <div class="logo">
                    <img style={{ border:"solid black .5rem", padding:'1rem'}} src="assets/H.png" alt=""/>
                </div>
                <div class="links">
                    <Link href="/">
                        <motion.h3 whileHover={{y:-10}} transition={{type:"spring", stiffness:100}}>Blogs</motion.h3>
                    </Link>
                    <Link href="/react">
                        <motion.h3 whileHover={{y:-10}} transition={{type:"spring", stiffness:100}}>React</motion.h3>
                    </Link>
                    <Link href="/css">
                        <motion.h3 whileHover={{y:-10}} transition={{type:"spring", stiffness:100}}>Css</motion.h3>
                    </Link>
                    <Link href="/design">
                        <motion.h3 whileHover={{y:-10}} transition={{type:"spring", stiffness:100}}>Design</motion.h3>
                    </Link>
                    <a href="https://harizaldycahya.github.io">
                        <motion.h3 whileHover={{y:-10}} transition={{type:"spring", stiffness:100}}>Portfolio</motion.h3>
                    </a>
                </div>
            </div>
            <motion.div onClick={toggleMenu} whileHover={{x:10}} className="ham">
                <i class="fa-solid fa-bars"></i>
            </motion.div>
            {openMenu ? (
             <motion.div className='ham_items'>
                <div>
                    <motion.a whileHover={{y:-10}} transition={{type:"spring", stiffness:100}} href="/"><h3 style={{color:'black'}}>Blogs</h3></motion.a>
                    <motion.a whileHover={{y:-10}} transition={{type:"spring", stiffness:100}} href="/react"><h3 style={{color:'black'}}>React</h3></motion.a>
                    <motion.a whileHover={{y:-10}} transition={{type:"spring", stiffness:100}} href="/css"><h3 style={{color:'black'}}>Css</h3></motion.a>
                    <motion.a whileHover={{y:-10}} transition={{type:"spring", stiffness:100}} href="/design"><h3 style={{color:'black'}}>Design</h3></motion.a>
                    <motion.a whileHover={{y:-10}} transition={{type:"spring", stiffness:100}} href="https://harizaldycahya.github.io"><h3 style={{color:'black'}}>Portfolio</h3></motion.a>
                </div>
            </motion.div>
            ) : null}
        </div>
     );
}
 
export default Navbar;