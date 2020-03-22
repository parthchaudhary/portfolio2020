import React from 'react';
import skillHtml from '../../img/skill-html.svg'

function Skill() {
    return (
        <div className="col-md-3 col-sm-4 col-6">
            <div className="skill-item">
                <div className="skill-item__icon">
                    <img src={skillHtml} alt="" />
                </div>
                <label className="skill-item__label">HTML</label>
            </div>
        </div>
    )
}

export default Skill

