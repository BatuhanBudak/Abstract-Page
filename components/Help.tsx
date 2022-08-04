import styles from '../styles/Help.module.css';

export default function Help() {
    return (
        <section className={styles.helpSection}
        >
            <h1 className={styles.helpTitle}>How can we help?</h1>
            <form className={styles.mainSearchForm}><input className={styles.mainSearch} type="search" name="main-search" id="main-search" placeholder='Search' /></form>
        </section>
    )
}
