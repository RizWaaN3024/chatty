import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const { login, isLoggingIn } = useAuthStore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        login(formData);
    }
    return (
        <div>

        </div>
    )
}

export default LoginPage
