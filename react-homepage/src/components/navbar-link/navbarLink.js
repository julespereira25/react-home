import { link } from "../navlinks/data";
import "./navbarLink.scss";

function Navbarlink() {
  return (
    <div className="navbarlink">
      <ul className="navbarlink__list">
        {link.map((item) => (
          <li className="navbarlink__content">
            <a className="navbarlink__Href" key={item.linkKey}>{item.linkName}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbarlink;
