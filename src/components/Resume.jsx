import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Resume.scss';

const Resume = ({ currentLanguage }) => {
  return (
    <div className='pdf-container'>
      <embed
        src={`../../public/cv_${currentLanguage}.pdf`}
        type='application/pdf'
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, null)(Resume);
