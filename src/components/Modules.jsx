import React from 'react';
import './Modules.css';

const Modules = () => {
  const modules = [
    { title: 'Upload Project', desc: 'Upload PDFs, SRS, PPTs, and links.', path: '/upload' },
    { title: 'Teacher Verification', desc: 'Teachers verify uploaded assets.', path: '/verify' },
    { title: 'Review Projects', desc: 'Review and shortlist student projects.', path: '/review' },
  ];

  return (
    <section className="modules">
      <h2>System Modules</h2>
      <div className="module-grid">
        {modules.map((mod, i) => (
          <div className="module-card" key={i}>
            <h3>{mod.title}</h3>
            <p>{mod.desc}</p>
            <a href={mod.path}>Explore</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Modules;
