const ProfilePage = () => {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Profile" 
            className="w-32 h-32 rounded-full mb-4 border-4 border-gray-300" 
          />
          <h2 className="text-2xl font-semibold">John Doe</h2>
          <p className="text-gray-600 text-center mt-2">A passionate developer who loves building minimal and stylish web applications.</p>
        </div>
      </div>
    );
  };
  
  export default ProfilePage;
  