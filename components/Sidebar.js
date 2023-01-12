import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react';
const Sidebar = () => {

    const blogs = [
        // POST 0
        {id:0, 
          tag:"REACT", 
          slug:'10_tips_for_optimizing_your_reactjs_applications', 
          title: '10 Tips for Optimizing Your React.js Applications', 
          img:'assets/thumb (1).jpg', 
          des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', 
          date:"02 April . 2021",
          article:"test",
        },
        // POST 0 END
      
      
        // POST 1
        {id:1, 
          tag:"CSS", 
          slug:'a_beginner_guide_to_css_animations',
          title: 'A Beginner Guide to CSS Animations', 
          img:'assets/thumb (2).jpg', 
          des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', 
          date:"02 April . 2021",
          article:"test",
        },
        // POST 1 END
      
      
        // POST 2
        {id:2, 
          tag:"DESIGN", 
          slug:'5_tips_for_creating_an_engaging_web_design',
          title: '5 Tips for Creating an Engaging Web Design', 
          img:'assets/thumb (3).jpg', 
          des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', 
          date:"02 April . 2021",
          article:"test",
        },
        // POST 2 END
      
        // POST 3
        {id:3, 
          tag:"REACT", 
          slug:'the_benefits_of_using_reactjs_for_your_next_project',
          title: 'The Benefits of Using React.js for Your Next Project', 
          img:'assets/thumb (4).jpg', 
          des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', 
          date:"02 April . 2021",
          article:"test",
        },
        // POST 3 END
      
        // POST 4
        {id:4, 
          tag:"REACT", 
          slug:'5_common_reactjs_mistakes_and_how_to_avoid_them',
          title: '5 Common React.js Mistakes and How to Avoid Them', 
          img:'assets/thumb (5).jpg', 
          des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', 
          date:"02 April . 2021",
          article:"test",
        },
        // POST 4 END
      
        // POST 5
        {id:5, 
          tag:"CSS", 
          slug:'an_introduction_to_css_grid',
          title: 'An Introduction to CSS Grid', 
          img:'assets/thumb (6).jpg', 
          des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', 
          date:"02 April . 2021",
          article:"test",
        },
        // POST 5 END
      ];

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
                    ut Me</h2>
                <div className='img_container'>
                    <img src="assets/photo.png" alt="" />
                </div>
                <h2 className="title" >Harizaldy Cahya</h2>
                <p className="content">I am always looking for new ways to improve my skills and stay current with the latest web development trends and best practices.</p>
                
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
                    {blogs.map((blog)=>(
                        <Link href={blog.slug} key={blog.id}>
                            <div className='recent' ><p>{blog.title}</p>
                                <div className='img_container'>
                                    <img src={blog.img} alt="" />
                                </div>
                            </div>
                        </Link>
                    ))}
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
                        My W
                        </span>
                        orks
                    </h2>
                    <div className='contact_button'>
                        <div className="space5"></div>
                        <a href="https://github.com/harizaldycahya">
                            <div className='button' >Github &nbsp; <i class="fa-brands fa-square-github"></i> </div>
                        </a>
                        <a href="https://harizaldycahya.github.io/">
                            <div className='button' >Portfolio &nbsp; <i class="fa-solid fa-laptop-code"></i> </div>
                        </a>
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