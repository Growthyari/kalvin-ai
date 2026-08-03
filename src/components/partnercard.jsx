import ceo from "../assets/ceo.png";

function PartnerCard({ name, company, text }) {
  return (
    <div className="partnerCard">
      <img
        src={ceo}
        alt={name}
        className="ceoImage"
      />

      <h3>{name}</h3>
      <h4>{company}</h4>

      <div className="stars">★★★★★</div>

      <p>{text}</p>
    </div>
  );
}

export default PartnerCard;