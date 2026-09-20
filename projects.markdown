---
layout: page
title: Selected Work
permalink: /projects/
back_anchor: work
description: Selected iOS product, architecture, and delivery work by Xukui (Kusch) Qin at Wyze.
---

<header class="page-header">
  <p class="section-kicker">Selected work</p>
  <h1>Building the product—and the system behind it.</h1>
  <p class="page-subtitle">
    A concise view of my work on the Wyze iOS app. Product details remain intentionally
    high-level to respect customer privacy and company confidentiality.
  </p>
</header>

<div class="detail-grid">
  <article class="detail-card">
    <span class="project-index">01 · Video discovery</span>
    <h2>Video Search</h2>
    <p>Expanded search with per-device settings, interactive filters, feedback flows, and more dependable event access and pagination.</p>
    <ul>
      <li>Turned a complex search surface into a more controllable, device-aware experience.</li>
      <li>Improved edge-case handling across loading, access, and paginated results.</li>
      <li>Created clearer feedback loops between customers and the evolving search system.</li>
    </ul>
    <div class="work-tags"><span>Swift</span><span>Search UX</span><span>Pagination</span></div>
  </article>

  <article class="detail-card">
    <span class="project-index">02 · Intelligent events</span>
    <h2>Friendly Faces &amp; Descriptive Alerts</h2>
    <p>Built interfaces that help customers manage recognized faces and understand richer, AI-generated event context.</p>
    <ul>
      <li>Delivered face registration, profile detail, editing, and event-filter experiences.</li>
      <li>Refined alert components for clarity and scannability.</li>
      <li>Improved cache behavior around frequently used face data.</li>
    </ul>
    <div class="work-tags"><span>UIKit</span><span>Applied AI</span><span>State</span></div>
  </article>

  <article class="detail-card">
    <span class="project-index">03 · App architecture</span>
    <h2>Repository-based data flow</h2>
    <p>Introduced a clearer boundary between view models and data access to make feature behavior easier to reason about and evolve.</p>
    <ul>
      <li>Centralized caching and data-fetching decisions behind reusable interfaces.</li>
      <li>Reduced redundant network activity and its associated cloud cost.</li>
      <li>Simplified state ownership for product features using the shared layer.</li>
    </ul>
    <div class="work-tags"><span>Architecture</span><span>Caching</span><span>Performance</span></div>
  </article>

  <article class="detail-card">
    <span class="project-index">04 · Engineering systems</span>
    <h2>Release quality</h2>
    <p>Strengthened the path from development to production through better automated coverage, analytics validation, and build reliability.</p>
    <ul>
      <li>Added a Firebase DebugView workflow for earlier analytics validation.</li>
      <li>Expanded automated tests around customer-facing behavior.</li>
      <li>Resolved recurring build-machine problems that disrupted release work.</li>
    </ul>
    <div class="work-tags"><span>CI/CD</span><span>Firebase</span><span>Testing</span></div>
  </article>
</div>

<aside class="context-note">
  <span class="meta-label">Earlier product work</span>
  <p>I also contributed to the Roku × Wyze integration, Cam Plus Pro rule editing, Japanese localization, and early chatbot and speech-recognition prototypes.</p>
</aside>
