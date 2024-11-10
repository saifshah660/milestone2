import Image from "next/image";

import image from "../app/(public)/D93D6120-9859-4B88-BA08-243B59DC7465.jpg"

export default function Home() {
  return (
   <div className="port">
    <div className="left-container">
      <h1 className="intro">Hi! I'm <span className="name">Saif Shah</span></h1>
      <h1 className="passion"> Web Developer</h1>
      <h5 className="para">"I'm a Full Stack Developer with a passion for building robust, scalable, and user-centric web applications.<br/>    I specialize in both front-end and back-end development, ensuring seamless integration <br/>  and functionality across all layers of the tech stack."</h5>
     <div className="btn-container"> 
      <button className="hire">Hire ME</button>
     <button className="view">View project</button></div>
    </div>
   
   

<div className="right-container">
       <div className="design">
            <div className="circle1"></div>
            <div className="circle2"> <Image
            src={image}
            alt="no pic"
            layout="fill" 
              objectFit="cover"
            />
            </div>
           

       </div>
</div>
    
</div>
  );
}
