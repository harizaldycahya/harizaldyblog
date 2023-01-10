import Title from "../components/Title"
import Cards from "../components/Cards"
import { blogs } from './Index';
export default function Design() {
    return (
      <div>
        <Title title="Design"></Title>
        <div className="space20"></div>
        <Cards blogs1={blogs.filter((blog)=> blog.tag == 'DESIGN')} blogs2={blogs.filter((blog)=>blog.tag == 'CSS')}></Cards>
      </div>
    )
  }
  