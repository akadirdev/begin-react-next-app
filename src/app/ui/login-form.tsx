'use client';

import React from 'react';
import './login-form.css';

import { useRouter } from 'next/navigation';

export function LoginForm() {
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    console.log('login-mail: ', formData.get('email'));
    console.log('login-paswd: ', formData.get('password'));

    // check auth
    const authOk = true;

    // redirect to dashboard
    if (authOk) {
      router.push('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required />
        </div>
        <button
          type="submit"
          className="login-button"
          formAction={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
}
