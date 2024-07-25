import styles from './header.module.css';

const Header = ({
    title
}) => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerContent}>
                <div className={styles.headerTitleWrapper}>
                    <h1 className={styles.headerTitle}>{title}</h1>
                    <h2 className={styles.headerSubtitle}>Software Engineer</h2>
                </div>
                <div className={styles.headerMenuItems}>
                    <a href="#blog" className={styles.headerMenuItem}>Blog</a>
                    <a href="#about" className={styles.headerMenuItem}>About</a>
                    <a href="#projects" className={styles.headerMenuItem}>Projects</a>
                    <a href="#contact" className={styles.headerMenuItem}>Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
