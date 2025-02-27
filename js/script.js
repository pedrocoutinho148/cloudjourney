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

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');

    // Theme handling
    const themeButton = document.getElementById('themeButton');
    const body = document.body;

    if (themeButton) {
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
    }

    // Search and filter functionality
    const searchInput = document.getElementById('searchInput');
    const phaseFilter = document.getElementById('phaseFilter');
    const phaseCards = document.querySelectorAll('.phase-card');

    if (searchInput && phaseFilter) {
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
    }

    // Modal functionality
    const modal = document.getElementById('phase-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-btn');
    const buttons = document.querySelectorAll('.details-btn');

    console.log('Found modal elements:', {
        modal: !!modal,
        modalBody: !!modalBody,
        closeBtn: !!closeBtn,
        buttonsCount: buttons.length
    });

    if (modal && modalBody && buttons.length > 0) {
        // Show modal function with loading state
        function showModal(content) {
            modal.classList.add('show');
            modalBody.innerHTML = '<div class="modal-loading"></div>';
            
            // Simulate loading for smoother transition
            setTimeout(() => {
                modalBody.innerHTML = content;
            }, 300);

            // Prevent body scrolling when modal is open
            document.body.style.overflow = 'hidden';
        }

        // Hide modal function
        function hideModal() {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }

        // Add click handlers to all buttons
        buttons.forEach((button, index) => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const phase = this.getAttribute('data-phase');
                
                let content = '';
                
                if (phase === 'demand') {
                    content = `
                        <div class="phase-modal-content">
                            <h2>Demand Phase</h2>
                            <p class="phase-description">Complete these steps to get your cloud journey started.</p>
                            
                            <div class="timeline-container">
                                <!-- Regular steps -->
                                <div class="timeline-step">
                                    <div class="step-number">1</div>
                                    <div class="step-content">
                                        <h3>Register a business application</h3>
                                        <div class="step-details">
                                            <span class="detail-item"><i class="fas fa-user icon-user"></i> Workload Owner</span>
                                            <span class="detail-item"><i class="fas fa-check-circle icon-check"></i> Business Owner</span>
                                            <span class="detail-item"><i class="fas fa-clock icon-clock"></i> 7 days</span>
                                        </div>
                                        <a href="#" class="step-link"><i class="fas fa-external-link-alt icon-link"></i> Request form</a>
                                    </div>
                                </div>

                                <div class="timeline-step">
                                    <div class="step-number">2</div>
                                    <div class="step-content">
                                        <h3>Business case</h3>
                                        <div class="step-details">
                                            <span class="detail-item"><i class="fas fa-user icon-user"></i> Workload Owner</span>
                                            <span class="detail-item"><i class="fas fa-check-circle icon-check"></i> Business Owner</span>
                                            <span class="detail-item"><i class="fas fa-clock icon-clock"></i> 2 days</span>
                                        </div>
                                        <a href="#" class="step-link"><i class="fas fa-external-link-alt icon-link"></i> Business case template</a>
                                    </div>
                                </div>

                                <div class="timeline-step">
                                    <div class="step-number">3</div>
                                    <div class="step-content">
                                        <h3>Register a cloud workload</h3>
                                        <div class="step-details">
                                            <span class="detail-item"><i class="fas fa-user icon-user"></i> Workload Owner</span>
                                            <span class="detail-item"><i class="fas fa-check-circle icon-check"></i> CCoE</span>
                                            <span class="detail-item"><i class="fas fa-clock icon-clock"></i> 2 days</span>
                                        </div>
                                        <a href="#" class="step-link"><i class="fas fa-external-link-alt icon-link"></i> Request form</a>
                                    </div>
                                </div>

                                <div class="timeline-step">
                                    <div class="step-number">4</div>
                                    <div class="step-content">
                                        <h3>Team readiness check</h3>
                                        <div class="step-details">
                                            <span class="detail-item"><i class="fas fa-user icon-user"></i> Workload Owner</span>
                                            <span class="detail-item"><i class="fas fa-check-circle icon-check"></i> Supporting Architect</span>
                                            <span class="detail-item"><i class="fas fa-clock icon-clock"></i> 1 day</span>
                                        </div>
                                        <a href="#" class="step-link"><i class="fas fa-external-link-alt icon-link"></i> Assessment form</a>
                                    </div>
                                </div>

                                <div class="timeline-step">
                                    <div class="step-number">5</div>
                                    <div class="step-content">
                                        <h3>High level solution design</h3>
                                        <div class="step-details">
                                            <span class="detail-item"><i class="fas fa-user icon-user"></i> Supporting Architect</span>
                                            <span class="detail-item"><i class="fas fa-check-circle icon-check"></i> Workload Owner</span>
                                            <span class="detail-item"><i class="fas fa-clock icon-clock"></i> 2 days</span>
                                        </div>
                                        <a href="#" class="step-link"><i class="fas fa-external-link-alt icon-link"></i> Design examples</a>
                                    </div>
                                </div>

                                <div class="timeline-step">
                                    <div class="step-number">6</div>
                                    <div class="step-content">
                                        <h3>Cost estimate</h3>
                                        <div class="step-details">
                                            <span class="detail-item"><i class="fas fa-user icon-user"></i> Supporting Architect</span>
                                            <span class="detail-item"><i class="fas fa-check-circle icon-check"></i> Cost Owner</span>
                                            <span class="detail-item"><i class="fas fa-clock icon-clock"></i> 1 day</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Milestone -->
                                <div class="timeline-step milestone">
                                    <div class="step-number">
                                        <i class="fas fa-flag"></i>
                                    </div>
                                    <div class="step-content">
                                        <h3>Cloud Demand Board Approval</h3>
                                        <div class="step-details">
                                            <span class="detail-item"><i class="fas fa-user icon-user"></i> CCoE</span>
                                            <span class="detail-item"><i class="fas fa-check-circle icon-check"></i> Board</span>
                                            <span class="detail-item"><i class="fas fa-clock icon-clock"></i> 7 days</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="timeline-summary">
                                <div class="summary-item">
                                    <i class="fas fa-calendar-alt"></i>
                                    <span>Total Duration: 22 days</span>
                                </div>
                                <div class="summary-item">
                                    <i class="fas fa-tasks"></i>
                                    <span>7 Steps (6 Tasks + 1 Milestone)</span>
                                </div>
                            </div>
                        </div>
                    `;
                } else if (phase === 'onboard') {
                    content = `
                        <div class="phase-modal-content">
                            <h2>Onboard Phase</h2>
                            <p class="phase-description">Set up and configure your cloud environment following security best practices.</p>
                            
                            <div class="timeline-container">
                                <div class="timeline-step">
                                    <div class="step-number">1</div>
                                    <div class="step-content">
                                        <h3>Landing Zone Setup</h3>
                                        <div class="step-details">
                                            <span class="detail-item"><i class="fas fa-user icon-user"></i> Cloud Architect</span>
                                            <span class="detail-item"><i class="fas fa-check-circle icon-check"></i> CCoE</span>
                                            <span class="detail-item"><i class="fas fa-clock icon-clock"></i> 5 days</span>
                                        </div>
                                        <a href="#" class="step-link"><i class="fas fa-external-link-alt icon-link"></i> Landing Zone Guide</a>
                                    </div>
                                </div>

                                <div class="timeline-step">
                                    <div class="step-number">2</div>
                                    <div class="step-content">
                                        <h3>Network Architecture</h3>
                                        <div class="step-details">
                                            <span class="detail-item"><i class="fas fa-user icon-user"></i> Network Team</span>
                                            <span class="detail-item"><i class="fas fa-check-circle icon-check"></i> Cloud Architect</span>
                                            <span class="detail-item"><i class="fas fa-clock icon-clock"></i> 4 days</span>
                                        </div>
                                        <a href="#" class="step-link"><i class="fas fa-external-link-alt icon-link"></i> Network Templates</a>
                                    </div>
                                </div>

                                <div class="timeline-step">
                                    <div class="step-number">3</div>
                                    <div class="step-content">
                                        <h3>Identity & Access Setup</h3>
                                        <div class="step-details">
                                            <span class="detail-item"><i class="fas fa-user icon-user"></i> Security Team</span>
                                            <span class="detail-item"><i class="fas fa-check-circle icon-check"></i> IAM Team</span>
                                            <span class="detail-item"><i class="fas fa-clock icon-clock"></i> 3 days</span>
                                        </div>
                                        <a href="#" class="step-link"><i class="fas fa-external-link-alt icon-link"></i> IAM Policies</a>
                                    </div>
                                </div>

                                <div class="timeline-step">
                                    <div class="step-number">4</div>
                                    <div class="step-content">
                                        <h3>Security Controls Implementation</h3>
                                        <div class="step-details">
                                            <span class="detail-item"><i class="fas fa-user icon-user"></i> Security Team</span>
                                            <span class="detail-item"><i class="fas fa-check-circle icon-check"></i> Cloud Architect</span>
                                            <span class="detail-item"><i class="fas fa-clock icon-clock"></i> 5 days</span>
                                        </div>
                                        <a href="#" class="step-link"><i class="fas fa-external-link-alt icon-link"></i> Security Baseline</a>
                                    </div>
                                </div>

                                <!-- Milestone -->
                                <div class="timeline-step milestone">
                                    <div class="step-number">
                                        <i class="fas fa-flag"></i>
                                    </div>
                                    <div class="step-content">
                                        <h3>Design Validation with Security Team</h3>
                                        <div class="step-details">
                                            <span class="detail-item"><i class="fas fa-user icon-user"></i> Security Team</span>
                                            <span class="detail-item"><i class="fas fa-check-circle icon-check"></i> Cloud Architect</span>
                                            <span class="detail-item"><i class="fas fa-clock icon-clock"></i> 2 days</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="timeline-summary">
                                <div class="summary-item">
                                    <i class="fas fa-calendar-alt"></i>
                                    <span>Total Duration: 19 days</span>
                                </div>
                                <div class="summary-item">
                                    <i class="fas fa-tasks"></i>
                                    <span>5 Steps (4 Tasks + 1 Milestone)</span>
                                </div>
                            </div>
                        </div>
                    `;
                } else if (phase === 'golive') {
                    content = `
                        <div class="phase-modal-content">
                            <h2>Go-Live Phase</h2>
                            <p class="phase-description">Ensure your cloud workload meets all security and compliance requirements before deployment.</p>
                            
                            <div class="timeline-container">
                                <div class="timeline-step">
                                    <div class="step-number">1</div>
                                    <div class="step-content">
                                        <h3>Security Assessment</h3>
                                        <div class="step-details">
                                            <span class="detail-item"><i class="fas fa-user icon-user"></i> Security Team</span>
                                            <span class="detail-item"><i class="fas fa-check-circle icon-check"></i> Cloud Architect</span>
                                            <span class="detail-item"><i class="fas fa-clock icon-clock"></i> 5 days</span>
                                        </div>
                                        <a href="#" class="step-link"><i class="fas fa-external-link-alt icon-link"></i> Assessment Checklist</a>
                                    </div>
                                </div>

                                <div class="timeline-step">
                                    <div class="step-number">2</div>
                                    <div class="step-content">
                                        <h3>Penetration Testing</h3>
                                        <div class="step-details">
                                            <span class="detail-item"><i class="fas fa-user icon-user"></i> Security Team</span>
                                            <span class="detail-item"><i class="fas fa-check-circle icon-check"></i> External Team</span>
                                            <span class="detail-item"><i class="fas fa-clock icon-clock"></i> 7 days</span>
                                        </div>
                                        <a href="#" class="step-link"><i class="fas fa-external-link-alt icon-link"></i> Testing Guidelines</a>
                                    </div>
                                </div>

                                <div class="timeline-step">
                                    <div class="step-number">3</div>
                                    <div class="step-content">
                                        <h3>Compliance Validation</h3>
                                        <div class="step-details">
                                            <span class="detail-item"><i class="fas fa-user icon-user"></i> Compliance Team</span>
                                            <span class="detail-item"><i class="fas fa-check-circle icon-check"></i> Security Team</span>
                                            <span class="detail-item"><i class="fas fa-clock icon-clock"></i> 4 days</span>
                                        </div>
                                        <a href="#" class="step-link"><i class="fas fa-external-link-alt icon-link"></i> Compliance Matrix</a>
                                    </div>
                                </div>

                                <!-- Milestone -->
                                <div class="timeline-step milestone">
                                    <div class="step-number">
                                        <i class="fas fa-flag"></i>
                                    </div>
                                    <div class="step-content">
                                        <h3>Security Show-and-Tell Session</h3>
                                        <div class="step-details">
                                            <span class="detail-item"><i class="fas fa-user icon-user"></i> Security Team</span>
                                            <span class="detail-item"><i class="fas fa-check-circle icon-check"></i> All Teams</span>
                                            <span class="detail-item"><i class="fas fa-clock icon-clock"></i> 1 day</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="timeline-summary">
                                <div class="summary-item">
                                    <i class="fas fa-calendar-alt"></i>
                                    <span>Total Duration: 17 days</span>
                                </div>
                                <div class="summary-item">
                                    <i class="fas fa-tasks"></i>
                                    <span>4 Steps (3 Tasks + 1 Milestone)</span>
                                </div>
                            </div>
                        </div>
                    `;
                } else if (phase === 'run') {
                    content = `
                        <div class="phase-modal-content">
                            <h2>Run Phase</h2>
                            <p class="phase-description">Maintain and optimize your cloud environment with continuous security validation.</p>
                            
                            <div class="timeline-container">
                                <div class="timeline-step">
                                    <div class="step-number">1</div>
                                    <div class="step-content">
                                        <h3>Monitoring Setup</h3>
                                        <div class="step-details">
                                            <span class="detail-item"><i class="fas fa-user icon-user"></i> Operations Team</span>
                                            <span class="detail-item"><i class="fas fa-check-circle icon-check"></i> Cloud Architect</span>
                                            <span class="detail-item"><i class="fas fa-clock icon-clock"></i> 5 days</span>
                                        </div>
                                        <a href="#" class="step-link"><i class="fas fa-external-link-alt icon-link"></i> Monitoring Guide</a>
                                    </div>
                                </div>

                                <div class="timeline-step">
                                    <div class="step-number">2</div>
                                    <div class="step-content">
                                        <h3>Backup & DR Implementation</h3>
                                        <div class="step-details">
                                            <span class="detail-item"><i class="fas fa-user icon-user"></i> Operations Team</span>
                                            <span class="detail-item"><i class="fas fa-check-circle icon-check"></i> Cloud Architect</span>
                                            <span class="detail-item"><i class="fas fa-clock icon-clock"></i> 4 days</span>
                                        </div>
                                        <a href="#" class="step-link"><i class="fas fa-external-link-alt icon-link"></i> DR Playbook</a>
                                    </div>
                                </div>

                                <div class="timeline-step">
                                    <div class="step-number">3</div>
                                    <div class="step-content">
                                        <h3>Cost Optimization</h3>
                                        <div class="step-details">
                                            <span class="detail-item"><i class="fas fa-user icon-user"></i> Cloud Architect</span>
                                            <span class="detail-item"><i class="fas fa-check-circle icon-check"></i> Finance Team</span>
                                            <span class="detail-item"><i class="fas fa-clock icon-clock"></i> 3 days</span>
                                        </div>
                                        <a href="#" class="step-link"><i class="fas fa-external-link-alt icon-link"></i> Cost Best Practices</a>
                                    </div>
                                </div>

                                <!-- Milestone -->
                                <div class="timeline-step milestone">
                                    <div class="step-number">
                                        <i class="fas fa-flag"></i>
                                    </div>
                                    <div class="step-content">
                                        <h3>Annual Security Review</h3>
                                        <div class="step-details">
                                            <span class="detail-item"><i class="fas fa-user icon-user"></i> Security Team</span>
                                            <span class="detail-item"><i class="fas fa-check-circle icon-check"></i> All Teams</span>
                                            <span class="detail-item"><i class="fas fa-clock icon-clock"></i> Yearly</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="timeline-summary">
                                <div class="summary-item">
                                    <i class="fas fa-calendar-alt"></i>
                                    <span>Initial Setup: 12 days</span>
                                </div>
                                <div class="summary-item">
                                    <i class="fas fa-tasks"></i>
                                    <span>4 Steps (3 Tasks + Annual Review)</span>
                                </div>
                            </div>
                        </div>
                    `;
                } else {
                    // Default content for other phases
                    const phaseName = phase.charAt(0).toUpperCase() + phase.slice(1);
                    content = `
                        <h2>${phaseName} Phase</h2>
                        <p>Content for ${phaseName} phase is coming soon.</p>
                    `;
                }
                
                showModal(content);
            });
        });

        // Close button handler with improved interaction
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                hideModal();
            });
        }

        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                hideModal();
            }
        });

        // Click outside to close with improved interaction
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                hideModal();
            }
        });
    }

    // Initialize tooltips
    if (typeof tippy !== 'undefined') {
        tippy('[data-tooltip]', {
            content: (reference) => reference.getAttribute('data-tooltip'),
            placement: 'top',
            arrow: true
        });
    }

    // Initialize progress
    const steps = document.querySelectorAll('.progress-step');
    let currentStep = parseInt(localStorage.getItem('currentStep')) || 1;

    steps.forEach((step, index) => {
        if (index + 1 <= currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });

    // Add hover animations to phase cards
    document.querySelectorAll('.phase-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

// Feedback system (can be outside DOMContentLoaded as it's just a function definition)
function submitFeedback(type) {
    const feedback = {
        type: type,
        timestamp: new Date(),
        page: window.location.pathname
    };
    console.log('Feedback submitted:', feedback);
    alert('Thank you for your feedback!');
}