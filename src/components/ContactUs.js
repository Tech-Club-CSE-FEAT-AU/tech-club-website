import React from 'react';


export default function ContactUs (props) {
    let propsData = props.Data;
    return (
      <section id="contact" style={{ background: '#fafbff'}}>
        <div className="row" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="columns contact-details">
            <br></br>
         
            <h4>Contact us</h4>
            <p className="address">
              <span>{propsData.name}</span>
              <br></br>
              <span>Addr: {propsData.addr}</span>
              <br></br>
              <span>Email: {propsData.email}</span>
            </p>
            <br></br>
            <img src='images/Annamalai_University_logo.svg.png' alt='' style={{ height:71.5 }}></img>
          </div>
        </div>
      </section>
    );
}