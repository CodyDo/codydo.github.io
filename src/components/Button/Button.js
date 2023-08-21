import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const styles = ['btn--primary', 'btn--outline'];

const sizes = ['btn--medium', 'btn--large'];

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  linkTo,
}) => {
  const checkButtonStyle = styles.includes(buttonStyle)
    ? buttonStyle
    : styles[0];

  const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];

  const verifyLink = () => {
    let link = '';
    if (linkTo !== undefined) {
      link = linkTo;
    } else {
      link = '/';
    }
    return link;
  };

  return (
    <Link to={verifyLink} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
