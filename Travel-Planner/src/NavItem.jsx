import { Link, useLocation } from 'react-router-dom';

function NavItem({ to, label, translateX, translateY }) {
  const location = useLocation(); // Get the current path

  // Check if the current path matches the link (active state)
  const isActive = location.pathname === to;

  return (
    <li
      className={`transform ${isActive ? 'text-[#FF6565] underline' : ''} hover:text-[#FF6565] 
        translate-x-${translateX} translate-y-${translateY}`}
    >
      <Link to={to}>{label}</Link>
    </li>
  );
}

export default NavItem;
