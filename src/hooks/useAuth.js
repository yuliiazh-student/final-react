import { useState } from "react"
import useStorage from "./useStorage"
import { useGeneralStorage } from "../storage"

export default function useAuth() {
    const [user, setUser] = useState(null)
    const { set, get } = useStorage('local')
    const setIsAuth = useGeneralStorage((state) => state.setIsAuth)

    const register = async (username, email, password) => {
        try {
            if (!username || !email || !password) {
                throw new Error('Усі поля є обов’язковими для заповнення.');
            }

            // Перевіряємо, чи користувач із таким іменем вже існує
            const existingUsers = get('registered_users') || [];
            const alreadyExists = existingUsers.some(u => u.username === username);

            if (alreadyExists) {
                throw new Error('Це ім’я користувача вже зайняте.');
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
            setIsAuth(true);

            return { success: true };
        } catch (error) {
            console.error('Помилка реєстрації:', error.message);
            return {
                success: false,
                message: error.message || 'Сталася непередбачувана помилка під час реєстрації.'
            };
        }
    };

    return { user, register }
}
