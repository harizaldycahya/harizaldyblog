import { motion } from 'framer-motion'
const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ margin:'10%' }}
            transition={{ duration: 0.3, type: 'spring', bounce:0.2 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}
            className="card about">
                <h2 className='label' >
                    <span>
                    Abo
                    </span>
                    ut</h2>
                <div className='img_container'>
                    <img src="assets/square.jpg" alt="" />
                </div>
                <h2 className="title" >Harizaldy Cahya P</h2>
                <p className="content">When it comes to creating is a website for your business, an attractive design</p>
                
                <p className="date" >
                    <a href="">About Me</a> / <a href="">Contact Me</a>
                </p>
                <div className="space5"></div>
            </motion.div>   
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ margin:'10%' }}
            transition={{ duration: 0.3, type: 'spring', bounce:0.2 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}
            className="card recents">
                <h2 className='label' >
                        <span>
                        Rec
                        </span>
                        ents Posts
                    </h2>
                    <div className='recent' ><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, molestias?</p>
                        <div className='img_container'>
                            <img src="assets/square.jpg" alt="" />
                        </div>
                        </div>
                    <div className='recent' ><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, molestias?</p>
                        <div className='img_container'>
                            <img src="assets/square.jpg" alt="" />
                        </div>
                        </div>
                    <div className='recent' ><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, molestias?</p>
                        <div className='img_container'>
                            <img src="assets/square.jpg" alt="" />
                        </div>
                        </div>
                    <div className='recent' ><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, molestias?</p>
                        <div className='img_container'>
                            <img src="assets/square.jpg" alt="" />
                        </div>
                        </div>
                    <div className='recent' ><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, molestias?</p>
                        <div className='img_container'>
                            <img src="assets/square.jpg" alt="" />
                        </div>
                        </div>
                    <div className='recent' ><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, molestias?</p>
                        <div className='img_container'>
                            <img src="assets/square.jpg" alt="" />
                        </div>
                        </div>
            </motion.div>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ margin:'10%' }}
            transition={{ duration: 0.3, type: 'spring', bounce:0.2 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}
            className="card sidebar_contact">
                    <h2 className='label' >
                        <span>
                        Con
                        </span>
                        tact Me
                    </h2>
                    <div className='contact_button'>
                        <div className="space5"></div>
                        <div className='button' >Email </div>
                        <div className='button' >Twitter</div>
                    </div>
            </motion.div>
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ margin:'10%' }}
            transition={{ duration: 0.3, type: 'spring', bounce:0.2 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}
            className="card categories">
                    <h2 className='label' >
                        <span>
                        Cate
                        </span>
                        gories
                    </h2>
                    <div className='category' >HTML</div>
                    <div className='category' >CSS</div>
                    <div className='category' >JavaScript</div>
                    <div className='category' >Responsive design</div>
                    <div className='category' >UI/UX</div>
                    <div className='category' >Front-end frameworks</div>
                    <div className='category' >Web performance</div>
                    <div className='category' >Accessibility</div>
                    <div className='category' >SEO</div>
                    <div className='category' >Mobile development</div>
            </motion.div>
        </div>
     );
}
 
export default Sidebar;