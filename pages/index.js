import Cards from "../components/Cards"
import Hero from "../components/Hero"
import bg from '../public/assets/bg.svg'

import { useState } from 'react';
export const blogs = [
  {id:0, tag:"REACT", slug:'10_tips_for_optimizing_your_reactjs_applications', title: '10 Tips for Optimizing Your React.js Applications', img:'assets/thumb (1).jpg', des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', date:"02 April . 2021"},
  {id:1, tag:"CSS", slug:'a_beginner_guide_to_css_animations',title: 'A Beginner Guide to CSS Animations', img:'assets/thumb (2).jpg', des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', date:"02 April . 2021"},
  {id:2, tag:"DESIGN", slug:'5_tips_for_creating_an_engaging_web_design',title: '5 Tips for Creating an Engaging Web Design', img:'assets/thumb (3).jpg', des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', date:"02 April . 2021"},
  {id:3, tag:"REACT", slug:'the_benefits_of_using_reactjs_for_your_next_project',title: 'The Benefits of Using React.js for Your Next Project', img:'assets/thumb (4).jpg', des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', date:"02 April . 2021"},
  {id:4, tag:"REACT", slug:'5_common_reactjs_mistakes_and_how_to_avoid_them',title: '5 Common React.js Mistakes and How to Avoid Them', img:'assets/thumb (5).jpg', des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', date:"02 April . 2021"},
  {id:5, tag:"CSS", slug:'an_introduction_to_css_grid',title: 'An Introduction to CSS Grid', img:'assets/thumb (6).jpg', des:'This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...', date:"02 April . 2021"},
];
export default function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${bg})`}}>
        <Hero></Hero>
        <Cards blogs1={blogs.filter((blog)=> blog.id % 2===0 || blog.id === 0)} blogs2={blogs.filter((blog)=> blog.id % 2===1)}></Cards>
    </div>
  )
}
