// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Project modal functionality
    const modal = document.getElementById('projectModal');
    const modalBody = document.querySelector('.modal-body');
    const closeModal = document.querySelector('.close-modal');
    const modalBack = document.querySelector('.modal-back');
    const projectCards = document.querySelectorAll('.project-card:not(.coming-soon)');

    // Project data - with actual LCD Security System details
    const projectData = {
        project1: {
            title: "Security Access System with LCD Display",
            category: "Embedded Systems",
            image: "images/project1.jpg",
            content: `
                <div class="project-overview">
                    <p>I designed and built a secure access system using an Arduino Uno, a 16x2 LCD display, and push-button inputs. The system requires users to enter a predefined 4-character passcode within a 15-second countdown timer. Visual feedback is provided via LEDs (green for access granted, red for denied, yellow for incorrect attempts). This project strengthened my embedded systems skills, combining circuit design, microcontroller programming, and hardware integration.</p>
                </div>
                
                <div class="project-detail-section">
                    <h3>Skills Gained</h3>
                    <ul class="skills-list">
                        <li>Embedded C/C++ programming (Arduino IDE)</li>
                        <li>Circuit design & troubleshooting (breadboarding, component wiring)</li>
                        <li>Input/output handling (buttons, LCD, LEDs)</li>
                        <li>Power management (external supply integration)</li>
                        <li>Iterative testing & debugging</li>
                    </ul>
                    <p><strong>Tools Used:</strong> Arduino Uno, LCD display, push buttons, LEDs, resistors, potentiometer, breadboard, jumper wires.</p>
                </div>
                
                <div class="project-detail-section">
                    <h3>Timeline</h3>
                    <div class="timeline">
                        <div class="timeline-container">
                            <div class="timeline-item">
                                <div class="timeline-date">Week 1-2</div>
                                <div class="timeline-content">Research, component sourcing, and initial breadboard setup</div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-date">Week 3-4</div>
                                <div class="timeline-content">Core programming (timer, passcode validation, LED feedback)</div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-date">Week 5</div>
                                <div class="timeline-content">Debugging and reliability testing</div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-date">Week 6-7</div>
                                <div class="timeline-content">Enhancements (servo motor integration, power system refinement)</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="project-detail-section">
                    <h3>Process and Implementation</h3>
                    <h4>Hardware Setup</h4>
                    <p>The system's hardware consists of four push buttons for passcode input, a 16x2 LCD display for user feedback, 220Ω resistor, and three LEDs (green, red, yellow) for status indication. All components are wired to the Arduino Uno via a breadboard.</p>
                    
                    <div class="project-image-container">
                        <img src="images/breadboard_circuit.png" alt="Breadboard circuit with components" class="detail-image">
                        <div class="image-caption">Breadboard circuit with labeled components (LCD, buttons, LEDs, Arduino)</div>
                    </div>
                </div>
                
                <div class="project-detail-section">
                    <h4>Software Functionality</h4>
                    <p>The Arduino code uses non-blocking timing logic (millis()) to manage the 15-second countdown while 
                    monitoring button inputs. The system implements debouncing to ensure reliable button press detection and compares user input against the predefined passcode ("AAAA"). The LCD screen provides real-time feedback,
                     displaying the remaining time and system status.</p>
                    
                    <div class="code-link-container">
                        <a href="https://github.com/DJohns-droid/security-access-system-arduino" target="_blank" class="code-link">View Source Code</a>
                    </div>
                </div>
                
                <div class="project-detail-section">
                    <h3>System Functionality</h3>
                    
                    <div class="functionality-item">
                        <h4>Access Granted (Green LED):</h4>
                        <p>When the correct 4-character code ("AAAA") is entered within the time limit, the LCD displays "ACCESS GRANTED" and the green LED illuminates.</p>
                        <div class="video-container">
                            <video controls class="demo-video" preload="auto" playsinline>
                                <source src="videos/Access_Granted.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="video-caption">Successful code entry showing green LED activation</div>
                        </div>
                    </div>
                    
                    <div class="functionality-item">
                        <h4>Access Denied (Red LED):</h4>
                        <p>Triggered when the timer reaches zero before code submission. The LCD displays "ACCESS DENIED" and the red LED activates. System automatically resets after 3 seconds.</p>
                        <div class="video-container">
                            <video controls class="demo-video" preload="auto" playsinline>
                                <source src="videos/Access_Denied.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="video-caption">Timer expiration showing denial sequence</div>
                        </div>
                    </div>
                    
                    <div class="functionality-item">
                        <h4>Incorrect Code (Yellow LED):</h4>
                        <p>Activated when an incorrect code is submitted. The LCD flashes "WRONG CODE" and the yellow LED pulses. User can retry until time expires.</p>
                        <div class="video-container">
                            <video controls class="demo-video" preload="auto" playsinline>
                                <source src="videos/Yellow_Light.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                            <div class="video-caption">Incorrect input demonstration</div>
                        </div>
                    </div>
                </div>
                
                <div class="project-detail-section">
                    <h3>Challenges and Solutions</h3>
                    <div class="challenge-item">
                        <p><strong>Concurrent Operations:</strong> Managing the countdown timer while simultaneously monitoring button presses was challenging. <em>Solution:</em> Implemented non-blocking code using millis() instead of delay() to handle timing without freezing input detection.</p>
                    </div>
                    <div class="challenge-item">
                        <p><strong>Button Debouncing:</strong> Push buttons would register multiple presses from a single press due to contact bounce. <em>Solution:</em> Implemented software debouncing with time-based checks to ensure only one press was registered.</p>
                    </div>                 
                    <div class="project-image-container">
                        
                    </div>
                </div>
                
                <div class="project-detail-section">
                    <h3>Future Improvements & Reflection</h3>
                    <h4>Improvements</h4>
                    
                    <div class="improvement-item">
                        <h5>Functional Motor Integration:</h5>
                        <ul>
                            <li>Add a servo motor to physically simulate unlocking a secure container</li>
                            <li>Motor would activate only upon access granted signal</li>
                        </ul>
                    </div>
                    
                    <div class="improvement-item">
                        <h5>3D-Printed Enclosure:</h5>
                        <ul>
                            <li>Design and print a professional housing for all components</li>
                            <li>Include mounting points for the servo motor and status LEDs</li>
                        </ul>
                    </div>
                    
                    <div class="improvement-item">
                        <h5>Standalone Battery Operation:</h5>
                        <ul>
                            <li>Adapt the system to run on self-contained battery power</li>
                            <li>Explore eliminating Arduino dependency for reduced power consumption</li>
                            <li>Create a fully self-contained security box prototype</li>
                        </ul>
                    </div>
                </div>
                
                <div class="project-detail-section">
                    <h3>Reflection</h3>
                    <p>This project demonstrated the importance of robust system design in embedded applications. The iterative development process - particularly in debugging the timing and input systems - reinforced the value of methodical testing. The clear visual feedback mechanism (LEDs/LCD) proved crucial for user interaction, a principle I'll carry forward to future projects. These experiences directly support my career interests in embedded systems and secure device development.</p>
                </div>
                
                <div class="project-detail-section">
                    <h3>Project Links</h3>
                    <div class="project-links">
                        <a href="https://github.com/DJohns-droid/security-access-system-arduino" target="_blank" class="project-link">GitHub Repository</a>
                    </div>
                </div>
            `,
            techStack: ["Arduino", "C/C++", "Embedded Systems", "LCD Interface", "Circuit Design"],
            links: [
                {
                    text: "GitHub Repository",
                    url: "https://github.com/DJohns-droid/security-access-system-arduino"
                }
            ]
        },
        project2: {
            title: "IoT Weather Station",
            category: "Internet of Things",
            image: "images/project2.jpg",
            description: "A connected weather station that collects temperature, humidity, and pressure data and transmits it to a cloud platform for analysis and visualization.",
            challenge: "Ensuring reliable data transmission while minimizing power consumption was difficult, as the device needed to operate on battery power for extended periods.",
            solution: "I implemented a low-power sleep mode and optimized the transmission protocol to send data in batches, significantly extending battery life while maintaining data integrity.",
            techStack: ["ESP32", "Arduino", "IoT Protocols", "Sensor Integration", "Data Visualization"],
            links: [
                {
                    text: "Project Demo",
                    url: "https://your-weather-station-demo.com"
                }
            ]
        }
    };

    // Open modal when project card is clicked
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });

    // Close modal when clicking the X button
    closeModal.addEventListener('click', closeProjectModal);

    // Close modal when clicking the back button
    modalBack.addEventListener('click', closeProjectModal);

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeProjectModal();
        }
    });

    // Open project modal and populate with data
    function openProjectModal(projectId) {
        const project = projectData[projectId];

        if (!project) return;

        // Build modal content
        let content = `
            <div class="project-detail-header">
                <h2>${project.title}</h2>
                <div class="project-detail-category">${project.category}</div>
            </div>
            
            <div class="project-detail-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            
            <div class="project-detail-content">
                ${project.content ? project.content : `
                    <div class="project-detail-section">
                        <p>${project.description}</p>
                    </div>
                    
                    <div class="project-detail-section">
                        <h3>Challenge</h3>
                        <p>${project.challenge}</p>
                    </div>
                    
                    <div class="project-detail-section">
                        <h3>Solution</h3>
                        <p>${project.solution}</p>
                    </div>
                    
                    <div class="project-detail-section">
                        <h3>Technologies Used</h3>
                        <div class="tech-tags">
                            ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                `}
            </div>
        `;

        // Add links if available and not already included in custom content
        if (!project.content && project.links && project.links.length > 0) {
            content += `
                <div class="project-detail-section">
                    <h3>Links</h3>
                    <div class="project-links">
                        ${project.links.map(link => `<a href="${link.url}" target="_blank" class="project-link">${link.text}</a>`).join(' ')}
                    </div>
                </div>
            `;
        }

        content += `</div>`;

        // Set content and show modal
        modalBody.innerHTML = content;
        modal.style.display = 'block';

        // Once the modal is displayed, check for videos and ensure they are properly loaded
        const videos = modalBody.querySelectorAll('video');
        videos.forEach(video => {
            // Force reload the video
            const currentSrc = video.querySelector('source').src;
            video.querySelector('source').src = currentSrc + '?' + new Date().getTime();
            video.load();
        });

        // Add a small delay before adding the show class for the animation
        setTimeout(function() {
            modal.classList.add('modal-show');
        }, 10);
    }

    // Close project modal
    function closeProjectModal() {
        modal.classList.remove('modal-show');

        // Wait for the animation to complete before hiding
        setTimeout(function() {
            modal.style.display = 'none';
        }, 300);
    }
});