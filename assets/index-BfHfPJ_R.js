(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const m=document.getElementById("mobile-toggle"),a=document.querySelector(".nav-links");m&&a&&(m.addEventListener("click",()=>{a.classList.toggle("active")}),a.querySelectorAll("a").forEach(t=>{t.addEventListener("click",()=>{a.classList.remove("active")})}));const s=document.querySelectorAll(".tab-btn"),c=document.querySelectorAll(".project-card");s.forEach(t=>{t.addEventListener("click",()=>{s.forEach(i=>i.classList.remove("active")),t.classList.add("active");const o=t.getAttribute("data-filter");c.forEach(i=>{const r=i.getAttribute("data-category");o==="all"||r&&r.includes(o)?(i.style.display="flex",i.style.animation="fadeIn 0.4s ease forwards"):i.style.display="none"})})});const e={"modal-robot":{title:"Self-Balancing Robot",category:"Hardware / Embedded C++",tech:["C++","Arduino","MPU6050 IMU","PID Control","Gyroscope/Accelerometer"],description:`
        <p>A two-wheeled self-balancing robot engineered from scratch utilizing an Arduino microcontroller and an MPU6050 6-axis Inertial Measurement Unit (IMU).</p>
        <br>
        <h4>Key Technical Features:</h4>
        <ul style="padding-left: 1.2rem; margin-top: 0.5rem;">
          <li>Real-time sensor fusion combining accelerometer and gyroscope data via complimentary filtering.</li>
          <li>Continuous closed-loop Proportional-Integral-Derivative (PID) control algorithm written in high-performance C++.</li>
          <li>Instant PWM motor direction and speed calibration maintaining equilibrium despite external perturbations.</li>
        </ul>
      `},"modal-property":{title:"Smart Property Identification",category:"Government Project under Yantrikaran Innovation",tech:["Python","SegFormer","Google Earth Engine","SpaceNet","Sentinel-2 Satellite"],description:`
        <p>An urban monitoring geospatial computer vision pipeline designed for municipal property tax assessment and satellite imagery analysis in Andhra Pradesh.</p>
        <br>
        <h4>Key Technical Features:</h4>
        <ul style="padding-left: 1.2rem; margin-top: 0.5rem;">
          <li>Fine-tuned SegFormer semantic segmentation model trained on high-resolution SpaceNet building footprints.</li>
          <li>Automated Google Earth Engine API integration fetching Sentinel-2 multi-spectral imagery.</li>
          <li>Accurate building boundary detection and property change tracking across historical timeline imagery.</li>
        </ul>
      `},"modal-chatbot":{title:"Mental Health Consultation Chatbot",category:"AI / LLM & Natural Language Processing",tech:["Python","Gemini API","BlenderBot","Hugging Face","Kaggle Datasets"],description:`
        <p>An empathetic AI-driven mental health consultation assistant built to provide accessible, non-judgmental guidance and psychological coping strategies.</p>
        <br>
        <h4>Key Technical Features:</h4>
        <ul style="padding-left: 1.2rem; margin-top: 0.5rem;">
          <li>Integration with Google Gemini API and Meta's BlenderBot LLM fine-tuned for supportive conversations.</li>
          <li>Custom preprocessed conversation datasets sourced from Hugging Face & Kaggle.</li>
          <li>Safety guardrails detecting crisis signals with automatic escalation resource prompts.</li>
        </ul>
      `},"modal-clinical":{title:"Clinical Decision Support Engine",category:"Healthcare AI Prototype",tech:["Python","Gemini API","React.js","Healthcare Data Standards","NLP"],description:`
        <p>A smart healthcare assistant connecting doctors' prescriptions with real-time patient history and insurance policy verification.</p>
        <br>
        <h4>Key Technical Features:</h4>
        <ul style="padding-left: 1.2rem; margin-top: 0.5rem;">
          <li>Optical Character Recognition (OCR) and Gemini API structured JSON extraction from medical prescriptions.</li>
          <li>Automated insurance rule engine matching prescribed treatments against active coverage policies.</li>
          <li>Responsive React frontend providing clear diagnostic recommendations and drug-interaction warnings.</li>
        </ul>
      `},"modal-khasi":{title:"Khasi Language Translator & ASR Data Pipeline",category:"NLP & Speech Recognition",tech:["Python","PyTorch","Hugging Face","ASR","Audio Signal Processing"],description:`
        <p>A natural language processing data pipeline aimed at empowering low-resource indigenous language speech processing for Khasi (Meghalaya, India).</p>
        <br>
        <h4>Key Technical Features:</h4>
        <ul style="padding-left: 1.2rem; margin-top: 0.5rem;">
          <li>Verbatim alignment and phoneme transcription of Khasi (Latin alphabet) and English audio clips.</li>
          <li>Dataset creation for training PyTorch Automated Speech Recognition (ASR) acoustic models.</li>
          <li>Data augmentation techniques (noise injection, pitch shifting) to improve model robustness.</li>
        </ul>
      `},"modal-facerecog":{title:"Face Recognition Security System",category:"Real-Time Computer Vision",tech:["Python","OpenCV","Computer Vision","Haar Cascades / Deep Embeddings","Access Control"],description:`
        <p>A computer vision security solution for automated facial recognition-based biometric access control.</p>
        <br>
        <h4>Key Technical Features:</h4>
        <ul style="padding-left: 1.2rem; margin-top: 0.5rem;">
          <li>Real-time video feed capture using OpenCV with 60 FPS face detection.</li>
          <li>Facial embedding vector distance matching against registered user databases.</li>
          <li>Automated entry logging, intruder alerting, and access permission management interface.</li>
        </ul>
      `}},n=document.getElementById("project-detail-modal"),l=document.getElementById("modal-project-title"),h=document.getElementById("modal-project-body");document.querySelectorAll(".btn-project-details").forEach(t=>{t.addEventListener("click",()=>{const o=t.getAttribute("data-modal"),i=e[o];if(i&&n){l.innerHTML=`<i class="fa-solid fa-code-branch"></i> ${i.title}`;let r=i.tech.map(y=>`<span class="skill-tag" style="display:inline-flex; margin: 0.2rem;">${y}</span>`).join("");h.innerHTML=`
          <div style="margin-bottom: 1rem;">
            <span style="font-size: 0.85rem; color: var(--accent-cyan); font-weight: 600;">${i.category}</span>
          </div>
          ${i.description}
          <div style="margin-top: 1.5rem;">
            <h4 style="margin-bottom: 0.5rem;">Technologies Used:</h4>
            <div>${r}</div>
          </div>
        `,n.classList.add("active")}})});const g=document.getElementById("open-resume-btn"),p=document.getElementById("resume-modal");g&&p&&g.addEventListener("click",()=>{p.classList.add("active")}),document.querySelectorAll(".modal").forEach(t=>{const o=t.querySelectorAll(".modal-close"),i=t.querySelector(".modal-overlay");o.forEach(r=>{r.addEventListener("click",()=>t.classList.remove("active"))}),i&&i.addEventListener("click",()=>t.classList.remove("active"))});const u=document.getElementById("contact-form"),d=document.getElementById("form-alert");u&&d&&u.addEventListener("submit",t=>{t.preventDefault(),d.className="form-alert success",d.innerHTML='<i class="fa-solid fa-circle-check"></i> Thank you! Your message has been sent successfully. Ayush will get back to you shortly.',u.reset(),setTimeout(()=>{d.style.display="none"},5e3)})});
