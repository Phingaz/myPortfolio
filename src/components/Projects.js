import styled from "./Projects.module.css";
import { Reveal } from "./Reveal";
import { project } from "./data";

export const Projects = () => {
  return (
    <div id="project" className={styled.projects}>
      <div className={styled.container}>
        <Reveal duration={2} delay={0.2} once>
          <h1>
            Projects<span>.</span> <hr />
          </h1>
        </Reveal>

        <div className={styled.wrapper}>
          {project.map((el) => {
            return (
              <Reveal reveal key={el.id} delay={0.2} always>
                <div className={styled.project}>
                  <a href={el.link} target="blank">
                    {" "}
                    <img src={el.img} alt={el.alt} />
                  </a>
                  <div>
                    <h4>{el.name}</h4>
                    <h6>{el.techStack}</h6>
                    <p>{el.about}</p>
                  </div>
                  <div className={styled.btns}>
                    <a href={el.link} target="blank">
                      Live preview
                    </a>
                    <a href={el.github} target="blank">
                      Code
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
};
