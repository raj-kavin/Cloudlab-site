import React from 'react';
import '../css/faculty.css';

const Faculty = () => {
    return (
        <div className="faculty_container">
            <ul className="faculty_card">
                <li><img src="https://www.bitsathy.ac.in/wp-content/uploads/Mr-Nataraj-N.png" alt="faculty" />
                    <div className="faculty_details"><span className="faculty_name">Mr Nataraj N</span><span className="faculty_phone" >+91 9715114848</span> <span className="faculty_email" >nataraj@bitsathy.ac.in</span></div>
                </li>
                <li><img src="https://www.bitsathy.ac.in/wp-content/uploads/Ms-Poornima-A.jpg" alt="faculty" />
                    <div className="faculty_details"><span className="faculty_name">Ms Poornima A</span><span className="faculty_phone" >+91 9952641869</span> <span className="faculty_email" >poornimaa@bitsathy.ac.in</span></div>
                </li>
                <li><img src="https://www.bitsathy.ac.in/wp-content/uploads/Mrs-Nithya-R.jpg" alt="faculty" />
                    <div className="faculty_details"><span className="faculty_name">Ms Nithya R</span><span className="faculty_phone" >+91 9080816482</span> <span className="faculty_email" >nithyars@bitsathy.ac.in</span></div>
                </li>
            </ul>
        </div>
    )
}

export default Faculty