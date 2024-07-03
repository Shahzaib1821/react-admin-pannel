import React from "react";
import { GeneralLayout } from "../../layouts"; 

function Main() {
  const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "User",
    },
    { id: 3, name: "Jim Brown", email: "jim.brown@example.com", role: "Guest" },
  ];

  const companyInfo = {
    revenue: "$1,000,000",
    employees: 500,
    foundedYear: 2005,
  };

  const dummyChartData = [10, 20, 30, 40, 50, 60, 70];

  return (
    <GeneralLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Users</h2>
            <p className="text-gray-600">Total users: 1000</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Company Information</h2>
            <p className="text-gray-600">Company revenue: $1,000,000</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Other</h2>
            <div className="flex justify-center">
            </div>
          </div>

          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-5">
            

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Users</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {user.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Finance Queries</h2>
            <div className="flex justify-center">
              <p className="text-gray-600">
                Finance queries content goes here...
              </p>
              
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Accountancy Queries</h2>
            <div className="flex justify-center">
              <p className="text-gray-600">
                Accountancy queries content goes here...
              </p>
            </div>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

export default Main;
