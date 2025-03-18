import React, { useRef } from 'react'
import Card from './Card'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets.js'
const Content = () => {

  const Whatsapp="+91 9911318555"
  const InstaLink="https://www.threads.net/@jassi_sabka_bhai?xmt=AQGzdaMhZ1TUq7q_kwMo4wwxXnK2a6O_CDK6JVwTob7T8ac"

  const handleClick1=()=>{
    navigator.clipboard.writeText(Whatsapp);
    toast(" 📋 Number Copied")
  }
  const redirect=()=>{
    toast.info("You seem interested in learning more about me")
  }
  const downloadResume=()=>{
    toast.success("Downloading Resume")
  }


  return (
    <div className="absolute top-0 left-0 text-center">
        <section id="Hero" className="text-white flex justify-center items-center min-h-screen min-w-screen">
            <p className='space-x-2'><span className="text-[5rem]" style={{
              fontFamily:"Righteous"
            }} >Hi</span> <span className="text-[3rem] font-bold" style={{
              fontFamily:"Shadows Into Light"
            }}>I am a </span> <br/> <span className="font-bold text-[9rem]" style={{
              fontFamily:"Zilla Slab Highlight",
              lineHeight: 1.2
            }}>Web <br /> Developer.</span>
            </p>
            <a href="/" download="Jasskaran_Shangari_resume.pdf" onClick={downloadResume}><img className="rounded-full border-solid border-white border-[10px] absolute right-50 top-10 hover:scale-110 cursor-pointer transition-transform duration-300 w-[400px] h-[400px]"  src={assets.Placeholder1}  /></a>
        </section>
        {/* <section id="Links" className=" w-full h-[10vh] relative  text-white">
            <ul className='flex items-center justify-center text-5xl space-x-8'>
              <li><a href="/"><i className="fa-brands fa-linkedin"></i></a></li>
              <li><a href="/"><i className="fa-brands fa-square-github"></i></a></li>
              <li><a href="/"><i className="fa-brands fa-square-instagram"></i></a></li>
            </ul>
          </section> */}
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
      <section id="Projects" className='h-[100vh] text-white p-5'>
        <p className='pt-14 text-9xl' style={{
          fontFamily: "Bebas Neue"
        }}>Projects</p>
        <p className='text-xl mb-10 ' style={{
          fontFamily: "Inter"
        }}>Here are some of the projects I've worked on, showcasing my skills in web development, AI/ML, and hardware-based innovations. Each project reflects my passion for solving real-world problems using technology.</p>
        <ul className='flex items-center justify-evenly space-x-8'>
          <li><Card vid_link="" back_heading="" back_content="" /></li>
          <li><Card vid_link="" back_heading="" back_content="" /></li>
          <li><Card vid_link="src/assets/vedios/Speed_detection.mp4" 
          back_heading="Speed Detection System" back_content=" A real-time vehicle speed detection system using YOLOv8, OpenCV, and Python to enhance road safety. Future upgrades include automated alerts, smart city integration, and adaptive AI models for improved accuracy."/></li>
        </ul>
        </section>
        <section id="Skills" className='min-h-screen w-full space-y-8 mb-[100px]'>
        <div className="Skills">
          <h2>Skills</h2>
            <ul className="flex items-center justify-center space-x-2">
              <li><img src={assets.VS} alt="VS-Code" width="70px" height="70px" className="animate one" /></li>
              <li><img src={assets.HTML} alt="HTML5" width="70px" height="70px" className='animate two' /></li>
              <li><img src={assets.CSS} alt="CSS" width="70px" height="70px" className='animate one' /></li>
              <li><img src={assets.JS} alt="JavaScript" width="70px" height="70px" className='animate three' /></li>
              <li><img src={assets.React} alt="ReactJS" width="70px" height="70px" className='animate two'  /></li>
              <li><img src={assets.Node} alt="NodeJS" width="70px" height="70px" className='animate one' /></li>
              <li><img src={assets.Express} alt="ExpressJS" width="70px" height="70px" className='animate two' /></li>
              <li><img src={assets.Mongo} alt="Mongodb" width="70px" height="70px" className='animate one'/></li>
              <li><img src={assets.Python} alt="Python" width="70px" height="70px" className='animate three' /></li>
              <li><img src={assets.Pandas} alt="Pandas" width="70px" height="70px" className='animate two' /></li>
              <li><img src={assets.Numpy} alt="Numpy" width="60px" height="60px" className='animate one' /></li>
              <li><img src={assets.CPP} alt="CPP" width="70px" height="70px" className='animate three'/></li>
              <li><img src={assets.SQL} alt="MySQL" width="70px" height="70px" className='animate two'/></li>
            
            </ul>
          <p>During my transformative years at Chandigarh University, while pursuing my B.Tech degree in Artificial Intelligence and Machine Learning, I cultivated a robust foundation in diverse programming languages and technologies. From mastering C++ to enhance my problem-solving and logical thinking skills, to diving deep into Python for its versatility and application in AI and machine learning projects, I have continuously sought to expand my technical proficiency. My journey also led me to explore the intricacies of web development through HTML, CSS, and JavaScript, where I developed an eye for design and functionality. Venturing into React.js further sharpened my ability to build dynamic, user-friendly web applications, enabling me to craft innovative digital experiences.
          </p>
          
          <div className="containers">
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
        <footer id="Contact" className='h-[50vh]'>
        <h2>Let’s Talk</h2>
        <p>Are you looking for a passionate web developer to bring your ideas to life? I specialize in crafting innovative, visually engaging websites that leave a lasting impression. Whether it’s building dynamic user experiences, experimenting with creative animation styles, or collaborating on unique projects, I’m here to make your vision a reality. Let’s connect and discuss how I can contribute to your goals. Whether you have a specific project in mind, need assistance with web development, or simply want to chat about creative designs and cutting-edge animations, I’m always excited to collaborate and share ideas. Drop me a message, and I’ll get back to you as soon as possible. Together, we can create something extraordinary!
        </p>
        <ul className='list-none flex justify-center items-center space-x-10 '>
          <li className='cursor-pointer grayscale hover:grayscale-0'><a href="https://www.instagram.com/jassi_sabka_bhai/#"><img src={assets.Insta} alt="Instagram" width="100px" height="100px" onClick={redirect} /></a></li>
          <li className='cursor-pointer grayscale hover:grayscale-0' onClick={handleClick1}><img src={assets.Whatsapp} alt="Whatsapp" width="80px" height="80px" /></li>
          <li className='grayscale hover:grayscale-0'><a href="https://dev.to/jasskaran_singh_shangari"><img src={assets.Devto} alt="Dev.to" width="70px"height="80px" onClick={redirect} /></a></li>
          <li className='grayscale hover:grayscale-0'><a href="https://www.linkedin.com/in/jasskaranshangari/"><img src={assets.Linkedin} alt="LinkedIn" width="110px" onClick={redirect} /></a></li>
        </ul>
    </footer>
    <div className="Banner-image h-[50vh]" style={{
      backgroundImage: `url(${assets.Talk})`
    }} >
            <ul>
                <li>
                    <span className="icon">
                        <img src={assets.Mail} alt="Mail" width="50px" height="50px" data-text="Mail"/>
                    </span>
                    <span class="details">jasskaransingh0007@gmail.com</span>
                </li>
                <li>
                    <span className="icon">
                        <img src={assets.Call} alt="or Call Me" width="50px" height="50px" data-text="Call"/>
                    </span>
                    <span class="details">+91 9911318555</span>
                </li>
                <li>
                    <span class="icon">
                        <img src={assets.Location} alt="My location" width="50px" height="50px" data-text="Location"/>
                    </span>
                    <span class="details">Chandigarh University</span>
                </li>
            </ul>
            <figure>
                <img src={assets.Sign} alt="Signature"class="Signature" /><p class="copyright">&copy;</p>
                <figcaption>Use Above Links</figcaption>
            </figure>
    </div>
    
    </div>
  )
}

export default Content
