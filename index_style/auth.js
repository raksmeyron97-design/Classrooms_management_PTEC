import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signOut 
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { app } from "./firebase-config.js";
import { i18n, getKhmerAuthError, UI } from "./app.js";

const auth = getAuth(app);

// UI Elements
const pageLoader = document.getElementById('page-loader');
const authSection = document.getElementById('auth-section');
const mainContent = document.getElementById('main-content');
const authError = document.getElementById('auth-error');
const mainAuthBtn = document.getElementById('main-auth-btn');
const googleLoginBtn = document.getElementById('google-login-btn');

// Registration Specific UI Elements
const forgotPwdContainer = document.getElementById('forgot-password-container');
const pwdStrengthContainer = document.getElementById('password-strength-container');
const termsContainer = document.getElementById('terms-container');
const forgotPasswordBtn = document.getElementById('forgot-password-btn');
const emailInputObj = document.getElementById('email');
const validEmailIcon = document.getElementById('email-valid-icon');
const invalidEmailIcon = document.getElementById('email-invalid-icon');
const passwordInputObj = document.getElementById('password');

const copyCodeBtns = document.querySelectorAll('.copy-code-btn');
const logoutBtns = document.querySelectorAll('.logout-btn');
const desktopUserEmail = document.getElementById('desktop-user-email');
const mobileUserEmail = document.getElementById('mobile-user-email');

export let isLoginMode = true;
export let currentTeacherUid = '';

// --- NEW: Interactive Character Logic (SVG Graphic Ghosts) ---
const ghostLeft = document.getElementById('ghost-left');
const ghostRight = document.getElementById('ghost-right');
const charMessage = document.getElementById('character-message');
const charMessageText = document.getElementById('character-message-text');

let handsInjected = false;

const setFaces = (state) => {
    // ធានាថារូបដៃបិទភ្នែកដែលមានគូរម្រាមដៃ ត្រូវបានបញ្ចូលទៅក្នុង HTML យ៉ាងច្បាស់ (ជៀសវាងការមើលច្រឡំថាជាភ្នែកធំៗ)
    if (!handsInjected && state === 'password') {
        const rightGhostSVG = document.querySelector('#ghost-right svg');
        if (rightGhostSVG) {
            const oldRight = document.getElementById('right-face-password');
            if (oldRight) oldRight.remove();
            rightGhostSVG.insertAdjacentHTML('beforeend', `
                <g id="right-face-password" class="face-group hidden">
                    <!-- ភ្នែកបើកសម្លឹងមើល និងព្រិច (Peeking & Blinking Eyes) -->
                    <ellipse class="eye-blink" cx="45" cy="58" rx="6" ry="9" fill="#111"/>
                    <circle cx="46" cy="55" r="2.5" fill="white"/>
                    <ellipse class="eye-blink" cx="75" cy="58" rx="6" ry="9" fill="#111"/>
                    <circle cx="76" cy="55" r="2.5" fill="white"/>
                    <!-- ដៃតូចៗគួរឲ្យស្រលាញ់ បិទពាក់កណ្តាលភ្នែកខាងក្រោម -->
                    <g transform="translate(0, 5)">
                        <path d="M 39 60 C 39 53, 51 53, 51 60 C 51 64, 39 64, 39 60 Z" fill="white" stroke="#111" stroke-width="3" stroke-linejoin="round"/>
                        <path d="M 42 55 L 42 61 M 45 54 L 45 61 M 48 55 L 48 61" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"/>
                        <path d="M 69 60 C 69 53, 81 53, 81 60 C 81 64, 69 64, 69 60 Z" fill="white" stroke="#111" stroke-width="3" stroke-linejoin="round"/>
                        <path d="M 72 55 L 72 61 M 75 54 L 75 61 M 78 55 L 78 61" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round"/>
                    </g>
                </g>
            `);
        }
        const leftGhostSVG = document.querySelector('#ghost-left svg');
        if (leftGhostSVG) {
            const oldLeft = document.getElementById('left-face-password');
            if (oldLeft) oldLeft.remove();
            leftGhostSVG.insertAdjacentHTML('beforeend', `
                <g id="left-face-password" class="face-group hidden">
                    <!-- ភ្នែកបើកសម្លឹងមើល និងព្រិច (Peeking & Blinking Eyes) -->
                    <ellipse class="eye-blink" cx="38.5" cy="48" rx="4.5" ry="7" fill="#111"/>
                    <circle cx="39.5" cy="46" r="1.5" fill="white"/>
                    <ellipse class="eye-blink" cx="61.5" cy="48" rx="4.5" ry="7" fill="#111"/>
                    <circle cx="62.5" cy="46" r="1.5" fill="white"/>
                    <!-- ដៃតូចៗគួរឲ្យស្រលាញ់ បិទពាក់កណ្តាលភ្នែកខាងក្រោម -->
                    <g transform="translate(0, 4)">
                        <path d="M 34 50 C 34 44, 43 44, 43 50 C 43 53, 34 53, 34 50 Z" fill="white" stroke="#111" stroke-width="2.5" stroke-linejoin="round"/>
                        <path d="M 36.5 46 L 36.5 51 M 38.5 45 L 38.5 51 M 40.5 46 L 40.5 51" fill="none" stroke="#111" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M 57 50 C 57 44, 66 44, 66 50 C 66 53, 57 53, 57 50 Z" fill="white" stroke="#111" stroke-width="2.5" stroke-linejoin="round"/>
                        <path d="M 59.5 46 L 59.5 51 M 61.5 45 L 61.5 51 M 63.5 46 L 63.5 51" fill="none" stroke="#111" stroke-width="1.5" stroke-linecap="round"/>
                    </g>
                </g>
            `);
        }
        handsInjected = true;
    }

    // លាក់ទម្រង់មុខទាំងអស់សិន
    document.querySelectorAll('.face-group').forEach(el => el.classList.add('hidden'));
    
    // បង្ហាញទម្រង់មុខត្រូវគ្នា (ដៃបិទភ្នែកដែលគូរក្នុង HTML)
    const leftFace = document.getElementById(`left-face-${state}`) || document.getElementById('left-face-idle');
    if(leftFace) leftFace.classList.remove('hidden');
    
    const rightFace = document.getElementById(`right-face-${state}`) || document.getElementById('right-face-idle');
    if(rightFace) rightFace.classList.remove('hidden');
    
    // បង្ហាញដៃខាងក្រោយពេល error ឬ success
    if(state === 'error' || state === 'success') {
        const rightArms = document.getElementById(`right-arms-${state}`);
        if(rightArms) rightArms.classList.remove('hidden');
    }
};

const setCharacterState = (state, customMsg = '') => {
    if (window.setCharacterState) {
        window.setCharacterState(state, customMsg);
    }
};
// --- End Character Logic Proxy ---

const showError = (msg, isSuccess = false) => {
    authError.textContent = msg;
    if (isSuccess) {
        authError.classList.replace('bg-red-50', 'bg-green-50');
        authError.classList.replace('border-red-200', 'border-green-200');
        authError.classList.replace('text-red-700', 'text-green-800');
    } else {
        authError.classList.replace('bg-green-50', 'bg-red-50');
        authError.classList.replace('border-green-200', 'border-red-200');
        authError.classList.replace('text-green-800', 'text-red-700');
    }
    authError.classList.remove('hidden');
};
const hideError = () => authError.classList.add('hidden');

// Tab Switching Logic
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');

tabLogin.addEventListener('click', () => {
    isLoginMode = true;
    tabLogin.classList.add('active');
    tabLogin.setAttribute('aria-selected', 'true');
    tabRegister.classList.remove('active');
    tabRegister.setAttribute('aria-selected', 'false');
    
    document.getElementById('auth-title').textContent = i18n.login;
    document.getElementById('btn-text').textContent = i18n.login;
    
    forgotPwdContainer.classList.remove('hidden');
    pwdStrengthContainer.classList.add('hidden');
    termsContainer.classList.add('hidden');
    
    hideError();
    setCharacterState('idle');
});

tabRegister.addEventListener('click', () => {
    isLoginMode = false;
    tabRegister.classList.add('active');
    tabRegister.setAttribute('aria-selected', 'true');
    tabLogin.classList.remove('active');
    tabLogin.setAttribute('aria-selected', 'false');
    
    document.getElementById('auth-title').textContent = i18n.register;
    document.getElementById('btn-text').textContent = i18n.registerBtn;
    
    forgotPwdContainer.classList.add('hidden');
    pwdStrengthContainer.classList.remove('hidden');
    termsContainer.classList.remove('hidden');
    
    hideError();
    setCharacterState('idle');
});

// 1. Inline Validation: Email
emailInputObj.addEventListener('input', (e) => {
    const isValid = e.target.validity.valid;
    const hasValue = e.target.value.length > 0;
    
    if (hasValue) {
        if (isValid) {
            e.target.classList.remove('border-red-400', 'focus:ring-red-400');
            e.target.classList.add('border-green-500', 'focus:ring-green-500');
            validEmailIcon.classList.remove('hidden');
            invalidEmailIcon.classList.add('hidden');
        } else {
            e.target.classList.remove('border-green-500', 'focus:ring-green-500');
            e.target.classList.add('border-red-400', 'focus:ring-red-400');
            validEmailIcon.classList.add('hidden');
            invalidEmailIcon.classList.remove('hidden');
        }
    } else {
        e.target.classList.remove('border-green-500', 'focus:ring-green-500', 'border-red-400', 'focus:ring-red-400');
        validEmailIcon.classList.add('hidden');
        invalidEmailIcon.classList.add('hidden');
    }
});

// 2. Inline Validation: Password Strength
const strengthBar = document.getElementById('password-strength-bar');
const strengthText = document.getElementById('password-strength-text');

if (passwordInputObj) {
    passwordInputObj.addEventListener('input', (e) => {
        if (isLoginMode) return;

        const val = e.target.value;
        let strength = 0;
        
        if (val.length >= 6) strength += 1;
        if (val.length >= 8) strength += 1;
        if (/[A-Z]/.test(val)) strength += 1;
        if (/[0-9]/.test(val)) strength += 1;
        if (/[^A-Za-z0-9]/.test(val)) strength += 1;

        let width = '0%';
        let bgColor = 'bg-gray-400';
        let text = i18n.strengthNone;
        let textColor = 'text-gray-400';

        if (val.length > 0) {
            if (strength <= 1) { 
                width = '25%'; bgColor = 'bg-red-500'; text = i18n.strengthWeak; textColor = 'text-red-500'; 
            } else if (strength === 2) { 
                width = '50%'; bgColor = 'bg-yellow-500'; text = i18n.strengthFair; textColor = 'text-yellow-500'; 
            } else if (strength === 3) { 
                width = '75%'; bgColor = 'bg-blue-500'; text = i18n.strengthGood; textColor = 'text-blue-500'; 
            } else { 
                width = '100%'; bgColor = 'bg-green-500'; text = i18n.strengthStrong; textColor = 'text-green-500'; 
            }
        }

        strengthBar.style.width = width;
        strengthBar.className = `h-1.5 rounded-full transition-all duration-500 ease-out ${bgColor}`;
        strengthText.textContent = text;
        strengthText.className = `font-bold ${textColor}`;
        
        if(val.length > 0 && val.length < 6) {
            e.target.classList.add('border-red-400', 'focus:ring-red-400');
        } else {
            e.target.classList.remove('border-red-400', 'focus:ring-red-400');
        }
    });
}

// Track Authentication State
onAuthStateChanged(auth, (user) => {
    pageLoader.style.opacity = '0';
    setTimeout(() => {
        pageLoader.style.display = 'none';
        pageLoader.setAttribute('aria-hidden', 'true');
    }, 500);
    
    if (user && !user.isAnonymous) {
        currentTeacherUid = user.uid;
        desktopUserEmail.textContent = user.email;
        mobileUserEmail.textContent = user.email;
        
        authSection.style.display = 'none';
        authSection.setAttribute('aria-hidden', 'true');
        
        mainContent.classList.remove('hidden');
        mainContent.setAttribute('aria-hidden', 'false');
        
        void mainContent.offsetWidth; 
        mainContent.classList.remove('opacity-0'); 
        
        copyCodeBtns.forEach(btn => {
            btn.classList.remove('hidden');
            btn.classList.add('flex');
        });
    } else {
        currentTeacherUid = '';
        
        mainContent.classList.add('hidden', 'opacity-0');
        mainContent.setAttribute('aria-hidden', 'true');
        
        authSection.style.display = 'flex';
        authSection.classList.remove('hidden');
        authSection.setAttribute('aria-hidden', 'false');
        
        copyCodeBtns.forEach(btn => {
            btn.classList.add('hidden');
            btn.classList.remove('flex');
        });
        
        setCharacterState('idle');
    }
});

// Handle Email/Password Form Submit
document.getElementById('email-auth-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const termsInput = document.getElementById('terms');
    const originalText = isLoginMode ? i18n.login : i18n.registerBtn;
    
    if(!emailInput.validity.valid) {
        showError(i18n.invalidEmail);
        setCharacterState('error', "អុីមែលមិនត្រឹមត្រូវ!"); 
        emailInput.focus();
        return;
    }
    if(passwordInput.value.length < 6) {
        showError(i18n.shortPassword);
        setCharacterState('error', "ពាក្យសម្ងាត់ខ្លីពេក!");
        passwordInput.focus();
        return;
    }
    
    if (!isLoginMode) {
        if (!termsInput.checked) {
            showError(i18n.termsRequired);
            setCharacterState('error', "សូមយល់ព្រមលក្ខខណ្ឌ");
            termsInput.focus();
            return;
        }

        const modernRegisterEvent = new CustomEvent('modern-register', {
            detail: { email: emailInput.value, password: passwordInput.value, timestamp: new Date() }
        });
        window.dispatchEvent(modernRegisterEvent);
    }

    hideError();
    setCharacterState('idle');
    UI.setButtonLoading(mainAuthBtn, true, originalText);

    try {
        if (isLoginMode) {
            await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
            setCharacterState('success');
            UI.showToast(i18n.loginSuccess, "success");
        } else {
            await createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
            setCharacterState('success');
            UI.showToast(i18n.registerSuccess, "success");
        }
    } catch (error) {
        showError(getKhmerAuthError(error.code));
        setCharacterState('error', "Wrong Password"); 
    } finally {
        UI.setButtonLoading(mainAuthBtn, false, originalText);
    }
});

// Handle Forgot Password
forgotPasswordBtn.addEventListener('click', async () => {
    const emailInput = document.getElementById('email');
    if(!emailInput.value || !emailInput.validity.valid) {
        showError(i18n.emailRequiredForReset);
        setCharacterState('error', "បញ្ចូលអុីមែលសិន");
        emailInput.focus();
        return;
    }
    
    try {
        forgotPasswordBtn.disabled = true;
        await sendPasswordResetEmail(auth, emailInput.value);
        setCharacterState('success');
        UI.showToast(i18n.resetSent, "success");
        hideError();
    } catch (error) {
        showError(getKhmerAuthError(error.code));
        setCharacterState('error', "មានបញ្ហា!");
    } finally {
        forgotPasswordBtn.disabled = false;
    }
});

// Handle Google Login
googleLoginBtn.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    hideError();
    setCharacterState('idle');
    
    const originalHtml = googleLoginBtn.innerHTML;
    googleLoginBtn.disabled = true;
    googleLoginBtn.classList.add('opacity-70', 'cursor-not-allowed');
    googleLoginBtn.innerHTML = '<i data-lucide="loader-2" class="animate-spin mr-2 w-5 h-5" aria-hidden="true"></i> កំពុងភ្ជាប់...';
    lucide.createIcons({ root: googleLoginBtn });

    try { 
        await signInWithPopup(auth, provider); 
        setCharacterState('success');
        UI.showToast(i18n.googleSuccess, "success");
    } catch (error) { 
        showError(getKhmerAuthError(error.code)); 
        setCharacterState('error', "ភ្ជាប់ Google បរាជ័យ");
    } finally {
        googleLoginBtn.disabled = false;
        googleLoginBtn.classList.remove('opacity-70', 'cursor-not-allowed');
        googleLoginBtn.innerHTML = originalHtml;
    }
});

// Custom Modal UI for Logout Confirmation
const confirmModal = document.getElementById('confirm-modal');
const cancelLogoutBtn = document.getElementById('modal-cancel-btn');
const confirmLogoutBtn = document.getElementById('modal-confirm-btn');

const showLogoutModal = () => {
    confirmModal.classList.remove('hidden');
    confirmModal.classList.add('flex');
    requestAnimationFrame(() => {
        confirmModal.classList.remove('opacity-0');
        confirmModal.firstElementChild.classList.remove('scale-95');
    });
};

const hideLogoutModal = () => {
    confirmModal.classList.add('opacity-0');
    confirmModal.firstElementChild.classList.add('scale-95');
    setTimeout(() => {
        confirmModal.classList.add('hidden');
        confirmModal.classList.remove('flex');
    }, 300);
};

cancelLogoutBtn.addEventListener('click', hideLogoutModal);

confirmLogoutBtn.addEventListener('click', () => {
    hideLogoutModal();
    signOut(auth).then(() => {
        UI.showToast(i18n.logoutSuccess, "success");
    }).catch(() => {
        UI.showToast(i18n.logoutFail, "error");
    });
});

logoutBtns.forEach(btn => btn.addEventListener('click', showLogoutModal));

// Modern Clipboard Copy API
window.copyTeacherId = async function() {
    if (!currentTeacherUid) return;
    
    const mobileMenu = document.getElementById('mobile-menu');
    if(!mobileMenu.classList.contains('hidden')){
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    }

    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(currentTeacherUid);
            handleCopySuccess();
        } else {
            const textArea = document.createElement("textarea");
            textArea.value = currentTeacherUid;
            textArea.style.position = "fixed";
            textArea.style.left = "-9999px";
            document.body.appendChild(textArea);
            textArea.select();
            
            const successful = document.execCommand('copy');
            document.body.removeChild(textArea);
            
            if(successful) {
                handleCopySuccess();
            } else {
                throw new Error('Copy failed');
            }
        }
    } catch (err) {
        console.error('Failed to copy text: ', err);
        UI.showToast(i18n.copyFail, "error");
    }
};

function handleCopySuccess() {
    UI.showToast("✅ " + i18n.copySuccess, "success");
    
    copyCodeBtns.forEach(btn => {
        const icon = btn.querySelector('.copy-icon');
        const text = btn.querySelector('.copy-text');
        const originalIcon = icon.getAttribute('data-lucide');
        const originalText = text.textContent;
        
        icon.setAttribute('data-lucide', 'check');
        text.textContent = 'បានចម្លង!';
        btn.classList.add('text-green-600', 'bg-green-50', 'border-green-200');
        lucide.createIcons({ root: btn });
        
        setTimeout(() => {
            icon.setAttribute('data-lucide', originalIcon);
            text.textContent = originalText;
            btn.classList.remove('text-green-600', 'bg-green-50', 'border-green-200');
            lucide.createIcons({ root: btn });
        }, 2000);
    });
}

// PWA Install Logic
let deferredPrompt;
const installBtns = document.querySelectorAll('.mobile-install-btn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtns.forEach(btn => btn.classList.remove('hidden'));
});

const handleInstallClick = async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        deferredPrompt = null;
        installBtns.forEach(btn => btn.classList.add('hidden'));
    }
};

installBtns.forEach(btn => btn.addEventListener('click', handleInstallClick));