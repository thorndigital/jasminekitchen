<style>
    /* Use a more elegant font pairing */
    body {
        font-family: 'Montserrat', sans-serif;
    }
    .font-playfair {
        font-family: 'Playfair Display', serif;
    }

    /* Hero background image */
    .hero-bg {
        background-image: url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop');
        background-size: cover;
        background-position: center;
        background-attachment: fixed; /* Parallax effect */
    }

    /* Custom component styles */
    .nav-link {
        @apply text-slate-600 font-medium tracking-wide relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-amber-500 after:transition-all after:duration-300;
    }
    .nav-link:hover, .nav-link.active {
        @apply text-slate-900 after:w-full;
    }

    .primary-btn {
        @apply bg-amber-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5;
    }
    .primary-btn-lg {
        @apply bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1;
    }

    .section-title {
        @apply text-4xl md:text-5xl font-playfair font-bold text-slate-800;
    }
    .section-subtitle {
        @apply mt-4 text-lg text-slate-600 max-w-2xl mx-auto;
    }

    .feature-card {
        @apply bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300;
    }

    .footer-title {
        @apply text-lg font-semibold font-playfair tracking-wider text-white;
    }
    .footer-link {
        @apply text-slate-400 hover:text-amber-400 transition-colors;
    }
    .social-link {
        @apply h-10 w-10 bg-slate-700 rounded-full flex items-center justify-center text-white hover:bg-amber-600 transition-colors;
    }
    
    /* Menu page styles */
    .menu-category-title {
        @apply text-3xl font-playfair font-bold text-slate-800 border-b-2 border-amber-400 pb-2 mb-6;
    }
    .menu-item {
        @apply bg-white p-6 rounded-lg shadow-sm;
    }
    .menu-item-title {
        @apply text-xl font-semibold text-slate-800;
    }
    .menu-item-price {
        @apply text-xl font-semibold text-amber-700;
    }
    .menu-item-description {
        @apply text-slate-600 mt-1;
    }

    /* Prose styles for About page */
    .prose p {
        @apply mb-4;
    }
    .prose h2 {
        @apply mb-3;
    }

    /* Simple fade-in animations */
    @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-down {
        animation: fadeInDown 0.8s ease-out forwards;
    }
    .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    .animation-delay-300 {
        animation-delay: 0.3s;
        opacity: 0; /* Start hidden */
    }
</style>

