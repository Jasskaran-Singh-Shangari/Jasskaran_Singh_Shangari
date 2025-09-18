import React from 'react'
import { assets } from '../assets/assets'
import { toast } from 'react-hot-toast'

const Footer = () => {

    const handleClick1=()=>{
      navigator.clipboard.writeText(Whatsapp);
      toast(" 📋 Number Copied", 
        {
          style:{
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          }
        }
      )
    }
    const redirect=()=>{
      toast("Spoiler alert: I’m awesome.", {
        style:{
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        }, 
        icon: "😏"
      })
    }

  return (
    <div className=''>
        <footer id="Contact" className="p-8">
  {/* Text section */}
  <div className="">
    <h2 className="text-2xl font-bold mb-4">Let’s Talk</h2>
    <p className="text-md text-zinc-600 dark:text-zinc-300 columns-2">
      Are you looking for a passionate web developer to bring your ideas to life? 
      I specialize in crafting innovative, visually engaging websites that leave a lasting impression. 
      Whether it’s building dynamic user experiences, experimenting with creative animation styles, 
      or collaborating on unique projects, I’m here to make your vision a reality.  <br />
      Drop me a message, and I’ll get back to you as soon as possible. Together, we can create something extraordinary!
    </p>
    <ul className='list-none flex justify-center items-center space-x-10 '>
     <li className='cursor-pointer grayscale hover:grayscale-0'>
        <a href="https://www.instagram.com/jassi_sabka_bhai/#"><img src={assets.Insta} alt="Instagram" width="90px" height="90px" onClick={redirect} /></a>
      </li> 
    <li className='cursor-pointer grayscale hover:grayscale-0' >
      <a href="https://github.com/Jasskaran-Singh-Shangari" >
        <img src={assets.Github} alt="Github" width="60px" height="60px" onClick={redirect}/>
      </a>
    </li> 
    <li className='grayscale hover:grayscale-0'>
      <a href="https://www.linkedin.com/in/jasskaranshangari/"><img src={assets.Linkedin} alt="LinkedIn" width="100px" onClick={redirect} /></a>
    </li> 
    </ul>
  </div>
  
    {/* CONTACT FORM */}
    
</footer>

    <div className="Banner-image h-[50vh]" style={{
      backgroundImage: `url(${assets.Talk})`,
      loading: "eager",
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

export default Footer
