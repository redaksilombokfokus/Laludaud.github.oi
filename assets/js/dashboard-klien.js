// Dashboard Klien
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.client-section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Update menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));
    if (event && event.target) {
        const menuItem = event.target.closest('.menu-item');
        if (menuItem) {
            menuItem.classList.add('active');
        }
    }
}

function showDocTab(tabId) {
    // Hide all doc tabs
    const tabContents = document.querySelectorAll('.doc-tab-content');
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    // Show selected tab
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Update tab buttons
    if (event && event.target) {
        const tabButtons = event.target.parentElement.querySelectorAll('.doc-tab');
        tabButtons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
    }
}

// Update current date
document.addEventListener('DOMContentLoaded', function() {
    const currentDateElement = document.getElementById('current-date');
    if (currentDateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date().toLocaleDateString('id-ID', options);
        currentDateElement.textContent = today;
    }

    // Chat functionality
    const chatInput = document.querySelector('.chat-input');
    const btnSend = document.querySelector('.btn-send');

    if (btnSend && chatInput) {
        btnSend.addEventListener('click', function() {
            const message = chatInput.value.trim();
            if (message) {
                // Add message to chat
                const chatBox = document.querySelector('.chat-box');
                const messageElement = document.createElement('div');
                messageElement.classList.add('chat-message', 'sent');
                messageElement.innerHTML = `
                    <div class="message-content">
                        <p class="message-text">${message}</p>
                        <p class="message-time">Baru saja</p>
                    </div>
                `;
                chatBox.appendChild(messageElement);
                chatBox.scrollTop = chatBox.scrollHeight;
                chatInput.value = '';
            }
        });

        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                btnSend.click();
            }
        });
    }

    // File upload
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
        fileInput.addEventListener('change', function() {
            if (this.files.length > 0) {
                alert('File dipilih: ' + this.files[0].name + '\nFile akan diupload ke server');
            }
        });
    }

    // Appointment booking form
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Janji temu telah dijadwalkan. Tim kami akan mengkonfirmasi melalui email.');
            this.reset();
        });
    }

    // Reschedule button
    const rescheduleBtn = document.querySelector('.appointment-actions .btn-small.btn-primary');
    if (rescheduleBtn) {
        rescheduleBtn.addEventListener('click', function() {
            const bookingSection = document.querySelector('.booking-section');
            bookingSection.scrollIntoView({ behavior: 'smooth' });
            alert('Silakan isi form di bawah untuk menjadwalkan ulang');
        });
    }

    // Cancel appointment button
    const cancelBtn = document.querySelector('.appointment-actions .btn-delete');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            if (confirm('Yakin ingin membatalkan janji temu ini?')) {
                alert('Janji temu telah dibatalkan. Kami akan menghubungi Anda.');
            }
        });
    }

    // Profile edit
    const profileForm = document.querySelector('.profile-form');
    if (profileForm) {
        const saveBtn = profileForm.querySelector('.btn-primary');
        if (saveBtn) {
            saveBtn.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Profil Anda telah diperbarui.');
            });
        }
    }
});
