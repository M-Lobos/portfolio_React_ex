import styles from "./ProjectStyles.module.css";
import viberr from "../../assets/viberr.png"
import freshBurger from "../../assets/fresh-burger.png"
import hipsster from "../../assets/hipsster.png"
import ProjectCard from "../../common/ProjectCard";
import fitLift from "../../assets/fitlift.png"

function Projects(){
    return(
        <section id="projects" className={styles.container}>
            
            <h1 className="sectionTitle">Projects</h1>

            <div className={styles.projectsContainer}>
                <ProjectCard 
                    src={viberr} 
                    link="#"
                    h3="Viberr"
                    p="A social media platform for music lovers, allowing users to share and discover new music."   
                />

                <ProjectCard 
                    src={freshBurger} 
                    l
                    ink="#"
                    h3="FreshBurger"
                    p="A web application for a burger restaurant, allowing users to order food online."   
                />

                <ProjectCard 
                    src={hipsster} 
                    link="#"
                    h3="Hipsster"
                    p="A web application for a burger glasses store online."   
                />

                <ProjectCard 
                    src={fitLift} 
                    link="#"
                    h3="FitLift"
                    p="A Fitness style of life appb."   
                />
                
            </div>
        </section>
    )
}

export default Projects;