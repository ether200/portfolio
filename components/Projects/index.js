import Project from "./Project";
import julyImage from "../../public/July-bookstore.png";
import resourceManagerImage from "../../public/Resource-manager.png";
import portfolioImage from "../../public/Portfolio.png";
import blogImage from "../../public/Blog.png";
import architectImage from '../../public/wal-architect.png';

const Projects = ({ text }) => {
  return (
    <div className="projects" id="projects">
      <div className="projects__center">
        <h1>{text.projectTitle}</h1>
        <div className="projects__center--underline"></div>
        {/* Project 1 */}
        <Project
          fadeDirection="left"
          imgPath={julyImage}
          imgAlt="Bookstore ecommerce"
          title={text.project1.title}
          description={text.project1.description}
          stack={[
            "NextJS",
            "React-Hook-Form",
            "Sass",
            "Strapi",
            "Stripe",
            "SSR",
            "SWR",
            "Typescript",
            "Yup",
          ]}
          githubLink="https://github.com/ether200/july-frontend.git"
          appLink="https://july-frontend.vercel.app/"
        />
        {/* Project 2 */}
        <Project
          fadeDirection="right"
          imgPath={resourceManagerImage}
          imgAlt="Resource Manager"
          title={text.project2.title}
          description={text.project2.description}
          stack={[
            "Express",
            "JWT",
            "MongoDB",
            "NodeJS",
            "React-Router",
            "React-Hook-Form",
            "Redux",
            "Typescript",
          ]}
          githubLink="https://github.com/ether200/resource-manager.git"
          appLink="https://frozen-everglades-49253.herokuapp.com"
        />
        {/* Project 3 */}
        <Project
          fadeDirection="left"
          imgPath={portfolioImage}
          imgAlt="My portfolio"
          title={text.project3.title}
          description={text.project3.description}
          stack={["Framer Motion", "i18n", "NextJS", "React-Scroll", "Sass"]}
          githubLink="https://github.com/ether200/portfolio.git"
        />
        {/* Project 4 */}
        <Project
          fadeDirection="right"
          imgPath={blogImage}
          imgAlt="Tech blog"
          title={text.project4.title}
          description={text.project4.description}
          stack={["NextJS", "Markdown", "MDX", "Tailwind CSS"]}
          githubLink="https://github.com/ether200/tech-blog"
          appLink="https://tech-blog-seven.vercel.app/"
        />
        {/* Project 5 */}
        <Project
          fadeDirection="left"
          imgPath={architectImage}
          imgAlt="architect image"
          title={text.project5.title}
          description={text.project5.description}
          stack={["Apollo", "Chakra UI", "Framer Motion", "GraphQL", "NextJS", "Strapi", "TypeScript"]}
          githubLink="https://github.com/ether200/w-architect"
          appLink="https://w-architect.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
