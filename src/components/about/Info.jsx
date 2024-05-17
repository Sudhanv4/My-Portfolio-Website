import React, { useEffect, useState } from 'react'

const Info = () => {

  const [experienceYears, setExperienceYears] = useState(0);
  const [experienceMonths, setExperienceMonths] = useState(0);

  useEffect(() => {
    const calculateExperienceYears = () => {
      const joiningDate = new Date('2022-01-06');
      const currentDate = new Date();
      const diffMonths = (currentDate.getFullYear() - joiningDate.getFullYear()) * 12 + (currentDate.getMonth() - joiningDate.getMonth());
      setExperienceYears((diffMonths/12).toFixed(0));
      setExperienceMonths(diffMonths%12)
    };
    calculateExperienceYears();
  }, []);

  return (
    <div className="about__info">
        <div className="about__box">
            <i className='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">{experienceYears} years {experienceMonths>0?`${experienceMonths} ${experienceMonths>1?"months":"month"}`:" "} Working</span>
        </div>
        <div className="about__box">
            <i className='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">15 + Projects</span>
        </div>
        {/* <div className="about__box">
            <i className='bx bx-support about__icon'></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div> */}
    </div>
  )
}

export default Info