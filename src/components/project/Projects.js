import React from 'react';
import ProjectItem from './ProjectItme';

function Projects() {
    return (
        <section className="project dd-sec bg--light">
            <div className="container">
                <h1 className="dd-sec__title">Projects</h1>
                <div className="row">
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                </div>
            </div>
        </section>
    )
}

export default Projects

