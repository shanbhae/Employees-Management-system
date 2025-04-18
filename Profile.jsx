import React from 'react';
import Header from '../Others/Header';




function Profile(props) {
    return (
        <div>
            <Header changeUser={props.changeUser}/>
        <div className="max-w-4xl mx-auto mt-10 bg-[#686666] rounded-xl px-4 py-4  shadow-lg">
      <h2 className="text-3xl font-bold mb-6 border-b pb-2">Zeeshan Iqbal</h2>
      
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Contact</h3>
        <p>Email: izeeshaniqbal148@gmail.com</p>
        <p>Phone: +92330 6166820</p>
        <p>Location: Lahore</p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Summary</h3>
        <p>Creative and detail-oriented Frontend Developer with a strong foundation in React.Js and a passion for crafting responsive, user-friendly web interfaces. Proficient in modern frameworks like React.js and experienced in building clean, accessible, and performance-optimized websites. Quick learner, team player, and highly motivated to grow in a fast-paced development environment.</p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        <ul className="list-disc list-inside">
        <li>HTML, CSS5</li>
        <li>JavaScript</li>
        <li>React.js</li>
          <li>Tailwind CSS, BootStrap</li>
          <li>Git, GitHub</li>
          <li>VS code </li>
          <li>Responsive Design, FIGMA and Chrome DevTools</li>
          <li>Knowledge About JSON and APIs</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Experience</h3>
        <div>
          <h4 className="font-bold">Senior Developer — XYZ Corp</h4>
          <p className="text-sm text-gray-600">Jan 2020 - Present</p>
          <ul className="list-disc list-inside ml-4">
            <li>Led front-end development with React and Redux.</li>
            <li>Optimized application performance by 30%.</li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Education</h3>
        <div>
          <h4 className="font-bold">BSCS — Lahore Leads Univercity</h4>
          <p className="text-sm text-gray-600">2023 - 2027</p>
        </div>
        <div>
          <h4 className="font-bold">InterMadiate — Govt Degree Collage Chowk Azam Layyah</h4>
          <p className="text-sm text-gray-600">2021 - 2023</p>
        </div>
        <div>
          <h4 className="font-bold">Matriculation — Govt Muslim School Chowk Azam Layyah</h4>
          <p className="text-sm text-gray-600">2019 - 2021</p>
        </div>
      </section>
    </div>

    </div>
  );
}

export default Profile;
