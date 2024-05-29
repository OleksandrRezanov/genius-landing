import '../styles/blocks/ExpectationsItem.scss';

export const ExpectationsItem = ({ title, body, backgroundImage }) => (
  <section className="expectations-item">
    <div className="expectations-item__wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h3 className="expectations-item__title">{title}</h3>
      <p className="expectations-item__body">{body}</p>
    </div>
  </section>
);
