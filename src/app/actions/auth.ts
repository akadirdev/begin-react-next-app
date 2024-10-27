'use client';

export async function login(formData: FormData) {
  console.log('login-mail: ', formData.get('email'));
  console.log('login-paswd: ', formData.get('password'));
}
