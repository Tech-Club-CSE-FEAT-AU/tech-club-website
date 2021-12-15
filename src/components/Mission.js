import React from 'react';


export default  function Mission (props) {

    let propsData = props.Data;
    return (
      <section id="mission">
         <div className="row">
            <div className="twelve columns">
              { 
                propsData.mission && propsData.mission.map((item)=>{
                  return(
                    <div key={item.specialization} className="row item">
                       <div align='center' className="twelve columns">
                       <h1><span>Mission</span></h1>
                          <br></br>
                          <p className="info">
                            {item.specialization1}<br/>
                            {item.specialization2}<br/>
                            {item.specialization3}<br/>
                            {item.specialization4}<br/>
                            {item.specialization5}<br/>
                            {item.specialization6}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
      </section>
    );

}