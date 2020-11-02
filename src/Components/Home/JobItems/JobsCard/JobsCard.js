import React from 'react';

const JobsCard = (props) => {
    const{company,title,workType,workSchedule,details}=props.job
    return (
        <div class="card w-80 col-md-8">
            <div class="card-body d-flex justify-content-between">
                <div>
                    <h5 class="card-title">{company}</h5>
                    <p class="card-text">{title}</p>
                    <a href="#" class="btn btn-secondary">react</a>

                </div>
                <div className='d-flex mr-5'>
                    <h6>{workType}</h6>
                    <h6>{workSchedule}</h6>
                    <h6>{details}</h6>
            </div>
               
            </div>
           
      </div>
    );
};

export default JobsCard;