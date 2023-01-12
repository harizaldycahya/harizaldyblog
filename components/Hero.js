
import {motion} from 'framer-motion'

const Hero = () => {
    return ( 
        <div className="hero">
            <div className="space5"></div>
            <div>
                <h1>
                    <motion.div className='animated_word'
                    initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{type: "spring",stiffness:100, duration: .5, delay:.1}}>
                        Welcome
                    </motion.div>
                    <motion.div className='animated_word'
                    initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{type: "spring",stiffness:100, duration: .5, delay:.2}}>
                        To 
                    </motion.div>
                    <motion.div className='animated_word'
                    initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{type: "spring",stiffness:100, duration: .5, delay:.3}}>
                        Harizaldy
                    </motion.div>
                    <motion.div className='animated_word'
                    initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{type: "spring",stiffness:100, duration: .5, delay:.4}}>
                        Blog   
                    </motion.div>
                </h1>
                <motion.p initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{type: "spring",stiffness:100, duration: .5, delay:.4}}>Here, you will find the latest news, tips, and resources for building efficient and scalable applications with React.js. 
                <br />
                Whether you are a seasoned developer or new to the world of JavaScript, I hope you will find something useful and interesting in my articles.</motion.p>
            </div>
            <div className="space20"></div>
        </div>
     );
}
 
export default Hero;