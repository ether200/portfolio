import Image from "next/image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import FadeInWhenVisible from "../../Animation/FadeInWhenVisible";

const Projects = ({ text }) => {
  return (
    <div className="projects" id="projects">
      <div className="projects__center">
        <h1>{text.projectTitle}</h1>
        <div className="projects__center--underline"></div>
        <div className="projects__center__project">
          <FadeInWhenVisible
            divClass="projects__center__project__img"
            fadeFrom="left"
          >
            <Image
              src="/July-bookstore.png"
              alt="Bookstore ecommerce"
              layout="fill"
              objectFit="fill"
            />
          </FadeInWhenVisible>

          <FadeInWhenVisible
            divClass="projects__center__project__info"
            fadeFrom="right"
          >
            <h2>{text.project1.title}</h2>
            <div
              className="projects__center__project__info__text"
              dangerouslySetInnerHTML={{ __html: text.project1.description }}
            />
            <div className="projects__center__project__info__stack">
              <span>NextJS</span>
              <span>React-Hook-Form</span>
              <span>Sass</span>
              <span>Strapi</span>
              <span>Stripe</span>
              <span>SSR</span>
              <span>SWR</span>
              <span>Typescript</span>
              <span>Yup</span>
            </div>
            <div className="projects__center__project__info__links">
              <a href="#">
                <FaGithubSquare className="projects__center__project__info__links__icon" />
              </a>
              <a href="#">
                <FaShareSquare className="projects__center__project__info__links__icon" />
              </a>
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="projects__center__project">
          <FadeInWhenVisible
            divClass="projects__center__project__img"
            fadeFrom="right"
          >
            <Image
              src="/Resource-manager.png"
              alt="Bookstore ecommerce"
              layout="fill"
              objectFit="fill"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible
            divClass="projects__center__project__info"
            fadeFrom="left"
          >
            <h2>{text.project2.title}</h2>
            <div
              className="projects__center__project__info__text"
              dangerouslySetInnerHTML={{ __html: text.project2.description }}
            />
            <div className="projects__center__project__info__stack">
              <span>Express</span>
              <span>JWT</span>
              <span>MongoDB</span>
              <span>NodeJS</span>
              <span>React-Router</span>
              <span>React-Hook-Form</span>
              <span>Redux</span>
              <span>Typescript</span>
            </div>
            <div className="projects__center__project__info__links">
              <a href="#">
                <FaGithubSquare className="projects__center__project__info__links__icon" />
              </a>
              <a href="#">
                <FaShareSquare className="projects__center__project__info__links__icon" />
              </a>
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="projects__center__project">
          <FadeInWhenVisible
            divClass="projects__center__project__img"
            fadeFrom="left"
          >
            <Image
              src="/July-bookstore.png"
              alt="Bookstore ecommerce"
              layout="fill"
              objectFit="fill"
            />
          </FadeInWhenVisible>
          <FadeInWhenVisible
            divClass="projects__center__project__info"
            fadeFrom="right"
          >
            <h2>July, a book ecommerce platform</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
              doloremque quibusdam distinctio libero odit modi sunt voluptatem
              debitis dicta a praesentium nesciunt autem quis mollitia ducimus
              nam error minus cum, animi nulla ipsa! Atque magnam esse
              consequatur fuga perferendis dolores dolor, voluptatem nostrum
              totam minus hic eos ducimus sapiente quaerat.
            </p>
            <div className="projects__center__project__info__stack">
              <span>React</span>
              <span>Next</span>
              <span>Strapi</span>
            </div>
            <div className="projects__center__project__info__links">
              <a href="#">
                <FaGithubSquare className="projects__center__project__info__links__icon" />
              </a>
              <a href="#">
                <FaShareSquare className="projects__center__project__info__links__icon" />
              </a>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
};

export default Projects;
