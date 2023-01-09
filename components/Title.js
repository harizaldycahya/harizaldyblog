import {motion} from 'framer-motion'
const Title = ({title}) => {
    return ( 
        <div className="title">
            <div>
                <motion.h1 initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{type: "spring",stiffness:100, duration: .5, delay:.1}}>{title}</motion.h1>
                <motion.p initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{type: "spring",stiffness:100, duration: .5, delay:.2}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis nihil molestias aliquam odio provident quod tempora, iusto quos voluptates nostrum amet, repellendus, atque et accusantium nemo vel libero unde corporis?</motion.p>
            </div>
        </div>
     );
}
 
export default Title;


