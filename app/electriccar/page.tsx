import Image from "next/image";
import teslaimage from "../(public)/tesla.png"
import Audiimage from "../(public)/Audi logo.jpg"
import mercedesimage from "../(public)/images.png"
import fordimage from "../(public)/ford-logo-1-preview.jpg"
import suzuimage from "../(public)/png-clipart-suzuki-car-logo-subaru-suzuki-angle-logo.png"
import image from "../(public)/el.jpg"
import image1 from "../(public)/ele.jpeg"
import image2 from "../(public)/tsele.jpeg"
import image3 from "../(public)/bmele.jpeg"
import image4 from "../(public)/haelec.jpg"

import image6 from "../(public)/odelec.jpeg"
import image7 from "../(public)/mgele.jpg"
import image8 from "../(public)/elect.webp"
import image9 from "../(public)/lec.jpeg"
import image10 from "../(public)/ectr.webp"
import image11 from "../(public)/cit.jpeg"
import image12 from "../(public)/123.jpeg"

export default function electric() {
  return (
    <div>

<div className="elec">

   <Image
    src={image}
    height={200}
    width={200}
    alt="no pic"
    />
    

   <Image
    src={image1}
    height={200}
    width={200}
    alt="no pic"
    />
    

    <Image
    src={image2}
    height={200}
    width={200}
    alt="no pic"
    />
    

    <Image
    src={image3}
    height={200}
    width={200}
    alt="no pic"
    />
   

    <Image
    src={image4}
    height={200}
    width={200}
    alt="no pic"
    />
  
     <Image
    src={image6}
    height={200}
    width={200}
    alt="no pic"
    />
 <Image
    src={image7}
    height={200}
    width={200}
    alt="no pic"
    />
     <Image
    src={image8}
    height={200}
    width={200}
    alt="no pic"
    />
      <Image
    src={image9}
    height={200}
    width={200}
    alt="no pic"
    />
        <Image
    src={image10}
    height={200}
    width={200}
    alt="no pic"
    />
    
    <Image
    src={image11}
    height={200}
    width={200}
    alt="no pic"
    />
     <Image
    src={image12}
    height={200}
    width={200}
    alt="no pic"
    />
    </div>

<div className="cen"><h2>Browse by brand</h2></div>

<div className="brand-column-elec"> <div className="brand">

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

<div className="brandf">
<Image
src={fordimage}
alt="ford"
height={100} // or any desired height
width={100}  // optional, or specify according to your requirements
/>
<h1>ford</h1>

</div>

 
</div>
   
    </div>
  );
}