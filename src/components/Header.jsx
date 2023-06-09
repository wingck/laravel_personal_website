import {Link} from "react-router-dom";
import Nav from "./Nav";

export default function Header() {
  return (
    <header id="header">
      <h2 id="site-name">
        <img src="https://i.ibb.co/cLn6Ywy/sign.png" class="site-sign"></img> 
      </h2>
      <Nav />
    </header>
  )
}