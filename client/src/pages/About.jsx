export default function About() {
  const handleClick = () => {
    window.location.replace("https://github.com/The-0mnipotent");
  };
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        About Property Pulse
      </h1>
      <p className="mb-4 text-slate-700">
        This Page is designed by me (ARPIT SINGH), I am a full stack MERN
        developer and I have built this site to showcase my skills.
        <br /> The tech stack of this website contains :
      </p>
      <p className="mb-4 text-slate-700">
        <h1 className="text-bold">Client Side/ Front-end</h1>
        <br />
        <li>@reduxjs/toolkit: 1.9.5</li>
        <li>react: 18.2.0</li>
        <li>react-dom: 18.2.0</li>
        <li>react-icons: 4.10.1</li>
        <li>react-redux: 8.1.2</li>
        <li>react-router-dom: 6.15.0</li>
        <li>redux-persist: 6.0.0</li>
        <li>swiper: 10.2.0</li>
      </p>
      <p className="mb-4 text-slate-700">
        <h1 className="text-bold">API Side/Backend</h1>
        <br />
        <li>firebase: 10.3.1</li>
        <li>bcryptjs: 2.4.3</li>
        <li>cookie-parser: 1.4.6</li>
        <li>dotenv: 16.3.1</li>
        <li>express: 4.18.2</li>
        <li>jsonwebtoken: 9.0.2</li>
        <li>mongoose: 7.5.0</li>
      </p>
      <p className="mb-4 text-slate-700">
        Github link :{" "}
        <button onClick={handleClick}>
          https://github.com/The-0mnipotent/
        </button>
      </p>
    </div>
  );
}