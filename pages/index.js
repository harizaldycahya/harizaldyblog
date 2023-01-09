import Cards from "../components/Cards"
import Hero from "../components/Hero"
import bg from '../public/assets/bg.svg'
export default function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${bg})`}}>
        <Hero></Hero>
        <Cards></Cards>
    </div>
  )
}
