import Cards from "../components/Cards"
import Hero from "../components/Hero"
import bg from '../public/assets/bg.svg'

import { useState } from 'react';

export default function Home() {
  const [blogs, setBlogs] = useState([
    {id:0, tag:"REACT", slug:'10_tips_for_optimizing_your_reactjs_applications', title: '10 Tips for Optimizing Your React.js Applications', img:'assets/thumb (1).jpg', des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', date:"02 April . 2021"},
    {id:1, tag:"CSS", slug:'10tipsforoptimizingyourreactjsapplications',title: 'A Beginner Guide to CSS Animations', img:'assets/thumb (2).jpg', des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', date:"02 April . 2021"},
    {id:2, tag:"DESIGN", slug:'10_tips_for_optimizing_your_reactjs_applications',title: '5 Tips for Creating an Engaging Web Design', img:'assets/thumb (3).jpg', des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', date:"02 April . 2021"},
    {id:3, tag:"REACT", slug:'10_tips_for_optimizing_your_reactjs_applications',title: 'The Benefits of Using React.js for Your Next Project', img:'assets/thumb (4).jpg', des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', date:"02 April . 2021"},
    {id:4, tag:"REACT", slug:'10_tips_for_optimizing_your_reactjs_applications',title: '5 Common React.js Mistakes and How to Avoid Them', img:'assets/thumb (5).jpg', des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', date:"02 April . 2021"},
    {id:5, tag:"CSS", slug:'10_tips_for_optimizing_your_reactjs_applications',title: 'An Introduction to CSS Grid', img:'assets/thumb (6).jpg', des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', date:"02 April . 2021"},
    ]);
  return (
    <div className="home" style={{backgroundImage: `url(${bg})`}}>
        <Hero></Hero>
        <Cards blogs1={blogs.filter((blog)=> blog.id % 2===0 || blog.id === 0)} blogs2={blogs.filter((blog)=> blog.id % 2===1)}></Cards>
    </div>
  )
}
