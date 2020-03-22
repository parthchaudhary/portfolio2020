import React, { useEffect } from 'react';
import profile from '../../img/profile-pic.png';
import nameLetter from '../../img/name-letters.svg';

const Home = () => {
    useEffect(() => {
        // header height
        const headerHeight = () => {
            let headerHeightVal = document.querySelector('.dd-header').clientHeight;
            document.querySelector('.home').style.setProperty("--header-height", headerHeightVal + 'px');
        }

        setTimeout(() => {
            headerHeight();
        }, 1000);

        window.addEventListener('resize', headerHeight);
    });
    return (
        <section className="home">
            <div className="container home__container">
                <div className="row">
                    <div className="col-md-7 order-md-2">
                        <div className="home__figure">
                            <img src={profile} alt="profil-image" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="home__detail">
                            <h1>Darshan Dave</h1>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti et doloribus
                                architecto enim quaerat nesciunt
                                reiciendis repellat sit nullaration
                                quidem ullam, ex, doloremque
                                possimus consequatur quis.
                                Possimus, enim
                                numquam!
                            </p>
                            <a href="#" className="btn btn-primary btn-lg">My Works</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="name__letter text-center">
                <img src={nameLetter} alt="namelatter" className="img-fluid" />
            </div>
        </section>
    )
}

export default Home

