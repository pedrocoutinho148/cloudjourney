// Theme handling
const themeButton = document.getElementById('themeButton');
const body = document.body;

function toggleTheme() {
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeButton.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    themeButton.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

themeButton.addEventListener('click', toggleTheme);

// Smooth scroll to phases
function scrollToPhases() {
    document.getElementById('phases').scrollIntoView({ behavior: 'smooth' });
}

// Search and filter functionality
const searchInput = document.getElementById('searchInput');
const phaseFilter = document.getElementById('phaseFilter');
const phaseCards = document.querySelectorAll('.phase-card');

function filterPhases() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedPhase = phaseFilter.value;

    phaseCards.forEach(card => {
        const phase = card.getAttribute('data-phase');
        const content = card.textContent.toLowerCase();
        const matchesSearch = content.includes(searchTerm);
        const matchesPhase = selectedPhase === 'all' || phase === selectedPhase;

        card.style.display = matchesSearch && matchesPhase ? 'flex' : 'none';
    });
}

searchInput.addEventListener('input', filterPhases);
phaseFilter.addEventListener('change', filterPhases);

// Phase details modal
const modal = document.getElementById('phase-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');

const phaseDetails = {
    demand: {
        title: "Demand Phase",
        description: "Initial assessment and requirements gathering phase",
        timeEstimate: "2-3 weeks",
        keyDeliverables: [
            "Completed cloud request form",
            "Initial architecture diagram",
            "Cost estimation document",
            "Approved business case"
        ],
        commonChallenges: [
            "Budget approval delays",
            "Incomplete requirements",
            "Architecture complexity",
            "Stakeholder alignment"
        ],
        helpfulResources: [
            { name: "Request Template", url: "#", icon: "file-alt" },
            { name: "Cost Calculator", url: "#", icon: "calculator" },
            { name: "Architecture Guidelines", url: "#", icon: "book" }
        ]
    },
    // Add similar objects for other phases
};

function showPhaseDetails(phase) {
    const details = phaseDetails[phase];
    if (!details) return;

    let content = `
        <h2>${details.title}</h2>
        <p class="phase-description">${details.description}</p>
        
        <div class="details-grid">
            <div class="details-section">
                <h3>Key Deliverables</h3>
                <ul>
                    ${details.keyDeliverables.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="details-section">
                <h3>Common Challenges</h3>
                <ul>
                    ${details.commonChallenges.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="resources-section">
            <h3>Helpful Resources</h3>
            <div class="resources-grid">
                ${details.helpfulResources.map(resource => `
                    <a href="${resource.url}" class="resource-card">
                        <i class="fas fa-${resource.icon}"></i>
                        <span>${resource.name}</span>
                    </a>
                `).join('')}
            </div>
        </div>
    `;

    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

// Close modal
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Initialize tooltips
tippy('[data-tooltip]', {
    content: (reference) => reference.getAttribute('data-tooltip'),
    placement: 'top',
    arrow: true
});

// Progress tracking
function updateProgress() {
    const steps = document.querySelectorAll('.progress-step');
    let currentStep = parseInt(localStorage.getItem('currentStep')) || 1;

    steps.forEach((step, index) => {
        if (index + 1 <= currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

// Feedback system
function submitFeedback(type) {
    // You can implement analytics or feedback collection here
    const feedback = {
        type: type,
        timestamp: new Date(),
        page: window.location.pathname
    };
    
    console.log('Feedback submitted:', feedback);
    // Show thank you message
    alert('Thank you for your feedback!');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
});

// Optional: Add animations
document.querySelectorAll('.phase-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});