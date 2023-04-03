import React from 'react';
import Rewards from './Rewards';
import '../App.css';

const RewardsWhole = () => {
  return (
    <section className='rewards-section' id='rewards-section'>
          <div className='rewards-header'>
            <h2>Rewards & Recognition</h2>
          </div>

          <div id="rewards-container" className='rewards-container'>
            <Rewards
              image='./images/achievements/skill1.png'
              comp_name='Skill Competition'
              description='India Skill Competition Selected For National Level'
            />
            <Rewards
              image='./images/achievements/skill2.png'
              comp_name='Hack O Heist'
              description='Ms. Swetha S from the Cloud Computing Lab participated and won the First Position
                on Aug 12, 2022.'
            />
            <Rewards
              image='./images/achievements/skill3.png'
              comp_name='IET Pentathon'
              description='Students from Cloud computing lab won third prize with a cash amount of Rs.10,000 in
                  Hackathon.'
            />
            
            <Rewards
              image='./images/achievements/skill5.png'
              comp_name="Prayantna'23 PSG"
              description='Cloud computing lab Student Mr.Darshan L (7376212IT117) secured 2rd prize
              with a cash amount of Rs 3,000 in “VISHVAM : DATA ANALYSIS”
              Prayantna’23 contest organized by PSG College Of Technology held on 18th Feb
              2023 and 19th Feb 2023.'
            />
            <Rewards
              image='./images/achievements/skill4.png'
              comp_name="BRICS INTERNATIONAL SKILL"
              description='Mr.Kishore D from Cloud computing lab won bronze-medal in BRICS
              INTERNATIONAL SKILL challenge in cloud computing. The
              event was organized by china.'
            />
            <Rewards
              image='./images/achievements/skill6.png'
              comp_name="LABYRINTH"
              description='Mr.Kedarnaath M from Cloud computing lab won 3rd Place in
              technical event LABYRINTH. The event was organized by petrichor 23 techno-
              cultural fest of IIT palakkad on 4 th and 5 th February, 2023.'
            />
            <Rewards
              image='./images/achievements/skill7.png'
              comp_name="SRISHTI2k22"
              description='Mr. Sai Prashanth K & Mr. Sairagul K from Cloud Computing lab
              has won technical event "Euclidea" in SRISHTI2k22 organized by PSG college of Technology'
            />
            <Rewards
              image='./images/achievements/skill8.png'
              comp_name="LABYRINTH"
              description='Mr.Kedarnaath M from Cloud computing lab won 3rd Place in
              technical event LABYRINTH. The event was organized by petrichor 23 techno-
              cultural fest of IIT palakkad on 4 th and 5 th February, 2023.'
            />
            <Rewards
              image='./images/achievements/skill9.png'
              comp_name="RSP conference hub"
              description='Mr.Sai Prashanth K from Cloud computing lab won Best presentation award in
              Second International Conference on Advances in Engineering and Technology.
              The conference was conducted by RSP conference hub on 30th september, 2022.'
            />
             <Rewards
              image='./images/achievements/skill10.png'
              comp_name="ECOTHON 2022"
              description='Won First Prize in ECOTHON 2022  held at Jain University'
            />
            <Rewards
              image='./images/achievements/skill11.png'
              comp_name="DATATHON 2023"
              description='Won  Second Prize ( Second Runner Up) with Cash award of Rs.5000 in Datathon - 2023'
            />
            <Rewards
              image='./images/achievements/skill12.png'
              comp_name="Smart India Hackathon"
              description='Students from Cloud Lab participated in Smart India Hackathon grand finale'
            />
            <Rewards
              image='./images/achievements/skill13.png'
              comp_name="BRICS INTERNATIONAL SKILL"
              description='Mr.RAMESH RAJA K & Ms.SWASHTHIKA A from Cloud computing lab won the
              Medal OF EXCELLENCE in BRICS INTERNATIONAL SKILL
              Challege in mobile app development. The event was organized
              by china'
            />
            <Rewards
              image='./images/achievements/skill14.png'
              comp_name="INVENTE'22"
              description='Mr.Sairagul K, Mr.Sai Prashanth K, Mr.Guruprasath M from the Cloud
              computing lab won the INVENTE’22 NATIONAL SKILL CHALLENGE IN
              DE-BUGGING.SSN,Chennai Organized the event'
            />
            <Rewards
              image='./images/achievements/skill15.png'
              comp_name="IIRM-Skill Development Trust"
              description='Ms. NITHYARUBINI from the Cloud Computing Lab has participated and won best
              paper award in the International Conference organized by
              INTERNATIONAL INSTITUTE OF RESEARCH IN MULTIDISCIPLINARY -
              SKILL DEVELOPMENT TRUST'
            />
          </div>
        </section>
  )
}

export default RewardsWhole