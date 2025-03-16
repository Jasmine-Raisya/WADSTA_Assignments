import Navbar from "./Navbar";


const ProfilePage = () => {
  return (
    <div className="h-screen w-screen bg-gray-900 text-white">
      <Navbar />
      <div className="h-full flex flex-col items-center justify-center">
        <div className="bg-gray-800 p-10 rounded-[50px] shadow-2xl flex flex-col items-center border border-purple-600">
          <img 
            src="https://www.pbs.org/wnet/nature/files/2021/09/pexels-skitterphoto-23087-1-scaled-e1630516360213.jpg" 
            alt="Profile" 
            className="w-36 h-36 object-cover rounded-full mb-6 border-4 border-purple-400 shadow-lg"
          />
          <h2 className="text-4xl font-bold text-purple-300">Raisya Jasmine Zahira</h2>
          <p className="text-lg text-gray-400 text-center mt-3 max-w-md">
            A creative soul passionate about web design and elegant user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
