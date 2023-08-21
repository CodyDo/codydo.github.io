import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link
          className="cards__item__link"
          to={{ pathname: props.path }}
          target="_blank"
        >
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="Project"
              title={props.title}
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h3 className="cards__item__title">{props.title}</h3>
            <h5 className="cards__item__text">{props.text}</h5>
            {props.gameLink ? (
              <a
                className="icon-link-wrapper"
                href="https://codydo.github.io/doodle-jump"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', marginTop: '2%' }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16 12L10 16.3301V7.66987L16 12Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            ) : null}
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
