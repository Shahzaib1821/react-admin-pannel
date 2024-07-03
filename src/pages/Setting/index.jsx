import React from 'react';
import { GeneralLayout } from '../../layouts'; // Import your layout component

function SettingsPage() {
  // Define state variables for managing form inputs
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  // Function to handle form submission for changing password
  const handleChangePassword = (e) => {
    e.preventDefault();
    // Implement logic to change password (e.g., call API)
    console.log('Changing password...');
    console.log('Current Password:', password);
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);
    // Reset form fields or show success message
  };

  // Function to handle form submission for updating email
  const handleUpdateEmail = (e) => {
    e.preventDefault();
    // Implement logic to update email (e.g., call API)
    console.log('Updating email...');
    console.log('New Email:', email);
    // Reset form fields or show success message
  };

  return (
    <GeneralLayout>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        {/* Change Password Form */}
        <form onSubmit={handleChangePassword} className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Change Password</h2>
          <div className="mb-4">
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current Password</label>
            <input type="password" id="currentPassword" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
            <input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save Password
          </button>
        </form>

        {/* Update Email Form */}
        <form onSubmit={handleUpdateEmail}>
          <h2 className="text-lg font-semibold mb-3">Update Email</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">New Email Address</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update Email
          </button>
        </form>
      </div>
    </GeneralLayout>
  );
}

export default SettingsPage;
