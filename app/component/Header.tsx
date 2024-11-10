import Image from "next/image";

export default function Header() {
  return (
   
   <nav className="header">
    <div className="logo">
        Saif Shah
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/skill">Skill</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact-us">Contact us</a></li>
        </ul>
    </div>
   </nav>
)
}
