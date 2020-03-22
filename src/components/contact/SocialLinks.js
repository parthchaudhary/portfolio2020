import React from 'react';
import iconBehance from '../../img/icon-behance.svg';
import iconGit from '../../img/icon-git.svg';
import iconLinkedin from '../../img/icon-linkedin.svg';
import iconCodepen from '../../img/icon-codepen.svg';
import iconDribble from '../../img/icon-dribble.svg';

export default function SocialLinks() {
    return (
        <div className="social-links">
            <ul className="list-inline">
                <li className="list-inline-item">
                    <a href="#" className="social-links__item social-links__item--hover">
                        <img src={iconDribble} alt="" className="social-links__item__img" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#" className="social-links__item social-links__item--hover">
                        <img src={iconGit} alt="" className="social-links__item__img" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#" className="social-links__item social-links__item--hover">
                        <img src={iconCodepen} alt="" className="social-links__item__img" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#" className="social-links__item social-links__item--hover">
                        <img src={iconLinkedin} alt="" className="social-links__item__img" />
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#" className="social-links__item social-links__item--hover">
                        <img src={iconBehance} alt="" className="social-links__item__img" />
                    </a>
                </li>
            </ul>
        </div>
    )
}
