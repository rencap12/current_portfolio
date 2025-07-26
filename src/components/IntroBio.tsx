import React from "react";

const IntroBio = () => {
  return (
    <div className="w-full bg-base-200 py-10">
      {/* Inner flex container for image + text */}
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-8 px-6 md:px-20">
        {/* Avatar (Image) */}
        <div className="avatar">
          <div className="w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="IMG_1188.jpg" alt="Reneca Capuno" />
          </div>
        </div>

        {/* Bio Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2">
            Hi! I’m <span className="text-primary">Reneca Capuno</span> :)
          </h2>

          <div className="flex justify-center md:justify-start gap-6 mb-6">
            <a
              href="https://www.linkedin.com/in/renecacapuno/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 filter invert brightness-0 transform transition-transform hover:scale-125"
            >
              <img className="w-12 h-12" alt="LinkedIn" src="/icons/Linkedin.svg" />
            </a>

            <a
              href="/Reneca_Capuno_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="w-12 h-12 filter invert brightness-0 transform transition-transform hover:scale-125"
            >
              <img className="w-12 h-12" alt="Resume" src="/icons/resumeIcon.svg" />
            </a>

            <a
              href="https://github.com/rencap12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 filter invert brightness-0 transform transition-transform hover:scale-125"
            >
              <img className="w-12 h-12" alt="GitHub" src="/icons/Github.svg" />
            </a>
          </div>

          <p className="text-xl">
            I’m a New Grad CS from the <strong>University of Florida</strong> and an aspiring <strong>software engineer</strong>!
          </p>
          <p className="text-xl">Feel free to explore my portfolio and let’s connect!</p>
        </div>
      </div>
    </div>
  );
};

export default IntroBio;
