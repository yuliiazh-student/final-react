import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function RegistrationForm() {
    const { register } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });


    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }


        const result = await register(username, email, password);

        if (result.success) {
            setSuccess(true);
            setError('');
            setFormData({ username: '', email: '', password: '', confirmPassword: '' });


            setTimeout(() => {
                navigate('/');
            }, 2000);
        } else {
            setError(result.message);
        }
    };

    return (
        <div style={{ padding: '40px 20px', maxWidth: '400px', margin: '40px auto', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#213D34' }}>Sign Up</h2>

            {error && <div style={{ color: 'red', backgroundColor: '#ffe6e6', padding: '10px', borderRadius: '6px', marginBottom: '15px', fontSize: '14px', textAlign: 'center' }}>{error}</div>}
            {success && <div style={{ color: 'green', backgroundColor: '#e6ffe6', padding: '10px', borderRadius: '6px', marginBottom: '15px', fontSize: '14px', textAlign: 'center' }}>Registration successful! Redirecting...</div>}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '14px', color: '#555' }}>
                    Username:
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '16px' }} />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '14px', color: '#555' }}>
                    Email Address:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '16px' }} />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '14px', color: '#555' }}>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '16px' }} />
                </label>

                <label style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '14px', color: '#555' }}>
                    Confirm Password:
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '16px' }} />
                </label>

                <button type="submit" style={{ padding: '12px', backgroundColor: '#213D34', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px', transition: 'background 0.2s' }}>
                    Register
                </button>
            </form>
        </div>
    );
}
