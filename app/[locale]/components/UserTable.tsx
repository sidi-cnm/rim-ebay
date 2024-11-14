"use client";
import { useState } from "react";
import { FaUser, FaPhone, FaLock, FaRegClock } from "react-icons/fa"; // Import icons for phone, lock, and clock

interface User {
  id: number;
  username: string;
  telephone: string;
  etat: string;
  derniereConnexion: string;
}

const UserTable = () => {
  // Données factices pour les utilisateurs
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      username: "john_doe",
      telephone: "010-1234567",
      etat: "Actif",
      derniereConnexion: "2024-11-13 14:30",
    },
    {
      id: 2,
      username: "jane_smith",
      telephone: "010-7654321",
      etat: "Inactif",
      derniereConnexion: "2024-11-10 10:20",
    },
    {
      id: 3,
      username: "paul_lee",
      telephone: "010-9876543",
      etat: "Actif",
      derniereConnexion: "2024-11-12 08:10",
    },
  ]);

  const toggleEtat = (id: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, etat: user.etat === "Actif" ? "Inactif" : "Actif" } : user
      )
    );
  };

  const resetPassword = (id: number) => {
    alert(`Password reset for user ${id}`); // Placeholder action, you can replace this with real logic
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-6 px-8">
        <h1 className="text-3xl font-bold text-gray-800">User Management</h1>
        <p className="text-lg text-gray-600 mb-4">Manage and view your users</p>

        {/* Tableau des utilisateurs */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Username</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Telephone</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Etat</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Dernière Connexion</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-3 text-sm text-gray-700">{user.username}</td>
                  <td className="px-6 py-3 text-sm text-gray-700">{user.telephone}</td>
                  <td className="px-6 py-3 text-sm text-gray-700">{user.etat}</td>
                  <td className="px-6 py-3 text-sm text-gray-700">{user.derniereConnexion}</td>
                  <td className="px-6 py-3 text-sm text-gray-700">
                    <button
                      onClick={() => toggleEtat(user.id)}
                      className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 mr-2"
                    >
                      {user.etat === "Actif" ? "Désactiver" : "Activer"}
                    </button>
                    <button
                      onClick={() => resetPassword(user.id)}
                      className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                    >
                      Réinitialiser le mot de passe
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
