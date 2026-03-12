

// import "../styles/footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">

//       <div className="footer-overlay">
//         <p>©2026 Rohit Singh Gaurav</p>

//         <div className="footer-links">
//           <a href="" target="_blank" rel="noreferrer">
//             GitHub
//           </a>
//           {" | "}
//           <a href="" target="_blank" rel="noreferrer">
//             LinkedIn
//           </a>
//         </div>
//       </div>

//     </footer>
//   );
// };

// export default Footer;






import "../styles/footer.css";
import banner from "../assets/footer-banner.jpg";   // your banner image

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="footer-overlay">

        <p className="footer-text">© 2026 Rohit Singh Gaurav</p>

        <div className="footer-links">
          <a
            href="https://github.com/GauravRohitStack"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

           {" | "}

          <a
            href="https://www.linkedin.com/in/rohit-s-gaurav-108331192/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

