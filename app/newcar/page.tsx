import Image from "next/image";
import teslaimage from "../(public)/tesla.png"
import Audiimage from "../(public)/Audi logo.jpg"
import mercedesimage from "../(public)/images.png"
import fordimage from "../(public)/ford-logo-1-preview.jpg"
import suzuimage from "../(public)/png-clipart-suzuki-car-logo-subaru-suzuki-angle-logo.png"
import image from "../(public)/images.jpeg"
import image2 from "../(public)/mobile_listing_main_Toyota-Fortuner-2016-Front.jpg"
import image3 from "../(public)/download.jpeg"
import image4 from "../(public)/download (1).jpeg"
import image5 from "../(public)/mercedes-benz-glc-polar-white.webp"
import image6 from "../(public)/download (2).jpeg"
import image7 from "../(public)/download (3).jpeg"
import image8 from "../(public)/PRADO.jpg"
import image9 from "../(public)/images (2).jpeg"
import image10 from "../(public)/grande.jpeg"
import image11 from "../(public)/mg.jpeg"
import image12 from "../(public)/3008_-_PNG.png"

export default function newcar() {
  return (
    
    <div className="main">
      <div className="car-images"> 
        
         <Image
    src={image2}
    alt="no pic"
    height={200}
    width={200}
    />
    
      <Image
    src={image3}
    alt="no pic"
    height={200}
    width={200}
    />
    <Image
    src={image4}
    alt="no pic"
    height={200}
    width={200}
    />

       <Image
    src={image}
    alt="no pic"
    height={200}
    width={200}
    />
     <Image
    src={image5}
    alt="no pic"
    height={200}
    width={200}
    />
       <Image
    src={image6}
    alt="no pic"
    height={200}
    width={200}
    />
     
    </div> 
   <div className="car-images2">
    <Image
    src={image7}
    alt="no pic"
    height={200}
    width={200}
    />
     <Image
    src={image8}
    alt="no pic"
    height={200}
    width={200}
    />
     <Image
    src={image9}
    alt="no pic"
    height={200}
    width={200}
    />
     <Image
    src={image10}
    alt="no pic"
    height={200}
    width={200}
    />
     <Image
    src={image11}
    alt="no pic"
    height={200}
    width={200}
    />  
    <Image
    src={image12}
    alt="no pic"
    height={200}
    width={200}
    />

    </div>
    <h2>Browse by brand</h2>

<div className="brand-column"> 
  
  <div className="brand">
    <Image
src={teslaimage}
alt="Tesla"
height={70} // or any desired height
width={70}  // optional, or specify according to your requirements
/>
<h1>Tesla</h1>

</div>


<div className="brand" >
<Image
src={Audiimage}
alt="Audi"
height={100} // or any desired height
width={100}  // optional, or specify according to your requirements
/>
<h1>Audi</h1>
</div>
<div className="brand">
<Image
src={mercedesimage}
alt="merc"
height={150} // or any desired height
width={150}  // optional, or specify according to your requirements
/>
<h1>Mercedes</h1>
</div>



<div className="brand">
<Image
src={fordimage}
alt="ford"
height={100} // or any desired height
width={100}  // optional, or specify according to your requirements
/>
<h1>ford</h1>

</div>

<div className="brand">
<Image
src={suzuimage}
alt="suzuki"
height={100} // or any desired height
width={100}  // optional, or specify according to your requirements
/>
<h1>Suzuki</h1>

</div>  
</div> 
    </div>

    
  );
}