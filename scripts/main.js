
import { focusAreas } from '../data/data.js';
import { icons } from '../assets/icon.js';

const container = document.querySelector('#categories-container');

// Accordion functionality
const setupAccordion = () => {
    const wrappers = document.querySelectorAll('.wrapper');

    wrappers.forEach(wrapper => {
        const button = wrapper.previousElementSibling;

        button.addEventListener('click', () => {
            const isOpen = wrapper.classList.contains('open');

            // Close all wrappers and remove active classes
            wrappers.forEach(item => {
                item.classList.remove('open');
                item.previousElementSibling.classList.remove('active');
            });

            // Open clicked wrapper if it wasn't already open
            if (!isOpen) {
                wrapper.classList.add('open');
                button.classList.add('active');
            }
        });
    });
};

// Render focus areas
const renderFocusAreas = () => {
    container.innerHTML = focusAreas.map(focusArea => `
        <section id="${focusArea.id}">
            <button class="focus-area-button">
                <div class="focus-area-icon-title">
                    <div class="focus-area-icon-container">
                        ${icons[focusArea.icon]}
                    </div>

                    <div class="focus-area-title">
                        ${focusArea.title}
                    </div>
                </div>

                <span class="accordion-icon">
                    ${icons.chevronDown}
                </span>
            </button>

            <div class="wrapper">
                <div class="container">
                    <ul>
                        ${focusArea.items.map(item => `
                            <li>${item}</li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </section>
    `).join('');

    setupAccordion();
};

// Initialize
renderFocusAreas();
