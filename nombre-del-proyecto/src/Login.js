import { useState } from "react";   

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
         //posible por apis
         console.log("Email:", email);
         console.log("Password:", password);
    };

    return (
        