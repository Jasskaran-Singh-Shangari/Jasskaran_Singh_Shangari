import React from 'react'

const Card = ({
        back_content,
        back_heading, 
        vid_link,
        repo_link="/",

    }
) => {
  return (
    <div>
        <div className="card">
        <div className="face front" >
            <video className='project-vid object-cover' autoPlay loop muted  >
                <source src={vid_link} type="video/mp4" />
            </video>
            <h2>Demo</h2>
        </div>
        <div className="face back space-y-4" >
            <h2></h2>
            <h3 className='mb-3 text-[20px]' style={{
                textDecoration: "underline"
            }}>{back_heading}</h3>
            <p>{back_content}</p>
            <a className='repo_link' href={repo_link}>VISIT THE REPO</a>
        </div>
    </div>
    </div>
  )
}

export default Card;
