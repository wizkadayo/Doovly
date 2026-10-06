import "./App.css";
import doovlyLogo from "./assets/doovly-logo.png";
import doovlyPhone from "./assets/doovly-phone.png";

function App() {
  return (
    <div className="doovly-site">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="navbar-inner">

          <a href="#home" className="brand">
            <img src={doovlyLogo} alt="Doovly Service Marketplace" />
          </a>

          <nav className="nav-home">
            <a href="#home">Home</a>
          </nav>

          <a href="#download" className="nav-download">
            Download App
          </a>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <main id="home">

        <section className="hero">

          {/* Background decoration */}
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          <div className="blob blob-4"></div>
          <div className="blob blob-5"></div>


          <div className="hero-inner">

            {/* LEFT CONTENT */}
            <div className="hero-copy">

              <div className="hero-tag">
                FOR EVERYONE
              </div>

              <h1>
                Book or Offer
                <br />
                Services
                <br />
                <span>It’s Up to You.</span>
              </h1>

              <p>
                One app. No strict roles. Whether you need a
                professional or have a skill to offer, Doovly
                is built for you.
              </p>


              {/* APP STORE BUTTONS */}
              <div className="store-buttons">

                <a href="#download" className="store-badge">

                  <i className="bi bi-google-play"></i>

                  <div>
                    <small>GET IT ON</small>
                    <strong>Google Play</strong>
                  </div>

                </a>


                <a href="#download" className="store-badge">

                  <i className="bi bi-apple"></i>

                  <div>
                    <small>Download on the</small>
                    <strong>App Store</strong>
                  </div>

                </a>

              </div>

            </div>


            {/* HERO VISUAL */}
            <div className="hero-visual">


              {/* PROFESSIONAL CARD */}
              <div className="service-card professional-card">

                <div className="service-icon green-icon">
                  <i className="bi bi-person-check-fill"></i>
                </div>

                <h3>Need a Professional?</h3>

                <p>
                  Find and book verified experts
                  for any service.
                </p>

                <div className="card-arrow">
                  →
                </div>

              </div>


              {/* PHONE */}
              <div className="phone-container">

                <img
                  src={doovlyPhone}
                  alt="Doovly mobile application"
                  className="phone-image"
                />

              </div>


              {/* SKILL CARD */}
              <div className="service-card skill-card">

                <div className="service-icon orange-icon">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>

                <h3>Have a Skill?</h3>

                <p>
                  Add your services and start
                  earning.
                </p>

                <div className="card-arrow">
                  →
                </div>

              </div>


              {/* BOOK SERVICES */}
              <div className="visual-label book-label">

                <div className="label-arrow">
                  ↗
                </div>

                <span>
                  Book<br />
                  Services
                </span>

              </div>


              {/* OFFER SERVICES */}
              <div className="visual-label offer-label">

                <div className="label-arrow">
                  ↖
                </div>

                <span>
                  Offer<br />
                  Services
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* ================= STATS ================= */}
        <section className="stats">

          <div className="stat">

            <div className="stat-icon">
              <i className="bi bi-people-fill"></i>
            </div>

            <div>
              <strong>10K+</strong>
              <span>Active Users</span>
            </div>

          </div>


          <div className="stat-line"></div>


          <div className="stat">

            <div className="stat-icon">
              <i className="bi bi-shield-check"></i>
            </div>

            <div>
              <strong>5K+</strong>
              <span>Verified Professionals</span>
            </div>

          </div>


          <div className="stat-line"></div>


          <div className="stat">

            <div className="stat-icon">
              <i className="bi bi-star-fill"></i>
            </div>

            <div>
              <strong>4.8 ★</strong>
              <span>Average Rating</span>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;