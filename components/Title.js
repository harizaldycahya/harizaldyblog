import {motion} from 'framer-motion'
const Title = ({title}) => {
    return ( 
        <div className="title">
            <div>
                <motion.h1 initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{type: "spring",stiffness:100, duration: .5, delay:.1}}>
                    {title}
                </motion.h1>
                <motion.p initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{type: "spring",stiffness:100, duration: .5, delay:.2}}>

                    Welcome to my blog, where we uncover the secrets of creating visually stunning and interactive web experiences through the combination of React, CSS and web design. From mastering the art of responsive design, to exploring the latest web design trends, we'll dive deep into the world of web development and discover how to create visually appealing and user-friendly websites that deliver a seamless user experience. 
                </motion.p>
            </div>
        </div>
     );
}
 
export default Title;


