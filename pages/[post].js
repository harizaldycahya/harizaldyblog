import Sidebar from "../components/Sidebar"
import {motion} from "framer-motion"
import { useState } from 'react';
import { useRouter  } from 'next/router'
export default function Post() {
    const blogs = [
      // POST 0
      {id:0, 
        tag:"REACT", 
        slug:'10_tips_for_optimizing_your_reactjs_applications', 
        title: '10 Tips for Optimizing Your React.js Applications', 
        img:'assets/thumb (1).jpg', 
        des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', 
        date:"02 April . 2021",
        article:
        <>
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
        </>,
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
        article:
        <>
            <p>CSS animations allow you to bring life to your website by adding motion and interactivity to HTML elements. This guide will provide an introduction to the basics of creating CSS animations and how to implement them on your website.</p>
            <h2>Creating a CSS Animation</h2>
            <p>Creating a CSS animation involves defining two key components: the animation property and the @keyframes rule. The animation property is added to the HTML element that you want to animate, and it controls the duration, delay, and other settings for the animation. The @keyframes rule defines the various stages of the animation and the styles associated with each stage.</p>
            <h2>Implementing CSS Animations on Your Website</h2>
            <p>To implement a CSS animation on your website, you need to add the animation property and the @keyframes rule to your CSS file. Then, you apply the appropriate class to the HTML element that you want to animate.</p>
            <p>Keep in mind that animation properties and keyframe rules support may vary among different browsers. it is a good practice to use a cross-browser compatible library or to check the compatibility with caniuse.com before proceeding. </p>
            <h2>Conclusion</h2>
            <p>CSS animations are a powerful tool for making your website more engaging and interactive. With the animation property and the @keyframes rule, you can create a wide variety of animations for any HTML element. This guide should have provided you with a basic understanding of how to create and implement CSS animations on your website, allowing you to bring your website to life. </p>
        </>,
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
        article:
        <>
          <p>Web design plays a critical role in the success of a website, as it can make or break a user's experience. Here are 5 tips to help you create an engaging web design:</p>

          <h2>1. Prioritize User Experience (UX)</h2>

          <p>UX design focuses on creating a seamless and enjoyable experience for users. When designing your website, think about the user's needs and goals. Make sure the navigation is intuitive, the layout is easy to understand, and the content is easy to read. Remember to also test your website with real users to get feedback and make improvements.</p>

          <h2>2. Use High-Quality Images and Graphics</h2>

          <p>High-quality images and graphics can make a website more engaging and visually appealing. They can also help break up large blocks of text and make the content more easily digestible. When choosing images and graphics, be sure to use images that are relevant to the content and have a consistent style throughout your website.</p>

          <h2>3. Use Color to Create Contrast and Draw Attention</h2>

          <p>Color is an important design element that can be used to create contrast and draw attention to specific parts of your website. Use color to highlight important information and make the website more visually interesting. Be mindful of color contrast to ensure that your text is legible and easy to read. </p>

          <h2>4. Use white space effectively</h2>

          <p>White space (or negative space) is the space between elements on your website. It can be used to separate different sections of content and make the website more visually appealing. By effectively using white space, you can make your website feel less cluttered and more easy to navigate.</p>

          <h2>5. Make it mobile-friendly</h2>

          <p>More and more users are accessing the internet on their mobile devices, it is important to ensure that your website is optimized for mobile. This means designing your website to be responsive, so that it adapts to different screen sizes, and making sure that all of the content is easily accessible and readable on a smaller screen. </p>

          <h2>Conclusion</h2>

          <p>Creating an engaging web design is essential for the success of a website. By focusing on user experience, using high-quality images and graphics, using color effectively, utilizing whitespace and making it mobile-friendly, you can create a website that is both visually appealing and easy to use. Implementing these tips will allow you to create an engaging web design that will provide a positive experience for your users.</p>
        </>,
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
        article:<>
        <p>React.js is a popular JavaScript library for building user interfaces, and it offers a number of benefits for developers looking to create scalable, dynamic web applications. Here are some of the key benefits of using React.js:</p>

        <h2>1. Virtual DOM</h2>
        <p>One of the most unique features of React is its virtual DOM. It allows React to efficiently update the user interface by only re-rendering the components that have changed, instead of re-rendering the entire page. This greatly improves the performance of web applications and provides faster rendering times.</p>

        <h2>2. Components-based Architecture</h2>
        <p>React uses a component-based architecture, which allows developers to easily create reusable UI components. This makes it easy to manage and update large-scale web applications, as you can break down the UI into smaller, self-contained components.</p>

        <h2>3. Easy to learn</h2>
        <p>React's syntax is relatively easy to understand and it's highly readable. Even developers with little JavaScript experience can start building with React quickly.  It's also supported by a large and active community, which means there are a wealth of resources available for developers of all levels.</p>

        <h2>4. Versatility</h2>
        <p>React can be used to build a wide variety of web applications, from simple websites to complex web applications. It can also be used in conjunction with other libraries and frameworks, such as React Native, to build mobile apps as well.</p>

        <h2>5. SEO-Friendly</h2>
        <p>React is SEO friendly, it allows server-side rendering and there are also specific packages that can assist in this, this allows search engines to read the content of your web application and increases the chances of appearing in search results. </p>

        <h2>Conclusion</h2>
        <p>React.js is a powerful tool for building dynamic and scalable web applications. Its virtual DOM, component-based architecture, easy-to-learn syntax, versatility, and SEO-friendliness make it a great choice for developers looking to create high-performing, user-friendly web applications. If you're considering React.js for your next project, these benefits are definitely worth considering.</p>
        
        </>,
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
        article:
        <>
        <p>React.js is a popular JavaScript library for building user interfaces, but it's easy to make mistakes that can negatively impact the performance, scalability, and maintainability of your code. Here are 5 common mistakes in React.js and how to avoid them:</p>

        <h2>1. Not Using Controlled Components</h2>
        <p>Controlled components are an important feature in React, they allows React to manage and control the state of a component. Not using controlled components can lead to unexpected behavior, and make it difficult to track the state and props of a component. To avoid this, use controlled components and make sure that the state of the component is always managed by React.</p>

        <h2>2. Not Using a JS Linter</h2>
        <p>A linter is a tool that checks your code for errors and enforces best practices. Not using a linter can lead to issues with code quality and consistency. To avoid this, use a linter such as ESLint and make sure that your code adheres to the React.js best practices and conventions.</p>

        <h2>3. Not Using PropTypes</h2>
        <p>PropTypes are a built-in feature in React that allows you to define and validate the expected types of the component's props. Not using PropTypes can lead to unexpected behavior and make it difficult to track down errors. To avoid this, use PropTypes to define the expected types of your props and to validate them at runtime.</p>

        <h2>4. Mutating state directly</h2>
        <p>In React, it's important to use the setState() method to change the state of a component. Directly mutating the state can lead to unexpected behavior and make it difficult to track changes. To avoid this, use the setState() method to change the state and make sure that you only update the specific parts of the state that need to change.</p>

        <h2>5. Not Optimizing Re-Renders</h2>
        <p>React uses a virtual DOM, it determines when it should re-render the component, however, if the component is re-rendering too often, it can negatively impact performance. To avoid this, use the shouldComponentUpdate() lifecycle method and other performance optimization techniques to minimize unnecessary re-renders.</p>

        <h2>Conclusion</h2>
        <p>React.js is a powerful library for building user interfaces, but it's easy to make mistakes that can negatively impact the performance, scalability, and maintainability of your code. By avoiding common mistakes like not using controlled components, not using a linter, not using PropTypes, mutating the state directly, and not optimizing re-renders, you can improve the quality of your code and make it easier to maintain and scale. Keep these tips in mind when building your next React.js project.</p>
        </>,
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
        article:
        <>
        <p>CSS Grid is a layout system for creating two-dimensional grid-based designs on the web. It allows developers to organize elements on a page into rows and columns, making it easy to create complex and responsive layouts.</p>
        <p>One of the main advantages of using CSS Grid is the ability to easily create responsive designs. By specifying the number of rows and columns in the grid and the size of each row and column, it's simple to adjust the layout of elements based on the size of the screen. This means you can create designs that look good on any device, whether it's a large desktop monitor or a small mobile phone.</p>
        <p>In addition to responsive design, CSS Grid also makes it easy to create complex layouts. By using the grid-row and grid-column properties, you can control the position of elements within the grid, allowing you to create intricate layouts with ease, such as overlapping elements or creating nested grids within a larger grid.</p>
        <p>To use CSS Grid, you first need to define a container element for your grid. The easiest way to do this is by setting the display property to grid. Then, use the grid-template-columns and grid-template-rows properties to define the number of rows and columns in your grid, as well as the size of each row and column.</p>
        <p>Once the container has been defined, you can add grid items to the container and use the grid-row and grid-column properties to define the position of each item.</p>
        <p>Overall, CSS Grid is a powerful layout system that provides developers with a high degree of control over their designs. With its ability to easily create responsive designs and complex layouts, it's no wonder that CSS Grid is quickly becoming a must-have tool for any web developer who wants to create modern and professional-looking designs on the web.</p>
        </>
        ,
      },
      // POST 5 END
    ];


    const { asPath, pathname } = useRouter();
    const blog = blogs.find(blog => {
      return "/"+blog.slug == asPath;
    });
    if(!blog) return 'loading..';
    return (
      
      <div className="post">
        <div className=" article">
        <div className={blog.tag} >{blog.tag}</div>
          <h1>{blog.title}</h1>
          <img src={blog.img} alt="" />
          <div>{blog.article}</div>
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
  