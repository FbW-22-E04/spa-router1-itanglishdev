import { NavLink, Link } from "react-router-dom";

function NavHeader() {
  return (
    <div className="h-[600px] bg-sky-200  mt-[20px]">
      <h1 className=" pt-[20px] text-center text-xl" >About Me</h1>
      <ul className="ml-[20px] flex gap-[50px]" >

        <Link to='/'  ><li>Me</li> </Link>
        <Link to='/hobbies' > <li>Hobbies</li></Link>
        <Link to='/contact' ><li>Contact</li></Link>
      </ul>
    </div>
  );
}

export default NavHeader;