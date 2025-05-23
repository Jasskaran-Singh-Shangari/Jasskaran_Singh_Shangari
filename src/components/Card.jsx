import React from 'react'

const Card = ({
        front_heading,
        back_content,
        back_heading, 
        vid_link,
        repo_link="/",
        live_link="/"

    }
) => {
  return (
    <div>
        <div className="card">
        <div className="face front" >
            <video className='project-vid object-fill' autoPlay loop muted>
                <source src={vid_link} type="video/mp4" />
            </video>
            <h2>{front_heading}</h2>
        </div>
        <div className="face back space-y-4">
            <h2></h2>
            <h3 className='mt-7' style={{
                // textDecoration: "underline"
                fontSize: "30px"
            }}>{back_heading}</h3>
            <p className='mt-7'>{back_content}</p>
            <a className='repo_link text-[20px]' href={repo_link}>VISIT THE REPO</a>
            <a href=""></a>
        </div>
    </div>
    </div>
  )
}

export default Card;
