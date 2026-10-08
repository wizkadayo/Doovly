import "./App.css";

import doovlyLogo from "./assets/doovly-logo.png";
import doovlyPhone from "./assets/doovly-phone.png";
import verifiedUsersIcon from "./assets/doovly-verified-users-icon.png";
import securedPaymentIcon from "./assets/secured-payment.png";
import offerServicesIcon from "./assets/offer-services.png";
import easyToUseIcon from "./assets/easy-to-use.png";
import searchImage from "./assets/search.png";
import bookUsImage from "./assets/book-us.png";
import payImage from "./assets/pay.png";

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


        {/* =========================================
    FEATURES
========================================= */}

<section className="features-section" id="features">

  <div className="features-inner">

    {/* =================================
        FEATURES INTRO
    ================================= */}

    <div className="features-intro">

      <div className="section-tag">
        FEATURES
      </div>

      <h2>
        Everything You Need,
        <br />
        All in One App.
      </h2>

      <p>
        Doovly makes it simple, fast and reliable
        to find trusted professionals or offer your
        own services.
      </p>

      <a
        href="#download"
        className="features-download"
      >
        Download App
      </a>

    </div>


    {/* =================================
        FEATURE CARDS
    ================================= */}

    <div className="features-grid">


      {/* Verified Professionals */}

      <div className="feature-card">

        <div className="feature-icon">

          <img
            src={verifiedUsersIcon}
            alt="Verified professionals"
          />

        </div>

        <h3>
          Verified
          <br />
          Professionals
        </h3>

        <p>
          Book with confidence.
          All professionals are
          verified and reviewed.
        </p>

      </div>


      {/* Secure Payments */}

      <div className="feature-card">

        <div className="feature-icon">

          <img
            src={securedPaymentIcon}
            alt="Secure payments"
          />

        </div>

        <h3>
          Secure
          <br />
          Payments
        </h3>

        <p>
          Pay safely with secure payments.
          Your money is protected.
        </p>

      </div>


      {/* Offer Your Services */}

      <div className="feature-card">

        <div className="feature-icon">

          <img
            src={offerServicesIcon}
            alt="Offer your services"
          />

        </div>

        <h3>
          Offer Your
          <br />
          Services
        </h3>

        <p>
          Add your skills and start earning
          on your own terms.
        </p>

      </div>


      {/* Easy To Use */}

      <div className="feature-card">

        <div className="feature-icon">

          <img
            src={easyToUseIcon}
            alt="Easy to use"
          />

        </div>

        <h3>
          Easy to Use
        </h3>

        <p>
          A simple and clean app designed
          for everyone.
        </p>

      </div>

    </div>

  </div>

</section>


{/* =========================================
    HOW IT WORKS
========================================= */}

<section className="how-it-works" id="how-it-works">

  <div className="how-it-works-inner">

    {/* =================================
        HEADER
    ================================= */}

    <div className="how-header">

      <div>

        <div className="section-tag">
          HOW IT WORKS
        </div>

        <h2>
          Get the service you need
          <br />
          in <span>3 simple steps.</span>
        </h2>

      </div>


      <a
        href="#how-it-works"
        className="how-see-button"
      >
        See How It Works
        <span>→</span>
      </a>

    </div>


    {/* =================================
        THREE STEPS
    ================================= */}

    <div className="how-steps">


      {/* =================================
          STEP 1 — SEARCH
      ================================= */}

      <div className="how-step-card step-search">

        <div className="step-number">
          1
        </div>

        <div className="step-content">

          <h3>
            Search
          </h3>

          <p>
            Find trusted<br/>professionals near you.
          </p>

        </div>

        <div className="step-image">

          <img
            src={searchImage}
            alt="Search for professionals"
          />

        </div>

      </div>


      {/* Connector */}

      <div className="step-connector">
        →
      </div>


      {/* =================================
          STEP 2 — BOOK
      ================================= */}

      <div className="how-step-card step-book">

        <div className="step-number">
          2
        </div>

        <div className="step-content">

          <h3>
            Book
          </h3>

          <p>
            Choose a service, date<br/>and time that works for you.
          </p>

        </div>

        <div className="step-image">

          <img
            src={bookUsImage}
            alt="Book a service"
          />

        </div>

      </div>


      {/* Connector */}

      <div className="step-connector">
        →
      </div>


      {/* =================================
          STEP 3 — PAY
      ================================= */}

      <div className="how-step-card step-pay">

        <div className="step-number">
          3
        </div>

        <div className="step-content">

          <h3>
            Pay & Relax
          </h3>

          <p>
            Pay securely and get<br/>the job done.
          </p>

        </div>

        <div className="step-image">

          <img
            src={payImage}
            alt="Pay and relax"
          />

        </div>

      </div>

    </div>

  </div>

</section>

      </main>

    </div>
  );
}

export default App;