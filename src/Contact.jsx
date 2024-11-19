import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const contactData = { name, email, message };

    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', contactData);
      alert('Pesan Anda telah terkirim!');
    } catch (error) {
      alert('Ada masalah dengan pengiriman pesan.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Kontak Kami</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nama</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Pesan</label>
          <textarea
            id="message"
            className="form-control"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
