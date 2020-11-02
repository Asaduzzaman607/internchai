import React from 'react';

const JobsCard = (props) => {
    const{company,title,workType,workSchedule}=props.job
    return (
        <div class="card w-80 col-md-8">
        <div class="card-body">
          <h5 class="card-title">{company}</h5>
          <p class="card-text">{title}</p>
          <a href="#" class="btn btn-secondary">react</a>
        </div>
      </div>
    );
};

export default JobsCard;