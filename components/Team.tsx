import React from "react";

const Team: React.FC = () => {
  // CEO Data
  const ceo = {
    name: "Dr. Mahendra Gaikwad",
    role: "Chief Executive Officer (CEO)",
    image: "https://th.bing.com/th/id/R.df10fb5221fc45bf67d78755e673df0c?rik=6ZQV%2f20yd%2b20pA&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fFantastic-HD-Black-Wallpapers.jpg&ehk=ieL0e5%2fH5LxQzuaX9QjOqNcueGl4CaXLDUx9YfKL3Ws%3d&risl=&pid=ImgRaw&r=0",
    description:
      "Visionary leader driving CreativeIndia towards innovation and excellence.",
  };

  // Technical Team Data
  const technicalTeam = [
    {
      name: "Hemant Pande",
      role: "Backend Developer",
      image: "https://th.bing.com/th/id/R.df10fb5221fc45bf67d78755e673df0c?rik=6ZQV%2f20yd%2b20pA&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fFantastic-HD-Black-Wallpapers.jpg&ehk=ieL0e5%2fH5LxQzuaX9QjOqNcueGl4CaXLDUx9YfKL3Ws%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "Chetana Shirode",
      role: "Frontend Developer",
      image: "https://th.bing.com/th/id/R.df10fb5221fc45bf67d78755e673df0c?rik=6ZQV%2f20yd%2b20pA&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fFantastic-HD-Black-Wallpapers.jpg&ehk=ieL0e5%2fH5LxQzuaX9QjOqNcueGl4CaXLDUx9YfKL3Ws%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "Nikita More",
      role: "UI/UX Designer",
      image: "https://th.bing.com/th/id/R.df10fb5221fc45bf67d78755e673df0c?rik=6ZQV%2f20yd%2b20pA&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fFantastic-HD-Black-Wallpapers.jpg&ehk=ieL0e5%2fH5LxQzuaX9QjOqNcueGl4CaXLDUx9YfKL3Ws%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "Saket Kulthe",
      role: "App Developer",
      image: "https://th.bing.com/th/id/R.df10fb5221fc45bf67d78755e673df0c?rik=6ZQV%2f20yd%2b20pA&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fFantastic-HD-Black-Wallpapers.jpg&ehk=ieL0e5%2fH5LxQzuaX9QjOqNcueGl4CaXLDUx9YfKL3Ws%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "Ojaswini Patil",
      role: "Database Administrator",
      image: "https://th.bing.com/th/id/R.df10fb5221fc45bf67d78755e673df0c?rik=6ZQV%2f20yd%2b20pA&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fFantastic-HD-Black-Wallpapers.jpg&ehk=ieL0e5%2fH5LxQzuaX9QjOqNcueGl4CaXLDUx9YfKL3Ws%3d&risl=&pid=ImgRaw&r=0",
    },
  ];

  return (
    <div className="pt-28 px-6 max-w-7xl mx-auto">

      {/* ================= CEO SECTION ================= */}
      <h1 className="text-3xl font-black text-center mb-10 text-slate-900 dark:text-white">
        Our Leadership
      </h1>

      <div className="flex justify-center mb-20">
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 max-w-md text-center hover:shadow-2xl transition">

          <img
            src={ceo.image}
            alt={ceo.name}
            className="w-32 h-32 rounded-full mx-auto mb-5 object-cover border-4 border-indigo-500"
          />

          <h2 className="text-xl font-black text-slate-900 dark:text-white">
            {ceo.name}
          </h2>

          <p className="text-indigo-600 dark:text-indigo-400 font-bold text-sm mt-1">
            {ceo.role}
          </p>

          <p className="text-slate-500 text-sm mt-4 leading-relaxed">
            {ceo.description}
          </p>
        </div>
      </div>

      {/* ================= TECH TEAM SECTION ================= */}
      <h2 className="text-2xl font-black text-center mb-10 text-slate-900 dark:text-white">
        Technical Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        {technicalTeam.map((member, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition group"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition"
            />

            <h3 className="font-bold text-slate-900 dark:text-white">
              {member.name}
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              {member.role}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Team;
