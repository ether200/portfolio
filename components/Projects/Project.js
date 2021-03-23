import FadeInWhenVisible from "../../Animation/FadeInWhenVisible";
import Image from "next/image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";

const Project = ({
  fadeDirection,
  imgPath,
  imgAlt,
  title,
  description,
  stack,
  githubLink,
  appLink,
}) => {
  return (
    <div className="projects__center__project">
      <FadeInWhenVisible
        divClass="projects__center__project__img"
        fadeFrom={fadeDirection}
      >
        <Image
          src={imgPath}
          alt={imgAlt}
          layout="fill"
          objectFit="fill"
          quality={100}
          priority={true}
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible
        divClass="projects__center__project__info"
        fadeFrom={fadeDirection === "left" ? "right" : "left"}
      >
        <h2>{title}</h2>
        <div
          className="projects__center__project__info__text"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="projects__center__project__info__stack">
          {stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="projects__center__project__info__links">
          <a href={githubLink} target="_blank">
            <FaGithubSquare className="projects__center__project__info__links__icon" />
          </a>
          {appLink && (
            <a href={appLink} target="_blank">
              <FaShareSquare className="projects__center__project__info__links__icon" />
            </a>
          )}
        </div>
      </FadeInWhenVisible>
    </div>
  );
};

export default Project;
