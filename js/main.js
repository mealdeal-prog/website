const translations = {
    LT: {
        "nav.about": "Apie",
        "nav.approach": "Metodas",
        "nav.portfolio": "Paslaugos",
        "nav.contact": "Kontaktai",
        "hero.tagline": "Food for mindful moments",
        "hero.cta": "Susisiekite",
        "about.title": "Apie Mealdeal",
        "about.subtitle": "Augalinis maistas retritams, stovykloms, vestuvėms ir kitiems renginiams.",
        "about.text": "Mealdeal – tai augalinio maisto projektas, gimęs iš aistros kūrybai, estetikai, kokybei ir sąmoningam vartojimui. Mes kuriame skonius, kurie ne tik maitina kūną, bet ir džiugina sielą.",
        "approach.title": "Mūsų požiūris",
        "approach.feature1.title": "Augalinė kilmė",
        "approach.feature1.desc": "Tik geriausi augaliniai receptai – vegetariškas, veganiškas ir žaliavalgiškas maistas jūsų renginiams.",
        "approach.feature2.title": "Sąmoningumas",
        "approach.feature2.desc": "Dėmesys procesui - kiekvienas ingredientas parinktas atsakingai, kiekvienas patiekalas apgalvotas iki detalių ir pagamintas su meile.",
        "approach.feature3.title": "Estetika",
        "approach.feature3.desc": "Maistas, kuris džiugina ne tik skonio receptorius, bet ir garantuoja vizualinį malonumą.",
        "konstantin.title": "Apie Mane",
        "konstantin.text": "Esu Konstantinas – Mealdeal įkūrėjas ir ilgametę patirtį turintis augalinės virtuvės šefas. Augalinė virtuvė man - ne mada, o sąmoningas pasirinkimas ir kūrybinė laisvė. Tikiu, kad augalinė virtuvė gali būti ne tik tvari, bet ir gurmaniška bei estetiška. Kiekvienas mano patiekalas gimsta iš patirties, nuolatinio tobulėjimo ir meilės procesui.",
        "portfolio.title": "Maisto potyriai",
        "portfolio.card1": "RETRITAI",
        "portfolio.card2": "STOVYKLOS",
        "portfolio.card3": "VESTUVĖS",
        "portfolio.card4": "VERSLO RENGINIAI",
        "portfolio.card5": "GIMTADIENIAI",
        "portfolio.card6": "ŠVENTĖS",
        "collab.title": "Kaip tai veikia",
        "collab.step1.title": "Parašykite",
        "collab.step1.desc": "Papasakokite apie savo renginį ir poreikius",
        "collab.step2.title": "Aptarkime detales",
        "collab.step2.desc": "Kartu rasime geriausią sprendimą jūsų renginiui",
        "collab.step3.title": "MES PASIRŪPINSIME",
        "collab.step3.desc": "Pasirūpinsime, kad maistas jūsų renginyje būtų įsimintinas",
        "contact.title": "Susisiekime",
        "contact.intro": "Pasidalinkite savo idėjomis ir mes kartu sukursime nepamirštamą patirtį.",
        "contact.email_label": "Email",
        "contact.location_label": "Vieta",
        "contact.location_text": "Dirbame visoje Lietuvoje",
        "contact.name": "Vardas",
        "contact.email": "El. paštas",
        "contact.eventType": "Renginio tipas",
        "contact.date": "Data",
        "contact.message": "Žinutė",
        "contact.submit": "Siųsti",
        "footer.rights": "Visos teisės saugomos.",
        "pricing.perPerson": "Nuo 25€ / asmeniui",
        "pricing.minOrder": "Minimalus užsakymas: 10 žmonių",
        "pricing.smallerGroup": "Jei jūsų grupė mažesnė – parašykite, aptarsime galimybes"
    },
    EN: {
        "nav.about": "About",
        "nav.approach": "Approach",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Contact",
        "hero.tagline": "Food for mindful moments",
        "hero.cta": "Get in Touch",
        "about.title": "About Mealdeal",
        "about.subtitle": "Plant-based food for retreats, camps, weddings and other events.",
        "about.text": "Mealdeal is a plant-based food project born out of a passion for creativity, aesthetics, quality, and conscious consumption. We create flavors that not only nourish the body but also delight the soul.",
        "approach.title": "Our Approach",
        "approach.feature1.title": "Plant-Based",
        "approach.feature1.desc": "Food that delights not only the taste buds, but also guarantees visual pleasure.",
        "approach.feature2.title": "Mindfulness",
        "approach.feature2.desc": "Every ingredient is chosen responsibly, respecting nature and people.",
        "approach.feature3.title": "Aesthetics",
        "approach.feature3.desc": "Food that looks as good as it smells. Visual delight guaranteed.",
        "konstantin.title": "About Me",
        "konstantin.text": "Konstantin is the founder and chef of Mealdeal, whose journey in the kitchen began with a search for how plant-based food can be not only healthy but also gourmet. His philosophy is based on simplicity, purity, and attention to detail.",
        "portfolio.title": "Food Experiences",
        "portfolio.card1": "Private Dinners",
        "portfolio.card2": "For Events",
        "portfolio.card3": "Weddings",
        "portfolio.card4": "Workshops & Business Meetings",
        "portfolio.card5": "Nature Picnics",
        "portfolio.card6": "Tastings",
        "collab.title": "How it works",
        "collab.step1.title": "Write to me",
        "collab.step1.desc": "Tell me about your event and needs",
        "collab.step2.title": "Discuss details",
        "collab.step2.desc": "Together we will find the best solution for your event",
        "collab.step3.title": "I take care",
        "collab.step3.desc": "I create flavors and care that complement your experience",
        "contact.title": "Let's Connect",
        "contact.intro": "Share your ideas and together we will create an unforgettable experience.",
        "contact.email_label": "Email",
        "contact.location_label": "Location",
        "contact.location_text": "Available throughout Lithuania",
        "contact.name": "Name",
        "contact.email": "Email",
        "contact.eventType": "Event type",
        "contact.date": "Date",
        "contact.message": "Message",
        "contact.submit": "Send",
        "footer.rights": "All rights reserved.",
        "pricing.perPerson": "From 25€ / per person",
        "pricing.minOrder": "Minimum order: 10 people",
        "pricing.smallerGroup": "If your group is smaller – write, we'll discuss options"
    }
};

let currentLanguage = 'LT';

function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang.toLowerCase();
    localStorage.setItem('mealdeal_lang', lang);
    
    // Update text content
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update active states in language switches
    document.querySelectorAll('.lang-switch').forEach(el => {
        el.classList.remove('active');
    });
    
    document.getElementById(`lang-${lang.toLowerCase()}`).classList.add('active');
    document.getElementById(`mobile-lang-${lang.toLowerCase()}`).classList.add('active');
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        closeMobileMenu();
    }
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.classList.add('bg-background/80', 'backdrop-blur-md', 'py-3', 'shadow-sm');
        navbar.classList.remove('bg-transparent', 'py-6');
    } else {
        navbar.classList.remove('bg-background/80', 'backdrop-blur-md', 'py-3', 'shadow-sm');
        navbar.classList.add('bg-transparent', 'py-6');
    }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

menuToggle.addEventListener('click', () => {
    mobileMenuOverlay.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
});

function closeMobileMenu() {
    mobileMenuOverlay.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

// Form Submission
const contactForm = document.getElementById('contact-form');
const contactSuccess = document.getElementById('contact-success');
const contactError = document.getElementById('contact-error');
const accessKey = "6689de22-19d4-4c77-b9e8-8a88129caf38";

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    contactError.classList.add('hidden');
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    if (!data.name || !data.email || !data.message) {
        contactError.textContent = currentLanguage === 'LT' ? "Užpildykite visus privalomus laukelius." : "Please fill in all required fields.";
        contactError.classList.remove('hidden');
        return;
    }

    const payload = {
        access_key: accessKey,
        ...data,
        subject: "New message from MealDeal website",
        from_name: data.name,
        from_email: data.email
    };

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (result.success) {
            contactForm.classList.add('hidden');
            contactSuccess.classList.remove('hidden');
            contactForm.reset();
            setTimeout(() => {
                contactSuccess.classList.add('hidden');
                contactForm.classList.remove('hidden');
            }, 8000);
        } else {
            throw new Error(currentLanguage === 'LT' ? "Nepavyko išsiųsti žinutės. Bandykite dar kartą." : "Failed to send message. Please try again.");
        }
    } catch (err) {
        contactError.textContent = err.message;
        contactError.classList.remove('hidden');
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Check if there's a saved language preference or default to LT
    setLanguage('LT');

    // Portfolio Intersection Observer for mobile
    const portfolioItems = document.querySelectorAll('#portfolio .group > div');
    const observerOptions = {
        threshold: 0.5
    };

    const portfolioObserver = new IntersectionObserver((entries) => {
        if (window.innerWidth < 1024) {
            entries.forEach(entry => {
                const overlay = entry.target.querySelector('div[class*="absolute"]');
                if (!overlay) return; // Guard clause

                if (entry.isIntersecting) {
                    overlay.classList.remove('opacity-0');
                    overlay.classList.add('opacity-100');
                    const h3 = overlay.querySelector('h3');
                    if (h3) {
                        h3.classList.remove('translate-y-8');
                        h3.classList.add('translate-y-0');
                    }
                    const line = overlay.querySelector('div[class*="scale-x-0"]');
                    if (line) {
                        line.classList.remove('scale-x-0');
                        line.classList.add('scale-x-100');
                    }
                } else {
                    overlay.classList.add('opacity-0');
                    overlay.classList.remove('opacity-100');
                    const h3 = overlay.querySelector('h3');
                    if (h3) {
                        h3.classList.add('translate-y-8');
                        h3.classList.remove('translate-y-0');
                    }
                    const line = overlay.querySelector('div[class*="scale-x-100"]');
                    if (line) {
                        line.classList.add('scale-x-0');
                        line.classList.remove('scale-x-100');
                    }
                }
            });
        }
    }, observerOptions);

    portfolioItems.forEach(item => portfolioObserver.observe(item));
});
rver.observe(item));
});
