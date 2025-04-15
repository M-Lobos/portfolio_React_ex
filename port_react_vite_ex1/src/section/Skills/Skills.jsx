import styles from "./SkillsStyles.module.css"
import SkillList from "../../common/SkillList"
import checkMarkIcon from "../../assets/checkmark-dark.svg"

function Skills() {
    return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
            <SkillList src={checkMarkIcon} skill="GitHub" />
            <SkillList src={checkMarkIcon} skill="PostgresSQL" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Bootstrap" /> 
            <SkillList src={checkMarkIcon} skill="Node" />  
            <SkillList src={checkMarkIcon} skill="React" />
            <SkillList src={checkMarkIcon} skill="Express" />
            <SkillList src={checkMarkIcon} skill="Tailwind" />
        </div>   
    </section>

    )
}

export default Skills