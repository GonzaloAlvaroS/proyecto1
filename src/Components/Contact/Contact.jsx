import React from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "afb6c939-ba2d-4b30-8824-20ecf958a881");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (
    <div className='contact'>
      <div className="contact-col">
      <h3>Mandamos un email con tus sugerencias <img src={msg_icon} alt="" /></h3>
      <p>Nos proponemos a ir mejorando y actualizando la pagina con nueva informacion acerca de Jujutsu Kaisen, asi que si tienes alguna sugerencia para mejorar la pagina estamos mas que agradecidos en aceptarla.</p>
   <ul>
    <li><img src={mail_icon} alt="" />jujutsuK@gmail.com</li>
    <li><img src={phone_icon} alt="" />+81 999999999</li>
    <li><img src={location_icon} alt="" />Av. La Paz 1420, San Miguel</li>
   </ul>
   </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Tu nombre</label>
            <input type="text" name='name' placeholder='Ingresa tu nombre' required/>
            <label>Numero de telefono</label>
            <input type="tel" name='phone' placeholder='Ingresa tu numero' required/>
            <label>Escribe tus sugerencias aqui</label>
            <textarea name="message" rows="6" placeholder='Ingresa tu mensaje' required></textarea>
            <button type='submit' className='btn dark-btn'>Mandar <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
      </div>
  
  )
}

export default Contact
