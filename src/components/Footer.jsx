import "../styles/footer.css"

function Footer() {
  return (
    <footer style={{
      marginTop: "60px",
      padding: "20px",
      textAlign: "center",
      borderTop: "1px solid #0b2694"
    }}>
   
      <p>©2018 Rohit Singh Gaurav</p>

      <p>
        <a href="https://github.com/yourname">GitHub</a> |
        <a href="https://linkedin.com/in/yourname"> LinkedIn</a>
      </p>

    </footer>
  );
}

export default Footer;