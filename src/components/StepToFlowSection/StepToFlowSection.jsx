import React from 'react';
import './StepToFlowSection.css';

const StepToFlowSection = () => {

  const cards = [
    {
      image: "/step-to-follow/1.png",
      title: "provide basic information",
      description: "sed perpiciatis undem nise este natus sit volutate",
      num: "01"
    },
    {
      image: "/step-to-follow/2.png",
      title: "have a call with us ",
      description: "sed perspiciatis undm nise este natus sit volutate",
      num: "02"
    },
    {
      image: "/step-to-follow/3.png",
      title: "talk with canadian consultant",
      description: "sed perpiciatis undem nise este natus sit volutate",
      num: "03"
    },
    {
      image: "/step-to-follow/4.png",
      title: "get yourself process on the way.",
      description: "sed perpiciatis undem nise este natus sit volutate",
      num: "03"
    }
  ];


  return (
    <section id="StepToFlowSection">


      <div className="myContainer mx-auto py-5 px-0">

        <h6>steps</h6>

        <h1 className="text-center text-capitalize" style={{ fontWeight: "bold" }}>step to follow</h1>

        <div className="d-flex align-items-center justify-content-center flex-wrap gap-3 pt-5 mt-2">

          {cards.map(v => <div key={v.title} className="d-flex  align-items-center  justify-content-between   flex-column  StepToFlowSection-card">

            <figure><img src={v.image} /></figure>

            <div className='d-flex align-items-center justify-content-center flex-column '>
              <h1 className='text-capitalize text-center '>{v.num}</h1>
              <h1 className='text-capitalize text-center '>{v.title}</h1>
              <p className='text-capitalize  text-center'>{v.description}</p>
              <i></i>
            </div>

          </div>)}

        </div>

      </div>


    </section>
  )
}

export default StepToFlowSection