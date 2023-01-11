import Title from "../components/Title"
import Cards from "../components/Cards"
import { motion } from 'framer-motion'
import Link from 'next/link'
import Sidebar from "../components/Sidebar";
import { blogs } from './Index';
export default function Design() {


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

  const posts = blogs.filter(posts => {
    return posts.tag == 'DESIGN'
  });
  if(!posts) return 'loading..';
    return (
      <div>
        <Title title="Design"></Title>
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
  