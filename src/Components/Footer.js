import React from 'react';
import './Footer.css'
import whatsappIcon from './img/WA.png'
import telegramIcon from './img/TG.png'
import emailIcon from './img/mail.png'

// Создаем функциональный компонент Footer
function Footer() {
  return (
    <footer>
      <div className="footer-content">
     
 {/*Добавляем ссылки на социальные сети */}
        <div className="social-icons">
          <a href="https://wa.me/номер_телефона" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" style={{ width: 50, height: 50 }} />
          </a>
          <a href="https://t.me/имя_пользователя" target="_blank" rel="noopener noreferrer">
            <img src={telegramIcon} alt="Telegram" style={{ width: 50, height: 50 }} />
          </a>
          <a href="mailto:адрес_почты" target="_blank" rel="noopener noreferrer">
            <img src={emailIcon} alt="Email" style={{ width: 50, height: 50 }}/>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;