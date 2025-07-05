import './BusinessCard.css';

const BusinessCard = ({ data, onRegenerate }) => {
  if (!data) return null;

  return (
    <div className="business-card">
      <div className="circle-badge">{data.rating}+</div>
      <h3 className="card-title">Reviews</h3>
      <p className="card-headline">{data.headline}</p>
      <button onClick={onRegenerate} className="regen-button">
        Regenerate SEO Headline
      </button>
    </div>
  );
};

export default BusinessCard;
