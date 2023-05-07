const About = () => {
 return (
<div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 font-normal">
          My love for computers started at a very young age. 
           I used to sit at the home computer all day watching cartoons,exploring the web and breaking the operating system haha.
          I used to imagine myself as a programmer by writing random words and calling it code :-)
        </p>

        <br />

        <p className="text-xl font-normal">
          Eventually by the age of 10, I read and heard about Python. It was and still is one of the most popular programming languages.
          I used to take some courses on Udemy and Code in Python using my IPad. All I could do was draw stuff using Turtle Graphics lol.
          By the time I was 12, I got into HTML and CSS and some basic JS. At 13 I created by first portfolio website, very exciting at that time.
          At 15, I started got into NodeJS and got into freelancing creating Discord Bots.
        </p>
      </div>
    </div>
 );
};

export default About;