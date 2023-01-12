import Title from "../components/Title"
import Cards from "../components/Cards"
import { motion } from 'framer-motion'
import Link from 'next/link'
import Sidebar from "../components/Sidebar";
export default function React() {

    const blogs = [
      // POST 0
      {id:0, 
        tag:"REACT", 
        slug:'10_tips_for_optimizing_your_reactjs_applications', 
        title: '10 Tips for Optimizing Your React.js Applications', 
        img:'assets/thumb (1).jpg', 
        des:'React is a JavaScript library for building user interfaces. It was developed by Facebook, and is often used for building single-page applications and mobile applications...', 
        date:"02 April . 2021",
      },
      // POST 0 END
    
    
      // POST 1
      {id:1, 
        tag:"CSS", 
        slug:'a_beginner_guide_to_css_animations',
        title: 'A Beginner Guide to CSS Animations', 
        img:'assets/thumb (2).jpg', 
        des:'CSS animations allow you to bring life to your website by adding motion and interactivity to HTML elements. This guide will provide an introduction to the basics of creating CSS animations and how to implement them on your website....', 
        date:"02 April . 2021",
      },
      // POST 1 END
    
    
      // POST 2
      {id:2, 
        tag:"DESIGN", 
        slug:'5_tips_for_creating_an_engaging_web_design',
        title: '5 Tips for Creating an Engaging Web Design', 
        img:'assets/thumb (3).jpg', 
        des:'Web design plays a critical role in the success of a website, as it can make or break a user experience. Here are 5 tips to help you create an engaging web design...', 
        date:"02 April . 2021",
      },
      // POST 2 END
    
      // POST 3
      {id:3, 
        tag:"REACT", 
        slug:'the_benefits_of_using_reactjs_for_your_next_project',
        title: 'The Benefits of Using React.js for Your Next Project', 
        img:'assets/thumb (4).jpg', 
        des:'React.js is a popular JavaScript library for building user interfaces, and it offers a number of benefits for developers looking to create scalable, dynamic web applications. Here are some of the key benefits of using React.js...', 
        date:"02 April . 2021",
      },
      // POST 3 END
    
      // POST 4
      {id:4, 
        tag:"REACT", 
        slug:'5_common_reactjs_mistakes_and_how_to_avoid_them',
        title: '5 Common React.js Mistakes and How to Avoid Them', 
        img:'assets/thumb (5).jpg', 
        des:'React.js is a popular JavaScript library for building user interfaces, but its easy to make mistakes that can negatively impact the performance, scalability, and maintainability of your code. Here are 5 common mistakes in React.js and how to avoid them...', 
        date:"02 April . 2021",
      },
      // POST 4 END
    
      // POST 5
      {id:5, 
        tag:"CSS", 
        slug:'an_introduction_to_css_grid',
        title: 'An Introduction to CSS Grid', 
        img:'assets/thumb (6).jpg', 
        des:'CSS Grid is a layout system for creating two-dimensional grid-based designs on the web. It allows developers to organize elements on a page into rows and columns, making it easy to create complex and responsive layouts....', 
        date:"02 April . 2021",
      },
      // POST 5 END
    ];


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
  