import { NavLink } from "react-router-dom";

function NavHeader() {
  return (
    <div className="h-[600px] bg-sky-200  mt-[20px]">
      <h1 className=" pt-[20px] text-center text-xl" >About Me</h1>
      <div className="ml-[20px] flex gap-[50px]" >
        <NavLink activeclassname='active' to='/' end >Me</NavLink>
        <NavLink to='/hobbies' >Hobbies</NavLink>
        <NavLink to='/contact' >Contact</NavLink>
      </div>
    </div>
  );
}

export default NavHeader;