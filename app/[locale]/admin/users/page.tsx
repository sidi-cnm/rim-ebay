// /app/admin/users/page.tsx

import UserTable from "../../components/UserTable"; // Importez le composant pour afficher les utilisateurs

interface UserPageProps {
  params: { locale: string }; // Déclarez le paramètre de langue
}

const UserPage = async ({ params }: UserPageProps) => {

  const { locale } = params
  try {
    // Faites la requête vers l'API côté serveur
    const res = await fetch(`http://localhost:3000/${locale}/api/user`);  // Changez l'URL si nécessaire
    const users = await res.json();  // Récupérez les données au format JSON

    return (
      <div className="min-h-screen bg-gray-100">
        <div className="py-28 px-14">
          <div className="text-2xl font-bold text-gray-800 uppercase mb-6">User Management</div>
          <UserTable users={users} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
    return (
      <div>Error: Unable to fetch users.</div>
    );
  }
};

export default UserPage;
