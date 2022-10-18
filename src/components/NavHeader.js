import { NavLink } from "react-router-dom";

function NavHeader() {
  return (
    <div className="h-[100px] bg-sky-200  mt-[20px] ">
      <h1 className=" pt-[20px] text-center text-xl" >About Me</h1>
      <ul className="ml-[20px] flex gap-[50px]" >

        <NavLink activeclassname='active' to='/' end ><li>Me</li> </NavLink>
        <NavLink to='/hobbies' > <li>Hobbies</li></NavLink>
        <NavLink to='/contact' ><li>Contact</li></NavLink>
      </ul>
    </div>
  );
}

export default NavHeader;