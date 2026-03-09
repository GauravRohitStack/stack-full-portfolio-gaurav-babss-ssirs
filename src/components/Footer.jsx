// import "../styles/footer.css"

// function Footer() {
//   return (
//     <footer style={{
//       marginTop: "60px",
//       padding: "20px",
//       textAlign: "center",
//       borderTop: "1px solid #0b2694"
//     }}>
   
//       <p>©2018 Rohit Singh Gaurav</p>

//       <p>
//         <a href="https://github.com/yourname">GitHub</a> |
//         <a href="https://linkedin.com/in/yourname"> LinkedIn</a>
//       </p>

//     </footer>
//   );
// }

// export default Footer;




import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-overlay">
        <p>© 2026 Rohit Singh Gaurav</p>

        <div className="footer-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            GitHub
          </a>
          {" | "}
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;





