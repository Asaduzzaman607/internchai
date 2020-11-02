import React, { useEffect, useState } from 'react';
import fakeData from '../../../images/fakeData';
import JobsCard from './JobsCard/JobsCard';
import './JobItems.css'


const JobItems = () => {
    const[jobs, setJobs] =useState([])
    console.log(jobs)

    const [category, setCategory] = useState('web')

    useEffect(() =>{
        const selectedCategory = fakeData.filter(job => job.category == category)
        setJobs(selectedCategory)
    },[category])

    const linkActiveStyle = {
        color: '#f97e19',
        borderBottom: '2px solid #f97e19'
    }

    return (
        <>
      
        <div className="container">
            
            <div className="item-links">
                <a style={category == 'web' ? linkActiveStyle : {}} onClick={() =>setCategory('web')}> Web Development</a>
                <a style={category == 'software' ? linkActiveStyle : {}} onClick={() =>setCategory('software')}> Software Development</a>
                <a style={category == 'sqa' ? linkActiveStyle : {}} onClick={() =>setCategory('sqa')}> Software Quality Assurance</a>
                
            </div>
            <div className="row justify-content-center">
                {
                    jobs.map(job => <JobsCard job={job}></JobsCard>)
                }

            </div>
           
        
        </div>
        </>
    );
};

export default JobItems;