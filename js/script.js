document.querySelectorAll(".copy-btn").forEach(button => {
    button.addEventListener("click", function () {
        // Find the closest copy-box and get the text inside
        const text = this.closest(".copy-box").querySelector(".copy-text").innerText;

        // Copy text to clipboard
        navigator.clipboard.writeText(text).then(() => {
            // Change button text to "copied!" temporarily
            this.innerText = "copied!";
            setTimeout(() => {
                this.innerText = "copy!"; // Reset back after 2 seconds
            }, 2000);
        });
    });
});

const burger = document.getElementById('mobile-menu');
const nav = document.querySelector('nav ul');
burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    nav.classList.toggle('active');
});

document.querySelectorAll('.glow-hover').forEach(el => {
    el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty('--x', `${x}px`);
        el.style.setProperty('--y', `${y}px`);
    });
});

/* ───── Auto-detect OS and link to the correct release asset ───── */
(function setupInstallButton() {
    const btn = document.getElementById('install-btn');
    const hint = document.getElementById('install-hint');
    if (!btn) return;

    const { platform, userAgent } = navigator;
    let url = '', label = '';

    if (/Win/.test(platform)) {
        label = 'Download for Windows';
        url = 'https://github.com/user-attachments/files/20137170/arael_windows_amd64.zip';
    } else if (/Mac/.test(platform)) {
        label = 'Download for macOS';
        url = 'https://github.com/user-attachments/files/20137169/arael_macos_universal.tar.gz';
    } else if (/Linux/.test(platform)) {
        if (/aarch64|arm/.test(userAgent)) {
            label = 'Download for Linux ARM64';
            url = 'https://github.com/user-attachments/files/20137168/arael_linux_amd64.tar.gz';
        } else {
            label = 'Download for Linux AMD64';
            url = 'https://github.com/user-attachments/files/20137168/arael_linux_amd64.tar.gz';
        }
    }

    if (url) {
        btn.textContent = label;
        btn.addEventListener('click', () => (window.location.href = url));
    } else {
        btn.textContent = 'Open download page';
        btn.addEventListener('click', () =>
            window.location.href = 'https://github.com/Arael-project/Arael-Cli/releases/latest'
        );
    }
})();
