import { Link } from "react-router-dom";
import "../css/footer.css";

export const Footer = () => {
  return (
    <footer className="footerXD bg-dark text-light  p-3">
      <a
        target={"_blank"}
        href="https://www.instagram.com/nicoofuentes04/"
        rel="noopener noreferer" className="ul1">
        IG</a>
      <p>Copyright alkemy challenge</p>
    </footer>
  );
};
