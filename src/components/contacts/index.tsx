import React from 'react'
import styles from './styles.module.css'

const Contacts: React.FC = () => {
    return (
        <div className={styles.contactInfos}>
            <p>Ou entre em contato diretamente atravéz de nosso whatsApp<br/><span> Valter Freitas <a href="tel:+5512996692580" type="number" target="_blank">(12) 9 9669 2580</a></span></p>
            <button><a href="https://api.whatsapp.com/send?phone=5512996692580&text=Ol%C3%A1%2C%20vi%20o%20seu%20n%C3%BAmero%20no%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20produtos%20e%20servi%C3%A7os" target="_blank"  >WhatsApp</a></button>
        </div>
    )
}
export default Contacts