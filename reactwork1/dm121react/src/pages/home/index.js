import React from 'react';
import './styles.css';
import logoHtml from '../../assets/img/logo_html.png';
import logoCss from '../../assets/img/logo_css.png';
import logoJs from '../../assets/img/logo_js.png';

import ButtonSubmit from '../../components/button';

const Home = (props) => {


    function handleSubmit(element){
        element.preventDefault();
        console.log(element)
    }

    return (
        <main id="main-content">
            <section id="showcase" className="flex-container">
                <h1>
                    Inatel DM121
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu luctus ipsum, 
                    rhoncus semper magna. Nulla nec magna sit amet sem interdum condimentum.
                </p>
            </section>

            <section id="newsletter" className="flex-container">
                <h2>
                    Inscreva-se em nossa newsletter
                </h2>
                <form>
                    <input name="email" id="email" type="email" placeholder="Seu Email" />
                    <ButtonSubmit label="Inscreva" onClick={ handleSubmit }/>
                </form>
            </section>

            <section id="box-languages" className="flex-container">
                <div className="box">
                    <img src={ logoHtml } alt="" />
                    <h3>HTML5 Marckup</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
                </div>
                <div className="box">
                    <img src={ logoCss } alt="" />
                    <h3>CSS3 Styling</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
                </div>
                <div className="box">
                    <img src={ logoJs } alt="" />
                    <h3>Javascript</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>
                </div>
            </section>
        </main>
    );
}

export default Home