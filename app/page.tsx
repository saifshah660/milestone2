import Image from "next/image";
import image1 from "../app/(public)/photo-1492144534655-ae79c964c9d7.jpeg"

export default function Home() {
  return (
   
    <div className="main">
       <Image
    src={image1}
    alt="no pic"
    height={500}
    width={1226}
    />
   <div className="buy"><h1 className="large">Buy</h1>
      <h2 className="medium">your</h2>
      <h3 className="large">Dream Car</h3>
   </div>
   <button className="btn">Buy NOW</button>  
      <div className="car-images"> 
        
       
    </div> 
    </div>
    
  );
}