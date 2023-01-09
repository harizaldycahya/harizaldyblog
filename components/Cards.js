import { motion } from 'framer-motion'
import Sidebar from './Sidebar';
import Link from 'next/link'
const Cards = () => {

    return ( 
        <div className="cards_container">
            <div className="cards">
                <div className="col1">
                    <Link href="/post">
                        <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ margin:'10%' }}
                        transition={{ duration: 0.3, type: 'spring', bounce:0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}
                        className="card">
                            <div className='img_container'>
                                <img src="assets/potrait.jpg" alt="" />
                            </div>
                            <div className="tag" >REACT</div>
                            <h2 className="title" >10 Tips for Optimizing Your React.js Applications</h2>
                            <p className="content">This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...</p>
                            <div className="space5"></div>
                            <p className="date" >02 April . 2021</p>
                        </motion.div>
                    </Link>
                    <Link href="/post">
                        <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ margin:'10%' }}
                        transition={{ duration: 0.3, type: 'spring', bounce:0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}
                        className="card">
                            <div className='img_container'>
                                <img src="assets/potrait.jpg" alt="" />
                            </div>
                            <div className="tag" >REACT</div>
                            <h2 className="title" >A Beginner's Guide to CSS Animations</h2>
                            <p className="content">This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...</p>
                            <div className="space5"></div>
                            <p className="date" >02 April . 2021</p>
                        </motion.div>
                    </Link>
                    <Link href="/post">
                        <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ margin:'10%' }}
                        transition={{ duration: 0.3, type: 'spring', bounce:0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}
                        className="card">
                            <div className='img_container'>
                                <img src="assets/potrait.jpg" alt="" />
                            </div>
                            <div className="tag" >REACT</div>
                            <h2 className="title" >5 Tips for Creating an Engaging Web Design</h2>
                            <p className="content">This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...</p>
                            <div className="space5"></div>
                            <p className="date" >02 April . 2021</p>
                        </motion.div>
                    </Link>
                </div>
                <div className="col1">
                <Link href="/post">
                        <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ margin:'10%' }}
                        transition={{ duration: 0.3, type: 'spring', bounce:0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}
                        className="card">
                            <div className='img_container'>
                                <img src="assets/square.jpg" alt="" />
                            </div>
                            <div className="tag" >REACT</div>
                            <h2 className="title" >The Benefits of Using React.js for Your Next Project</h2>
                            <p className="content">This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...</p>
                            <div className="space5"></div>
                            <p className="date" >02 April . 2021</p>
                        </motion.div>
                    </Link>
                    <Link href="/post">
                        <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ margin:'10%' }}
                        transition={{ duration: 0.3, type: 'spring', bounce:0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}
                        className="card">
                            <div className='img_container'>
                                <img src="assets/potrait.jpg" alt="" />
                            </div>
                            <div className="tag" >REACT</div>
                            <h2 className="title" >5 Common React.js Mistakes and How to Avoid Them</h2>
                            <p className="content">This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...</p>
                            <div className="space5"></div>
                            <p className="date" >02 April . 2021</p>
                        </motion.div>
                    </Link>
                    <Link href="/post">
                        <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ margin:'10%' }}
                        transition={{ duration: 0.3, type: 'spring', bounce:0.2 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0 }
                        }}
                        className="card">
                            <div className='img_container'>
                                <img src="assets/potrait.jpg" alt="" />
                            </div>
                            <div className="tag tag_blue" >CSS</div>
                            <h2 className="title" >An Introduction to CSS Grid</h2>
                            <p className="content">This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...</p>
                            <div className="space5"></div>
                            <p className="date" >02 April . 2021</p>
                        </motion.div>
                    </Link>
                </div>
                <div className="load">
                    <h3>Load More</h3>
                </div>
            </div>
            <Sidebar></Sidebar>
        </div>
     );
}
 
export default Cards;