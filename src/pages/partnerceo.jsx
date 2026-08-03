import "../styles/partnerceo.css";
import PartnerCard from "../components/partnercard";

function PartnerCEO({ onBack }) {
  return (
    <div className="partnerPage">
      <button
    className="ctaButton"
    onClick={onBack}
    >
    ← Back to Klaiv AI
    </button>
      {/* Hero Section */}

      <section className="heroSection">

        <span className="heroBadge">
          Trusted Partnerships
        </span>

        <h1>Our Partner CEOs</h1>

        <p>
          Meet the visionary leaders and partner companies
          driving innovation together with Klaiv AI.
        </p>

      </section>

      {/* CEO Cards */}

      <section className="ceoGrid">

        <PartnerCard
        name="Arjun Mehta"
        company="CEO • TechNova Solutions"
        text="Partnering with Klaiv AI has streamlined our AI workflows and significantly improved delivery speed."
        />

        <PartnerCard
        name="Priya Sharma"
        company="Founder & CEO • Nexa Labs"
        text="The Klaiv AI team consistently delivers innovative solutions with outstanding technical expertise."
        />

        <PartnerCard
        name="Rahul Verma"
        company="CEO • VisionAI Technologies"
        text="A reliable AI partner that helped us accelerate product development with confidence."
        />

      </section>

      {/* CTA */}

      <section className="ctaSection">

        <h2>Let's Build the Future Together</h2>

        <p>
          Join our growing ecosystem of AI innovators and partner companies.
        </p>

        <button className="ctaButton">
          Become a Partner
        </button>

      </section>

    </div>
  );
}

export default PartnerCEO;