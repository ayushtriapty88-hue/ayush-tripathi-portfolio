/* ==========================================================================
   AYUSH TRIPATHI PORTFOLIO INTERACTIVITY (MAIN.JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Project Filter Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const projectCards = document.querySelectorAll('.project-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || (category && category.includes(filter))) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Project Details Modal Data
  const projectDetailsMap = {
    'modal-robot': {
      title: 'Self-Balancing Robot',
      category: 'Hardware / Embedded C++',
      tech: ['C++', 'Arduino', 'MPU6050 IMU', 'PID Control', 'Gyroscope/Accelerometer'],
      description: `
        <p>A two-wheeled self-balancing robot engineered from scratch utilizing an Arduino microcontroller and an MPU6050 6-axis Inertial Measurement Unit (IMU).</p>
        <br>
        <h4>Key Technical Features:</h4>
        <ul style="padding-left: 1.2rem; margin-top: 0.5rem;">
          <li>Real-time sensor fusion combining accelerometer and gyroscope data via complimentary filtering.</li>
          <li>Continuous closed-loop Proportional-Integral-Derivative (PID) control algorithm written in high-performance C++.</li>
          <li>Instant PWM motor direction and speed calibration maintaining equilibrium despite external perturbations.</li>
        </ul>
      `
    },
    'modal-property': {
      title: 'Smart Property Identification',
      category: 'Government Project under Yantrikaran Innovation',
      tech: ['Python', 'SegFormer', 'Google Earth Engine', 'SpaceNet', 'Sentinel-2 Satellite'],
      description: `
        <p>An urban monitoring geospatial computer vision pipeline designed for municipal property tax assessment and satellite imagery analysis in Andhra Pradesh.</p>
        <br>
        <h4>Key Technical Features:</h4>
        <ul style="padding-left: 1.2rem; margin-top: 0.5rem;">
          <li>Fine-tuned SegFormer semantic segmentation model trained on high-resolution SpaceNet building footprints.</li>
          <li>Automated Google Earth Engine API integration fetching Sentinel-2 multi-spectral imagery.</li>
          <li>Accurate building boundary detection and property change tracking across historical timeline imagery.</li>
        </ul>
      `
    },
    'modal-chatbot': {
      title: 'Mental Health Consultation Chatbot',
      category: 'AI / LLM & Natural Language Processing',
      tech: ['Python', 'Gemini API', 'BlenderBot', 'Hugging Face', 'Kaggle Datasets'],
      description: `
        <p>An empathetic AI-driven mental health consultation assistant built to provide accessible, non-judgmental guidance and psychological coping strategies.</p>
        <br>
        <h4>Key Technical Features:</h4>
        <ul style="padding-left: 1.2rem; margin-top: 0.5rem;">
          <li>Integration with Google Gemini API and Meta's BlenderBot LLM fine-tuned for supportive conversations.</li>
          <li>Custom preprocessed conversation datasets sourced from Hugging Face & Kaggle.</li>
          <li>Safety guardrails detecting crisis signals with automatic escalation resource prompts.</li>
        </ul>
      `
    },
    'modal-clinical': {
      title: 'Clinical Decision Support Engine',
      category: 'Healthcare AI Prototype',
      tech: ['Python', 'Gemini API', 'React.js', 'Healthcare Data Standards', 'NLP'],
      description: `
        <p>A smart healthcare assistant connecting doctors' prescriptions with real-time patient history and insurance policy verification.</p>
        <br>
        <h4>Key Technical Features:</h4>
        <ul style="padding-left: 1.2rem; margin-top: 0.5rem;">
          <li>Optical Character Recognition (OCR) and Gemini API structured JSON extraction from medical prescriptions.</li>
          <li>Automated insurance rule engine matching prescribed treatments against active coverage policies.</li>
          <li>Responsive React frontend providing clear diagnostic recommendations and drug-interaction warnings.</li>
        </ul>
      `
    },
    'modal-khasi': {
      title: 'Khasi Language Translator & ASR Data Pipeline',
      category: 'NLP & Speech Recognition',
      tech: ['Python', 'PyTorch', 'Hugging Face', 'ASR', 'Audio Signal Processing'],
      description: `
        <p>A natural language processing data pipeline aimed at empowering low-resource indigenous language speech processing for Khasi (Meghalaya, India).</p>
        <br>
        <h4>Key Technical Features:</h4>
        <ul style="padding-left: 1.2rem; margin-top: 0.5rem;">
          <li>Verbatim alignment and phoneme transcription of Khasi (Latin alphabet) and English audio clips.</li>
          <li>Dataset creation for training PyTorch Automated Speech Recognition (ASR) acoustic models.</li>
          <li>Data augmentation techniques (noise injection, pitch shifting) to improve model robustness.</li>
        </ul>
      `
    },
    'modal-facerecog': {
      title: 'Face Recognition Security System',
      category: 'Real-Time Computer Vision',
      tech: ['Python', 'OpenCV', 'Computer Vision', 'Haar Cascades / Deep Embeddings', 'Access Control'],
      description: `
        <p>A computer vision security solution for automated facial recognition-based biometric access control.</p>
        <br>
        <h4>Key Technical Features:</h4>
        <ul style="padding-left: 1.2rem; margin-top: 0.5rem;">
          <li>Real-time video feed capture using OpenCV with 60 FPS face detection.</li>
          <li>Facial embedding vector distance matching against registered user databases.</li>
          <li>Automated entry logging, intruder alerting, and access permission management interface.</li>
        </ul>
      `
    }
  };

  // Generic Project Modal Handler
  const detailModal = document.getElementById('project-detail-modal');
  const modalTitle = document.getElementById('modal-project-title');
  const modalBody = document.getElementById('modal-project-body');
  const detailButtons = document.querySelectorAll('.btn-project-details');

  detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalKey = btn.getAttribute('data-modal');
      const data = projectDetailsMap[modalKey];

      if (data && detailModal) {
        modalTitle.innerHTML = `<i class="fa-solid fa-code-branch"></i> ${data.title}`;
        
        let techPills = data.tech.map(t => `<span class="skill-tag" style="display:inline-flex; margin: 0.2rem;">${t}</span>`).join('');
        
        modalBody.innerHTML = `
          <div style="margin-bottom: 1rem;">
            <span style="font-size: 0.85rem; color: var(--accent-cyan); font-weight: 600;">${data.category}</span>
          </div>
          ${data.description}
          <div style="margin-top: 1.5rem;">
            <h4 style="margin-bottom: 0.5rem;">Technologies Used:</h4>
            <div>${techPills}</div>
          </div>
        `;

        detailModal.classList.add('active');
      }
    });
  });

  // Resume Modal Handler
  const resumeBtn = document.getElementById('open-resume-btn');
  const resumeModal = document.getElementById('resume-modal');

  if (resumeBtn && resumeModal) {
    resumeBtn.addEventListener('click', () => {
      resumeModal.classList.add('active');
    });
  }

  // Close Modals logic
  const allModals = document.querySelectorAll('.modal');
  allModals.forEach(modal => {
    const closeBtns = modal.querySelectorAll('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');

    closeBtns.forEach(b => {
      b.addEventListener('click', () => modal.classList.remove('active'));
    });

    if (overlay) {
      overlay.addEventListener('click', () => modal.classList.remove('active'));
    }
  });

  // Contact Form Submission Simulation
  const contactForm = document.getElementById('contact-form');
  const formAlert = document.getElementById('form-alert');

  if (contactForm && formAlert) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formAlert.className = 'form-alert success';
      formAlert.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thank you! Your message has been sent successfully. Ayush will get back to you shortly.';
      contactForm.reset();

      setTimeout(() => {
        formAlert.style.display = 'none';
      }, 5000);
    });
  }
});
