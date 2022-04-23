import React from 'react'
import './team.scss'
import kuda from '../../assets/profile/kuda.jpg'
import bakani from '../../assets/profile/bakani.jpg'
import blessed from '../../assets/profile/blessed.jpg'
import cyprian from '../../assets/profile/cyprian.jpeg'
import kudapara from '../../assets/profile/kudapara.jpg'
import lavenderZ from '../../assets/profile/lavenderZ.jpg'
import paula from '../../assets/profile/paula.jpeg'
import rufaro from '../../assets/profile/rufaro.jpg'
import theo from '../../assets/profile/theo.jpg'

function Team() {
  return (
    <div className="team" id="team">
        <h2 className="title">Our Team</h2>
        <p className="description">Our diverse team works hard to bring you awesome tech to build your business on.</p>
        <div className="members">
            <div className="member">
                <div className="left">
                    <img src={kuda} alt="alternative" />
                </div>
                <div className="right">
                    <p className="name">Kudakwashe Musasiwa</p>
                    <p className="role">CEO</p>
                </div>
            </div>
            <div className="member">
                <div className="left">
                    <img src={rufaro} alt="alternative" />
                </div>
                <div className="right">
                    <p className="name">Rufaro Dhliwayo</p>
                    <p className="role">Technical Director</p>
                </div>
            </div>
            <div className="member">
                <div className="left">
                    <img src={bakani} alt="alternative" />
                </div>
                <div className="right">
                    <p className="name">Bakani Pilime</p>
                    <p className="role">Director {'&'} Senior Software Engineer</p>
                </div>
            </div>
            <div className="member">
                <div className="left">
                    <img src={cyprian} alt="alternative" />
                </div>
                <div className="right">
                    <p className="name">Cyprian Aarons</p>
                    <p className="role">Chief Technology Officer</p>
                </div>
            </div>
            <div className="member">
                <div className="left">
                    <img src={kudapara} alt="alternative" />
                </div>
                <div className="right">
                    <p className="name">Kudakwashe Paradzayi</p>
                    <p className="role">UI/UX Designer</p>
                </div>
            </div>
            <div className="member">
                <div className="left">
                    <img src={blessed} alt="alternative" />
                </div>
                <div className="right">
                    <p className="name">Blessed Mahuni</p>
                    <p className="role">Software Engineer</p>
                </div>
            </div>
            <div className="member">
                <div className="left">
                    <img src={theo} alt="alternative" />
                </div>
                <div className="right">
                    <p className="name">Theophilus Okoye</p>
                    <p className="role">Mobile App Developer</p>
                </div>
            </div>
            <div className="member">
                <div className="left">
                    <img src={paula} alt="alternative" />
                </div>
                <div className="right">
                    <p className="name">Pupurayi Marisa</p>
                    <p className="role">Intern</p>
                </div>
            </div>
            <div className="member">
                <div className="left">
                    <img src={lavenderZ} alt="alternative" />
                </div>
                <div className="right">
                    <p className="name">Lavender Tshuma</p>
                    <p className="role">Intern</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team