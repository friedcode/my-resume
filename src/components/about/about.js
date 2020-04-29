import React, { Component } from 'react';
import profilepic from '../../assets/profilepic.jpg'

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src={profilepic} alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>
                I live in Constance, Germany and studied Applied Computer Science, with
                a focus on Software Engineering, at the HTWG University of Applied Sciences in Constance. 
                Since 2017 I am working, next to my studies, as a Software Developer, gaining
                knowledge in Front- and Backend development, aswell as working with cloud based
                services. 
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{resumeData.name}</span><br />
                    <span>{resumeData.street}</span><br />
                    <span>
                      {resumeData.plz} {resumeData.location}
                    </span><br />
                    <span>{resumeData.phone}</span><br />
                    <span>{resumeData.mail}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section>
      </React.Fragment>
    )
  }
}