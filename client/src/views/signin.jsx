import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const validCredentials = [
        { email: 'nil@halic.com', password: '123Selam' },
        { email: 'faruk@halic.com', password: '123Selam' },
        { email: 'necati@halic.com', password: '123Selam' },
        { email: 'izem@halic.com', password: '123Selam' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validCredentials.some(
            (cred) => cred.email === email && cred.password === password
        );
        if (isValid) {
            setIsSignedIn(true);
            setError(false);
            setEmail('');
            setPassword('');
            navigate('/konut-kredisi'); // Redirect to 'konut-kredisi' page
        } else {
            setIsSignedIn(false);
            setError(true);
        }
    };

    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="max-w-md w-full bg-gray-800 rounded-lg p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-8 text-center">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="form-input w-full appearance-none bg-gray-700 border border-gray-600 focus:border-gray-500 rounded-sm px-4 py-3 text-white placeholder-gray-500" 
                            placeholder="Your email…" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-400 mb-2" htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="form-input w-full appearance-none bg-gray-700 border border-gray-600 focus:border-gray-500 rounded-sm px-4 py-3 text-white placeholder-gray-500" 
                            placeholder="Your password…" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="w-full btn text-white bg-blue-600 hover:bg-blue-700 shadow">Sign In</button>
                </form>
                {error && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg p-8">
                            <p className="text-lg">Tekrar deneyiniz!</p>
                            <button 
                                onClick={() => setError(false)} 
                                className="mt-4 btn bg-red-600 text-white hover:bg-red-700"
                            >
                                Kapat
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default SignIn;
