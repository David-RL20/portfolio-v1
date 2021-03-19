import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Resume.scss';

const Resume = (state) => {
  const { resume, currentLanguage } = state;

  return (
    <div className='pdf-container'>
      <iframe
        className='pdf-container__iframe'
        title='pdf-cv'
        src={resume.src[currentLanguage]}
        frameBorder='0'
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, null)(Resume);
