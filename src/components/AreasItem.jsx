import '../styles/blocks/AreasItem.scss';

export const AreasItem = ({ title, body, backgroundImage }) => (
  <section className="areas-item">
    <div className="areas-item__wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h3 className="areas-item__title">{title}</h3>
      <p className="areas-item__body">{body}</p>
    </div>
  </section>
);
