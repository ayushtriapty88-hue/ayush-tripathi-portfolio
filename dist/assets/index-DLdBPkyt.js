(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.addEventListener(`DOMContentLoaded`,()=>{let e=document.getElementById(`mobile-toggle`),t=document.querySelector(`.nav-links`);e&&t&&(e.addEventListener(`click`,()=>{t.classList.toggle(`active`)}),t.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,()=>{t.classList.remove(`active`)})}));let n=document.querySelectorAll(`.tab-btn`),r=document.querySelectorAll(`.project-card`);n.forEach(e=>{e.addEventListener(`click`,()=>{n.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=e.getAttribute(`data-filter`);r.forEach(e=>{let n=e.getAttribute(`data-category`);t===`all`||n&&n.includes(t)?(e.style.display=`flex`,e.style.animation=`fadeIn 0.4s ease forwards`):e.style.display=`none`})})});let i={"modal-robot":{title:`Self-Balancing Robot`,category:`Hardware / Embedded C++`,tech:[`C++`,`Arduino`,`MPU6050 IMU`,`PID Control`,`Gyroscope/Accelerometer`],description:`
        <p>A two-wheeled self-balancing robot engineered from scratch utilizing an Arduino microcontroller and an MPU6050 6-axis Inertial Measurement Unit (IMU).</p>
        <br>
        <h4>Key Technical Features:</h4>
        <ul style="padding-left: 1.2rem; margin-top: 0.5rem;">
          <li>Real-time sensor fusion combining accelerometer and gyroscope data via complimentary filtering.</li>
          <li>Continuous closed-loop Proportional-Integral-Derivative (PID) control algorithm written in high-performance C++.</li>
          <li>Instant PWM motor direction and speed calibration maintaining equilibrium despite external perturbations.</li>
        </ul>
      `},"modal-property":{title:`Smart Property Identification`,category:`Government Project under Yantrikaran Innovation`,tech:[`Python`,`SegFormer`,`Google Earth Engine`,`SpaceNet`,`Sentinel-2 Satellite`],description:`
        <p>An urban monitoring geospatial computer vision pipeline designed for municipal property tax assessment and satellite imagery analysis in Andhra Pradesh.</p>
        <br>
        <h4>Key Technical Features:</h4>
        <ul style="padding-left: 1.2rem; margin-top: 0.5rem;">
          <li>Fine-tuned SegFormer semantic segmentation model trained on high-resolution SpaceNet building footprints.</li>
          <li>Automated Google Earth Engine API integration fetching Sentinel-2 multi-spectral imagery.</li>
          <li>Accurate building boundary detection and property change tracking across historical timeline imagery.</li>
        </ul>
      `},"modal-chatbot":{title:`Mental Health Consultation Chatbot`,category:`AI / LLM & Natural Language Processing`,tech:[`Python`,`Gemini API`,`BlenderBot`,`Hugging Face`,`Kaggle Datasets`],description:`
        <p>An empathetic AI-driven mental health consultation assistant built to provide accessible, non-judgmental guidance and psychological coping strategies.</p>
        <br>
        <h4>Key Technical Features:</h4>
        <ul style="padding-left: 1.2rem; margin-top: 0.5rem;">
          <li>Integration with Google Gemini API and Meta's BlenderBot LLM fine-tuned for supportive conversations.</li>
          <li>Custom preprocessed conversation datasets sourced from Hugging Face & Kaggle.</li>
          <li>Safety guardrails detecting crisis signals with automatic escalation resource prompts.</li>
        </ul>
      `},"modal-clinical":{title:`Clinical Decision Support Engine`,category:`Healthcare AI Prototype`,tech:[`Python`,`Gemini API`,`React.js`,`Healthcare Data Standards`,`NLP`],description:`
        <p>A smart healthcare assistant connecting doctors' prescriptions with real-time patient history and insurance policy verification.</p>
        <br>
        <h4>Key Technical Features:</h4>
        <ul style="padding-left: 1.2rem; margin-top: 0.5rem;">
          <li>Optical Character Recognition (OCR) and Gemini API structured JSON extraction from medical prescriptions.</li>
          <li>Automated insurance rule engine matching prescribed treatments against active coverage policies.</li>
          <li>Responsive React frontend providing clear diagnostic recommendations and drug-interaction warnings.</li>
        </ul>
      `},"modal-khasi":{title:`Khasi Language Translator & ASR Data Pipeline`,category:`NLP & Speech Recognition`,tech:[`Python`,`PyTorch`,`Hugging Face`,`ASR`,`Audio Signal Processing`],description:`
        <p>A natural language processing data pipeline aimed at empowering low-resource indigenous language speech processing for Khasi (Meghalaya, India).</p>
        <br>
        <h4>Key Technical Features:</h4>
        <ul style="padding-left: 1.2rem; margin-top: 0.5rem;">
          <li>Verbatim alignment and phoneme transcription of Khasi (Latin alphabet) and English audio clips.</li>
          <li>Dataset creation for training PyTorch Automated Speech Recognition (ASR) acoustic models.</li>
          <li>Data augmentation techniques (noise injection, pitch shifting) to improve model robustness.</li>
        </ul>
      `},"modal-facerecog":{title:`Face Recognition Security System`,category:`Real-Time Computer Vision`,tech:[`Python`,`OpenCV`,`Computer Vision`,`Haar Cascades / Deep Embeddings`,`Access Control`],description:`
        <p>A computer vision security solution for automated facial recognition-based biometric access control.</p>
        <br>
        <h4>Key Technical Features:</h4>
        <ul style="padding-left: 1.2rem; margin-top: 0.5rem;">
          <li>Real-time video feed capture using OpenCV with 60 FPS face detection.</li>
          <li>Facial embedding vector distance matching against registered user databases.</li>
          <li>Automated entry logging, intruder alerting, and access permission management interface.</li>
        </ul>
      `}},a=document.getElementById(`project-detail-modal`),o=document.getElementById(`modal-project-title`),s=document.getElementById(`modal-project-body`);document.querySelectorAll(`.btn-project-details`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-modal`),n=i[t];if(n&&a){o.innerHTML=`<i class="fa-solid fa-code-branch"></i> ${n.title}`;let e=n.tech.map(e=>`<span class="skill-tag" style="display:inline-flex; margin: 0.2rem;">${e}</span>`).join(``);s.innerHTML=`
          <div style="margin-bottom: 1rem;">
            <span style="font-size: 0.85rem; color: var(--accent-cyan); font-weight: 600;">${n.category}</span>
          </div>
          ${n.description}
          <div style="margin-top: 1.5rem;">
            <h4 style="margin-bottom: 0.5rem;">Technologies Used:</h4>
            <div>${e}</div>
          </div>
        `,a.classList.add(`active`)}})});let c=document.getElementById(`open-resume-btn`),l=document.getElementById(`resume-modal`);c&&l&&c.addEventListener(`click`,()=>{l.classList.add(`active`)}),document.querySelectorAll(`.modal`).forEach(e=>{let t=e.querySelectorAll(`.modal-close`),n=e.querySelector(`.modal-overlay`);t.forEach(t=>{t.addEventListener(`click`,()=>e.classList.remove(`active`))}),n&&n.addEventListener(`click`,()=>e.classList.remove(`active`))});let u=document.getElementById(`contact-form`),d=document.getElementById(`form-alert`);u&&d&&u.addEventListener(`submit`,e=>{e.preventDefault(),d.className=`form-alert success`,d.innerHTML=`<i class="fa-solid fa-circle-check"></i> Thank you! Your message has been sent successfully. Ayush will get back to you shortly.`,u.reset(),setTimeout(()=>{d.style.display=`none`},5e3)})});