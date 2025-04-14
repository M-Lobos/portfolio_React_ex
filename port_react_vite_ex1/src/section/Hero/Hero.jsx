import styles from './HeroStyles.module.css';
import HeroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterIcon from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/cv.pdf'; 
import { UseTheme } from '../../common/ThemeContext.jsx'; // Import the theme context

function Hero() {

    const { theme, toggleTheme }  = UseTheme(); // Get the current theme from the context

    const themeIcon = theme === 'light' ? sun : moon;  

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.ColorModeContainer}>
                <img 
                    className={styles.hero} 
                    src={HeroImg} 
                    alt="Web Dev profile p" 
                />
                <img
                    className={styles.ColorMode}
                    src={themeIcon} 
                    alt="Color mode icon" 
                    onClick={toggleTheme} // Toggle theme on click
                />
            </div>
            <div className={styles.info}>
                <h1>Harris 
                    <br /> 
                    Jhonson
                </h1>
                <h2>
                    Frontend developer
                </h2>
                <span>
                    <a 
                        href="https://twitter.com" 
                        target='_blank'>
                        <img src={twitterIcon} alt="twitter icon" />    
                    </a>
                    <a 
                        href="https://github.com" 
                        target='_blank'>
                        <img src={githubIcon} alt="Github icon" />    
                    </a>
                    <a 
                        href="https://linkedin.com" 
                        target='_blank'>
                        <img src={linkedinIcon} alt="Linkedin icon" />    
                    </a>
                    <p>With a passion for developing modern React apps for commercial businesess</p>
                    <a href={CV} download >
                        <button className='hover' >
                            Resume
                        </button>
                    </a>
                </span>
            </div>
        </section>
    );
}

export default Hero;

