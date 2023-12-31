import styled from "./Work.module.css";
import { Reveal } from "./Reveal";
import { work } from "./data";

export const Work = () => {
  return (
    <div id="work" className={styled.work}>
      <div className={styled.container}>
        <Reveal once fadeIn delay={0.2}>
          <h1>
            Work<span>.</span> <hr />
          </h1>
        </Reveal>

        {work.map((el, i) => {
          const delay = 0.4 + i * 0.2;
          return (
            <Reveal always reveal delay={delay} key={el.id}>
              <div className={styled.experience}>
                <div className={styled.head}>
                  <h3>{el.company}</h3>
                  <p>{el.date}</p>
                </div>
                <div className={styled.role}>
                  <h4>{el.role}</h4>
                  <p>{el.location}</p>
                </div>
                <p>{el.about}</p>
                <div className={styled.stack}>
                  {el.stack.map((el) => (
                    <span key={el}>{el}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};
