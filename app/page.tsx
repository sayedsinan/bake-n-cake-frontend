export default function Home() {
  const styles = {
    main: {
      backgroundColor: "white",
    },

    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      borderBottom: "2px solid #f5d3cc",
      color: "black",
    },

    title: {
      fontSize: "24px",
      color: "black",
    },

    menuContainer: {
      display: "flex",
      gap: "30px",
      fontSize: "18px",
      color: "black",
      cursor:"pointer"
    },

    introCard: {
      background: "linear-gradient(to bottom, #efd2c9, #ffffff)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "60px 80px",
      gap: "40px",
    },

    introTextContainer: {
      maxWidth: "50%",
    },

    introHeading1: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#000",
      margin: "10px 0",
    },

    introHeading2: {
      fontSize: "48px",
      fontWeight: "bold",
      color: "#d26b3f",
      marginBottom: "10px 0",
    },

    introParagraph: {
      fontSize: "18px",
      lineHeight: "1.6",
      color: "#333",
      marginTop: "10px",
    },

    introLabel: {
      color: "#b55e58",
      fontWeight: "bold",
      letterSpacing: "2px",
    },

    introImage: {
      width: "450px",
      height: "auto",
      borderRadius: "20px",
      objectFit: "cover",
    },
    buttonsContainer: {
      marginTop: "30px",
      display: "flex",
      gap: "20px",
    },

    shopButton: {
      backgroundColor: "#d87355",
      color: "white",
      padding: "12px 28px",
      borderRadius: "30px",
      border: "none",
      fontSize: "16px",
      cursor: "pointer",
    },

    learnButton: {
      backgroundColor: "transparent",
      color: "#d87355",
      padding: "12px 28px",
      borderRadius: "30px",
      border: "2px solid #d87355",
      fontSize: "16px",
      cursor: "pointer",
    },

  };

  return (
    <main style={styles.main}>

      <div style={styles.navbar}>
        <h1 style={styles.title}>Bake'n Cake</h1>

        <div style={styles.menuContainer}>
          <p>Home</p>
          <p>Products</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
      <div style={styles.introCard}>

        <div style={styles.introTextContainer}>
          <p style={styles.introLabel}>PREMIUM BAKERY</p>
          <h2 style={styles.introHeading1}>Handcrafted</h2>
          <h2 style={styles.introHeading2}>Desserts</h2>

          <p style={styles.introParagraph}>
            Experience the finest artisan cakes, donuts, and pastries made fresh daily
            with premium ingredients and passion.
          </p>
          <div style={styles.buttonsContainer}>
            <button style={styles.shopButton}>Shop Now →</button>
            <button style={styles.learnButton}>Learn More</button>
          </div>
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLOxbhxVo0Q0MTbgqoX_6FiqIXa37WNzv_tuMlYIj7OSh3KPmGIua8CGY&s"
          alt="Bakery display"
          style={styles.introImage}
        />
<div style={ styles.main}></div>


      </div>
    </main>
  );
}
