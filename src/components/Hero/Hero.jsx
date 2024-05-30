import './Hero.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import {faFacebook} from '@fortawesome/free-solid-svg-icons';


export default function Hero() {
    return (
        <div className='heroSection'>
            <div className='hero'>
                <div className="heroText">
                    <h2>Hey !! Mario still here, But don’t forget that</h2>
                    <p>At focal X agency, we are working to build something different. Here you’ll have a group of creative people who specialize in:
                        Branding, Digital Marketing, Web/App Development, Ui/Ux
                        Content creation, Graphic design, Social media and More........
                        So you can take a tour in our website, OR just <b>Press Start :)</b></p>
                </div>
                <div className="heroImg">
                    <img src="./../../../public/image/gameBoy-min.png" alt="game boy image" />   
                </div>
            </div>
            <div className="heroFooter">
                <ul className="social">
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                </ul>
                <p>© 2021 - 2022 focal X agency All Right Reserved</p>
            </div>
        </div>
    )
}
