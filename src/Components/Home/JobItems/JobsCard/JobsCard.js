import React from 'react';
import './JobCards.css';
import compLogo from '../../../../images/compLogo.svg';
import workFrom from '../../../../images/workfromhome.svg';
import hours from '../../../../images/flexibleHours.svg';
import viewDetails from '../../../../images/viewDetails.svg';
const JobsCard = (props) => {
    // var appear=false;
    // let left = document.querySelector("jobCards");
    // let leftPosition = left?.getBoundingClientRect().top;
    // let screenPosition = window.innerHeight;
    // console.log(screenPosition,leftPosition);
    // if(leftPosition<screenPosition){
    //     appear = true;
    //    }else if(leftPosition>screenPosition){
    //     appear = false;
    //    }
    const{company,title,workType,workSchedule,details,skills}=props.job
    return (
        <div className="jobCards">
          <div className="card-left">
          <img src={compLogo} alt=""/>
          <div className="text">
            <h3>{company}</h3>
            <h2>{title}</h2>
            <div className="skill-btn-group">
              {skills.map(skill=><button className="skill-btn">{skill}</button>)}
            </div>
          </div>
          </div>
          <div className="card-right">
            <div className="work-type">
              <div className="d-flex justify-content-center">
              <img src={workFrom} alt=""/>
              </div>
              <p>{workType} <br/> Home</p>
            </div>
            <div className="work-type">
              <div className="d-flex justify-content-center">
              <img src={hours} alt=""/>
              </div>
              <p>{workSchedule} <br/>Timing</p>
            </div>
            <div className="details">
              <div className="d-flex justify-content-center">
              <img src={viewDetails} alt=""/>
              </div>
              <p>View <br/> Details</p>
            </div>
          </div>
        </div>
    );
};

export default JobsCard;