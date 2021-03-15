import React from 'react';
import {
  Link,
  useParams,
} from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/components/ProjectsScreen.scss';
import Carrousel from './Carousel';
import { FaGithub } from 'react-icons/fa';

const ProjectsScreen = (props) => {
  let selectedIndex = 0;

  //Returns 'projects-menu__item actived' if it was the selected
  //if not returns 'projects-menu__item selectable'
  const getLiClasses = (n, selectedIndex) => {
    const isActive = Boolean(n === parseInt(selectedIndex, 10));
    let classesLi = 'projects-menu__item';
    if (isActive) classesLi = `${classesLi} actived`;
    else classesLi = `${classesLi} selectable`;

    return classesLi;
  };

  //Returns an ul
  //every li redirects to i
  //i starts at 0 and increments by 1
  //i is equal to selectedIndex
  //every li is encapsulate in a Link component
  const renderTechnologiesMenu = () => {
    let i = 0;
    const { techI } = useParams();
    selectedIndex = techI;
    return (
      <ul>
        {
          props?.projects.map((ele) => {
            i++;
            const classesLi = getLiClasses(i, selectedIndex);
            return (
              <Link key={`menu-link__${ele.technologie}${i}`} to={`/Projects/${i}`}>
                <li key={`menu-link__li__${ele.technologie}`} className={classesLi}>
                  {ele.technologie}
                </li>
              </Link>
            );
          })
        }
      </ul>
    );
  };

  const renderTechnologiesContent = () => {
    const project = props?.projects[selectedIndex - 1];
    console.log(project);
    return (
      <>
        {
          project?.list.map((ele) => {
            return (
              <div key={project.technologie} className='project-wrapper'>
                <Carrousel images={ele.images} />
                <div className='project-wrapper__detail'>
                  <h4 className='project-wrapper__title center'>{ele?.name}</h4>
                  <a className='github-logo__container center' target='_blank' rel='noreferrer' href={ele.github_link}>
                    <FaGithub className='github-logo' />
                  </a>
                  <p className='project-description'>{ele.description}</p>
                </div>
              </div>
            );
          })
        }
      </>
    );
  };

  return (
    <div className='projects-container'>
      <div className='projects-container__menu__div'>
        {renderTechnologiesMenu()}
      </div>
      <div className='projects-container__content__div'>
        {renderTechnologiesContent()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, null)(ProjectsScreen);
