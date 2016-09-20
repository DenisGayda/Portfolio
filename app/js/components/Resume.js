import React from 'react';
import TechnicalSkills from './TechnicalSkills';

export default class extends React.Component {
	render() {
		return (
    	<main className="wrapper">
            <div className="resume">
                <section className="resume__header">
                    <div className="foto">
                        <img src="image/foto.jpg" />
                    </div>
                    <div className="information">
                        <div className="contacts">
                            <div className="contacts__container">
                                <p className="phone">+380668065700</p>
                                <p className="email">gayda31den@gmail.com</p>
                                <p className="skype">den_gayda</p>
                            </div>
                        </div>
                        <h3>DESIRED POSITION: Front-end developer</h3>
                        <p>I want to be involved in big projects, join an amazing team and advance my front-end developer career</p>
                    </div>
                </section>
                <section className="workExperience">
                    <h2 className="section__header">WORK EXPERIENCE</h2>
                    <div className="section__block_flex">
                        <span className="section__block_title">Position held: chief  power dispatcher at railway</span>
                        <span>Aug 2007 – till now</span>
                    </div>
                    <p>Responsibilities real-time control of railway electrical system.</p>
                    <div className="section__block_flex">
                        <span className="section__block_title">Position held:  electrical specialist</span>
                        <span>Aug 2008  - Sept 2009</span>
                    </div>
                    <p>Installation and adjustment Automatic systems for commercial accounting of power consumption.</p>
                </section>
                <section className="education">
                    <h2 className="section__header">EDUCATION</h2>
                    <div className="section__block_flex">
                        <span className="section__block_title">Dnipropetrovsk national university of railway transport</span>
                        <span>Sept 2007 – Jun 2011</span>
                    </div>
                    <p>Electrification of Railways</p>
                </section>
                <section className="training">
                    <h2 className="section__header">TRAINING</h2>
                    <p className="section__block_title">Hillel it school, Odessa</p>
                    <div className="section__block_flex">
                        <span>Front-end Basic</span>
                        <span>Feb 2016 – Apr 2016</span>
                    </div>
                    <div className="section__block_flex">
                        <span>Front-end Pro</span>
                        <span>Jun 2016  - Sept 2016</span>
                    </div>
                </section>
                <section className="technicalSkills">
                    <h2 className="section__header">TECHNICAL SKILLS</h2>
                    <TechnicalSkills />
                </section>
                <section className="personalSkills">
                    <h2 className="section__header">TRAINING</h2>
                     <div className="section__column">
                        <ul className="section__column_item">
                            <li><p>Analyticity</p></li>
                            <li><p>Disciplined</p></li>
                            <li><p>Versatility</p></li>
                        </ul>
                        <ul className="section__column_item">
                            <li><p>Adaptability</p></li>
                            <li><p>Productivity</p></li>
                            <li><p>Learns Quickly</p></li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
		)
	}
}