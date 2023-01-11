import Title from "../components/Title"
import Cards from "../components/Cards"
import { motion } from 'framer-motion'
import Link from 'next/link'
import Sidebar from "../components/Sidebar";
import { blogs } from './Index';
export default function React() {
    const posts = blogs.filter(posts => {
      return posts.tag == 'REACT'
    });
    if(!posts) return 'loading..';
    return (
      <div>
        <Title title="React"></Title>
        <div className="space20"></div>
        <div className="cards_container">
            <div className="col2">
                {posts.map((post)=>(
                    <Link href={post.slug} key={post.id}>
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
                                <img src={post.img} alt="" />
                            </div>
                            <div className={post.tag} >{post.tag}</div>
                            <h2 className="title" >{post.title}</h2>
                            <p className="content">{post.des}</p>
                            <div className="space5"></div>
                            <p className="date" >{post.date}</p>
                        </motion.div>
                    </Link>
                ))}
            </div>
            <Sidebar></Sidebar>
        </div>
      </div>
      
    )
  }
  