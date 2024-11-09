import image1 from "../../../../public/file (1).png";
import image2 from "../../../../public/Programing-Icons/icons8-html-5-60.png";
import image3 from "../../../../public/Programing-Icons/icons8-css3-60.png";
import image4 from "../../../../public/Programing-Icons/icons8-typescript-60.png";
import image5 from "../../../../public/Programing-Icons/icons8-python-60.png";
import image6 from "../../../../public/Programing-Icons/icons8-javascript-60.png";
import image7 from "../../../../public/Programing-Icons/icons8-react-60.png";
import image8 from "../../../../public/Programing-Icons/Next-icon.webp";
import image9 from "../../../../public/Programing-Icons/icons8-tailwind-css-60.png";
import image10 from "../../../../public/Programing-Icons/icons8-visual-studio-code-2019-60.png";
import image11 from "../../../../public/Programing-Icons/icons8-figma-60.png";
import Image from "next/image";
import Styles from "./about.module.css";
const About = () => {
  return (
    <>
      <div className={Styles.about_container}>
        <div className={Styles.image_cont}>
          <Image
            src={image1}
            alt="Image"
            className={Styles.image1}
          />
        </div>

        <div className={Styles.about_content}>
          <h1 className={Styles.about_heading1}>
            About Me
          </h1>
          <p className={Styles.about_pera}>
            I am a UI/UX Designer and FullStack Web Developer, with a passion
            for creating visually appealing and user-friendly interfaces. My
            favorite part of programming is the problem-solving aspect. i love
            the feeling of finally figuring out a solution to a problem. my core
            stack is
            <span> React, Next.js, and Node.js.</span> i am also familiar with
            <span> Typescript.</span> i am always looking to learn new
            technologies. <br />
            when i'm not cooding, i enjoy playing video games, watching movies
            and surfing over web to keep myself updated.
          </p>
          <h2 className={Styles.about_heading2}>
            <span>My BackPack</span>
          </h2>
          <ul>
            <li className={Styles.about_li}>
              <p>Technologies I Used!</p>
            </li>
          </ul>

          <div className={Styles.tech_section}>
            <div className={Styles.box1}>
              <Image src={image2} alt="html" className={Styles.tech_image} />
            </div>
            <div className={Styles.box1}>
              <Image src={image3} alt="Css3" className={Styles.tech_image} />
            </div>
            <div className={Styles.box1}>
              <Image src={image4} alt="typescript" className={Styles.tech_image} />
            </div>
            <div className={Styles.box1}>
              <Image src={image5} alt="pythone" className={Styles.tech_image} />
            </div>
            <div className={Styles.box1}>
              <Image src={image6} alt="javascript" className={Styles.tech_image} />
            </div>
            <div className={Styles.box1}>
              <Image src={image7} alt="React" className={Styles.tech_image} />
            </div>
            <div className={Styles.box1}>
              <Image src={image8} alt="Next.js" className={Styles.tech_image} />
            </div>
            <div className={Styles.box1}>
              <Image src={image9} alt="tailwind" className={Styles.tech_image} />
            </div>
            <div className={Styles.box1}>
              <Image src={image10} alt="vs code" className={Styles.tech_image} />
            </div>
            <div className={Styles.box1}>
              <Image src={image11} alt="figma" className={Styles.tech_image} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
