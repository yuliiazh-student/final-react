import { useState } from 'react';
import useStorage from '../hooks/useStorage';

export default function ContactForm() {
    const { set, get } = useStorage('local');

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setSuccess(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingMessages = get('contact_messages') || [];

        const newMessage = {
            id: Date.now(),
            ...formData,
            date: new Date().toISOString()
        };

        set('contact_messages', [...existingMessages, newMessage]);

        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div style={{ padding: '40px 20px', maxWidth: '400px', margin: '20px auto', background: '#fff', borderRadius: '12px', border: '1px solid #eee' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#213D34' }}>Contact Us</h3>

            {success && (
                <div style={{ color: 'green', backgroundColor: '#e6ffe6', padding: '10px', borderRadius: '6px', marginBottom: '15px', fontSize: '14px', textAlign: 'center' }}>
                    Message saved locally in your browser!
                </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '14px', color: '#555' }}>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '16px' }} />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '14px', color: '#555' }}>
                    Email Address:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '16px' }} />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '14px', color: '#555' }}>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '16px', minHeight: '80px', resize: 'vertical' }}></textarea>
                </label>

                <button type="submit" style={{ padding: '12px', backgroundColor: '#213D34', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
                    Save Message
                </button>
            </form>
        </div>
    );
}
