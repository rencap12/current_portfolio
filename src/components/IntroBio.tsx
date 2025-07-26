
const IntroBio = () => {
  return (
    <div className="p-6 bg-base-200 rounded-lg shadow-lg ">
      {/* Flex container: row-reverse puts image on right */}
      <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-80">
        <div className="avatar">
          <div className="w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="IMG_1188.jpg" alt="Reneca Capuno" />
          </div>
        </div>

        <div className="text-center text-left md:ml-6">
          <h2 className="text-3xl font-bold mb-2">
            Hi! I’m <span className="text-primary">Reneca Capuno</span> :)
          </h2>

          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://www.linkedin.com/in/renecacapuno/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 filter invert brightness-0 transform transition-transform hover:scale-125"
            >
              <img className="w-12 h-12" alt="LinkedIn" src={`${import.meta.env.BASE_URL}icons/Linkedin.svg`}  />
            </a>

            <a
              href="/Reneca_Capuno_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="w-12 h-12 filter invert brightness-0 transform transition-transform hover:scale-125"
            >
              <img className="w-12 h-12" alt="Resume" src={`${import.meta.env.BASE_URL}icons/resumeIcon.svg`}  />
            </a>

            <a
              href="https://github.com/rencap12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 filter invert brightness-0 transform transition-transform hover:scale-125"
            >
              <img className="w-12 h-12" alt="GitHub" src={`${import.meta.env.BASE_URL}icons/Github.svg`}  />
            </a>
          </div>

          <p className="text-xl">
            I’m a New Grad CS from the <strong>University of Florida</strong> and an aspiring <strong>software engineer</strong>! 
            I'm currently working with 💻 Full-Stack development and 📱 Android Application development. Here 
            you'll find a mix of projects that reflect what I have done.
          </p>
          <p className="text-xl">Feel free to explore my portfolio and let’s connect!</p>
        </div>
      </div>
    </div>
  );
};

export default IntroBio;
