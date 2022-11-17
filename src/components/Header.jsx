import { NavLink } from "solid-app-router";

const Header = () => {
  return (
    <div>
      <h2 class="text-decoration-none">
        <NavLink href="/" class="text-decoration-none">PDSSP Data services registry</NavLink> 
      </h2>
    </div>
  )
}

export default Header;