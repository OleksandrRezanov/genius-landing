import classNames from "classnames";
import '../styles/blocks/PrimaryButton.scss';

export const PrimaryButton = ({ title, type, handleClick }) => (
  <div
    onClick={handleClick}
    className={classNames('button', {
      'button--header': type === 'header',
      'button--purple': type === 'purple',
    })}>
    {title}
  </div>
);
