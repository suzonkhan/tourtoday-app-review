import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <li>
        <Link
          className={  match ? "current-menu" : "" }
          to={to}
          {...props}
        >
          {children}
        </Link>
       
      </li>
    );
  }
  export default CustomLink;
