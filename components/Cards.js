
import { motion } from 'framer-motion'
import Sidebar from './Sidebar';
import Link from 'next/link'
const Cards = (props) => {
    const blogs1 = props.blogs1;
    const blogs2 = props.blogs2;
    return ( 
        <div className="cards_container">
            <div className="cards">
                <div className="col1">
                    {blogs1.map((blog)=>(
                        <Link href={blog.slug} key={blog.id}>
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
                                    <img src={blog.img} alt="" />
                                </div>
                                <div className={blog.tag} >{blog.tag}</div>
                                <h2 className="title" >{blog.title}</h2>
                                <p className="content">{blog.des}</p>
                                <div className="space5"></div>
                                <p className="date" >{blog.date}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
                <div className="col1">
                    {blogs2.map((blog)=>(
                        <Link href={blog.slug} key={blog.id}>
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
                                    <img src={blog.img} alt="" />
                                </div>
                                <div className={blog.tag} >{blog.tag}</div>
                                <h2 className="title" >{blog.title}</h2>
                                <p className="content">{blog.des}</p>
                                <div className="space5"></div>
                                <p className="date" >{blog.date}</p>
                            </motion.div>
                        </Link>
                    ))}
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