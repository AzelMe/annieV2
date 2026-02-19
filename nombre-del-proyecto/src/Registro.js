import {useState} from 'react'

function Registro() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
            //posible por apis 
            console.log("Nombre:", nombre);
            console.log("Apellido:", apellido);
            console.log("Email:", email); 
            console.log("Password:", password);
            console.log("Confirm Password:", confirmPassword);
    };

  return (
    <div style={{ maxWidth: "300px", margin: "auto" }}>
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Apellido:</label>
                <input
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />  
            </div>
            <div>
                <label>Contraseña:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Confirmar Contraseña:</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Registrar</button>
        </form>
    </div>
  );
}

export default Registro;