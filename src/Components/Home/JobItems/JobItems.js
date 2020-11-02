import React, { useEffect, useState } from 'react';
import fakeData from '../../../images/fakeData';
import JobsCard from './JobsCard/JobsCard';



const JobItems = () => {
    const[jobs, setJobs] =useState([])
    console.log(jobs)

    const [category, setCategory] = useState('web')

    useEffect(() =>{
        const selectedCategory = fakeData.filter(job => job.category == category)
        setJobs(selectedCategory)
    },[category])

    return (
        <>
      
        <div className="container">
            
            <div className="item-links">
                <a  onClick={() =>setCategory('web')}> Web Development</a>
                <a onClick={() =>setCategory('software')}> Software Development</a>
                <a onClick={() =>setCategory('sqa')}> Software Quality Assurance</a>
                
            </div>
            <div className="row">
                {
                    jobs.map(job => <JobsCard job={job}></JobsCard>)
                }

            </div>
           
        
        </div>
        </>
    );
};

export default JobItems;