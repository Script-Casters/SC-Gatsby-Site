import React from "react";
import revdiamond from "../../images/rev-diamond.png";


const Intro = () => {
    return (
        <div>
            <h2 className="major">About</h2>
            <span className="image main">
        <img className="image fit right" src={revdiamond} alt=""/>
        </span>
            <p>Frankie Rodriguez is a Software Engineer based within Wilmington, DE and Philadelphia, PA. After
                dedicating himself to his education through a twelve-week intensive coding boot camp, Rodriguez has
                worked professionally and personally on his craft. He has been employed with CSC as a Software Engineer
                for nearly two years and also works as a Freelance Software Developer, outsourcing his skills to clients
                in need of application and web design. </p>
            <h3>BECOMING A SOFTWARE ENGINEER</h3>
            <p>While attending Lehigh University in Bethlehem, PA, Rodriguez majored in Computer Engineering. This major
                is an interdisciplinary between Computer Science and Electrical Engineering, with a stronger emphasis on
                Electrical Engineering. After taking up his first programming class in his junior year of college, a
                passion was ignited that Rodriguez couldn’t ignore. He desired a change in his major in order to focus
                solely on Computer Science, however, this had proven to be a difficult feat because he was so far into
                his college career. </p><p>Fear Not! </p><p>Rodriguez was fortunate enough to have the opportunity to
                attend <a href="https://www.zipcodewilmington.com" target="_blank" rel="noopener noreferrer">Zip Code Wilmington</a>
            , a vigorous, twelve-week coding boot camp that
            aims to turn its students into full stack developers, armed with the tools to enter the Software Development
            industry. He dedicated nearly 1200 hours to his passion and graduated the program in Spring 2018. Shortly
            after, Rodriguez began work at Corporation Service Company (CSC). </p>
            <h3>PRESENT EMPLOYMENT</h3>
            <p>
                Rodriguez is currently employed at Corporation Service Company (CSC) as an Associate Software Engineer.
                At CSC, Rodriguez is responsible for the maintenance and development of a full-stack application that
                includes an Angular front end, Spring API, and an Oracle Database. In addition to the primary stack of
                this internal-facing application, his team also responsible for the maintenance and development of a
                legacy Java application. Aside from his daily development responsibility, he has assisted on many
                projects that have guided his team into a more updated state of operation. Some examples of this include
                migrating the team’s SVN repositories over to Github, establishing Jenkins deployment pipelines to
                support the newly migrated codebases, and assisted in the documentation of standard development
                practices.
            </p>
            <p>One of Rodriguez’s most notable contributions to CSC, outside of his team-related responsibilities, was
                his participation in an internally-operated hackathon. On a team of five, he was tasked with creating a
                desk reservation system that would assist CSC employees in reserving available/open desks in HQ.
                Although the functionality of the application was minimal at the end of the competition due to the time
                constraint, the decision was made to continue work on the application in order to bring this service to
                life for CSC employees.</p>

        </div>
    );
};

export default Intro;
