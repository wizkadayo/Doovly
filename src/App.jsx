import "./App.css";

import doovlyLogo from "./assets/doovly-logo.png";
import doovlyPhone from "./assets/doovly-phone.png";
import verifiedUsersIcon from "./assets/doovly-verified-users-icon.png";


/* =========================================
   GOOGLE PLAY MULTICOLOR ICON
========================================= */

function GooglePlayIcon() {
  return (
    <svg
      className="google-play-icon"
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <path
        fill="#00D7FF"
        d="M5.4 4.8C4.5 5.8 4 7.3 4 9.4v29.2c0 2.1.5 3.6 1.4 4.6L29 24 5.4 4.8z"
      />

      <path
        fill="#00F076"
        d="M36.8 31.8L29 24 5.4 43.2c.9.9 2.4 1 3.9.2l27.5-11.6z"
      />

      <path
        fill="#FFCF00"
        d="M36.8 16.2L9.3 4.6c-1.5-.8-3-.7-3.9.2L29 24l7.8-7.8z"
      />

      <path
        fill="#FF3B30"
        d="M43.1 21.9l-6.3-5.7L29 24l7.8 7.8 6.3-5.7c1.9-1.7 1.9-4.5 0-6.2z"
      />
    </svg>
  );
}


/* =========================================
   CURVED BOOK ARROW
========================================= */

function BookArrow() {
  return (
    <svg
      className="curved-arrow book-arrow"
      viewBox="0 0 150 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 91C25 68 46 54 72 51C99 48 120 34 132 12"
        stroke="#087D42"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M118 13L132 12L128 27"
        stroke="#087D42"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


/* =========================================
   CURVED OFFER ARROW
========================================= */

function OfferArrow() {
  return (
    <svg
      className="curved-arrow offer-arrow"
      viewBox="0 0 150 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M138 91C125 68 104 54 78 51C51 48 30 34 18 12"
        stroke="#087D42"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M32 13L18 12L22 27"
        stroke="#087D42"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


function App() {
  return (
    <div className="doovly-site">

      {/* =========================================
          NAVBAR
      ========================================= */}

      <header className="navbar">
        <div className="navbar-inner">

          <a href="#home" className="brand">
            <img
              src={doovlyLogo}
              alt="Doovly Service Marketplace"
            />
          </a>


          <nav className="nav-home">
            <a href="#home">
              Home
            </a>
          </nav>


          <a
            href="#download"
            className="nav-download"
          >
            Download App
          </a>

        </div>
      </header>


      {/* =========================================
          HOME / HERO
      ========================================= */}

      <main id="home">

        <section className="hero">

          {/* Decorative background */}
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          <div className="blob blob-4"></div>
          <div className="blob blob-5"></div>


          <div className="hero-inner">

            {/* =====================================
                LEFT HERO CONTENT
            ===================================== */}

            <div className="hero-copy">

              <div className="hero-tag">
                FOR EVERYONE
              </div>


              <h1>
                Book or Offer
                <br />
                Services
                <br />

                <span>
                  It’s Up to You.
                </span>
              </h1>


              <p>
                One app. No strict roles. Whether you need a
                professional or have a skill to offer, Doovly
                is built for you.
              </p>


              {/* =================================
                  STORE BUTTONS
              ================================= */}

              <div className="store-buttons">

                {/* Google Play */}

                <a
                  href="#download"
                  className="store-badge"
                >

                  <GooglePlayIcon />

                  <div className="store-copy">
                    <small>
                      GET IT ON
                    </small>

                    <strong>
                      Google Play
                    </strong>
                  </div>

                </a>


                {/* App Store */}

                <a
                  href="#download"
                  className="store-badge"
                >

                  <i className="fa-brands fa-apple apple-store-icon"></i>

                  <div className="store-copy">
                    <small>
                      Download on the
                    </small>

                    <strong>
                      App Store
                    </strong>
                  </div>

                </a>

              </div>

            </div>


            {/* =====================================
                HERO VISUAL
            ===================================== */}

            <div className="hero-visual">


              {/* =================================
                  PROFESSIONAL CARD
              ================================= */}

              <div className="service-card professional-card">

                <div className="service-icon green-icon">
                  <i className="fa-solid fa-user-check"></i>
                </div>


                <h3>
                  Need a Professional?
                </h3>


                <p>
                  Find and book verified experts
                  for any service.
                </p>


                <button
                  className="card-arrow"
                  aria-label="Find a professional"
                >
                  →
                </button>

              </div>


              {/* =================================
                  PHONE IMAGE
              ================================= */}

              <div className="phone-container">

                <img
                  src={doovlyPhone}
                  alt="Doovly mobile application"
                  className="phone-image"
                />

              </div>


              {/* =================================
                  SKILL CARD
              ================================= */}

              <div className="service-card skill-card">

                <div className="service-icon orange-icon">
                  <i className="fa-solid fa-chart-line"></i>
                </div>


                <h3>
                  Have a Skill?
                </h3>


                <p>
                  Add your services and start
                  earning.
                </p>


                <button
                  className="card-arrow"
                  aria-label="Offer your services"
                >
                  →
                </button>

              </div>


              {/* =================================
                  BOOK SERVICES CURVED ARROW
              ================================= */}

              <div className="service-direction book-direction">

                <BookArrow />

                <span>
                  Book
                  <br />
                  Services
                </span>

              </div>


              {/* =================================
                  OFFER SERVICES CURVED ARROW
              ================================= */}

              <div className="service-direction offer-direction">

                <OfferArrow />

                <span>
                  Offer
                  <br />
                  Services
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================
            STATS
        ========================================= */}

        <section className="stats">

          {/* Active Users */}

          <div className="stat">

            <div className="stat-icon users-icon">
              <i className="fa-solid fa-users"></i>
            </div>

            <div className="stat-text">
              <strong>
                10K+
              </strong>

              <span>
                Active Users
              </span>
            </div>

          </div>


          <div className="stat-line"></div>


          {/* Verified Professionals */}

          <div className="stat">

            <div className="stat-icon verified-icon">
  <img
    src={verifiedUsersIcon}
    alt="Verified professionals"
  />
</div>

            <div className="stat-text">
              <strong>
                5K+
              </strong>

              <span>
                Verified Professionals
              </span>
            </div>

          </div>


          <div className="stat-line"></div>


          {/* Average Rating */}

          <div className="stat">

            <div className="stat-icon rating-icon">
              <i className="fa-solid fa-star"></i>
            </div>

            <div className="stat-text">
              <strong>
                4.8 ★
              </strong>

              <span>
                Average Rating
              </span>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;