import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__item">
          <h1 className="footer__h1">Categories</h1>
          <span className="footer__span">Women</span>
          <span className="footer__span">Men</span>
          <span className="footer__span">Shoes</span>
          <span className="footer__span">Accesories</span>
          <span className="footer__span">New Arrivals</span>
        </div>
        <div className="footer__item">
          <h1 className="footer__h1">Links</h1>
          <span className="footer__span">FAQ</span>
          <span className="footer__span">Pages</span>
          <span className="footer__span">Stores</span>
          <span className="footer__span">Compare</span>
          <span className="footer__span">Cookies</span>
        </div>
        <div className="footer__item">
          <h1 className="footer__h1">About</h1>
          <p className="footer__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nostrum cumque neque quisquam culpa quod in sint deserunt temporibus
            libero. Eum ducimus doloribus ullam iure aspernatur quibusdam iusto,
            molestiae repellat!
          </p>
        </div>
        <div className="footer__item">
          <h1 className="footer__h1">Contact</h1>
          <p className="footer__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vero
            tempore quas nihil quisquam recusandae expedita possimus, reiciendis
            repudiandae consectetur quod similique, hic placeat. Eveniet
            temporibus doloremque numquam non inventore?
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__left">
          <span className="footer__logo">SuperStore</span>
          <span className="footer__copy-right">All rights reserved 2023</span>
        </div>
        <div className="footer__right">
          <img
            className="footer__image"
            src="/img/payment.png"
            alt="payment cards logos"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
