const ProfileMeta = () => {
  return (
    <div className="rounded-md bg-white w-80 p-8 shadow-xl shadow-blue-300/40 text-center">
      <img
        src="/img/profile_face.jpg"
        alt="Profile"
        className="w-32 h-32 mt-5 rounded-full object-cover mx-auto"
      />

      <h1 className="text-2xl font-bold mt-5">oliver pfaff</h1>
      <span className="text-sm text-blue-900 font-normal">
        Web Developer & Web Designer
      </span>

      <p className="mt-5 text-gray-700 font-normal">
        Frankfurt Am Main, Germany
      </p>

      <button className="mt-15 border bg-blue-950 text-white border-gray-300 px-6 py-3 text-sm rounded-md hover:bg-blue-700 transition w-full flex items-center justify-center gap-2">
        Nachricht senden
      </button>
    </div>
  );
};

export default ProfileMeta;
