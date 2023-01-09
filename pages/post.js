import Sidebar from "../components/Sidebar"
import {motion} from "framer-motion"
export default function Post() {
    return (
      <div className="post">
        <div className=" article">
        <div className="tag" >REACT</div>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <img src="assets/square.jpg" alt="" />
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quisquam sunt quae itaque, cumque culpa unde distinctio enim odio amet explicabo, corrupti velit, asperiores dolore. Neque eum natus eaque odio quod tenetur sapiente quasi sint id dolorum impedit, dolor at a earum aspernatur adipisci temporibus delectus omnis dicta nulla necessitatibus. Praesentium error quibusdam libero, ullam exercitationem consectetur ratione cupiditate voluptatibus porro obcaecati inventore harum nostrum impedit fugit non sequi, facere optio consequatur asperiores, nemo possimus ea repellat maiores veritatis? Esse quisquam sed cum, dolores expedita earum ipsam blanditiis commodi quis obcaecati voluptas reprehenderit eius unde laudantium officiis recusandae delectus est.</p>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat excepturi itaque quos eligendi fugiat quidem! Facilis sapiente accusantium earum doloremque consectetur sint aperiam modi quaerat nam quia. Veniam vero quasi ipsum neque, minima asperiores pariatur ab nostrum possimus, vel eaque dolor suscipit fuga deleniti! Facilis, voluptas illum omnis, minus amet consectetur consequatur neque quam optio incidunt enim culpa saepe, nobis numquam ad dolor et. Enim quasi aspernatur pariatur, mollitia ex amet dignissimos nisi. Eveniet, nemo repudiandae eaque qui a nesciunt, sapiente nisi illum ipsum distinctio, animi neque ipsam dignissimos dolor. Reprehenderit unde tenetur optio magni facilis amet quasi possimus!</p>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat excepturi itaque quos eligendi fugiat quidem! Facilis sapiente accusantium earum doloremque consectetur sint aperiam modi quaerat nam quia. Veniam vero quasi ipsum neque, minima asperiores pariatur ab nostrum possimus, vel eaque dolor suscipit fuga deleniti! Facilis, voluptas illum omnis, minus amet consectetur consequatur neque quam optio incidunt enim culpa saepe, nobis numquam ad dolor et. Enim quasi aspernatur pariatur, mollitia ex amet dignissimos nisi. Eveniet, nemo repudiandae eaque qui a nesciunt, sapiente nisi illum ipsum distinctio, animi neque ipsam dignissimos dolor. Reprehenderit unde tenetur optio magni facilis amet quasi possimus!</p>
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
                  <h2 className="title" >React.js and GraphQL: A Match Made in Heaven</h2>
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
                  <h2 className="title" >React.js and GraphQL: A Match Made in Heaven</h2>
            </motion.div>
        </div>
      </div>
    )
  }
  