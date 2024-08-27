import "./Contact.css";
import msg_icon from "/assets/msg-icon.png";
import mail_icon from "/assets/mail-icon.png";
import phone_icon from "/assets/phone-icon.png";
import location_icon from "/assets/location-icon.png";
import white_arrow from "/assets/white-arrow.png";
import React from "react";

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_API_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message sent");
            event.target.reset();
            setTimeout(() => {
                setResult("")
            }, 5000);

        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Kirim Pesan<img src={msg_icon} alt="" /></h3>
                <p>
                Jangan ragu untuk menghubungi kami melalui informasi kontak kami. Pertayaan dan saran anda penting bagi kami karena kami berusaha memberikan layanan yang luar biasa kepada Murid kami.
                </p>
            </div>
            <div className="contact-col">
                <ul>
                    <li><img src={mail_icon} alt="" />ayangnuranita72@guru.sd.belajar.id</li>
                    <li><img src={phone_icon} alt="" />(+62) 857-5390-0268</li>
                    <li><img src={location_icon} alt="" />Kedamin Hilir, Putussibau Selatan, Kabupaten Kapuas Hulu, Kalimantan Barat 78715 <br />
                        Indonesia
                    </li>
                </ul>
                <a href="https://wa.me/6285753900268" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
                    Hubungi Kami di WhatsApp
                </a>
            </div>
        </div>
    );
};

export default Contact;
