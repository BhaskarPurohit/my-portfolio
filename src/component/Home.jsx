import React from 'react'
import {motion} from "framer-motion"
import Typewriter from 'typewriter-effect'
import {BsArrow90DegUp} from "react-icons/bs"
import me from "../assets/profile picture.jpg"

const Home = () => {

    const animations = {
        h1:{
            initial:{
                x:"100%",
                opactity:0,
            },
            whileInView:{
                x:0,
                opactity:1,
            }
        },
        button:{
            initial:{
                y:"-100%",
                opactity:0,
             },
             whileInView:{
                y:0,
                opactity:1,
             }
        }
    }
  return (
    <div id='home'>
        <section>
            <div>
                <motion.h1 {...animations.h1}>
                    Hi, I am <br/> Bhaskar Purohit
                </motion.h1>
                <Typewriter options={{
                    strings:["A Developer", "A Designer","A Creator"],
                    autoStart: true,
                    cursor:"",
                    loop: true,
                    wrapperClassName:"typeWriterPara"
                }}/>
                <div>
                    <a href="mailto:bhaskarpurohit22@gmail.com">
                        Hire Me 
                    </a>
                    <a href="#work">Projects  <BsArrow90DegUp/></a>
                </div>

                <aside>
                  <article>
                    <p>
                        +<span>100</span>
                    </p>
                      <span>Clients Worldwide</span>
                   </article>
                   
                    <article>
                        <p>
                            +<span>500</span>
                        </p>
                        <span>Projects Made</span>
                    </article>

                    <article data-special>
                        <p>Contact</p>
                        <span>bhaskarpurohit22@gmail.com</span>
                    </article>

                   </aside>
                
    
            </div>
        </section>

        <section>
            <img src={me} alt="Bhaskar" />
        </section>
    </div>
  )
}

export default Home