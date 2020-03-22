import React from 'react'

function AboutCard(itemDetails) {
    return (
        <div className="col-md-6">
            <div className="about-card">
                <h3 className="about-card__year">{itemDetails.year}</h3>
                <h2 className="about-card__name">Infibeam Avanues</h2>
                <p className="about-card__desc">
                    Lorem ipsum dolor sit, amet consect adipisicing elit. Corrupti et doloribus
                    architecto enim quaerat nesci reicis repellat sit nullaration quidem ulla ex, doloremque possimus conseq quis. Possimus, enim numquam!
                </p>
                <label className="about-card__tech">BuildBazzar</label>
            </div>
        </div>
    )
}

export default AboutCard

