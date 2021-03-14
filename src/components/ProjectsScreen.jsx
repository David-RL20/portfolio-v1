import React from 'react';
import {
  Link,
  useParams,
} from 'react-router-dom';
import { connect } from 'react-redux';
import '../assets/styles/components/ProjectsScreen.scss';

const ProjectsScreen = (props) => {

  const getLiClasses = (n, selectedIndex) => {
    const isActive = Boolean(n === parseInt(selectedIndex, 10));
    let classesLi = 'projects-menu__item';
    if (isActive) classesLi = `${classesLi} actived`;
    else classesLi = `${classesLi} selectable`;

    return classesLi;
  };

  const renderTechnologiesMenu = () => {
    let i = 0;
    const { techI: selectedIndex } = useParams();
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

  return (
    <div className='projects-container'>
      <div id='projects-container__menu__div'>
        {renderTechnologiesMenu()}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, null)(ProjectsScreen);
