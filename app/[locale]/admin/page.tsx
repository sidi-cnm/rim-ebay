import React from 'react';
import SideNavigation from '../components/SideNavigation';
import UserTable from '../components/UserTable';

export default function Admin() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Side Navigation */}
      <div className="w-64 bg-gray-800 text-white">
        <SideNavigation />
      </div>

      {/* Main Content (User Table) */}
      <div className="flex-1 p-8">
        <UserTable />
      </div>
    </div>
  );
}
