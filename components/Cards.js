import { motion } from 'framer-motion'
const Cards = () => {

    return ( 
        <div className="cards_container">
            <div className="cards_col1">
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ margin:'10%' }}
                transition={{ duration: 0.3, type: 'spring' }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}
                className="card">
                    <img src="assets/potrait.jpg" alt="" />
                    <div className="tag" >REACT</div>
                    <h2 className="title" >React.js and GraphQL: A Match Made in Heaven</h2>
                    <p className="content">This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...</p>
                    <div className="space5"></div>
                    <p className="date" >02 April . 2021</p>
                </motion.div>
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ margin:'10%' }}
                transition={{ duration: 0.3, type: 'spring' }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}
                className="card">
                    <img src="assets/potrait.jpg" alt="" />
                    <div className="tag" >REACT</div>
                    <h2 className="title" >React.js and GraphQL: A Match Made in Heaven</h2>
                    <p className="content">This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...</p>
                    <div className="space5"></div>
                    <p className="date" >02 April . 2021</p>
                </motion.div>
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ margin:'10%' }}
                transition={{ duration: 0.3, type: 'spring' }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}
                className="card">
                    <img src="assets/potrait.jpg" alt="" />
                    <div className="tag" >REACT</div>
                    <h2 className="title" >React.js and GraphQL: A Match Made in Heaven</h2>
                    <p className="content">This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...</p>
                    <div className="space5"></div>
                    <p className="date" >02 April . 2021</p>
                </motion.div>
                
            </div>
            <div className="cards_col2">
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ margin:'10%' }}
                transition={{ duration: 0.3, type: 'spring' }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}
                className="card">
                <img src="assets/square.jpg" alt="" />
                    <div className="tag" >REACT</div>
                    <h2 className="title" >React.js and GraphQL: A Match Made in Heaven</h2>
                    <p className="content">This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...</p>
                    <div className="space5"></div>
                    <p className="date" >02 April . 2021</p>
                </motion.div>
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ margin:'10%' }}
                transition={{ duration: 0.3, type: 'spring' }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}
                className="card">
                    <img src="assets/potrait.jpg" alt="" />
                    <div className="tag" >REACT</div>
                    <h2 className="title" >React.js and GraphQL: A Match Made in Heaven</h2>
                    <p className="content">This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...</p>
                    <div className="space5"></div>
                    <p className="date" >02 April . 2021</p>
                </motion.div>
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ margin:'10%' }}
                transition={{ duration: 0.3, type: 'spring' }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}
                className="card">
                    <img src="assets/potrait.jpg" alt="" />
                    <div className="tag" >REACT</div>
                    <h2 className="title" >React.js and GraphQL: A Match Made in Heaven</h2>
                    <p className="content">This is an example intro text of the article. You can put intro text to every article to grab the attention of the users...</p>
                    <div className="space5"></div>
                    <p className="date" >02 April . 2021</p>
                </motion.div>
            </div>
            <div className="cards_col3">
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ margin:'10%' }}
                transition={{ duration: 0.3, type: 'spring' }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}
                className="card about"></motion.div>
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ margin:'10%' }}
                transition={{ duration: 0.3, type: 'spring' }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}
                className="card categories"></motion.div>
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ margin:'10%' }}
                transition={{ duration: 0.3, type: 'spring' }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}
                className="card quote"></motion.div>
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ margin:'10%' }}
                transition={{ duration: 0.3, type: 'spring' }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}
                className="card recent"></motion.div>
            </div>
        </div>
     );
}
 
export default Cards;