

const About: React.FC = ()  => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">About This User CRUD App</h1>
        <p className="text-gray-700 mb-4">
          This application allows you to manage user data with ease. You can create, read, update, and delete user information efficiently.
        </p>
        <p className="text-gray-700">
          Features:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Create new users</li>
          <li>Read user details</li>
          <li>Update existing user information</li>
          <li>Delete users</li>
        </ul>
        <p className="text-gray-700">
          This project is built with React and styled using Tailwind CSS, providing a modern and responsive user interface.
        </p>
      </div>
    </div>
  );
};

export default About;
