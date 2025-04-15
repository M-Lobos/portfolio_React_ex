import styles from './FooterStyles.module.css'

function Footer() {
    return (
        <section id='footer' className={styles.container}>
            <p>&copy; 2025 Harris Johnsen. <br />
                all rights reserved. <br />
            </p>
        </section>
    )
}

export default Footer