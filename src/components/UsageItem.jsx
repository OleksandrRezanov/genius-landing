import '../styles/blocks/UsageItem.scss';

export const UsageItem = ({ title, body, backgroundImage }) => (
  <section className="usage-item">
    <h3 className="usage-item__title" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {title}
    </h3>

    <p className="usage-item__body">{body}</p>
  </section>
);
