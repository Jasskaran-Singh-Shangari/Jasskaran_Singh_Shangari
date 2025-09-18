import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import Content from './components/Content';
import NavBar from './components/NavBar';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';


function App() {
  useEffect(() => {
    // Ensure the particles container exists before initializing
    const interval = setInterval(() => {
      if (document.getElementById("particles-js")) {
        clearInterval(interval); // Stop checking once found

        // Load Particles.js script dynamically
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
        script.async = true;
        script.onload = () => {
          window.particlesJS.load("particles-js", "/particles.json", () => {
            console.log("Particles.js config loaded 🎉");
          });
        };
        document.body.appendChild(script);
      }
    }, 100); // Check every 100ms

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <>
      <div id="particles-js" className="w-[100vw] bg-[#000] h-[500vh] -z-1 ">
        <Content />
        <Toaster position="top-center" bodyClassName="toastBody" autoClose={3000} />
      </div>
    </>
  )
}

export default App
