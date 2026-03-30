export const i18n = {
    login: "ចូលគណនី",
    register: "បង្កើតគណនីថ្មី",
    registerBtn: "ចុះឈ្មោះ (Register)",
    connecting: "កំពុងដំណើរការ...",
    loginSuccess: "បានចូលគណនីដោយជោគជ័យ!",
    registerSuccess: "គណនីត្រូវបានបង្កើតដោយជោគជ័យ!",
    googleSuccess: "បានចូលគណនីតាម Google ជោគជ័យ!",
    logoutSuccess: "បានចាកចេញពីគណនីដោយជោគជ័យ",
    logoutFail: "មានបញ្ហាក្នុងការចាកចេញ",
    copySuccess: "បានចម្លងលេខកូដថ្នាក់ដោយជោគជ័យ!",
    copyFail: "បរាជ័យក្នុងការ Copy។ សូមព្យាយាមម្ដងទៀត។",
    resetSent: "តំណប្តូរពាក្យសម្ងាត់បានបញ្ជូនទៅកាន់អុីមែលរបស់អ្នកហើយ។",
    emailRequiredForReset: "សូមបញ្ចូលអុីមែលរបស់អ្នក ដើម្បីប្តូរពាក្យសម្ងាត់។",
    invalidEmail: "ទម្រង់អុីមែលមិនត្រឹមត្រូវ។",
    shortPassword: "ពាក្យសម្ងាត់ត្រូវមានយ៉ាងតិច ៦ តួអក្សរ។",
    termsRequired: "សូមយល់ព្រមតាមលក្ខខណ្ឌនៃការប្រើប្រាស់ មុនពេលបង្កើតគណនី។",
    strengthNone: "គ្មាន",
    strengthWeak: "ខ្សោយ (មិនគួរប្រើ)",
    strengthFair: "មធ្យម",
    strengthGood: "ល្អ",
    strengthStrong: "សុវត្ថិភាពខ្ពស់",
    authErrors: {
        'auth/invalid-email': 'ទម្រង់អុីមែលមិនត្រឹមត្រូវ។',
        'auth/user-not-found': 'រកមិនឃើញគណនីនេះទេ។ សូមបង្កើតគណនីថ្មី។',
        'auth/wrong-password': 'ពាក្យសម្ងាត់មិនត្រឹមត្រូវ។',
        'auth/invalid-credential': 'អុីមែល ឬពាក្យសម្ងាត់មិនត្រឹមត្រូវឡើយ។',
        'auth/email-already-in-use': 'អុីមែលនេះត្រូវបានប្រើប្រាស់រួចហើយ។',
        'auth/weak-password': 'ពាក្យសម្ងាត់ខ្សោយពេក (យ៉ាងតិច៦ខ្ទង់)។',
        'auth/network-request-failed': 'មានបញ្ហាអ៊ីនធឺណិត។ សូមពិនិត្យការតភ្ជាប់របស់អ្នក។',
        'auth/popup-closed-by-user': 'ការចូលតាម Google ត្រូវបានបិទមុនពេលបញ្ចប់។'
    }
};

export const getKhmerAuthError = (code) => {
    return i18n.authErrors[code] || `មានបញ្ហាក្នុងការភ្ជាប់ប្រព័ន្ធ។ កូដបញ្ហា៖ ${code}`;
};

export const UI = {
    toastContainer: document.getElementById('toast-container'),
    
    showToast(message, type = 'success') {
        const toast = document.createElement('div');
        const isError = type === 'error';
        const bgClass = isError ? 'bg-red-600' : 'bg-emerald-600';
        const icon = isError ? 'alert-circle' : 'check-circle';
        
        toast.className = `toast-enter flex items-center gap-3 ${bgClass} text-white px-4 py-3 rounded-lg shadow-lg pointer-events-auto w-max max-w-[90vw]`;
        toast.innerHTML = `
            <i data-lucide="${icon}" class="w-5 h-5 flex-shrink-0" aria-hidden="true"></i>
            <span class="text-sm font-medium">${message}</span>
        `;
        
        this.toastContainer.appendChild(toast);
        lucide.createIcons({ root: toast });

        setTimeout(() => {
            toast.classList.replace('toast-enter', 'toast-exit');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },
    
    setButtonLoading(btn, isLoading, originalText = "") {
        const textSpan = btn.querySelector('span');
        const loaderIcon = btn.querySelector('#btn-loader');
        
        if (isLoading) {
            btn.disabled = true;
            btn.classList.add('opacity-70', 'cursor-not-allowed');
            if (textSpan) textSpan.textContent = i18n.connecting;
            if (loaderIcon) loaderIcon.classList.remove('hidden');
        } else {
            btn.disabled = false;
            btn.classList.remove('opacity-70', 'cursor-not-allowed');
            if (textSpan) textSpan.textContent = originalText;
            if (loaderIcon) loaderIcon.classList.add('hidden');
        }
    }
};

const apps = [
    { name: 'បញ្ចូលព័ត៌មានសិស្ស', icon: 'user-plus', url: 'enrollment_V2.html', color: 'from-blue-500 to-blue-600' },
    { name: 'បញ្ជីឈ្មោះសិស្ស', icon: 'users', url: 'student-listV2.html', color: 'from-purple-500 to-purple-600' },
    { name: 'ចុះវត្តមានតាមប្លង់តុ', icon: 'layout-grid', url: 'attendance/table-layout.html', color: 'from-orange-500 to-orange-600' },
    { name: 'បញ្ជីវត្តមានប្រចាំខែ', icon: 'calendar-check', url: 'attendance/attendance-1.html', color: 'from-pink-500 to-pink-600' },
    { name: 'បញ្ចូលពិន្ទុកិច្ចការផ្ទះ', icon: 'book-marked', url: 'homework/enter-homework-score.html', color: 'from-indigo-500 to-indigo-600' },
    { name: "បញ្ជូនកិច្ចការផ្ទះទៅអាណាព្យាបាល",icon: "send",url: "homework/send-homework.html",color: "bg-fuchsia-100"},
    { name: 'បញ្ចូលពិន្ទុ', icon: 'edit-3', url: 'score/enter-monthly-score.html', color: 'from-green-500 to-emerald-600' },
    { name: 'តារាងពិន្ទុសរុប', icon: 'table-2', url: 'score/subject-scores.html', color: 'from-teal-500 to-teal-600' },
    { name: 'តារាងចំណាត់ថ្នាក់', icon: 'bar-chart-3', url: 'ranking/ranking-print.html', color: 'from-purple-600 to-purple-800' },
    { name: 'វិភាគទិន្នន័យសរុប', icon: 'line-chart', url: 'score_analyse/data_score/data_analysing_score_student.html', color: 'from-rose-600 to-pink-700'},
    { name: 'វិភាគតាមមុខវិជ្ជា', icon: 'target', url: 'score_analyse/data_by_subject/new_data_analyse_by_subject.html', color: 'from-blue-600 to-indigo-700' },
    { name: 'វិភាគអាយុ និងកម្ពស់', icon: 'calendar-days', url: 'student_age_list.html', color: 'from-emerald-500 to-teal-600' },
    { name: 'រដ្ឋបាលថ្នាក់រៀន', icon: 'folder-open', url: 'adr/Main_adr.html', color: 'from-blue-700 to-indigo-800' },
    { name: 'តារាងកិត្តិយស', icon: 'award', url: 'ranking/honor-roll.html', color: 'from-rose-500 to-rose-600' },
    { name: 'បញ្ជីបូកសរុបលទ្ធផលប្រចាំឆ្នាំ', icon: 'pie-chart', url: 'years_data/dashborad_score_years.html', color: 'from-cyan-500 to-cyan-600' },
    { name: 'សៀវភៅតាមដាន', icon: 'book-open', url: 'student_tracking/student-tracking.html', color: 'from-sky-500 to-sky-600' },
    { name: 'ទាញយកវិញ្ញាបនបត្រ', icon: 'file-badge', url: 'certificate/certificate.html', color: 'from-yellow-500 to-orange-500' },
    { name: 'របាយការណ៍មាតាបិតា', icon: 'book-open-check', url: 'parent-report.html', color: 'from-sky-500 to-blue-600' },
    { name: 'លេខកូដសិស្ស (ឪពុកម្តាយ)', icon: 'key', url: 'student-codes.html', color: 'from-emerald-500 to-teal-600' },
    { name: 'កាលវិភាគសម្អាតថ្នាក់', icon: 'sparkles', url: 'cleaning-schedule.html', color: 'from-cyan-400 to-blue-500' },
    { name: 'បញ្ជីសារពើភ័ណ្ឌ', icon: 'package', url: 'inventory.html', color: 'from-amber-500 to-amber-600' },
    { name: 'បោះពុម្ពកាតសិស្ស', icon: 'contact-2', url: 'id_student/id_student.html', color: 'from-indigo-600 to-blue-700' },
    { name: 'ផ្ញើសារទៅអាណាព្យាបាល', icon: 'bell', url: 'teacher-notifications.html', color: 'from-red-600 to-blue-700' },
    { name: 'សម្ភារៈតុបតែងថ្នាក់', icon: 'palette', url: 'decoration_materials/decoration_materials.html', color: 'from-violet-500 to-fuchsia-600' },
    { name: 'ព័ត៌មានគណនី', icon: 'user-cog', url: 'profile.html', color: 'from-slate-500 to-slate-600' }
];

const grid = document.getElementById('app-grid');

// Show skeletons initially (Simulated Loading Experience) - Added dark mode support
grid.innerHTML = Array(10).fill('').map(() => `
    <div class="card-3d p-4 md:p-5 flex flex-col items-center">
        <div class="w-[60px] h-[60px] rounded-xl bg-gray-200 dark:bg-gray-700 skeleton-pulse mb-3"></div>
        <div class="h-4 bg-gray-200 dark:bg-gray-700 rounded skeleton-pulse w-3/4"></div>
    </div>
`).join('');

// Render actual apps
setTimeout(() => {
    grid.innerHTML = '';
    apps.forEach((app, index) => {
        const card = document.createElement('a');
        card.href = app.url;
        // Added card-entrance for staggered animation
        card.className = 'app-card-item card-3d group p-4 md:p-5 flex flex-col items-center text-center focus:outline-none card-entrance';
        card.style.animationDelay = `${index * 0.05}s`;
        card.setAttribute('aria-label', `ចូលទៅកាន់ ${app.name}`);
        card.setAttribute('data-name', app.name);
        
        card.innerHTML = `
            <div class="mb-3">
                <div class="hover-float-icon app-icon-container bg-gradient-to-tr ${app.color} shadow-md transition-all duration-300 group-hover:ring-4 group-hover:ring-offset-2 group-hover:ring-[#0054a6]/30">
                    <i data-lucide="${app.icon}" class="w-7 h-7 md:w-8 md:h-8 text-white" aria-hidden="true"></i>
                </div>
            </div>
            <!-- Added dark:text-gray-200 to fix the invisible text issue in dark mode -->
            <h2 class="text-[12px] md:text-sm font-bold text-slate-800 dark:text-gray-200 leading-tight transition-colors">${app.name}</h2>
        `;
        grid.appendChild(card);
    });
    lucide.createIcons({ root: grid });
}, 300);

// Initialize static icons
lucide.createIcons({ root: document.body });

// Search Filter Logic
const searchInput = document.getElementById('app-search');
const noResults = document.getElementById('no-results');

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.app-card-item');
    let hasVisible = false;
    
    cards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        if (name.includes(term)) {
            card.style.display = '';
            hasVisible = true;
        } else {
            card.style.display = 'none';
        }
    });
    
    noResults.style.display = hasVisible ? 'block' : 'none';
});

// Toggle Password Visibility
const togglePasswordBtn = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('eye-icon');

if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        eyeIcon.setAttribute('data-lucide', type === 'password' ? 'eye' : 'eye-off');
        lucide.createIcons({ root: togglePasswordBtn });
        passwordInput.focus();
    });
}

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

// Example: Listening to the modern-register event
window.addEventListener('modern-register', (e) => {
    console.log('Custom Event Triggered -> [modern-register]');
    console.log('User Payload:', e.detail);
});
