import React, { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nom requis.";
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) newErrors.email = "Email invalide.";
    if (!formData.phone.match(/^[0-9]{8,15}$/)) newErrors.phone = "Téléphone invalide.";
    if (!formData.message.trim()) newErrors.message = "Message requis.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("✅ Message envoyé !");
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2 className="contact-title">📩 Contactez-nous</h2>
        <p className="contact-subtitle">Nous sommes ravis de vous lire. Remplissez le formulaire ci-dessous :</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Nom complet</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Numéro de téléphone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit" className="contact-btn">✉️ Envoyer le message</button>
        </form>
      </div>
    </section>
  );
}
