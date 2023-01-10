import Sidebar from "../components/Sidebar"
import {motion} from "framer-motion"
import { useState } from 'react';
import { useRouter  } from 'next/router'
export default function Post() {

  const [blogs, setBlogs] = useState([
    {id:0, tag:"REACT", slug:'10_tips_for_optimizing_your_reactjs_applications', title: '10 Tips for Optimizing Your React.js Applications', img:'assets/thumb (1).jpg', des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', date:"02 April . 2021"},
    {id:1, tag:"CSS", slug:'a_beginner_guide_to_css_animations',title: 'A Beginner Guide to CSS Animations', img:'assets/thumb (2).jpg', des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', date:"02 April . 2021"},
    {id:2, tag:"DESIGN", slug:'5_tips_for_creating_an_engaging_web_design',title: '5 Tips for Creating an Engaging Web Design', img:'assets/thumb (3).jpg', des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', date:"02 April . 2021"},
    {id:3, tag:"REACT", slug:'the_benefits_of_using_reactjs_for_your_next_project',title: 'The Benefits of Using React.js for Your Next Project', img:'assets/thumb (4).jpg', des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', date:"02 April . 2021"},
    {id:4, tag:"REACT", slug:'5_common_reactjs_mistakes_and_how_to_avoid_them',title: '5 Common React.js Mistakes and How to Avoid Them', img:'assets/thumb (5).jpg', des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', date:"02 April . 2021"},
    {id:5, tag:"CSS", slug:'an_introduction_to_css_grid',title: 'An Introduction to CSS Grid', img:'assets/thumb (6).jpg', des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', date:"02 April . 2021"},
    ]);

    const { asPath, pathname } = useRouter();
    const blog = blogs.find(blog => {
      return "/"+blog.slug == asPath;
    }); 
    if(!blog) return 'loading..';
    console.log(asPath);
    return (
      
      <div className="post">
        <div className=" article">
        <div className={blog.tag} >{blog.tag}</div>
          <h1>{blog.title}</h1>
          <img src={blog.img} alt="" />
          <p>React is a JavaScript library for building user interfaces. It was developed by Facebook, and is often used for building single-page applications and mobile applications.
          React allows developers to create reusable UI components. When a component's state changes, React will efficiently update and re-render the component, making it easy to build interactive user interfaces.
          React uses a virtual DOM a lightweight in-memory representation of the actual DOM to improve the performance of rendering components. Instead of updating the DOM directly, React creates a virtual DOM representation of the desired state, and then calculates the minimal set of changes needed to transform the current DOM into the desired state. This helps to minimize the number of DOM operations, and can improve the performance of a React application.
          Here some tips how to optimizing your react app :
          </p>
          <h2> 1. Use the production build of React:</h2>
          <p>React includes an optimization in the production build that reduces the amount of code that needs to be processed by the browser, resulting in faster rendering times.</p>
          <h2> 2. Use the shouldComponentUpdate lifecycle method:</h2>
          <p> This method allows you to tell React whether a component should re-render or not, based on certain conditions. This can help improve performance by preventing unnecessary re-renders.</p>
          <h2> 3. Use the React.PureComponent base class</h2>
          <p>This is similar to shouldComponentUpdate(), but it automatically implements the method for you based on a shallow comparison of the component's props and state.</p>
          <h2> 4. Use the React.memo higher-order component:</h2>
          <p>This is similar to PureComponent, but it can be used with functional components instead of just class-based components.Use the useMemo and useCallback hooks: These hooks allow you to optimize the performance of functional components by memoizing values and functions, respectively.</p>
          <h2> 5. Use the useMemo and useCallback hooks:</h2>
          <p>These hooks allow you to optimize the performance of functional components by memoizing values and functions, respectively.</p>
          <h2> 6. Use the useRef hook:</h2>
          <p>This hook allows you to avoid re-creating objects or functions unnecessarily, which can help improve performance.</p>
          <h2> 7. Use the useEffect hook with a cleanup function:</h2>
          <p>If you have an effect that creates a resource that needs to be cleaned up, you can return a cleanup function from the effect to ensure that the resource is properly disposed of.</p>
          <h2> 8. Use the React.lazy and Suspense components to lazy-load components:</h2>
          <p>component: This component allows you to wrap multiple elements in a single parent element without adding an extra DOM node.</p>
          <h2> 9. Use the react-perf-devtool browser extension: </h2>
          <p>This extension helps you identify performance bottlenecks in your React applications by showing you a detailed breakdown of the component rendering process.</p>
          <h2> 10. Avoid unnecessary re-renders by using the React.Fragment component</h2>
          <p>This component allows you to wrap multiple elements in a single parent element without adding an extra DOM node.</p>
        </div>
        <Sidebar></Sidebar>
        <div className="related">
          <h2 className='label' >
              <span>
              Rel
              </span>
              ated Post
          </h2>
          <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ margin:'10%' }}
              transition={{ duration: 0.3, type: 'spring', bounce:0.2 }}
              variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 }
              }}>
                  <div className='img_container'>
                      <img src="assets/square.jpg" alt="" />
                  </div>
                  <h2 className="related_title" >React.js and GraphQL: A Match Made in Heaven</h2>
            </motion.div>
          <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ margin:'10%' }}
              transition={{ duration: 0.3, type: 'spring', bounce:0.2 }}
              variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 }
              }}>
                  <div className='img_container'>
                      <img src="assets/square.jpg" alt="" />
                  </div>
                  <h2 className="related_title" >React.js and GraphQL: A Match Made in Heaven</h2>
            </motion.div>
        </div>
      </div>
    )
  }
  