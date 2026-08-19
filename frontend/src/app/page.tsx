'use client';

import { useEffect, useState } from 'react';

// Tipagem básica baseada no nosso modelo do Prisma
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export default function Home() {
  // ATENÇÃO AQUI: Tipamos o estado como User[] para o TypeScript não dar erro
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Requisição HTTP para o backend
    fetch('http://localhost:3333')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Erro ao buscar usuários:", err));
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Lista de Usuários</h1>

        <ul className="space-y-3">
          {users.length === 0 ? (
            <li className="text-gray-500">Nenhum usuário cadastrado.</li>
          ) : (
            users.map((user) => (
              <li key={user.id} className="p-4 bg-gray-50 border rounded-md">
                <p className="font-semibold text-gray-700">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
                <p className="text-sm text-gray-400">Senha: {user.password}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </main>
  );
}