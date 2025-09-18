import React, { useRef } from 'react'

import { assets } from '../assets/assets.js'
import { exampleProjects } from './ui/project-card.jsx'
import ProjectGrid from './ui/project-card.jsx'
import Footer from './Footer.jsx'
import { toast } from 'react-hot-toast';

const Content = () => {

  const downloadResume=()=>{
    toast.success("Downloading Resume", {
      style:{
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      }
    })
  }

  return (
    <div className="absolute top-0 left-0 text-center">
        <section id="Hero" className="text-white flex lg:justify-center lg:items-center lg:flex-row flex-col min-h-screen min-w-screen ">
            <p className='space-x-2'><span className="text-[5rem]" style={{
              fontFamily:"Righteous"
            }} >Hi</span> <span className="text-[3rem] font-bold" style={{
              fontFamily:"Shadows Into Light"
            }}>I am a </span> <br/> <span className="font-bold text-[9rem]" style={{
              fontFamily:"Zilla Slab Highlight",
              lineHeight: 1.2
            }}> Web <br /> Developer.</span>
            </p>
            <a href="/Jasskaran_Singh_Shangari_Resume.pdf" download="Jasskaran Singh Shangari" onClick={downloadResume}><img className="rounded-full border-solid border-white border-[10px] absolute right-40 top-20  hover:scale-110 cursor-pointer transition-transform duration-300 w-[400px] h-[400px]"  src={assets.Placeholder1}  /></a>
        </section>
        <section id="About-me" className="h-[100vh] ">
          <p className="quote text-white">"Creativity is thinking up new things. Innovation is doing new things."</p>
          <section id="About" className='border-4 border-solid border-white rounded-4xl w-[95%] bg-white text-black'>
              <img src="https://as1.ftcdn.net/jpg/08/24/57/78/1000_F_824577894_QCyj5qiTsRMiEeBDn3bKJJXjQxM4lCPb.jpg" className="Profile-picture2 hover:rotate-90 hover:scale-110 transition-transform duration-300" width="300px" height="300px" />
              <p className="Reading-block" ><span className="highlight">I’m Jasskaran Singh Shangari, a passionate web developer from India.</span><br/> <br/>I’m always eager to embrace new challenges and seize opportunities that help me grow personally and professionally. 
              <br/> <br/>
              I specialize in experimenting with diverse animation styles to create websites that are both visually captivating and highly innovative. My goal is to blend creativity with functionality, ensuring every project delivers an exceptional user experience. <br/><br/>
              With a focus on innovation and design, I aim to push the boundaries of what’s possible in web development, crafting digital experiences that leave a lasting impression. Let’s build something extraordinary together! </p>
          </section>
      </section>  
      <section id="Projects" className='h-[100vh] text-white m-10 space-y-1'>
        <h2 className='text-[150px]' style={{
          fontFamily: "Bebas Neue",
        }}>Projects</h2>
        <p className='text-xl text-center' style={{
          fontFamily: "Inter"
        }}>Here are some of the projects I've worked on, showcasing my skills in web development. Each project reflects my passion for solving real-world problems using technology.</p>
        <ProjectGrid projects={exampleProjects} />
        </section>
        <section id="Skills" className='min-h-screen w-full mb-[80px]'>
        <div className="Skills">
          <h2 className=''>Skills</h2>
            <ul className="flex items-center justify-center flex-wrap space-x-2">
              <li><img src={assets.VS} alt="VS-Code" width="70px" height="70px" className="animate one" /></li>
              <li><img src={assets.HTML} alt="HTML5" width="70px" height="70px" className='animate two' /></li>
              <li><img src={assets.CSS} alt="CSS" width="70px" height="70px" className='animate one' /></li>
              <li><img src={assets.JS} alt="JavaScript" width="70px" height="70px" className='animate three' /></li>
              <li><img src={assets.React} alt="ReactJS" width="70px" height="70px" className='animate two'  /></li>
              <li><img src={assets.Node} alt="NodeJS" width="70px" height="70px" className='animate one' /></li>
              <li><img src={assets.Express} alt="ExpressJS" width="70px" height="70px" className='animate two' /></li>
              <li><img src={assets.Mongo} alt="Mongodb" width="70px" height="70px" className='animate one'/></li>
              <li><img src={assets.SQL} alt="MySQL" width="70px" height="70px" className='animate two'/></li>
              <li><img src={assets.Python} alt="Python" width="70px" height="70px" className='animate three' /></li>
              <li><img src={assets.Pandas} alt="Pandas" width="70px" height="70px" className='animate two' /></li>
              <li><img src={assets.Numpy} alt="Numpy" width="60px" height="60px" className='animate one' /></li>
              <li><img src={assets.CPP} alt="CPP" width="70px" height="70px" className='animate three'/></li>
              <li><img src={assets.Framer} alt="CPP" width="60px" height="60px" className='animate two'/></li>
            </ul>
          <p>During my transformative years at Chandigarh University, while pursuing my B.Tech degree in Artificial Intelligence and Machine Learning, I cultivated a robust foundation in diverse programming languages and technologies. From mastering C++ to enhance my problem-solving and logical thinking skills, to diving deep into Python for its versatility and application in AI and machine learning projects, I have continuously sought to expand my technical proficiency. My journey also led me to explore the intricacies of web development through HTML, CSS, and JavaScript, where I developed an eye for design and functionality. Venturing into React.js further sharpened my ability to build dynamic, user-friendly web applications, enabling me to craft innovative digital experiences.
          </p>
          
          <div className="containers grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
              <div className="progress wheel1">
                  <h3>85<span>%</span></h3>
                  <h4>HTML</h4>
              </div>
              <div className="progress wheel2">
                  <h3>80<span>%</span></h3>
                  <h4>CSS</h4>
              </div>
              <div className="progress wheel3">
                  <h3>80<span>%</span></h3>
                  <h4><abbr title="JavaScript and React" className='no-underline'>JS</abbr></h4>
              </div>
              <div className="progress wheel4">
                  <h3>85 <span>%</span></h3>
                  <h4>Python</h4>
              </div>
              <div className="progress wheel5">
                  <h3>75 <span>%</span></h3>
                  <h4><abbr title="C++ and STL" className='no-underline'>C++</abbr></h4>
              </div>
          </div>
        </div>
        </section>
        <section id="exp" className=' h-[70vh] m-10  text-white'>
          <h2 className='text-[150px]'
          style={{
            fontFamily: "Bebas Neue"
          }}>Experience</h2>
          <p className='text-lg text-center' style={{
            fontFamily: "Inter"
          }}>Over the years, I have worked on my personal projects and gained valuable hands-on experience through internships, where I contributed to developing dynamic web applications and optimizing user experiences. These opportunities allowed me to apply my technical knowledge in real-world scenarios, collaborate with diverse teams, and sharpen my problem-solving and innovation skills.</p>
          {/* COMPANY LIST */}
          <div className=''>
            <ul className='flex flex-col md:flex-row items-center justify-center'>
              <li>
                <img src={assets.Cognifyz} alt="Cognifyz Technologies" />
              </li>
            </ul>
          </div>

        </section>
        <Footer />
    
    </div>
  )
}

export default Content
