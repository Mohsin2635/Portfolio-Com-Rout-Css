import styles from './service.module.css';
const Services = () => {
  return (
    <>
      <div className={styles.service_cont}>
        <h1 className={styles.service_heading1}>
          My Services
        </h1>
        <div className={styles.service_content}>
          <div className={styles.box}>
            <h2 className={styles.box_heading2}>
              Web Development
            </h2>
            <p className={styles.box_pera}>
              I specialize in creating responsive, and dynamic websites
              tailored to yours needs.
            </p>
            <span className={styles.box_span}>
              Learn more
            </span>
          </div>
          <div className={styles.box}>
            <h2 className={styles.box_heading2}>
              UI/UX Design
            </h2>
            <p className={styles.box_pera}>
              craft visually appealing and user-friendly interfaces for your
              projects.
            </p>
            <span className={styles.box_span}>
              Learn more
            </span>
          </div>
          <div className={styles.box}>
            <h2 className={styles.box_heading2}>
              SEO Optimization
            </h2>
            <p className={styles.box_pera}>
              optimize your website to rank higher on search engines, increase
              traffic and improve performance.
            </p>
            <span className={styles.box_span}>
              Learn more
            </span>
          </div>
          <div className={styles.box}>
            <h2 className={styles.box_heading2}>
              Web Hosting
            </h2>
            <p className={styles.box_pera}>
              host your website on a secure and fast server.
            </p>
            <span className={styles.box_span}>
              Learn more
            </span>
          </div>
          <div className={styles.box}>
            <h2 className={styles.box_heading2}>
              Maintenence
            </h2>
            <p className={styles.box_pera}>
              Keep your website up to date and secure.
            </p>
            <span className={styles.box_span}>
              Learn more
            </span>
          </div>
          <div className={styles.box}>
            <h2 className={styles.box_heading2}>
              E-Commerce
            </h2>
            <p className={styles.box_pera}>
              Build an online store to sell your products.
            </p>
            <span className={styles.box_span}>
              Learn more
            </span>
          </div>
        </div>
      </div>

    </>
  );
};

export default Services;
