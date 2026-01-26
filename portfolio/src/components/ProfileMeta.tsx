const ProfileMeta = () => {
  return (
    <div className="rounded-md bg-white w-80 p-8 shadow-lg text-center relative -top-70 -right-45">
      
      {/* Image */}
      <img
        src="/img/profile_face.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full object-cover mx-auto"
      />

      {/* Title */}
      <h1 className="text-2xl font-bold mt-4">oliver pfaff</h1>

      {/* Button 1 */}
      <button className="mt-5 bg-blue-600 text-white px-6 py-1 text-lg rounded-md hover:bg-blue-700 transition w-full">
        Follow
      </button>

      {/* Paragraph */}
      <p className="mt-5 text-gray-700">
        Frankfurt Am Main, Germany
      </p>

      {/* Button 2 */}
      <button className="mt-5 border border-gray-300 text-black px-6 py-1 text-lg rounded-md hover:bg-gray-100 transition w-full">
        Send Message
      </button>

    </div>
  );
};

export default ProfileMeta;
