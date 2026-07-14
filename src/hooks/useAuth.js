import { useState } from "react";
import useStorage from "./useStorage";

export default function useAuth() {
    const [user, setUser] = useState(null);
    const { set, get } = useStorage('local');

    const register = async (username, email, password) => {
        try {
            if (!username || !email || !password) {
                throw new Error('All fields are required.');
            }


            const existingUsers = get('registered_users') || [];
            const alreadyExists = existingUsers.some(u => u.username === username);

            if (alreadyExists) {
                throw new Error('This username is already taken.');
            }

            const newUser = {
                username,
                email,
                password,
                created_at: new Date().toISOString()
            };

            const updatedUsers = [...existingUsers, newUser];
            set('registered_users', updatedUsers);

            const accData = { username, email };
            setUser(accData);

            set('account', accData);
            set('session_id', 'local-session-' + Date.now());

            return { success: true };
        } catch (error) {
            console.error('Registration Error:', error.message);
            return {
                success: false,
                message: error.message || 'An unexpected error occurred during registration.'
            };
        }
    };

    return { user, register };
}
