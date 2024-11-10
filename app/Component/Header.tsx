import Image from "next/image";

export default function Header() {
  return (
   
   <nav className="header">
    <div className="logo">
      Auto Treasure
        </div>
    <ul>
        <li><a href="/newcar">Brand new car</a></li>
        <li><a href="/usedcar">Used car</a></li>
        <li><a href="/electriccar">Electric car</a></li>
    </ul>
    </nav>
  );
} 