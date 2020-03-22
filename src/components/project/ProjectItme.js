import React from 'react';
import ProjectImg from '../../img/aayan-solution.jpg';

export default function ProjectItme() {
    return (
        <div className="col-sm-6">
            <div className="project-item project-item--hover">
                <a href="#" className="project-item__link">
                    <div className="project-item__image">
                        <img src={ProjectImg} alt="" className="img-fluid project-item__img" />
                    </div>
                    <div className="profile-item__desc">
                        <h2 className="profile-item__name">Project Name</h2>
                    </div>
                </a>
            </div>
        </div>
    )
}
