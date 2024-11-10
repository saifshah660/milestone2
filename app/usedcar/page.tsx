import Image from "next/image";
import image from "../(public)/used.webp"
import image2 from "../(public)/cultas.webp"
import image3 from "../(public)/corolla.webp"
import image4 from "../(public)/vitz.webp"
import image5 from "../(public)/alto.webp"
import image6 from "../(public)/fortuner.webp"
export default function Home() {
  return (
    <div id="main" >
    <div className="vigo"><Image
    src={image}
    height={200}
    width={200}
    alt="no pic"
    />
   
    <p>Rs 7,200,000</p>
    <h3>Toyota Hilux Vigo<br/> Champ G 2015</h3>
    </div>
   <div className="cultas">
   <Image
    src={image2}
    height={200}
    width={200}
    alt="no pic"
    />
    <p>Rs 2,850,000</p>
    <h3>Suzuki Cultus VXR 2020</h3>
   </div>
    
     <div className="corollla">
     <Image
     src={image3}
     height={200}
     width={200}
     alt="no pic"
     />
     <p>Rs 3,195,000</p>
     <h3>Toyota Corolla Altis SR  2013</h3>
     </div>

     <div className="vitz">
     <Image
     src={image4}
     height={200}
     width={200}
     alt="no pic"
     />
     <p>Rs 2,145,000</p>
     <h3>Toyota Vitz 2010/13</h3>

     </div>

     <div className="alto">
     <Image
     src={image5}
     height={200}
     width={200}
     alt="no pic"
     />
     <p>Rs 2,770,000</p>
     <h3>Suzuki Alto VXL AGS 2021</h3>

     </div>

     <div className="for">
     <Image
     src={image6}
     height={200}
     width={200}
     alt="no pic"
     />
     <p>Rs 13,700,000</p>
     <h3>Toyota Hilux Rocco 2022</h3>

     </div>








     </div>

  );
}