import '../styles/blocks/AudienceCard.scss';

export const AudienceCard = ({ title, description }) => (
  <div className="audience-card">
    <h3 className="audience-card__title">{title}</h3>

    <p className="audience-card__description">{description}</p>
  </div>
);
