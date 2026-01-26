const ProfileMeta = () => {
  return (
    <div className="rounded-md bg-white w-80 p-8 shadow-xl shadow-blue-300/40 text-center relative -top-77 -right-50">
      
      {/* Image */}
      <img
        src="/img/profile_face.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover mx-auto"
      />

      {/* Title */}
      <h1 className="text-2xl font-bold mt-4">oliver pfaff</h1>
      <span className="text-sm text-gray-700 font-normal">Web Developer &amp; Web Designer</span>

      {/* Button 1 */}
      <button className="mt-5 bg-blue-600 text-white px-6 py-3 text-sm rounded-md hover:bg-blue-700 transition w-full">
        Folgen
      </button>

      {/* Paragraph */}
      <p className="mt-5 text-gray-700 font-normal">
        Frankfurt Am Main, Germany
      </p>

      {/* Button 2 */}
      <button className="mt-10 border border-gray-300 text-black px-6 py-3 text-sm rounded-md hover:bg-gray-100 transition w-full flex items-center justify-center gap-2">
      Nachricht senden
      </button>

    </div>
  );
};

export default ProfileMeta;
