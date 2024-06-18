import React from "react";
import styles from './Temu.module.css';
import TemuLogo from '../../assets/images/TemuLogo.webp';
import Temu1 from '../../assets/images/Temu1.webp';
import Temu2 from '../../assets/images/Temu2.webp';
import Temu3 from '../../assets/images/Temu3.webp';
import GoogleReviews from "../../components/google-reviews/GoogleReviews";
import Temu4 from '../../assets/images/Temu4.webp';
import Faq from 'react-faq-component';
import Logo from '../../assets/images/logo.webp';

function Temu() {
    const data = {
        rows: [
          {
            title: "Lorem ipsum dolor sit amet?",
            content: "Morbi luctus, tellus a tempus laoreet, nisl metus tempus erat, nec finibus nibh turpis id nunc. Mauris luctus elit a nulla convallis consequat. Pellentesque mollis aliquam tortor eget pretium. Fusce eu orci faucibus, rhoncus nisi at, ultrices nibh. Sed ut risus sed erat blandit ultricies. Aliquam quis tellus eu dolor rutrum lobortis. Nullam eu facilisis libero, quis sodales turpis."
          },
          {
            title: "Consectetur adipiscing elit?",
            content: "Morbi luctus, tellus a tempus laoreet, nisl metus tempus erat, nec finibus nibh turpis id nunc. Mauris luctus elit a nulla convallis consequat. Pellentesque mollis aliquam tortor eget pretium. Fusce eu orci faucibus, rhoncus nisi at, ultrices nibh. Sed ut risus sed erat blandit ultricies. Aliquam quis tellus eu dolor rutrum lobortis. Nullam eu facilisis libero, quis sodales turpis."
          },
          {
            title: "Nam eros ipsum, rhoncus quis lacus vel?",
            content: "Morbi luctus, tellus a tempus laoreet, nisl metus tempus erat, nec finibus nibh turpis id nunc. Mauris luctus elit a nulla convallis consequat. Pellentesque mollis aliquam tortor eget pretium. Fusce eu orci faucibus, rhoncus nisi at, ultrices nibh. Sed ut risus sed erat blandit ultricies. Aliquam quis tellus eu dolor rutrum lobortis. Nullam eu facilisis libero, quis sodales turpis."
          },
          {
            title: "Vehicula consequat ipsum?",
            content: "Morbi luctus, tellus a tempus laoreet, nisl metus tempus erat, nec finibus nibh turpis id nunc. Mauris luctus elit a nulla convallis consequat. Pellentesque mollis aliquam tortor eget pretium. Fusce eu orci faucibus, rhoncus nisi at, ultrices nibh. Sed ut risus sed erat blandit ultricies. Aliquam quis tellus eu dolor rutrum lobortis. Nullam eu facilisis libero, quis sodales turpis."
          },
          {
            title: "Sed sit amet euismod dolor, et varius urna?",
            content: "Morbi luctus, tellus a tempus laoreet, nisl metus tempus erat, nec finibus nibh turpis id nunc. Mauris luctus elit a nulla convallis consequat. Pellentesque mollis aliquam tortor eget pretium. Fusce eu orci faucibus, rhoncus nisi at, ultrices nibh. Sed ut risus sed erat blandit ultricies. Aliquam quis tellus eu dolor rutrum lobortis. Nullam eu facilisis libero, quis sodales turpis."
          },
          {
            title: "Ut odio lacus, venenatis eu nunc nec?",
            content: "Morbi luctus, tellus a tempus laoreet, nisl metus tempus erat, nec finibus nibh turpis id nunc. Mauris luctus elit a nulla convallis consequat. Pellentesque mollis aliquam tortor eget pretium. Fusce eu orci faucibus, rhoncus nisi at, ultrices nibh. Sed ut risus sed erat blandit ultricies. Aliquam quis tellus eu dolor rutrum lobortis. Nullam eu facilisis libero, quis sodales turpis."
          },
          {
            title: "Convallis imperdiet sapien. Sed sem elit, ullamcorper ac lacus at?",
            content: "Morbi luctus, tellus a tempus laoreet, nisl metus tempus erat, nec finibus nibh turpis id nunc. Mauris luctus elit a nulla convallis consequat. Pellentesque mollis aliquam tortor eget pretium. Fusce eu orci faucibus, rhoncus nisi at, ultrices nibh. Sed ut risus sed erat blandit ultricies. Aliquam quis tellus eu dolor rutrum lobortis. Nullam eu facilisis libero, quis sodales turpis."
          },
          {
            title: "Finibus aliquam mauris. Duis fringilla viverra nulla?",
            content: "Morbi luctus, tellus a tempus laoreet, nisl metus tempus erat, nec finibus nibh turpis id nunc. Mauris luctus elit a nulla convallis consequat. Pellentesque mollis aliquam tortor eget pretium. Fusce eu orci faucibus, rhoncus nisi at, ultrices nibh. Sed ut risus sed erat blandit ultricies. Aliquam quis tellus eu dolor rutrum lobortis. Nullam eu facilisis libero, quis sodales turpis."
          },
          {
            title: "A imperdiet nulla imperdiet eget?",
            content: "Morbi luctus, tellus a tempus laoreet, nisl metus tempus erat, nec finibus nibh turpis id nunc. Mauris luctus elit a nulla convallis consequat. Pellentesque mollis aliquam tortor eget pretium. Fusce eu orci faucibus, rhoncus nisi at, ultrices nibh. Sed ut risus sed erat blandit ultricies. Aliquam quis tellus eu dolor rutrum lobortis. Nullam eu facilisis libero, quis sodales turpis."
          },
          {
            title: "Tempor eget sapien. Donec pretium id augue vitae eleifend?",
            content: "Morbi luctus, tellus a tempus laoreet, nisl metus tempus erat, nec finibus nibh turpis id nunc. Mauris luctus elit a nulla convallis consequat. Pellentesque mollis aliquam tortor eget pretium. Fusce eu orci faucibus, rhoncus nisi at, ultrices nibh. Sed ut risus sed erat blandit ultricies. Aliquam quis tellus eu dolor rutrum lobortis. Nullam eu facilisis libero, quis sodales turpis."
          },
        ]
    }

    const stylesFaq = {
        rowTitleColor: '#333',
        rowTitleTextSize: '17px',
        rowContentColor: '#333',
        rowContentTextSize: '15px',
    };
    
    const config = {
        animate: true,
        tabFocus: true
    };

    return (
        <div className={styles.container}>
            <section className={styles.temuSection}>
                <div>
                    <div>
                        <h1>Lorem ipsum dolor</h1>
                        <h2>Nam eros ipsum, rhoncus quis lacus vel.</h2>
                        <p>Ut odio lacus, venenatis eu nunc nec, convallis imperdiet sapien. Sed sem elit, ullamcorper ac lacus at, finibus aliquam mauris. Nulla euismod suscipit urna eu tempus. Integer ac faucibus orci, id ornare ex.</p>

                        <a href="#" rel="noreferrer" className={styles.btn}>CONFIRA OS PREÇOS</a>
                        <span>Mauris luctus elit a nulla convallis consequat.</span>
                    </div>

                    <div>
                        <img src={TemuLogo} alt="temu logo" />
                    </div>
                </div>
            </section>


            <section className={styles.temuSection}>
                <div>
                    <div className={styles.rows}>
                        <div className={styles.rowsImg}>
                            <img src={Temu1} />
                        </div>

                        <div>
                            <h3>Phasellus at elit at nisi vestibulum</h3>
                            <p>Duis nisl dolor, blandit ac blandit at, rutrum accumsan est. Sed non venenatis mauris. Ut suscipit viverra ante vel finibus. Ut dapibus, metus vel dapibus scelerisque, ante erat elementum quam, vitae consequat odio lorem et lectus.</p>
                        </div>
                    </div>

                    <div className={styles.rows}>
                        <div>
                            <h3>Phasellus at elit at nisi vestibulum</h3>
                            <p>Duis nisl dolor, blandit ac blandit at, rutrum accumsan est. Sed non venenatis mauris. Ut suscipit viverra ante vel finibus. Ut dapibus, metus vel dapibus scelerisque, ante erat elementum quam, vitae consequat odio lorem et lectus.</p>
                        </div>

                        <div className={styles.rowsImg}>
                            <img src={Temu2} />
                        </div>
                    </div>

                    <div className={styles.rows}>       
                        <div className={styles.rowsImg}>
                            <img src={Temu3} />
                        </div>

                        <div>
                            <h3>Phasellus at elit at nisi vestibulum</h3>

                            <p>Duis nisl dolor, blandit ac blandit at, rutrum accumsan est. Sed non venenatis mauris. Ut suscipit viverra ante vel finibus. Ut dapibus, metus vel dapibus scelerisque, ante erat elementum quam, vitae consequat odio lorem et lectus.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className={`${styles.temuSection} ${styles.temuReviews}`}>
                <div>
                    <h2>
                        Confira depoimentos de quem já
                        <span> vende de fornecedores nacionais</span>
                    </h2>
                    <GoogleReviews/>
                </div>
            </section>


            <section className={styles.temuSection}>
                <div>
                    <div>
                        <h2>Lorem ipsum dolor</h2>
                        <p>Ut odio lacus, venenatis eu nunc nec, convallis imperdiet sapien. Sed sem elit, ullamcorper ac lacus at, finibus aliquam mauris. Nulla euismod suscipit urna eu tempus. Integer ac faucibus orci, id ornare ex.</p>

                        <a href="#" rel="noreferrer" className={styles.btn}>CONFIRA OS PREÇOS</a>
                    </div>

                    <div>
                        <img src={Temu4} />
                    </div>
                </div>
            </section>


            <section className={styles.temuSection}>
                <div>
                    <h2>Ainda tem dúvidas sobre fornecedores nacionais?</h2>
                    <h3>Confira uma lista das principais dúvidas que recebemos</h3>

                    <div className={styles.temuFaq}>
                        <Faq data={data} styles={stylesFaq} config={config} />
                    </div>
                </div>
            </section>


            <section className={styles.temuSection}>
                <div>
                    <div>
                        <img src={Logo} />
                    </div>

                    <div>
                        <h3>Mauris luctus elit a nulla convallis consequat. Pellentesque mollis aliquam tortor eget pretium. Fusce eu orci faucibus, rhoncus nisi at, ultrices nibh. Sed ut risus sed erat blandit ultricies. Aliquam quis tellus eu dolor rutrum lobortis. Nullam eu facilisis libero, quis sodales turpis.</h3>
                    </div>

                    <div>
                        <a href="#" rel="noreferrer" className={styles.btn}>CONFIRA OS PREÇOS</a>
                    </div>

                    <div className={styles.copy}>
                        <p>© 2024 Goodds - Todos os direitos reservados</p>
                    </div>  
                </div>
            </section>
        </div>
    )
}

export default Temu;