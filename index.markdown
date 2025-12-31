---
layout: default
title: Home
---

<section id="home" class="hero">
  <div class="wrapper">
    <div class="hero-content">
      <div class="hero-text">
        <h1>
          Building <span class="highlight">Smart Home Security</span> for American Homes
        </h1>
        <p class="subtitle">
          I'm a Software Engineer at Wyze, developing iOS applications that power smart home 
          security cameras and devices. My work helps protect millions of households across 
          the United States through innovative mobile solutions for home monitoring and safety.
        </p>
        <div class="credentials">
          <span class="credential-badge">
            <span class="icon">🏢</span> Wyze
          </span>
          <span class="credential-badge">
            <span class="icon">🎓</span> M.S. Computer Science, GWU
          </span>
          <span class="credential-badge">
            <span class="icon">📱</span> iOS Development
          </span>
        </div>
        <div class="cta-group">
          <a href="#projects" class="btn btn-primary">View My Work →</a>
          <a href="#about" class="btn btn-secondary">About Me</a>
        </div>
      </div>
      <div class="hero-image">
        <img src="/Kusch_Qin_pic.jpg" alt="Kusch Qin - Software Engineer" class="headshot">
      </div>
    </div>
  </div>
</section>

<section id="about" class="section">
  <div class="wrapper">


    <h3 style="margin-top: 3rem; margin-bottom: 1.5rem;">Professional Experience</h3>

    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-date">Nov 2024 — Present</div>
        <h3 class="timeline-title">Software Engineer II</h3>
        <div class="timeline-company">Wyze | United States</div>
        <div class="timeline-description">
          <ul>
            <li>Refactored view-model management and introduced a <strong>modern repository pattern</strong> to improve caching and data handling, reducing network calls and cutting cloud costs</li>
            <li>Enhanced <strong>Video Search</strong> functionality with per-device settings, interactive filters, and improved pagination</li>
            <li>Improved <strong>Descriptive Alerts</strong> UI components for clearer, context-rich event descriptions</li>
          </ul>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-date">May 2023 — Oct 2024</div>
        <h3 class="timeline-title">Software Engineer</h3>
        <div class="timeline-company">Wyze | United States</div>
        <div class="timeline-description">
          <ul>
            <li>Developed the <strong>Friendly Faces</strong> experience, including event-filter UIs and registration/detail/edit flows</li>
            <li>Worked on the foundational <strong>Chatbot framework</strong> and <strong>Automatic Speech Recognition</strong> proofs-of-concept</li>
            <li>Improved the <strong>CI/CD pipeline</strong> by adding Firebase Debug View workflow and expanding automated test coverage</li>
          </ul>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-date">May 2022 — May 2023</div>
        <h3 class="timeline-title">Software Engineer Intern</h3>
        <div class="timeline-company">Wyze | United States</div>
        <div class="timeline-description">
          <ul>
            <li>Implemented new iOS features and addressed <strong>~30 bugs</strong> for the <strong>Roku × Wyze integration</strong></li>
            <li>Developed the <strong>Wyze Cam Plus Pro</strong> rule-editing interface</li>
            <li>Internationalized the iOS app, enabling <strong>Japanese localization</strong></li>
          </ul>
        </div>
      </div>
    </div>

    <h3 style="margin-top: 3rem; margin-bottom: 1.5rem;">Education</h3>

    <div class="card-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
      <div class="card">
        <h3 class="card-title">M.S. Computer Science</h3>
        <p style="color: var(--accent-primary); margin: 0.5rem 0;">The George Washington University</p>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Washington, D.C. | 2021 — 2023</p>
      </div>
      
      <div class="card">
        <h3 class="card-title">M.S. Chemistry</h3>
        <p style="color: var(--accent-primary); margin: 0.5rem 0;">Washington University in St. Louis</p>
        <p style="color: var(--text-muted); font-size: 0.9rem;">St. Louis, MO | 2019 — 2021</p>
      </div>
      
      <div class="card">
        <h3 class="card-title">B.S. Chemical Biology</h3>
        <p style="color: var(--accent-primary); margin: 0.5rem 0;">Xiamen University</p>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Xiamen, China | 2015 — 2019</p>
      </div>
    </div>

    <h3 style="margin-top: 3rem; margin-bottom: 1.5rem;">Technical Skills</h3>

    <div class="skills-grid">
      <div class="skill-category">
        <h4>Languages</h4>
        <div class="skill-list">
          <span>Swift</span>
          <span>Objective-C</span>
          <span>Ruby</span>
          <span>Python</span>
        </div>
      </div>
      
      <div class="skill-category">
        <h4>iOS Development</h4>
        <div class="skill-list">
          <span>SwiftUI</span>
          <span>UIKit</span>
          <span>Xcode</span>
          <span>Cocoapods</span>
        </div>
      </div>
      
      <div class="skill-category">
        <h4>Tools & Practices</h4>
        <div class="skill-list">
          <span>Git</span>
          <span>CI/CD</span>
          <span>Firebase</span>
          <span>TestFlight</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="projects" class="section alt-bg">
  <div class="wrapper">
    <div class="section-header">
      <h2>Projects & <span class="accent">Contributions</span></h2>
      <p class="section-subtitle">
        Professional work at Wyze and personal projects
      </p>
    </div>

    <h3 style="margin-bottom: 1.5rem;">Featured Wyze Projects</h3>

    <div class="card-grid">
      <div class="card">
        <div class="card-icon">👤</div>
        <h3 class="card-title">Friendly Faces</h3>
        <p class="card-description">
          Developed the complete Friendly Faces experience for facial recognition in security 
          camera alerts, including event-filter UIs, registration flows, and management interfaces.
        </p>
        <div class="card-tags">
          <span class="tag">Swift</span>
          <span class="tag">Face Recognition</span>
          <span class="tag">Caching</span>
        </div>
      </div>
      
      <div class="card">
        <div class="card-icon">🔍</div>
        <h3 class="card-title">Video Search Enhancement</h3>
        <p class="card-description">
          Enhanced Video Search with per-device settings, interactive filters, feedback prompts, 
          and improved pagination handling.
        </p>
        <div class="card-tags">
          <span class="tag">Swift</span>
          <span class="tag">Search</span>
          <span class="tag">UX</span>
        </div>
      </div>
      
      <div class="card">
        <div class="card-icon">🔔</div>
        <h3 class="card-title">Descriptive Alerts</h3>
        <p class="card-description">
          Improved alert UI components for clearer, context-rich event descriptions that help 
          users quickly understand security notifications.
        </p>
        <div class="card-tags">
          <span class="tag">Swift</span>
          <span class="tag">UI/UX</span>
          <span class="tag">Notifications</span>
        </div>
      </div>

      <div class="card">
        <div class="card-icon">🤖</div>
        <h3 class="card-title">Chatbot & ASR Framework</h3>
        <p class="card-description">
          Worked on foundational Chatbot framework and Automatic Speech Recognition proofs-of-concept, 
          integrating streaming APIs and evaluating voice-driven interactions.
        </p>
        <div class="card-tags">
          <span class="tag">Swift</span>
          <span class="tag">ASR</span>
          <span class="tag">Streaming</span>
        </div>
      </div>
      
      <div class="card">
        <div class="card-icon">📺</div>
        <h3 class="card-title">Roku × Wyze Integration</h3>
        <p class="card-description">
          Implemented iOS features and resolved ~30 bugs for the Roku × Wyze integration, 
          enabling users to view camera feeds directly on Roku devices.
        </p>
        <div class="card-tags">
          <span class="tag">Swift</span>
          <span class="tag">Roku</span>
          <span class="tag">Integration</span>
        </div>
      </div>
      
      <div class="card">
        <div class="card-icon">🏗️</div>
        <h3 class="card-title">Repository Pattern Architecture</h3>
        <p class="card-description">
          Refactored view-model management and introduced modern repository pattern to improve 
          caching and data handling, reducing network calls and cloud costs.
        </p>
        <div class="card-tags">
          <span class="tag">Architecture</span>
          <span class="tag">Caching</span>
          <span class="tag">Performance</span>
        </div>
      </div>
    </div>

    <h3 style="margin-top: 3rem; margin-bottom: 1.5rem;">Personal Projects</h3>

    <div class="card-grid">
      <div class="card">
        <div class="card-icon">📦</div>
        <h3 class="card-title">Mail Package Protection System</h3>
        <p class="card-description">
          IoT-based security system using Arduino and Raspberry Pi with pressure sensors 
          that trigger camera capture and automatic email delivery.
        </p>
        <div class="card-tags">
          <span class="tag">Python</span>
          <span class="tag">C</span>
          <span class="tag">Arduino</span>
          <span class="tag">IoT</span>
        </div>
      </div>
      
      <div class="card">
        <div class="card-icon">🐦</div>
        <h3 class="card-title">TwitterLite</h3>
        <p class="card-description">
          Social media application using Swift with Twitter API, featuring infinite scrolling, 
          like/tweet/retweet functionality, and Twitter account integration.
        </p>
        <div class="card-tags">
          <span class="tag">Swift</span>
          <span class="tag">Xcode</span>
          <span class="tag">Twitter API</span>
        </div>
      </div>
      
      <div class="card">
        <div class="card-icon">🥽</div>
        <h3 class="card-title">VR Navigation Simulator</h3>
        <p class="card-description">
          Virtual reality in-building exploring simulator for GWU campus with teleport navigation, 
          6DOF hand-tracking, and 3D scanned environment reconstruction.
        </p>
        <div class="card-tags">
          <span class="tag">C#</span>
          <span class="tag">Unity</span>
          <span class="tag">VR</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="publications" class="section">
  <div class="wrapper">
    <div class="section-header">
      <h2>Publications & <span class="accent">Research</span></h2>
      <p class="section-subtitle">
        Academic research contributions indexed on Google Scholar
      </p>
    </div>

    <div class="highlight-box">
      <h3>📚 Google Scholar Profile</h3>
      <p>
        View my complete publication record and citation metrics on Google Scholar.
      </p>
      <a href="https://scholar.google.com/citations?user=qBpKisAAAAAJ&hl=en" target="_blank" class="btn btn-primary" style="margin-top: 1rem;">
        View Google Scholar Profile →
      </a>
    </div>

    <h3 style="margin-top: 3rem; margin-bottom: 1.5rem;">Selected Publications</h3>

    <div class="card" style="margin-bottom: 1.5rem;">
      <span style="display: inline-block; padding: 0.3rem 0.8rem; background: rgba(14, 165, 233, 0.15); color: var(--accent-secondary); border-radius: 20px; font-size: 0.8rem; font-weight: 600; margin-bottom: 1rem;">arXiv Preprint</span>
      <h3 class="card-title" style="margin-top: 0.5rem;">SETransformer: A hybrid attention-based architecture for robust human activity recognition</h3>
      <p class="card-description" style="margin: 0.75rem 0;">
        <strong>Y. Liu</strong>, <strong>X. Qin</strong>, Y. Gao, X. Li, C. Feng
      </p>
      <p style="color: var(--text-muted); font-size: 0.9rem; font-style: italic; margin: 0.5rem 0;">
        arXiv preprint arXiv:2505.19369, 2025
      </p>
      <a href="https://arxiv.org/abs/2505.19369" target="_blank" class="btn btn-secondary" style="margin-top: 1rem; display: inline-block;">
        View Paper →
      </a>
    </div>

    <div class="card" style="margin-bottom: 1.5rem;">
      <span style="display: inline-block; padding: 0.3rem 0.8rem; background: rgba(14, 165, 233, 0.15); color: var(--accent-secondary); border-radius: 20px; font-size: 0.8rem; font-weight: 600; margin-bottom: 1rem;">Journal Article</span>
      <h3 class="card-title" style="margin-top: 0.5rem;">Saliency-Driven Multi-Scale Feature Discrepancy Fusion for Fine-Grained Video Anomaly Detection</h3>
      <p class="card-description" style="margin: 0.75rem 0;">
        <strong>X. Qin</strong>
      </p>
      <p style="color: var(--text-muted); font-size: 0.9rem; font-style: italic; margin: 0.5rem 0;">
        INNO-PRESS: Journal of Emerging Applied AI, 1(1)
      </p>
      <a href="https://www.inno-press.com/index.php/JAAI/article/download/25/2" target="_blank" class="btn btn-secondary" style="margin-top: 1rem; display: inline-block;">
        View Paper →
      </a>
    </div>
  </div>
</section>

<section id="contact" class="contact-section">
  <div class="wrapper">
    <h2>Get in Touch</h2>
    <p style="color: var(--text-secondary); max-width: 500px; margin: 0 auto 2rem;">
      I'm always interested in discussing iOS development, smart home technology, 
      and opportunities to collaborate.
    </p>
    <div class="contact-links">
      <a href="mailto:kuschqin@gmail.com">
        ✉️ Email
      </a>
      <a href="https://github.com/kuscholar" target="_blank">
        💻 GitHub
      </a>
      <a href="https://www.linkedin.com/in/kusch-qin/" target="_blank">
        💼 LinkedIn
      </a>
      <a href="https://scholar.google.com/citations?user=qBpKisAAAAAJ&hl=en" target="_blank">
        📚 Google Scholar
      </a>
    </div>
  </div>
</section>
