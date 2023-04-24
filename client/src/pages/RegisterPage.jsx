import { useState } from "react";
import {Link} from "react-router-dom";

export default function RegisterPage() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    function registerUser() {
    }
    return (
      <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-64">
        <h1 className="text-4xl text-center mb-4 text-orange-700">Sign Up!</h1>
        <form className="max-w-md mx-auto " onSubmit={registerUser}>
          <input type="text" 
          placeholder="Jane Doe" 
          value={name} 
          onChange={ev =>setName(ev.target.value)} />

          <input type="email" 
          placeholder="Your@email.com"
          value={email} 
          onChange={ev =>setEmail(ev.target.value)} />

          <input type="password" 
            placeholder="Password" 
            value={password} 
            onChange={ev =>setPassword(ev.target.value)} />

          <button className="login">Login</button>
          <div className="text-center py-2 text-gray-500">
            Already a Member? <Link className="underline text-black" to={'/login'}>Login</Link>
          </div>
        </form>
        </div>

      </div>
    );
}
 