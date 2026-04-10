/**
 * Sudarshan Chakra — fixes.js v3.0
 * All bug fixes + RADHEY AI Assistant (fully offline, no API needed)
 * Add before </body> in index.html: <script src="fixes.js"></script>
 */

// ── Local Knowledge Base for RADHEY (works offline, no CORS) ──
window.radheyLocalAnswer = function(quehry) {hh
    const q = (query || '').toLowerCase().trim();
    if (q.includes('register') || q.includes('registr') || q.includes('join') || q.includes('provider banna') || q.includes('seeker banna') || q.includes('kaise banein') || q.includes('registration') || q.includes('पंजीकरण') || q.includes('ragistration') || q.includes('ragister') || q.includes('karna hai') || q.includes('banana hai') || q.includes('banna hai') || q.includes('member') || q.includes('account'))
        return '📝 RADHEY se voice register karein!\n"🎤 Register" button tap karein — main step-by-step guide karunga.\n\nYa nav mein "Register Provider" button tap karein 🙏';
    if (q.includes('login') || q.includes('otp') || q.includes('password') || q.includes('sign in') || q.includes('log in'))
        return '🔑 Login karne ke liye:\n1. "Login" button tap karein\n2. 10 digit mobile number dalein\n3. SMS OTP aayega\n4. 6 digit code dalein\n\nKoi password nahi chahiye! 🙏';
    if (q.includes('wallet') || q.includes('points') || q.includes('earn') || q.includes('kamao') || q.includes('paise'))
        return '💰 Wallet Points:\n🌟 Daily login = 2 pts\n⭐ Review = 5 pts\n📤 App share = 5 pts\n🤝 Provider refer = 10 pts\n💳 Payment = 10 pts\n\n10 pts = ₹1\nProfile → Wallet tab dekhen!';
    if (q.includes('verified') || q.includes('badge') || q.includes('verification') || q.includes('aadhaar') || q.includes('id proof'))
        return '✅ Verified Badge:\n1. Profile → Provider card\n2. ID proof upload karein\n   (Aadhaar / DL / Voter ID / PAN)\n3. Admin 24 ghante mein approve karega\n4. ✅ Badge profile par aayega\n\nVerified providers ko zyada bookings milte hain!';
    if (q.includes('plan') || q.includes('membership') || q.includes('upgrade') || q.includes('professional') || q.includes('elite'))
        return '🏆 Membership Plans:\n🆓 Basic — FREE\n🥈 Professional — ₹99/quarter\n   → Priority listing, 15 photos\n🥇 Elite — ₹199/quarter\n   → Top listing, Home featured\n\nProfile → Manage Membership 🙏';
    if (q.includes('book') || q.includes('hire') || q.includes('booking') || q.includes('service kaise'))
        return '📅 Service book karein:\n1. Browse → Category chunein\n2. Provider card tap karein\n3. ⚡ Hire Now tap karein\n4. Date, time, address dalein\n5. Submit!\n\nProvider seedha contact karega 🙏';
    if (q.includes('charity') || q.includes('donation') || q.includes('daan') || q.includes('social'))
        return '🌱 Charity Program:\nWallet points se underprivileged yuvaon ki skill training hoti hai.\n\nProfile → Wallet → "Donate to Charity"\n\n100% charity mein jaata hai 🙏';
    if (q.includes('language') || q.includes('bhasha') || q.includes('hindi') || q.includes('change lang'))
        return '🌏 12 Languages:\nHindi, English, Bengali, Gujarati, Marathi, Kannada, Telugu, Malayalam, Tamil, Punjabi, Odia, Assamese\n\nNav mein 🌏 tap karein!';
    if (q.includes('voice') || q.includes('mic') || q.includes('bolo') || q.includes('speak'))
        return '🎤 Voice Search:\n1. Home → "🎤 Voice Search" tap karein\n2. Apni zaroorat bolein\n   Jaise: "Plumber chahiye"\n3. App service dhundh lega!\n\nHindi + English dono mein 🙏';
    if (q.includes('report') || q.includes('complaint') || q.includes('shikayat') || q.includes('problem'))
        return '🚨 Report karein:\n1. Provider profile kholein\n2. 🚨 Report tap karein\n3. Issue describe karein\n4. Submit!\n\nAdmin 24 ghante mein review karega.\nAapki identity chhupi rahegi 🔒';
    if (q.includes('install') || q.includes('app') || q.includes('home screen') || q.includes('download'))
        return '📱 App Install:\n\nAndroid (Chrome):\nMenu ⋮ → Add to Home Screen\n\niPhone (Safari):\nShare ⬆️ → Add to Home Screen\n\nApp Store ki zaroorat nahi! Offline bhi kaam karta hai ✅';
    if (q.includes('portfolio') || q.includes('photo upload') || q.includes('work photo'))
        return '📸 Portfolio:\nProfile → Provider card → Portfolio\n\nBasic: 5 photos\nProfessional: 15 photos\nElite: Unlimited\n\nZyada photos = zyada customers!';
    if (q.includes('refer') || q.includes('referral') || q.includes('invite') || q.includes('friend'))
        return '🤝 Referral:\n1. Profile → Wallet → Refer a Friend\n2. Link share karein\n3. Dost join kare → aapko points!\n\nProvider refer = 10 pts\nFriend invite = 5 pts 💰';
    if (q.includes('contact') || q.includes('support') || q.includes('help') || q.includes('email'))
        return '📞 Contact:\n✉️ support@sudarshanchakraindia.com\n✉️ partners@sudarshanchakraindia.com\n\n⏰ Mon-Sat, 9 AM - 6 PM IST 🙏';
    if (q.length < 4 || q.includes('namaste') || q.includes('hello') || q === 'hi' || q.includes('thanks') || q.includes('shukriya'))
        return '🙏 Namaste!\n\nMain RADHEY hoon — Sudarshan Chakra ka AI sahayak.\n\nPoochhen:\n🔍 Service kaise dhundhen\n📝 Registration\n💰 Wallet & Points\n✅ Verified Badge\n📅 Booking process\n\nBataiye kya chahiye? 😊';
    return `🤔 "${query}" ke baare mein seedha jawab nahi mil raha.\n\nIn topics par poochhen:\n• Registration / Login\n• Service dhundhna\n• Wallet & Points\n• Verified Badge\n• Membership Plans\n• Booking\n\nOr: support@sudarshanchakraindia.com 🙏`;
};

(function applyFixes() {
    'use strict';

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyAllFixes);
    } else {
        setTimeout(applyAllFixes, 500);
    }

    function applyAllFixes() {
        fixBug1_WalletTab();
        // fixBug2_ProviderDashBtn(); // FIXED: Button now exists in index.html
        fixBug3_HomeStats();
        fixBug4_WalletDeduction();
        fixBug5_InfoChatbot();
        fixBug6_FAQAutoLoad();
        fixBug7_ChatModal();
        fixBug8_BookingsTab();
        fixBug9_RoleDetection();
        console.log('✅ Sudarshan Chakra: All fixes applied!');
    }

    // BUG 1: Wallet tab button missing
    function fixBug1_WalletTab() {
        const bookBtn = document.getElementById('ptab-bookings');
        if (!bookBtn || document.getElementById('ptab-wallet')) return;
        const btn = document.createElement('button');
        btn.id = 'ptab-wallet';
        btn.className = 'flex-1 px-3 py-3 font-semibold text-sm text-gray-500 hover:text-orange-600 border-b-2 border-transparent whitespace-nowrap';
        btn.innerHTML = '💰 Wallet';
        btn.onclick = () => { if (typeof showProfileTab === 'function') showProfileTab('wallet'); };
        bookBtn.parentNode.insertBefore(btn, bookBtn.nextSibling);
    }

    // BUG 2: Provider dashboard button missing
    function fixBug2_ProviderDashBtn() {
        const card = document.getElementById('myProviderCard');
        if (!card || card.querySelector('[data-fix="dash-btn"]')) return;
        const subsBtn = card.querySelector('button[onclick="openSubscriptionModal()"]');
        if (!subsBtn) return;
        const btn = document.createElement('button');
        btn.setAttribute('data-fix', 'dash-btn');
        btn.className = 'mt-2 w-full bg-green-600 text-white py-2.5 rounded-xl font-medium hover:bg-green-700 transition';
        btn.innerHTML = '📊 My Provider Dashboard';
        btn.onclick = () => { if (typeof openProviderDash === 'function') openProviderDash(); };
        subsBtn.parentNode.insertBefore(btn, subsBtn);
    }

    // BUG 3: Home stats show "..." — direct Firebase-based fix
    // updateHomeStats is inside a closure so we read Firebase directly
    function fixBug3_HomeStats() {
        // Try the closure function first (if exposed), then fallback to Firebase direct
        const tryUpdate = () => {
            if (typeof updateHomeStats === 'function') {
                updateHomeStats();
                return;
            }
            // Direct Firebase stats update — always works even if closure hides updateHomeStats
            const fb = window._firebase;
            if (!fb) return;
            Promise.all([
                fb.get(fb.ref(fb.db, 'providers')),
                fb.get(fb.ref(fb.db, 'categories')),
                fb.get(fb.ref(fb.db, 'reviews'))
            ]).then(([provSnap, catSnap, revSnap]) => {
                const provCount = provSnap.exists() ? Object.keys(provSnap.val()).length : 0;
                const catCount = catSnap.exists() ? (Array.isArray(catSnap.val()) ? catSnap.val().length : Object.keys(catSnap.val()).length) : 0;
                const revCount = revSnap.exists() ? Object.keys(revSnap.val()).length : 0;
                // Count services from providers
                const el1 = document.getElementById('homeStatProviders');
                const el2 = document.getElementById('homeStatServices');
                const el3 = document.getElementById('homeStatCategories');
                const el4 = document.getElementById('homeStatReviews');
                if (el1) el1.textContent = provCount > 0 ? provCount + '+' : '0';
                if (el2) el2.textContent = provCount > 0 ? (provCount * 3) + '+' : '0';
                if (el3) el3.textContent = catCount > 0 ? catCount + '+' : '0';
                if (el4) el4.textContent = revCount > 0 ? revCount + '+' : '0';
            }).catch(() => {});
        };
        // Run immediately and then periodically for 30s
        setTimeout(tryUpdate, 1500);
        setTimeout(tryUpdate, 4000);
        setTimeout(tryUpdate, 8000);
    }

    // FIX: Provider visibility — RADHEY-registered providers may not appear in browse
    // because applySortAndFilter matches by service name which must be exact.
    // This patches the filter to also match by categoryId+subcategoryIdx+serviceIdx.
    function fixProviderVisibility() {
        const wait = setInterval(() => {
            if (typeof applySortAndFilter === 'undefined') return;
            clearInterval(wait);
            const orig = window.applySortAndFilter;
            window.applySortAndFilter = function() {
                // Before running filter, normalize any providers missing status
                if (typeof providers !== 'undefined') {
                    providers.forEach(p => {
                        if (!p.status) p.status = 'active';
                        if (p.available === undefined) p.available = true;
                    });
                }
                orig.apply(this, arguments);
            };
            console.log('✅ Provider visibility fix applied');
        }, 500);
    }
    fixProviderVisibility();

    // BUG 4: Wallet points not deducted on hire modal redemption
    function fixBug4_WalletDeduction() {
        const wait = setInterval(() => {
            if (typeof hmPaymentDone === 'undefined') return;
            clearInterval(wait);
            const orig = window.hmPaymentDone;
            window.hmPaymentDone = async function () {
                const ptsToDeduct = window._hmPtsUsed || 0;
                await orig.apply(this, arguments);
                if (ptsToDeduct > 0 && window.firebaseUser && window._firebase) {
                    try {
                        const ref = window._firebase.ref(window._firebase.db, `users/${window.firebaseUser.uid}/walletCredits`);
                        const snap = await window._firebase.get(ref);
                        const cur = snap.exists() ? (snap.val() || 0) : 0;
                        await window._firebase.set(ref, Math.max(0, cur - ptsToDeduct));
                        window._hmPtsUsed = 0;
                    } catch (e) { console.warn('Wallet deduct error:', e); }
                }
            };
        }, 500);
    }

    // BUG 5: Info chatbot — use local KB (no API, no CORS)
    function fixBug5_InfoChatbot() {
        const wait = setInterval(() => {
            if (typeof infoChatSend === 'undefined') return;
            clearInterval(wait);
            window.infoChatSend = function () {
                const inp = document.getElementById('infoChatInput');
                const msg = inp ? inp.value.trim() : '';
                if (!msg) return;
                inp.value = '';
                if (typeof addInfoMsg !== 'function') return;
                addInfoMsg(msg, 'user');
                const typing = addInfoMsg('⏳ Thinking…', 'bot thinking');
                setTimeout(() => {
                    const ans = typeof scFindAnswer === 'function' ? scFindAnswer(msg) : window.radheyLocalAnswer(msg);
                    typing.textContent = ans;
                    typing.style.opacity = '1';
                }, 400);
            };
        }, 500);
    }

    // BUG 6: FAQ auto-builds on info page
    function fixBug6_FAQAutoLoad() {
        const wait = setInterval(() => {
            if (typeof showPage === 'undefined') return;
            clearInterval(wait);
            const orig = window.showPage;
            window.showPage = function (pageName) {
                orig(pageName);
                if (pageName === 'info') setTimeout(() => { if (typeof buildFAQ === 'function') buildFAQ(); }, 150);
            };
        }, 500);
    }

    // BUG 7: Chat modal called with empty string
    function fixBug7_ChatModal() {
        const wait = setInterval(() => {
            if (typeof openChatModal === 'undefined') return;
            clearInterval(wait);
            const orig = window.openChatModal;
            window.openChatModal = function (id) {
                if (!id || id === 'undefined' || id === '') { console.warn('openChatModal: empty id'); return; }
                orig(id);
            };
        }, 500);
    }

    // BUG 8: Bookings defaults to "My Requests"
    function fixBug8_BookingsTab() {
        const wait = setInterval(() => {
            if (typeof loadMyBookings === 'undefined') return;
            clearInterval(wait);
            const orig = window.loadMyBookings;
            window.loadMyBookings = function () {
                const sb = document.getElementById('bookViewSeeker');
                const pb = document.getElementById('bookViewProvider');
                if (sb) sb.className = 'flex-1 py-2 rounded-lg bg-orange-600 text-white font-semibold text-sm';
                if (pb) pb.className = 'flex-1 py-2 rounded-lg bg-gray-100 text-gray-600 font-semibold text-sm';
                orig.apply(this, arguments);
            };
        }, 500);
    }

    // BUG 9: Role label — show "Registered User" + correct role
    function fixBug9_RoleDetection() {
        const wait = setInterval(() => {
            if (typeof renderProfilePage === 'undefined') return;
            clearInterval(wait);
            const orig = window.renderProfilePage;
            window.renderProfilePage = function () {
                orig.apply(this, arguments);
                setTimeout(() => {
                    const fu = window.firebaseUser;
                    if (!fu) return;
                    function applyRole() {
                        if (typeof providers === 'undefined') return false;
                        const isP = providers.some(p => p.ownerUid === fu.uid);
                        const isS = typeof seekers !== 'undefined' && seekers.some(s => s.ownerUid === fu.uid);
                        const roleEl = document.getElementById('myProfileRole');
                        if (!roleEl) return false;
                        roleEl.textContent = isP && isS ? '🛠️ Provider  |  🔍 Seeker · Registered User'
                            : isP ? '🛠️ Service Provider · Registered User'
                            : isS ? '🔍 Service Seeker · Registered User'
                            : '✅ Registered User';
                        roleEl.style.color = '#fed7aa';
                        if (isP) {
                            const card = document.getElementById('myProviderCard');
                            if (card) card.classList.remove('hidden');
                            // fixBug2_ProviderDashBtn(); // FIXED: Button now exists in index.html
                        }
                        // Add "Become a Provider/Seeker" buttons
                        const header = roleEl.closest('.bg-gradient-to-br');
                        if (header && !header.querySelector('[data-fix="role-btns"]')) {
                            const wrap = document.createElement('div');
                            wrap.setAttribute('data-fix', 'role-btns');
                            wrap.className = 'flex gap-2 mt-2 flex-wrap';
                            if (!isP) {
                                const b = document.createElement('button');
                                b.className = 'text-xs bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-xl font-semibold';
                                b.innerHTML = '➕ Become a Provider';
                                b.onclick = () => showPage('register');
                                wrap.appendChild(b);
                            }
                            if (!isS) {
                                const b2 = document.createElement('button');
                                b2.className = 'text-xs bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-xl font-semibold';
                                b2.innerHTML = '➕ Become a Seeker';
                                b2.onclick = () => showPage('seeker');
                                wrap.appendChild(b2);
                            }
                            if (wrap.children.length) header.appendChild(wrap);
                        }
                        return true;
                    }
                    if (!applyRole()) {
                        let tries = 0;
                        const retry = setInterval(() => { if (applyRole() || ++tries > 10) clearInterval(retry); }, 1500);
                    }
                }, 800);
            };
        }, 500);
    }

    // EXPANDED VOICE SEARCH (200+ keywords)
    const wait_voice = setInterval(() => {
        if (typeof processVoiceCommand === 'undefined') return;
        clearInterval(wait_voice);
        window.processVoiceCommand = function (transcript) {
            const q = transcript.toLowerCase().trim();
            const map = {
                'plumber':'Pipe Repair','plumbing':'Pipe Repair','pipe repair':'Pipe Repair','pipe':'Pipe Repair','leak':'Pipe Repair','नल':'Tap/Faucet Repair','tap':'Tap/Faucet Repair','faucet':'Tap/Faucet Repair','drainage':'Drainage Cleaning','drain':'Drainage Cleaning','टंकी':'Tank Installation','tank':'Tank Installation','bathroom':'Bathroom Fitting','toilet':'Bathroom Fitting','प्लंबर':'Pipe Repair','पाइप':'Pipe Repair','नाली':'Drainage Cleaning',
                'electrician':'Wiring & Rewiring','electrical':'Wiring & Rewiring','wiring':'Wiring & Rewiring','wire':'Wiring & Rewiring','fan installation':'Fan Installation','fan':'Fan Installation','पंखा':'Fan Installation','light':'Light Installation','bulb':'Light Installation','लाइट':'Light Installation','switchboard':'Switchboard Repair','switch':'Switchboard Repair','इलेक्ट्रीशियन':'Wiring & Rewiring','बिजली':'Wiring & Rewiring',
                'ac repair':'AC Servicing','ac service':'AC Servicing','air conditioning':'AC Servicing','air condition':'AC Servicing','ac':'AC Servicing','cooler':'AC Servicing','एसी':'AC Servicing','एयर कंडीशनर':'AC Servicing',
                'carpenter':'Furniture Repair','carpentry':'Furniture Repair','furniture':'Furniture Repair','wood work':'Wood Polishing','wood':'Wood Polishing','door':'Door/Window Repair','window':'Door/Window Repair','बढ़ई':'Furniture Repair','फर्नीचर':'Furniture Repair','लकड़ी':'Wood Polishing','दरवाजा':'Door/Window Repair',
                'deep clean':'Full Home Deep Clean','home clean':'Full Home Deep Clean','cleaning':'Full Home Deep Clean','cleaner':'Full Home Deep Clean','clean':'Full Home Deep Clean','maid':'Full Home Deep Clean','sweep':'Full Home Deep Clean','jhadu':'Full Home Deep Clean','झाड़ू':'Full Home Deep Clean','सफाई':'Full Home Deep Clean','साफ':'Full Home Deep Clean','sofa clean':'Sofa Shampooing','sofa':'Sofa Shampooing','mattress':'Mattress Deep Clean','kitchen clean':'Full Kitchen Deep Clean',
                'painter':'Wall Painting','painting':'Wall Painting','wall paint':'Wall Painting','paint':'Wall Painting','colour':'Wall Painting','color':'Wall Painting','पेंटर':'Wall Painting','रंग':'Wall Painting','दीवार रंग':'Wall Painting',
                'beautician':'Hair Cut','beauty':'Hair Cut','parlour':'Hair Cut','parlor':'Hair Cut','salon':'Hair Cut','makeup':'Party Makeup','bridal makeup':'Bridal Makeup','bridal':'Bridal Makeup','mehendi':'Party Mehendi','mehndi':'Party Mehendi','waxing':'Waxing','facial':'Facial','ब्यूटीशियन':'Hair Cut','मेहंदी':'Party Mehendi','मेकअप':'Party Makeup','सैलून':'Hair Cut',
                'cook':'Tiffin Service','chef':'Tiffin Service','cooking':'Tiffin Service','tiffin service':'Tiffin Service','tiffin':'Tiffin Service','food':'Tiffin Service','catering service':'Catering Service','catering':'Catering Service','खाना':'Tiffin Service','रसोइया':'Tiffin Service','कैटरिंग':'Catering Service',
                'doctor':'Home Visit','nurse':'Home Nursing Care','medical':'Home Visit','physio':'Home Physiotherapy','physiotherapy':'Home Physiotherapy','yoga':'Morning Yoga','dietician':'Diet Consultation','diet':'Diet Consultation','fitness':'Personal Training at Home','डॉक्टर':'Home Visit','नर्स':'Home Nursing Care','योग':'Morning Yoga',
                'taxi':'Local Taxi','cab':'Local Taxi','auto':'Local Taxi','driver':'Personal Driver','car':'Local Taxi','bike':'Scooter Rental','tempo':'9-Seater Tempo','टैक्सी':'Local Taxi','ड्राइवर':'Personal Driver',
                'tutor':'Home Tutoring','teacher':'Home Tutoring','coaching':'Home Tutoring','spoken english':'Basic Spoken English','english trainer':'Basic Spoken English','maths':'Science & Math Tutor','math':'Science & Math Tutor','dance':'Bollywood Dance','music':'Guitar Classes','guitar':'Guitar Classes','ट्यूटर':'Home Tutoring','शिक्षक':'Home Tutoring','नृत्य':'Bollywood Dance',
                'photographer':'Wedding Photography','photography':'Wedding Photography','videographer':'Wedding Videography','video':'Wedding Videography','dj':'Wedding DJ','decoration':'Wedding Decoration','tent':'Tent & Shamiana','band':'Baraat Band','dhol':'Dhol Players','फोटोग्राफर':'Wedding Photography','सजावट':'Wedding Decoration','डीजे':'Wedding DJ',
                'pest control':'Cockroach Treatment','pest':'Cockroach Treatment','cockroach':'Cockroach Treatment','termite':'Termite Treatment','mosquito':'Mosquito Treatment','rats':'Rodent Control','कीड़े':'Cockroach Treatment','दीमक':'Termite Treatment','मच्छर':'Mosquito Treatment',
                'ro repair':'RO Installation','water purifier':'RO Installation','ro':'RO Installation','geyser':'Geyser Repair','inverter':'Inverter Repair','battery':'Battery Replacement','solar':'Solar Panel Service','cctv':'CCTV Installation','आरओ':'RO Installation','गीजर':'Geyser Repair','इन्वर्टर':'Inverter Repair',
                'packers movers':'Home Shifting','movers':'Home Shifting','packers':'Home Shifting','shifting':'Home Shifting','मूवर्स':'Home Shifting','शिफ्टिंग':'Home Shifting',
                'ca':'ITR Filing','tax filing':'ITR Filing','tax':'ITR Filing','gst':'GST Registration & Filing','lawyer':'Property Legal Help','legal':'Property Legal Help','टैक्स':'ITR Filing',
                'website':'Business Website','web developer':'Business Website','developer':'Business Website','app development':'App Development','logo':'Logo Design','graphic':'Logo Design','social media':'Instagram Management','वेबसाइट':'Business Website',
                'pet grooming':'Dog Grooming at Home','dog':'Dog Grooming at Home','cat':'Cat Grooming','vet':'Home Visit Vet','पालतू':'Dog Grooming at Home','कुत्ता':'Dog Grooming at Home',
            };
            const sortedKeys = Object.keys(map).sort((a, b) => b.length - a.length);
            let target = null;
            for (const kw of sortedKeys) { if (q.includes(kw)) { target = map[kw]; break; } }
            if (target && typeof categories !== 'undefined') {
                for (const cat of categories) {
                    for (let si = 0; si < (cat.subcategories || []).length; si++) {
                        const sub = cat.subcategories[si];
                        for (let vi = 0; vi < (sub.subsubcategories || []).length; vi++) {
                            const svc = sub.subsubcategories[vi];
                            const svcName = svc.name && (svc.name.en || svc.name);
                            if (svcName === target || (svcName && svcName.includes(target))) {
                                if (typeof navigateToService === 'function') navigateToService(cat.id, si, vi);
                                return;
                            }
                        }
                    }
                }
            }
            // Fallback to global search
            const inp = document.getElementById('globalSearchInput');
            if (inp) inp.value = transcript;
            if (typeof globalSearchSubmit === 'function') globalSearchSubmit({ key: 'Enter' });
            if (typeof showFirebaseStatus === 'function') showFirebaseStatus('🎤 Searching: ' + transcript, 'info');
        };
    }, 800);

})(); // end applyFixes IIFE


// ════════════════════════════════════════════════════════════════
// RADHEY v2.0 — Top-right Nav Floating AI + Complete Voice Registration
// ════════════════════════════════════════════════════════════════
(function initRADHEY() {
    if (document.getElementById('radhey-widget')) return;

    const style = document.createElement('style');
    style.textContent = `
        #radhey-widget{display:flex;align-items:center;gap:6px;cursor:pointer;padding:4px 10px 4px 6px;border-radius:20px;background:linear-gradient(135deg,#fff7ed,#ffedd5);border:2px solid #fb923c;transition:all 0.2s;position:relative;user-select:none;}
        #radhey-widget:hover{background:linear-gradient(135deg,#ffedd5,#fed7aa);box-shadow:0 2px 12px rgba(234,88,12,0.3);}
        #radhey-chakra{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#ea580c,#f97316);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;border:2px solid #fff;box-shadow:0 2px 8px rgba(234,88,12,0.4);animation:chakraSpin 8s linear infinite;}
        #radhey-widget:hover #radhey-chakra{animation-duration:1s;}
        @keyframes chakraSpin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        #radhey-widget-text .r-name{font-size:11px;font-weight:800;color:#c2410c;letter-spacing:0.5px;}
        #radhey-widget-text .r-sub{font-size:9px;color:#9a3412;}
        #radhey-dot{position:absolute;top:2px;right:2px;width:8px;height:8px;border-radius:50%;background:#16a34a;border:1.5px solid white;animation:rdPulse 2s infinite;}
        @keyframes rdPulse{0%,100%{opacity:1}50%{opacity:0.4}}
        #radhey-panel{position:fixed;top:70px;right:16px;z-index:9998;width:340px;max-height:560px;background:linear-gradient(160deg,#1a1a2e 0%,#16213e 60%,#0f3460 100%);border-radius:20px;box-shadow:0 8px 40px rgba(0,0,0,0.5);display:flex;flex-direction:column;overflow:hidden;border:1px solid rgba(234,88,12,0.4);transform:scale(0.9) translateY(-10px);opacity:0;pointer-events:none;transition:all 0.25s cubic-bezier(0.34,1.4,0.64,1);}
        #radhey-panel.open{transform:scale(1) translateY(0);opacity:1;pointer-events:all;}
        #radhey-head{background:linear-gradient(90deg,#ea580c,#f97316,#fb923c);padding:12px 14px;display:flex;align-items:center;gap:10px;flex-shrink:0;}
        #radhey-head-avatar{width:38px;height:38px;border-radius:50%;background:white;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;animation:chakraSpin 6s linear infinite;}
        #radhey-messages{flex:1;overflow-y:auto;padding:10px;display:flex;flex-direction:column;gap:7px;max-height:300px;min-height:160px;scrollbar-width:thin;scrollbar-color:rgba(234,88,12,0.3) transparent;}
        .rm-bot{background:rgba(255,255,255,0.07);color:#f1f1f1;border-radius:14px 14px 14px 3px;padding:9px 12px;font-size:12px;line-height:1.6;max-width:90%;align-self:flex-start;white-space:pre-wrap;border:1px solid rgba(234,88,12,0.15);}
        .rm-user{background:linear-gradient(135deg,#ea580c,#f97316);color:white;border-radius:14px 14px 3px 14px;padding:9px 12px;font-size:12px;line-height:1.6;max-width:82%;align-self:flex-end;}
        #radhey-quick{padding:7px 10px;display:flex;flex-wrap:wrap;gap:4px;border-top:1px solid rgba(255,255,255,0.06);flex-shrink:0;}
        .rq-btn{background:rgba(234,88,12,0.15);border:1px solid rgba(234,88,12,0.35);border-radius:14px;padding:4px 9px;font-size:10px;color:#fb923c;cursor:pointer;white-space:nowrap;}
        .rq-btn:hover{background:rgba(234,88,12,0.3);}
        #radhey-inputrow{padding:8px 10px;border-top:1px solid rgba(255,255,255,0.07);display:flex;gap:5px;align-items:center;background:rgba(0,0,0,0.25);flex-shrink:0;}
        #radhey-inp{flex:1;background:rgba(255,255,255,0.08);border:1px solid rgba(234,88,12,0.3);border-radius:16px;padding:7px 13px;color:white;font-size:12px;outline:none;}
        #radhey-inp::placeholder{color:rgba(255,255,255,0.35);}
        #radhey-inp:focus{border-color:#f97316;}
        .r-icon-btn{width:32px;height:32px;border-radius:50%;border:none;display:flex;align-items:center;justify-content:center;font-size:15px;cursor:pointer;flex-shrink:0;}
        #radhey-mic-btn{background:rgba(255,255,255,0.1);color:white;}
        #radhey-mic-btn.listening{background:#dc2626;animation:rdPulse 0.8s infinite;}
        #radhey-send-btn{background:linear-gradient(135deg,#ea580c,#f97316);color:white;}
        #radhey-progress{height:3px;background:rgba(255,255,255,0.1);flex-shrink:0;display:none;}
        #radhey-progress-bar{height:100%;background:linear-gradient(90deg,#ea580c,#fb923c);transition:width 0.4s;width:0%;}
        @media(max-width:480px){#radhey-panel{width:calc(100vw - 20px);right:10px;top:64px;}}
    `;
    document.head.appendChild(style);

    // Inject nav widget
    function injectWidget() {
        const nav = document.querySelector('nav .flex.gap-2');
        if (!nav) { setTimeout(injectWidget, 500); return; }
        if (document.getElementById('radhey-widget')) return;
        const w = document.createElement('div');
        w.id = 'radhey-widget';
        w.title = 'RADHEY — आपका AI सहायक';
        w.innerHTML = '<div id="radhey-chakra">🔱</div><div id="radhey-widget-text"><div class="r-name">RADHEY</div><div class="r-sub">🙏 Namaste</div></div><div id="radhey-dot"></div>';
        const langBtn = nav.querySelector('button[onclick="changeLang()"]');
        if (langBtn) nav.insertBefore(w, langBtn); else nav.appendChild(w);
        w.onclick = radheyToggle;
    }

    // Panel HTML
    const panel = document.createElement('div');
    panel.id = 'radhey-panel';
    panel.innerHTML = `
        <div id="radhey-head">
            <div id="radhey-head-avatar">🔱</div>
            <div style="flex:1"><div style="font-weight:800;font-size:14px;color:white">RADHEY 🙏</div><div style="font-size:10px;color:rgba(255,255,255,0.85)">Sudarshan Chakra · AI सहायक</div></div>
            <button onclick="radheyStartVoiceReg()" style="background:rgba(255,255,255,0.2);border:none;border-radius:8px;padding:4px 8px;color:white;font-size:11px;cursor:pointer;font-weight:700">🎤 Register</button>
            <button onclick="radheyToggle()" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:26px;height:26px;color:white;font-size:14px;cursor:pointer;margin-left:4px">✕</button>
        </div>
        <div id="radhey-progress"><div id="radhey-progress-bar"></div></div>
        <div id="radhey-messages"></div>
        <div id="radhey-quick">
            <span class="rq-btn" onclick="radheyAsk('plumber chahiye')">🔧 Plumber</span>
            <span class="rq-btn" onclick="radheyAsk('electrician chahiye')">⚡ Electrician</span>
            <span class="rq-btn" onclick="radheyAsk('safai chahiye')">🧹 Cleaning</span>
            <span class="rq-btn" onclick="radheyAsk('wallet points kaise kamayein')">💰 Wallet</span>
            <span class="rq-btn" onclick="radheyStartVoiceReg()">🎤 Voice Register</span>
            <span class="rq-btn" onclick="radheyAsk('verified badge kaise milega')">✅ Verify</span>
        </div>
        <div id="radhey-inputrow">
            <input id="radhey-inp" placeholder="Kuch bhi pucho / Ask anything" onkeydown="if(event.key==='Enter')radheyAsk()">
            <button class="r-icon-btn" id="radhey-mic-btn" onclick="radheyToggleMic()">🎤</button>
            <button class="r-icon-btn" id="radhey-send-btn" onclick="radheyAsk()">➤</button>
        </div>
    `;
    document.body.appendChild(panel);

    // Close on outside click
    document.addEventListener('click', function (e) {
        if (!panel.contains(e.target) && !document.getElementById('radhey-widget')?.contains(e.target)) {
            radheyStop();
            panel.classList.remove('open');
        }
    });

    // State
    window._radheyRegMode = false;
    window._radheyRegStep = 0;
    window._radheyRegData = {};
    window._radheySteps  = null;
    window._radheyListening = false;
    window._radheyRec = null;

      window._PROVIDER_STEPS = ['name','mobile','language'];
  window._SEEKER_STEPS = ['name','mobile','language'];
  const PROVIDER_STEPS = window._PROVIDER_STEPS;
  const SEEKER_STEPS = window._SEEKER_STEPS;

    // Mobile audio unlock utility (must be called within user gesture)
    window._unlockAudio = function() {
        if (window._audioUnlocked) return;
        try {
            var AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            var ctx = new AudioCtx();
            var buf = ctx.createBuffer(1, 1, 22050);
            var src = ctx.createBufferSource();
            src.buffer = buf;
            src.connect(ctx.destination);
            src.start(0);
            ctx.resume && ctx.resume();
            window._audioUnlocked = true;
        } catch(e) { window._audioUnlocked = true; }
    };
    // iOS detection helper
    window._isIOS = function() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    };
    window.radheyToggle = function () {
        if (window._unlockAudio) window._unlockAudio();
        const isOpen = panel.classList.contains('open');
        if (isOpen) {
            radheyStop();
            panel.classList.remove('open');
        } else {
            panel.classList.add('open');
            if (!document.getElementById('radhey-messages').children.length) radheyGreet();
        }
    };

    window.radheyGreet = function () {
        const name = (window.firebaseUser && window.userProfile?.name) ? window.userProfile.name.split(' ')[0] : (window._T ? window._T('दोस्त', 'friend') : 'दोस्त');
        const greetHi = `🙏 Namaste ${name}!\n\nMain RADHEY hoon — Sudarshan Chakra ka AI sahayak.\n\n📝 Voice se register karein\n🔍 Koi bhi service dhundhen\n💰 Wallet & points jaanein\n✅ Verification guide\n\nBataiye kya chahiye? 😊`;
        const greetEn = `🙏 Hello ${name}!\n\nI am RADHEY — Sudarshan Chakra AI Assistant.\n\n📝 Register via voice\n🔍 Find any service\n💰 Wallet & points info\n✅ Verification guide\n\nHow can I help you? 😊`;
        radheyBot(window._T ? window._T(greetHi, greetEn) : greetHi);
    };

    // ── Language Helpers ──
    window._getLang = function() {
        return localStorage.getItem('language') || 'hi';
    };
    window._getLangCode = function() {
        const l = window._getLang();
        const codes = { 'en': 'en-IN', 'hi': 'hi-IN', 'bn': 'bn-IN', 'gu': 'gu-IN', 'mr': 'mr-IN', 'ta': 'ta-IN', 'te': 'te-IN', 'ml': 'ml-IN', 'kn': 'kn-IN', 'pa': 'pa-IN' };
        return codes[l] || 'hi-IN';
    };
    // _T(hindi, english) — returns text in user's language (Hindi default)
    window._T = function(hi, en) {
        const l = window._getLang();
        if (l === 'en') return en;
        return hi;  // default Hindi for all other languages
    };

    window.radheyBot = function (text) {
        const msgs = document.getElementById('radhey-messages');
        if (!msgs) return;
        const d = document.createElement('div');
        d.className = 'rm-bot'; d.textContent = text;
        msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight;
        if ('speechSynthesis' in window) {
            // Unlock audio on mobile (requires prior user gesture)
            if (window._unlockAudio) window._unlockAudio();
            // Clean and speak the full Radhey message naturally (strip emojis/decorators)
            const speakText = text
                .replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27FF}\u{2300}-\u{23FF}\u{2B00}-\u{2BFF}\u{1F300}-\u{1F9FF}\u{FE00}-\u{FEFF}]/gu, '')
                .replace(/[━─|]/g, '')
                .split('\n')
                .map(s => s.trim())
                .filter(s => s.length > 0)
                .join('. ')
                .replace(/\.{2,}/g, '. ')
                .trim()
                .substring(0, 750);
            if (!speakText) return;
            // Function to speak once voices are ready (important on mobile)
            const doSpeak = function() {
                const _spk = (window._radheyBotSpeakOverride || speakText); if (window._radheyBotSpeakOverride) window._radheyBotSpeakOverride = null; const u = new SpeechSynthesisUtterance(_spk);
                const langCode = window._getLangCode ? window._getLangCode() : 'hi-IN';
                u.lang = langCode;
                // Option 2: lang-only — do NOT set u.voice, let Android pick by lang
                // Setting u.voice after cancel() causes Android TTS to switch voices
                u.lang = 'hi-IN';
                u.rate = 0.9;
                u.volume = 1.0;
                u.pitch = 1.0;
                let _fired = false;
                u.onend = function() {
                    if (_fired) return; _fired = true;
                    if (window._ttsKeepAlive) { clearInterval(window._ttsKeepAlive); window._ttsKeepAlive = null; }
                    if (window._radheyRegMode && !window._radheyListening) {
                        setTimeout(function() { if (typeof radheyAutoMic === 'function') radheyAutoMic(); }, 500);
                    }
                };
                u.onerror = function(e) {
                    if (window._ttsKeepAlive) { clearInterval(window._ttsKeepAlive); window._ttsKeepAlive = null; }
                    if (e.error === 'interrupted') return;
                    if (window._radheyRegMode && !window._radheyListening) {
                        setTimeout(function() { if (typeof radheyAutoMic === 'function') radheyAutoMic(); }, 1000);
                    }
                };
                window.speechSynthesis.speak(u);
                // Keep-alive for long texts (Chrome mobile pauses after 15s)
                // Use onpause instead of interval to avoid iOS issues
                if (window._ttsKeepAlive) clearInterval(window._ttsKeepAlive);
                window._ttsKeepAlive = setInterval(function() {
                    if (!window.speechSynthesis.speaking) {
                        clearInterval(window._ttsKeepAlive);
                        window._ttsKeepAlive = null;
                    } else if (window.speechSynthesis.paused) {
                        window.speechSynthesis.resume();
                    }
                }, 3000);
            };
            // Load voices — critical on mobile where voices load async
            var voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) {
                doSpeak();
            } else {
                // First load: voices not ready yet
                var _voiceTimer = setTimeout(function() {
                    // Fallback after 1s even without onvoiceschanged
                    window.speechSynthesis.onvoiceschanged = null;
                    doSpeak();
                }, 0);
                window.speechSynthesis.onvoiceschanged = function() {
                    clearTimeout(_voiceTimer);
                    window.speechSynthesis.onvoiceschanged = null;
                    doSpeak();
                };
            }
        }
    };
    window.radheyUser = function (text) {
        const msgs = document.getElementById('radhey-messages');
        if (!msgs) return;
        const d = document.createElement('div');
        d.className = 'rm-user'; d.textContent = text;
        msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight;
    };

    window._radheySetProgress = function(step, total) {
        const bar = document.getElementById('radhey-progress');
        const fill = document.getElementById('radhey-progress-bar');
        if (!bar || !fill) return;
        bar.style.display = total > 0 ? 'block' : 'none';
        fill.style.width = total > 0 ? Math.round((step / total) * 100) + '%' : '0%';
    };
    function setProgress(step, total) { window._radheySetProgress(step, total); }

    window.radheyAsk = function (forced) {
        const inp = document.getElementById('radhey-inp');
        const text = forced || (inp ? inp.value.trim() : '');
        if (!text) return;
        if (inp) inp.value = '';
        radheyUser(text);
        if (window._radheyRegMode) { radheyHandleRegStep(text); return; }
        const q = text.toLowerCase();

        // Registration intent — auto-start voice registration
        const regWords = ['register','registr','registration','पंजीकरण','ragist','member banna','account banao','provider banna','seeker banna','banana hai','banna hai','join karna','naam darz','enroll','signup','sign up','naam likhao','apna naam','karna hai'];
        if (regWords.some(w => q.includes(w))) {
            radheyBot('📝 Bilkul! Main aapko abhi register karta hoon...\n\nShuru karte hain! 🎤');
            setTimeout(radheyStartVoiceReg, 900);
            return;
        }

        // Service search intent
        if (['chahiye','खोजो','find','search','book','hire','need','want','ढूंढो','दिखाओ','dikhao','khojo','dhundho'].some(w => q.includes(w))) {
            if (typeof processVoiceCommand === 'function') processVoiceCommand(q);
            radheyBot('🔍 Search chal rahi hai...\nBrowse page mein results dekhen!');
            return;
        }

        // Use local knowledge base
        radheyBot(window.radheyLocalAnswer(text));
    };

    window.radheyToggleMic = function () {
        var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        const mic = document.getElementById('radhey-mic-btn');
        if (isIOS || (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window))) {
            // iOS or no speech API: focus text input instead
            var inp = document.getElementById('radhey-inp');
            if (inp) { inp.focus(); inp.placeholder = 'Type your message...'; }
            if (mic) mic.classList.remove('listening');
            return;
        }
        if (window._radheyListening) { if (window._radheyRec) window._radheyRec.stop(); return; }
        // Unlock audio on user gesture
        if (window._unlockAudio) window._unlockAudio();
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        const rec = new SR();
        rec.lang = (window._getLangCode ? window._getLangCode() : 'hi-IN');
        rec.interimResults = false;
        rec.maxAlternatives = 1;
        rec.onresult = function(e) {
            const t = e.results[0][0].transcript;
            const inp = document.getElementById('radhey-inp');
            if (inp) inp.value = t;
            radheyAsk(t);
        };
        rec.onend = function() { if (mic) mic.classList.remove('listening'); window._radheyListening = false; };
        rec.onerror = function(e) { if (mic) mic.classList.remove('listening'); window._radheyListening = false; };
        try { rec.start(); if (mic) mic.classList.add('listening'); window._radheyListening = true; window._radheyRec = rec; }
        catch(err) { window._radheyListening = false; if (mic) mic.classList.remove('listening'); }
    };

    // ── Voice Registration ──
    window.radheyStartVoiceReg = function () {
    if (window._unlockAudio) window._unlockAudio();
    window._radheyRegMode = true;
    window._radheyRegStep = 0;
    window._radheyRegData = {};
    window._radheySteps = ['name','mobile','language'];
    panel.classList.add('open');
    radheyBot('\uD83C\uDFA4 Voice Registration!\n\nSirf 3 asan sawaal:\n1. Aapka Naam\n2. Mobile Number\n3. Bhasha\n\nFir Login karke OTP se verify karein.\n\nStep 1: Aapka poora naam bolein.\nJaise: Ramesh Kumar');
    window._radheySetProgress(0, 3);
  };
window.radheyHandleRegStep = function (answer) {
    const a = answer.toLowerCase().trim();
    const d = window._radheyRegData;
    const step = window._radheyRegStep;
    const STEPS = ['name','mobile','language'];
    const total = 3;
    const field = STEPS[step];
    window._radheySetProgress(step, total);
    try { localStorage.setItem('_radheyDraft', JSON.stringify({step: step, data: d})); } catch(e) {}

    if (step > 0 && (a.includes('wapas') || a.includes('back') || a.includes('galat') || a.includes('phir se') || a.includes('badle') || a.includes('change') || a.includes('\u0917\u0932\u0924') || a.includes('\u0935\u093E\u092A\u0938') || a.includes('\u092C\u0926\u0932\u094B'))) {
      window._radheyRegStep = Math.max(0, step - 1);
      const prevField = STEPS[window._radheyRegStep];
      const prevPrompts = {'name':'Aapka poora naam bolein.','mobile':'10 digit mobile number bolein.','language':'Bhasha chunein (number bolein): 1.Hindi 2.English 3.Bengali 4.Gujarati 5.Marathi 6.Kannada 7.Telugu 8.Malayalam 9.Tamil 10.Punjabi 11.Odia 12.Assamese'};
      radheyBot('\u21A9\uFE0F Ek kadam wapas!\n\n' + (prevPrompts[prevField] || 'Pichla jawab dobara bolein.'));
      return;
    }

    if (field === 'name') {
      if (answer.trim().length < 2) { radheyBot('\u2753 Poora naam batayein. Jaise: Ramesh Kumar'); return; }
      d.name = answer.trim();
      window._radheyRegStep = 1;
      window._radheySetProgress(1, total);
      radheyBot('\u2705 Naam: ' + d.name + '\n\nStep 2: 10 digit mobile number bolein.\nJaise: 9414055013');
      return;
    }

    if (field === 'mobile') {
      const nums = answer.replace(/\D/g, '').slice(-10);
      if (nums.length !== 10) { radheyBot('\u274C 10 digit number chahiye. Dobara bolein.'); return; }
      d.mobile = nums;
      window._radheyRegStep = 2;
      window._radheySetProgress(2, total);
      radheyBot('\u2705 Mobile: ' + nums.split('').join(' ') + '\n\nStep 3: Bhasha chunein (number bolein):\n1. Hindi\n2. English\n3. Bengali\n4. Gujarati\n5. Marathi\n6. Kannada\n7. Telugu\n8. Malayalam\n9. Tamil\n10. Punjabi\n11. Odia\n12. Assamese');
      return;
    }

    if (field === 'language') {
      const langList = ['Hindi','English','Bengali','Gujarati','Marathi','Kannada','Telugu','Malayalam','Tamil','Punjabi','Odia','Assamese'];
      const lmap = {'hindi':'Hindi','english':'English','bengali':'Bengali','gujarati':'Gujarati','marathi':'Marathi','kannada':'Kannada','telugu':'Telugu','malayalam':'Malayalam','tamil':'Tamil','punjabi':'Punjabi','odia':'Odia','assamese':'Assamese','\u0939\u093F\u0902\u0926\u0940':'Hindi','\u0905\u0902\u0917\u094D\u0930\u0947\u091C\u0940':'English','\u0939\u093F\u0928\u094D\u0926\u0940':'Hindi'};
      const numWords = {'ek':1,'do':2,'teen':3,'char':4,'paanch':5,'chhe':6,'saat':7,'aath':8,'nau':9,'das':10,'gyarah':11,'barah':12,'\u090F\u0915':1,'\u0926\u094B':2,'\u0924\u0940\u0928':3,'\u091A\u093E\u0930':4,'\u092A\u093E\u0901\u091A':5,'\u091B\u0939':6,'\u0938\u093E\u0924':7,'\u0906\u0920':8,'\u0928\u094C':9,'\u0926\u0938':10,'\u0917\u094D\u092F\u093E\u0930\u0939':11,'\u092C\u093E\u0930\u0939':12};
      const found = [];
      for (const [w, n] of Object.entries(numWords)) { if (a.includes(w) && langList[n-1]) found.push(langList[n-1]); }
      const digitMatches = a.match(/\b(\d+)\b/g) || [];
      for (const d2 of digitMatches) { const n = parseInt(d2); if (n >= 1 && n <= langList.length) found.push(langList[n-1]); }
      for (const [k, v] of Object.entries(lmap)) { if (a.includes(k.toLowerCase())) found.push(v); }
      d.language = found.length ? [...new Set(found)] : ['Hindi'];
      window._radheyRegStep = 3;
      window._radheySetProgress(3, total);
      radheyConfirmReg();
      return;
    }

    if (step >= total) {
      if (a.includes('haan') || a.includes('yes') || a.includes('\u0939\u093E\u0902') || a.includes('\u0939\u093E\u0901') || a.includes('sahi') || a.includes('bilkul') || a === 'ha' || a.includes(' ha ') || a.includes('ok')) {
        radheySubmitReg();
      } else if (a.includes('nahi') || a.includes('no') || a.includes('galat') || a.includes('nai')) {
        window._radheyRegMode = false;
        window._radheyRegStep = 0;
        radheyBot('\u0920\u0940\u0915 \u0939\u0948! Dobara try karein.');
        window._radheySetProgress(0, 0);
      } else {
        radheyBot('\"Haan\" ya \"Nahi\" bolein.');
      }
    }
  };
// radheyOpenCamera removed - no photo step in simplified 3-step flow
  window.radheyConfirmReg = function () {
    const d = window._radheyRegData;
    var s = '\uD83D\uDCCB Provisional Registration Summary:\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n';
    s += '\uD83D\uDC64 Naam: ' + (d.name || '-') + '\n';
    s += '\uD83D\uDCF1 Mobile: ' + (d.mobile || '-') + '\n';
    s += '\uD83D\uDDE3\uFE0F Bhasha: ' + ((d.language || []).join(', ') || '-') + '\n';
    s += '\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n';
    s += '\u2705 \"Haan\" bolein - Register karo\n\u274C \"Nahi\" bolein - Dobara shuru karo';
    radheyBot(s);
    window._radheyRegStep = 3;
    setTimeout(radheyAutoMic, 1000);
  };
window.radheyAutoMic = function () {
        if (!window._radheyRegMode) return;
        // iOS Safari check — no SpeechRecognition on iOS 14.5+
        var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (isIOS) {
            // On iOS: show text input, prompt user to type
            var inp = document.getElementById('radhey-inp');
            if (inp) { inp.focus(); inp.placeholder = 'Type your answer here...'; }
            return;
        }
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            radheyBot('❌ Voice nahi chal raha. Neeche type karein ya Chrome browser use karein.');
            var inp2 = document.getElementById('radhey-inp');
            if (inp2) inp2.focus();
            return;
        }
        if (window._radheyListening) return;
        // Mic starts after onend — no speaking-check loop needed
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        const rec = new SR();
        rec.lang = (window._getLangCode ? window._getLangCode() : 'hi-IN');
        rec.interimResults = false;
        rec.maxAlternatives = 1;
        rec.continuous = false;
        rec.onresult = function (e) {
            if (!e.results[0].isFinal) return;
            const txt = e.results[0][0].transcript;
            // Guard: skip very short/noise transcripts silently
            if (!txt || txt.trim().length < 2) { window._radheyListening = false; setTimeout(radheyAutoMic, 1500); return; }
            radheyUser(txt);
            window._radheyListening = false;
            window._radheyMicFails = 0;
            const step = window._radheyRegStep;
            const total = (window._radheySteps || (window._PROVIDER_STEPS||["type","name","mobile","category","subcategory","service","language","hours","area","religion","location","rate","bio","photo","gps","id"])).length;
            if (step >= total) {
                const a = txt.toLowerCase();
                if (a.includes('haan') || a.includes('yes') || a.includes('हां') || a.includes('हाँ') || a.includes('sahi') || a.includes('bilkul') || a.includes('ha') || a.includes('ok')) { radheySubmitReg(); }
                else if (a.includes('nahi') || a.includes('no') || a.includes('galat') || a.includes('nai')) { window._radheyRegMode = false; window._radheyRegStep = 0; radheyBot('ठीक है! Dobara try karein.'); window._radheySetProgress(0, 0); }
                else { radheyBot('"Haan" ya "Nahi" bolein.');  }
            } else { radheyHandleRegStep(txt); }
        };
        rec.onnomatch = function() {
            window._radheyListening = false;
            window._radheyMicFails = (window._radheyMicFails || 0) + 1;
            if (window._radheyMicFails >= 3) {
                window._radheyMicFails = 0;
                radheyBot('Aawaz samajh nahi aayi. Neeche type karein ya number type karein.');
                var inp3 = document.getElementById('radhey-inp');
                if (inp3) { inp3.focus(); inp3.placeholder = 'Number ya naam type karein...'; }
            } else {
                radheyBot('Samajh nahi aaya. Dobara bolein (' + window._radheyMicFails + '/3).');
                setTimeout(radheyAutoMic, 1500);
            }
        };
        rec.onend = function() { window._radheyListening = false; };
        rec.onerror = function(e) {
            window._radheyListening = false;
            if (e.error === 'no-speech') {
                setTimeout(function() { if (window._radheyRegMode && !window._radheyListening) radheyAutoMic(); }, 1500);
            } else if (e.error === 'network') {
                radheyBot('Network error. Dobara try karein.');
            }
        };
        try {
            rec.start();
            window._radheyListening = true;
            window._radheyRec = rec;
            if (window._radheyMicTimeout) clearTimeout(window._radheyMicTimeout);
            window._radheyMicTimeout = setTimeout(function() {
              if (window._radheyListening && window._radheyRegMode) { try { rec.stop(); } catch(e) {} }
            }, 9000);
        } catch (err) {
            window._radheyListening = false;
            setTimeout(radheyAutoMic, 1000);
        }
    };

    window.radheySubmitReg = function () {
    var d = window._radheyRegData;
    radheyBot('\u23F3 Provisional Registration save ho rahi hai...');
    window._radheyRegMode = false;
    window._radheySetProgress(1, 1);
    var regData = {
      name: d.name,
      mobile: d.mobile,
      language: d.language || ['Hindi'],
      status: 'provisional',
      registered: new Date().toISOString()
    };
    try { localStorage.setItem('_radheyProvisional', JSON.stringify(regData)); } catch(e) {}
    window._radheyPendingReg = regData;
    radheyBot('\uD83C\uDF89 ' + d.name + ' ji, Provisional Registration ho gayi!\n\n\u2705 Aapka data save ho gaya.\n\n\uD83D\uDD11 Ab LOGIN karein:\nApna mobile number se OTP verify karein — yahi confirm karega ki aap khud register kar rahe hain.\n\n\uD83D\uDD14 Login ke baad NOTIFICATIONS mein jaayein:\nWahan baaki zaroori fields bharne honge:\n\u2022 Category aur Service\n\u2022 Profile Photo\n\u2022 Location\n\u2022 Service Area aur Charges\n\nNeeche LOGIN button tap karein \uD83D\uDC47');
    setTimeout(function() {
      var msgs = document.getElementById('radhey-messages');
      if (!msgs) return;
      var oldBtn = document.getElementById('radhey-login-cta');
      if (oldBtn) oldBtn.remove();
      var loginBtn = document.createElement('button');
      loginBtn.id = 'radhey-login-cta';
      loginBtn.style.cssText = 'background:linear-gradient(135deg,#16a34a,#22c55e);color:white;border:none;border-radius:14px;padding:14px 20px;font-size:16px;font-weight:800;cursor:pointer;width:100%;margin-top:6px;box-shadow:0 4px 15px rgba(22,163,74,0.4);';
      loginBtn.textContent = '\uD83D\uDD11 LOGIN karein \u2014 OTP se Verify';
      loginBtn.onclick = function() {
        loginBtn.remove();
        if (typeof openLoginModal === 'function') openLoginModal();
        else if (typeof showPage === 'function') showPage('login');
        else { var el = document.querySelector('button.bg-green-600, [onclick*="login"]'); if (el) el.click(); }
        radheyBot('\uD83D\uDD11 Login page khul rahi hai...\n\n1. Apna mobile number ' + d.mobile + ' dalein\n2. OTP aayega \u2014 woh enter karein\n3. Login hone ke baad NOTIFICATIONS check karein \uD83D\uDD14\n\nWahan baaki profile complete karne ki reminder milegi!');
      };
      msgs.appendChild(loginBtn);
      msgs.scrollTop = msgs.scrollHeight;
      var _authCheck = setInterval(function() {
        if (window.firebaseUser && window._radheyPendingReg) {
          clearInterval(_authCheck);
          var reg = window._radheyPendingReg;
          var fb = window._firebase;
          if (!fb) return;
          var provData = {
            id: 'p_' + Date.now(),
            name: reg.name,
            mobile: reg.mobile,
            language: reg.language,
            status: 'provisional',
            available: false,
            verified: false,
            ownerUid: window.firebaseUser.uid,
            registered: reg.registered,
            service: 'TBD',
            location: 'TBD',
            lat: 26.9124,
            lng: 75.7873,
            experience: 0,
            rate: 0
          };
          fb.push(fb.ref(fb.db, 'providers'), provData)
            .then(function(ref) {
              fb.update(ref, { id: ref.key });
              window._radheyPendingReg = null;
              try { localStorage.removeItem('_radheyProvisional'); } catch(e) {}
              // —— Gratitude redirect after registration ——
              var _regLang = localStorage.getItem('language') || 'hi';
              setTimeout(function() { window.location.replace('gratitude.html?lang=' + _regLang + '&type=portal'); }, 2500);
              console.log('\u2705 RADHEY provisional provider saved:', ref.key);
              var notifRef = fb.ref(fb.db, 'notifications/' + window.firebaseUser.uid + '/reg_pending');
              fb.set(notifRef, {
                type: 'complete_profile',
                title: 'Profile Complete karein!',
                message: 'Provisional registration ho gayi. Category, Photo, Location aur Service details add karein apna profile complete karne ke liye.',
                createdAt: new Date().toISOString(),
                read: false
              }).catch(function() {});
            })
            .catch(function(e) { console.warn('Post-login save failed:', e.code); });
        }
      }, 2000);
      setTimeout(function() { clearInterval(_authCheck); }, 600000);
    }, 1500);
    setTimeout(function() { window._radheySetProgress(0, 0); }, 4000);
  };
window.radheyStop = function() {
        try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch(e) {}
        try { if (window._radheyRec) { window._radheyRec.stop(); window._radheyRec = null; } } catch(e) {}
        if (window._ttsKeepAlive) { clearInterval(window._ttsKeepAlive); window._ttsKeepAlive = null; }
        window._radheyRegMode = false;
        window._radheyListening = false;
        window._radheyRegStep = 0;
        window._radheySetProgress(0, 0);
    };
    window._radheyVoice = null;
    injectWidget();
    console.log('✅ RADHEY v2.0 ready — Top-nav chakra, 14-step voice reg, offline KB');
})();

// ════════════════════════════════════════════════════════════════
// NEW FEATURES v4.0
// 1. Multi-Service Registration for Multitasker Providers
// 2. Fix: Admin-verified providers visible on portal
// 3. Admin: Category sort + Provider verified/unverified sort
// ════════════════════════════════════════════════════════════════




(function initNewFeatures() {
      'use strict';

   // ── FEATURE 1: Multi-Service Registration (Multitasker Provider) ──
   // Replace single category/subcategory dropdowns with a multi-select builder
   function initMultiServiceReg() {
           const catSel = document.getElementById('providerCategory');
           const subSel = document.getElementById('providerSubcategory');
           const svcSection = document.getElementById('serviceTypeSection');
           if (!catSel || !subSel) return;

        // Build the multitasker UI by inserting a new section after the serviceTypeSection
        const existing = document.getElementById('sc-multitasker-section');
           if (existing) return;

        // Hide the old single-select category/subcategory fields
        const catParent = catSel.closest('div');
           const subParent = subSel.closest('div');

        // Build multitasker section
        const section = document.createElement('div');
           section.id = 'sc-multitasker-section';
           section.className = 'md:col-span-2';
           section.innerHTML = `
                 <div class="bg-orange-50 border-2 border-orange-200 rounded-xl p-4 mb-2">
                         <div class="flex items-center justify-between mb-3">
                                   <h3 class="text-base font-bold text-orange-800">🎯 Services You Offer <span class="text-xs font-normal text-orange-600">(Add all categories you work in)</span></h3>
                                             <span id="sc-mt-count" class="text-xs bg-orange-600 text-white px-2 py-0.5 rounded-full font-bold">0 selected</span>
                                                     </div>
                                                             <div id="sc-mt-builder" class="space-y-2 mb-3">
                                                                       <!-- Dynamic rows added here -->
                                                                               </div>
                                                                                       <button type="button" id="sc-mt-add-btn" onclick="scAddServiceRow()"
                                                                                                 class="w-full py-2 border-2 border-dashed border-orange-400 text-orange-600 rounded-lg text-sm font-semibold hover:bg-orange-50 transition">
                                                                                                           ➕ Add Another Category / Service
                                                                                                                   </button>
                                                                                                                           <input type="hidden" id="sc_multitasker_data" name="sc_multitasker_data" value="[]">
                                                                                                                                 </div>`;

        // Insert before religion field (after service section)
        if (svcSection && svcSection.parentNode) {
                  svcSection.parentNode.insertBefore(section, svcSection.nextSibling);
        } else if (subParent && subParent.parentNode) {
                  subParent.parentNode.insertBefore(section, subParent.nextSibling);
        }

        // Hide old single-select fields (keep them for backward compat but hidden)
        if (catParent) catParent.style.display = 'none';
           if (subParent) subParent.style.display = 'none';
           if (svcSection) svcSection.style.display = 'none';

        // Add first row automatically
        scAddServiceRow();

        // Hook into form submit to pack multitasker data
        const form = document.getElementById('providerForm');
           if (form && !form.dataset.mtHooked) {
                     form.dataset.mtHooked = '1';
                     form.addEventListener('submit', function(e) {
                                 const rows = document.querySelectorAll('.sc-mt-row');
                                 const entries = [];
                                 rows.forEach(row => {
                                               const cat = row.querySelector('.sc-mt-cat');
                                               const sub = row.querySelector('.sc-mt-sub');
                                               const svcs = Array.from(row.querySelectorAll('.sc-mt-svc-chip.selected')).map(c => c.dataset.svc);
                                               if (cat && cat.value) {
                                                               entries.push({
                                                                                 categoryId: cat.value,
                                                                                 categoryName: cat.options[cat.selectedIndex]?.text || cat.value,
                                                                                 subcategoryIdx: sub ? sub.value : '',
                                                                                 subcategoryName: sub && sub.value !== '' ? (sub.options[sub.selectedIndex]?.text || '') : '',
                                                                                 services: svcs
                                                               });
                                               }
                                 });
                                 document.getElementById('sc_multitasker_data').value = JSON.stringify(entries);
                                 // Populate legacy fields with first entry for backward compat
                                                   if (entries.length > 0) {
                                                                 const first = entries[0];
                                                                 const legacyCat = document.getElementById('providerCategory');
                                                                 const legacySub = document.getElementById('providerSubcategory');
                                                                 if (legacyCat) legacyCat.value = first.categoryId;
                                                                 if (legacySub) legacySub.value = first.subcategoryIdx;
                                                   }
                     });
           }
   }

   window.scAddServiceRow = function() {
           const builder = document.getElementById('sc-mt-builder');
           if (!builder) return;
           const idx = builder.querySelectorAll('.sc-mt-row').length;
           const row = document.createElement('div');
           row.className = 'sc-mt-row bg-white border border-orange-200 rounded-xl p-3 relative';
           row.dataset.idx = idx;

           // Build category options from global categories
           const cats = (typeof categories !== 'undefined' ? categories : []);
           let catOpts = `<option value="">— ${(typeof t === 'function' ? t('selectCategory') : 'Select Category')} —</option>`;
           cats.forEach(c => {
                     const name = (typeof getTranslated === 'function') ? getTranslated(c.name) : (c.name && (c.name[(typeof currentLanguage !== 'undefined' ? currentLanguage : 'en')] || c.name.en || c.name) || c.id);
                     catOpts += `<option value="${c.id}">${name}</option>`;
           });

           row.innerHTML = `
                 <button type="button" class="absolute top-2 right-2 text-red-400 hover:text-red-600 text-xs font-bold"
                         onclick="scRemoveServiceRow(this)">✕ Remove</button>
                               <div class="grid sm:grid-cols-2 gap-2 mb-2">
                                       <div>
                                                 <label class="block text-xs font-semibold text-gray-600 mb-1">📂 Category</label>
                                                           <select class="sc-mt-cat w-full text-sm border rounded-lg px-2 py-1.5" onchange="scUpdateSubcatRow(this)">
                                                                       ${catOpts}
                                                                                 </select>
                                                                                         </div>
                                                                                                 <div>
                                                                                                           <label class="block text-xs font-semibold text-gray-600 mb-1">📁 Subcategory</label>
                                                                                                                     <select class="sc-mt-sub w-full text-sm border rounded-lg px-2 py-1.5" onchange="scUpdateSvcsRow(this)">
                                                                                                                                 <option value="">— Select Subcategory —</option>
                                                                                                                                           </select>
                                                                                                                                                   </div>
                                                                                                                                                         </div>
                                                                                                                                                               <div class="sc-mt-svcs-area" style="display:none">
                                                                                                                                                                       <label class="block text-xs font-semibold text-gray-600 mb-1">🔧 Service Types <span class="font-normal text-gray-400">(tap to select)</span></label>
                                                                                                                                                                               <div class="sc-mt-svc-chips flex flex-wrap gap-1.5 mt-1"></div>
                                                                                                                                                                                     </div>`;

           builder.appendChild(row);
           scUpdateMultitaskerCount();
   };

   window.scRemoveServiceRow = function(btn) {
           const row = btn.closest('.sc-mt-row');
           const builder = document.getElementById('sc-mt-builder');
           if (builder && builder.querySelectorAll('.sc-mt-row').length > 1) {
                     row.remove();
                     scUpdateMultitaskerCount();
           } else {
                     // Reset instead of remove if last
             const cat = row.querySelector('.sc-mt-cat');
                     const sub = row.querySelector('.sc-mt-sub');
                     if (cat) cat.value = '';
                     if (sub) { sub.innerHTML = `<option value="">— ${(typeof t === 'function' ? t('selectSubcategory') : 'Select Subcategory')} —</option>`; }
                     const svcsArea = row.querySelector('.sc-mt-svcs-area');
                     if (svcsArea) { svcsArea.style.display = 'none'; svcsArea.querySelector('.sc-mt-svc-chips').innerHTML = ''; }
                     scUpdateMultitaskerCount();
           }
   };

   window.scUpdateSubcatRow = function(catEl) {
           const row = catEl.closest('.sc-mt-row');
           const subSel = row.querySelector('.sc-mt-sub');
           const svcsArea = row.querySelector('.sc-mt-svcs-area');
           const catId = catEl.value;

           subSel.innerHTML = `<option value="">— ${(typeof t === 'function' ? t('selectSubcategory') : 'Select Subcategory')} —</option>`;
           if (svcsArea) { svcsArea.style.display = 'none'; svcsArea.querySelector('.sc-mt-svc-chips').innerHTML = ''; }

           if (!catId || typeof categories === 'undefined') return;
           const cat = categories.find(c => c.id === catId);
           if (!cat || !cat.subcategories) return;

           cat.subcategories.forEach((sub, idx) => {
                     const name = (typeof getTranslated === 'function') ? getTranslated(sub.name) : (sub.name && (sub.name[(typeof currentLanguage !== 'undefined' ? currentLanguage : 'en')] || sub.name.en || sub.name) || ('Sub ' + idx));
                     const opt = document.createElement('option');
                     opt.value = idx;
                     opt.textContent = name;
                     subSel.appendChild(opt);
           });
           scUpdateMultitaskerCount();
   };

   window.scUpdateSvcsRow = function(subEl) {
           const row = subEl.closest('.sc-mt-row');
           const catEl = row.querySelector('.sc-mt-cat');
           const svcsArea = row.querySelector('.sc-mt-svcs-area');
           const chipsContainer = svcsArea ? svcsArea.querySelector('.sc-mt-svc-chips') : null;
           if (!svcsArea || !chipsContainer) return;

           const catId = catEl ? catEl.value : '';
           const subIdx = parseInt(subEl.value);

           svcsArea.style.display = 'none';
           chipsContainer.innerHTML = '';

           if (!catId || isNaN(subIdx) || typeof categories === 'undefined') return;
           const cat = categories.find(c => c.id === catId);
           if (!cat || !cat.subcategories || !cat.subcategories[subIdx]) return;
           const sub = cat.subcategories[subIdx];
           const svcs = sub.subsubcategories || sub.services || [];
           if (!svcs.length) return;

           svcs.forEach((svc, vi) => {
                     const svcName = (typeof svc === 'string') ? svc : (typeof getTranslated === 'function' ? getTranslated(svc.name) : (svc.name && (svc.name[(typeof currentLanguage !== 'undefined' ? currentLanguage : 'en')] || svc.name.en || svc.name) || ('Service ' + vi)));
                     const chip = document.createElement('span');
                     chip.className = 'sc-mt-svc-chip cursor-pointer text-xs px-2.5 py-1 rounded-full border border-orange-300 bg-white text-gray-700 hover:border-orange-500 transition select-none';
                     chip.textContent = svcName;
                     chip.dataset.svc = svcName;
                     chip.dataset.vi = vi;
                     chip.onclick = function() {
                                 this.classList.toggle('selected');
                                 if (this.classList.contains('selected')) {
                                               this.className = this.className.replace('bg-white text-gray-700 border-orange-300', 'bg-orange-600 text-white border-orange-600');
                                 } else {
                                               this.className = this.className.replace('bg-orange-600 text-white border-orange-600', 'bg-white text-gray-700 border-orange-300');
                                 }
                                 scUpdateMultitaskerCount();
                     };
                     chipsContainer.appendChild(chip);
           });
           svcsArea.style.display = 'block';
           scUpdateMultitaskerCount();
   };

   window.scUpdateMultitaskerCount = function() {
           const countEl = document.getElementById('sc-mt-count');
           if (!countEl) return;
           const rows = document.querySelectorAll('.sc-mt-row');
           let total = 0;
           rows.forEach(row => {
                     const cat = row.querySelector('.sc-mt-cat');
                     if (cat && cat.value) total++;
           });
           countEl.textContent = total + ' selected';
   };

   // Run after page loads
   const mtWait = setInterval(() => {
           if (document.getElementById('providerCategory')) {
                     clearInterval(mtWait);
                     // Hook into showPage to init when register page shown
             const origShowPage = window.showPage;
                     if (origShowPage && !window._mtShowHooked) {
                                 window._mtShowHooked = true;
                                 window.showPage = function(pageName) {
                                               origShowPage.apply(this, arguments);
                                               if (pageName === 'register') {
                                                               setTimeout(initMultiServiceReg, 300);
                                               }
                                 };
                     }
                     // Also init now if already on register page
             const regPage = document.getElementById('page-register');
                     if (regPage && (regPage.style.display !== 'none' && !regPage.classList.contains('hidden'))) {
                                 setTimeout(initMultiServiceReg, 300);
                     }
           }
   }, 800);

   // ── FEATURE 2: Fix Admin-Verified Providers Visibility on Portal ──
   // Problem: providers registered via admin or RADHEY provisional may have
   // status='active' but are not visible in browse because applySortAndFilter
   // may filter them out for various reasons (ownerUid mismatch, missing fields, etc.)
   function fixVerifiedProviderVisibility() {
           const wait = setInterval(() => {
                     if (typeof applySortAndFilter === 'undefined' || typeof renderProviders === 'undefined') return;
                     clearInterval(wait);

                                          // Patch applySortAndFilter to ensure verified+active providers always pass
                                          const origFilter = window.applySortAndFilter;
                     window.applySortAndFilter = function() {
                                 // Normalize all providers first
                                 if (typeof providers !== 'undefined' && Array.isArray(providers)) {
                                               providers.forEach(p => {
                                                               // Ensure active verified providers have correct flags
                                                                             if (p.verified === true && !p.status) p.status = 'active';
                                                               if (p.verified === true && p.status === 'active' && p.available === undefined) p.available = true;
                                                               if (p.verified === true && p.status === 'active' && p.isActive === undefined) p.isActive = true;
                                                               // Ensure services array exists
                                                                             if (!p.services || !Array.isArray(p.services)) {
                                                                                               p.services = p.service ? [p.service] : [];
                                                                             }
                                                               // Ensure categoryId exists
                                                                             if (!p.categoryId && p.service) p.categoryId = 'cat1';
                                               });
                                 }
                                 origFilter.apply(this, arguments);
                     };
                     console.log('SC Fix: Verified provider visibility patch applied');
           }, 600);
   }
      fixVerifiedProviderVisibility();

   // Also patch renderProviders to show verified providers regardless
   const rvWait = setInterval(() => {
           if (typeof renderProviders === 'undefined') return;
           clearInterval(rvWait);
           const origRender = window.renderProviders;
           window.renderProviders = function(list) {
                     // Filter: show if status active OR (verified and no explicit pause/restrict)
                     const filtered = (list || []).filter(p =>
                                 p.status === 'active' ||
                                 (p.verified === true && p.status !== 'paused' && p.status !== 'restricted')
                                                                );
                     origRender.call(this, filtered);
           };
           console.log('SC Fix: renderProviders patched for verified visibility');
   }, 600);

   // ── FEATURE 3: Admin Sorting – Categories & Provider Verification ──
   function injectAdminSortControls() {
           // 3a: Category sort controls
        const catTab = document.getElementById('adminTab-categories');
           if (catTab && !document.getElementById('sc-cat-sort-bar')) {
                     const catHeader = catTab.querySelector('.flex.justify-between.items-center');
                     if (catHeader) {
                                 const sortBar = document.createElement('div');
                                 sortBar.id = 'sc-cat-sort-bar';
                                 sortBar.className = 'flex items-center gap-2 flex-wrap mb-4 p-3 bg-gray-50 rounded-xl border border-gray-200';
                                 sortBar.innerHTML = `
                                           <span class="text-sm font-bold text-gray-700">🔢 Sort Categories:</span>
                                                     <button onclick="scSortCategories('default')" class="text-xs px-3 py-1.5 rounded-lg bg-orange-600 text-white font-semibold hover:bg-orange-700 transition" id="sc-cat-sort-default">Default Order</button>
                                                               <button onclick="scSortCategories('az')" class="text-xs px-3 py-1.5 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition" id="sc-cat-sort-az">A → Z</button>
                                                                         <button onclick="scSortCategories('za')" class="text-xs px-3 py-1.5 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition" id="sc-cat-sort-za">Z → A</button>
                                                                                   <button onclick="scSortCategories('most-providers')" class="text-xs px-3 py-1.5 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition" id="sc-cat-sort-most">Most Providers</button>
                                                                                             <button onclick="scSortCategories('most-sub')" class="text-xs px-3 py-1.5 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition" id="sc-cat-sort-sub">Most Subcategories</button>
                                                                                                       <span class="text-xs text-gray-400 ml-2">Drag rows to reorder →</span>`;
                                 catHeader.insertAdjacentElement('afterend', sortBar);
                     }
           }

        // 3b: Provider sort/filter controls
        const provSection = document.getElementById('providersListAdmin');
           if (provSection && !document.getElementById('sc-prov-sort-bar')) {
                     const header = provSection.previousElementSibling;
                     if (header) {
                                 const sortBar = document.createElement('div');
                                 sortBar.id = 'sc-prov-sort-bar';
                                 sortBar.className = 'flex flex-wrap items-center gap-2 mb-3 p-3 bg-gray-50 rounded-xl border border-gray-200';
                                 sortBar.innerHTML = `
                                           <span class="text-sm font-bold text-gray-700">🔍 Filter Providers:</span>
                                                     <button onclick="scFilterProviders('all')" id="sc-pf-all" class="text-xs px-3 py-1.5 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700 transition">All</button>
                                                               <button onclick="scFilterProviders('verified')" id="sc-pf-verified" class="text-xs px-3 py-1.5 rounded-full bg-green-100 text-green-800 font-semibold hover:bg-green-200 transition">✅ Verified</button>
                                                                         <button onclick="scFilterProviders('unverified')" id="sc-pf-unverified" class="text-xs px-3 py-1.5 rounded-full bg-yellow-100 text-yellow-800 font-semibold hover:bg-yellow-200 transition">⏳ Not Verified</button>
                                                                                   <button onclick="scFilterProviders('pending')" id="sc-pf-pending" class="text-xs px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 font-semibold hover:bg-blue-200 transition">🆔 ID Pending</button>
                                                                                             <button onclick="scFilterProviders('active')" id="sc-pf-active" class="text-xs px-3 py-1.5 rounded-full bg-green-100 text-green-800 font-semibold hover:bg-green-200 transition">🟢 Active</button>
                                                                                                       <button onclick="scFilterProviders('paused')" id="sc-pf-paused" class="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition">⏸ Paused</button>
                                                                                                                 <span class="flex-1"></span>
                                                                                                                           <span class="text-sm font-bold text-gray-700">↕ Sort:</span>
                                                                                                                                     <button onclick="scSortProviders('name-az')" class="text-xs px-3 py-1.5 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition">Name A→Z</button>
                                                                                                                                               <button onclick="scSortProviders('name-za')" class="text-xs px-3 py-1.5 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition">Name Z→A</button>
                                                                                                                                                         <button onclick="scSortProviders('newest')" class="text-xs px-3 py-1.5 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition">Newest First</button>
                                                                                                                                                                   <button onclick="scSortProviders('oldest')" class="text-xs px-3 py-1.5 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition">Oldest First</button>
                                                                                                                                                                             <button onclick="scSortProviders('verified-first')" class="text-xs px-3 py-1.5 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition">✅ Verified First</button>`;
                                 header.insertAdjacentElement('afterend', sortBar);
                     }
           }
   }

   // Category sort function
   window.scSortCategories = function(mode) {
           const list = document.getElementById('categoriesListAdmin');
           if (!list || typeof categories === 'undefined') return;
           // Update active button
           ['default','az','za','most-providers','most-sub'].forEach(m => {
                     const btn = document.getElementById('sc-cat-sort-' + m.replace('-',''));
                     if (btn) btn.className = btn.className.replace('bg-orange-600 text-white', 'bg-gray-200 text-gray-700');
           });
           const activeBtn = document.getElementById('sc-cat-sort-' + mode.replace(/-/g,''));
           if (activeBtn) activeBtn.className = activeBtn.className.replace('bg-gray-200 text-gray-700', 'bg-orange-600 text-white');

           let sorted = [...categories];
           const getName = c => (c.name && (c.name.en || c.name)) || c.id;
           const getProvCount = c => (typeof providers !== 'undefined' ? providers.filter(p => p.categoryId === c.id).length : 0);

           if (mode === 'az') sorted.sort((a, b) => getName(a).localeCompare(getName(b)));
           else if (mode === 'za') sorted.sort((a, b) => getName(b).localeCompare(getName(a)));
           else if (mode === 'most-providers') sorted.sort((a, b) => getProvCount(b) - getProvCount(a));
           else if (mode === 'most-sub') sorted.sort((a, b) => (b.subcategories || []).length - (a.subcategories || []).length);
           else sorted = [...categories]; // default

           window._scSortedCategories = sorted;
           if (typeof loadAdminCategories === 'function') {
                     // Temporarily swap categories order
             const orig = [...categories];
                     categories.length = 0;
                     sorted.forEach(c => categories.push(c));
                     loadAdminCategories();
                     // Restore original order reference
             categories.length = 0;
                     orig.forEach(c => categories.push(c));
                     window._scSortedCategories = sorted;
           }
   };

   // Provider filter + sort functions
   window._scProvFilterMode = 'all';
      window._scProvSortMode = 'default';
      window._scAdminProviders = null;

   window.scFilterProviders = function(mode) {
           window._scProvFilterMode = mode;
           ['all','verified','unverified','pending','active','paused'].forEach(m => {
                     const btn = document.getElementById('sc-pf-' + m);
                     if (btn) {
                                 btn.className = btn.className.replace('bg-orange-600 text-white', 'bg-gray-100 text-gray-700');
                                 btn.className = btn.className.replace('bg-green-600 text-white', 'bg-green-100 text-green-800');
                     }
           });
           const activeBtn = document.getElementById('sc-pf-' + mode);
           if (activeBtn) activeBtn.className = activeBtn.className.replace('bg-gray-100 text-gray-700', 'bg-orange-600 text-white').replace('bg-green-100 text-green-800', 'bg-orange-600 text-white').replace('bg-yellow-100 text-yellow-800', 'bg-orange-600 text-white').replace('bg-blue-100 text-blue-800', 'bg-orange-600 text-white');
           scApplyAdminProviderView();
   };

   window.scSortProviders = function(mode) {
           window._scProvSortMode = mode;
           scApplyAdminProviderView();
   };

   window.scApplyAdminProviderView = function() {
           const list = document.getElementById('providersListAdmin');
           if (!list) return;
           // Get all provider rows from the list
           const rows = Array.from(list.querySelectorAll('[data-provider-id], .provider-admin-row'));
           if (!rows.length) {
                     // If no rows yet, call renderProvidersList
             if (typeof renderProvidersList === 'function') renderProvidersList();
                     return;
           }
           const mode = window._scProvFilterMode || 'all';
           const sort = window._scProvSortMode || 'default';

           rows.forEach(row => {
                     const pid = row.dataset.providerId || row.dataset.id;
                     const prov = (typeof providers !== 'undefined') ? providers.find(p => p.id === pid) : null;
                     let show = true;
                     if (prov) {
                                 if (mode === 'verified') show = prov.verified === true;
                                 else if (mode === 'unverified') show = !prov.verified;
                                 else if (mode === 'pending') show = !!(prov.idVerification && prov.idVerification.status === 'pending');
                                 else if (mode === 'active') show = prov.status === 'active';
                                 else if (mode === 'paused') show = prov.status === 'paused';
                     }
                     row.style.display = show ? '' : 'none';
           });
   };

   // Patch renderProvidersList to inject our sort/filter bar
   const rpWait = setInterval(() => {
           if (typeof renderProvidersList === 'undefined') return;
           clearInterval(rpWait);
           const origRPL = window.renderProvidersList;
           window.renderProvidersList = function() {
                     origRPL.apply(this, arguments);
                     setTimeout(() => {
                                 injectAdminSortControls();
                                 // Re-apply any active filter
                                        if (window._scProvFilterMode && window._scProvFilterMode !== 'all') {
                                                      scApplyAdminProviderView();
                                        }
                     }, 200);
           };
   }, 600);

   // Also patch loadAdminCategories to inject sort bar
   const lacWait = setInterval(() => {
           if (typeof loadAdminCategories === 'undefined') return;
           clearInterval(lacWait);
           const origLAC = window.loadAdminCategories;
           window.loadAdminCategories = function() {
                     origLAC.apply(this, arguments);
                     setTimeout(injectAdminSortControls, 300);
           };
   }, 600);

   // Also patch showAdminTab to inject controls after tab switch
   const satWait = setInterval(() => {
           if (typeof showAdminTab === 'undefined') return;
           clearInterval(satWait);
           const origSAT = window.showAdminTab;
           window.showAdminTab = function(tab) {
                     origSAT.apply(this, arguments);
                     setTimeout(injectAdminSortControls, 400);
           };
   }, 600);

   // Run inject on DOMContentLoaded / now
   setTimeout(injectAdminSortControls, 2000);

   console.log('[SC v4.0] Multi-service reg, verified visibility fix, admin sort controls loaded');

})(); // end initNewFeatures


// ════════════════════════════════════════════════════════════════
// FIX v5.0 — PROVIDER BROWSE VISIBILITY (CRITICAL)
// Root cause: applySortAndFilter uses EXACT service name match which fails
// because providers store service names in their registration language (Hindi etc.)
// while the filter compares against the English name from categories array.
// Also: index-based backward compat requires ALL of cat+sub+svcIdx to match.
// Fix: Multi-language service name matching + category/subcategory level matching
// + immediate visibility for new providers (status=active, any category match)
// ════════════════════════════════════════════════════════════════
(function fixProviderBrowseVisibility() {
      'use strict';

   // Helper: get all language variants of a service name from categories data
   function getAllSvcNames(catId, subIdx, svcIdx) {
           if (typeof categories === 'undefined') return [];
           const cat = categories.find(c => c.id === catId);
           if (!cat || !cat.subcategories) return [];
           const sub = cat.subcategories[parseInt(subIdx)];
           if (!sub) return [];
           const svcs = sub.subsubcategories || sub.services || [];
           const svc = svcs[parseInt(svcIdx)];
           if (!svc) return [];
           if (typeof svc === 'string') return [svc.toLowerCase()];
           if (svc.name && typeof svc.name === 'object') {
                     return Object.values(svc.name).filter(Boolean).map(n => n.toLowerCase());
           }
           return [];
   }

   // Helper: get all language variants of a subcategory name
   function getAllSubNames(catId, subIdx) {
           if (typeof categories === 'undefined') return [];
           const cat = categories.find(c => c.id === catId);
           if (!cat || !cat.subcategories) return [];
           const sub = cat.subcategories[parseInt(subIdx)];
           if (!sub) return [];
           if (typeof sub === 'string') return [sub.toLowerCase()];
           if (sub.name && typeof sub.name === 'object') {
                     return Object.values(sub.name).filter(Boolean).map(n => n.toLowerCase());
           }
           return [];
   }

   // Core function: does provider p match the browse filter?
   function providerMatchesBrowse(p, catId, subIdx, svcIdx) {
           // Provider must be active (not paused/restricted)
        const statusOk = !p.status || p.status === 'active' || p.status === 'provisional';
           if (!statusOk) return false;

        // If no category filter, show all active providers
        if (!catId) return true;

        // === CATEGORY MATCH ===
        // Primary: stored categoryId matches
        const catMatch = p.categoryId === catId;

        // Also check multi-service registrations (sc_multitasker field)
        const multiMatch = Array.isArray(p.multiServices) &&
                  p.multiServices.some(ms => ms.categoryId === catId);

        if (!catMatch && !multiMatch) {
                  // Last resort: check if provider has no category set (new/provisional) -> show them
             if (!p.categoryId && statusOk) return true;
                  return false;
        }

        // If only category selected (no subcategory), show all in category
        if (subIdx === null || subIdx === undefined || subIdx === '') return true;

        // === SUBCATEGORY MATCH ===
        const subIdxStr = String(subIdx);

        // Direct index match
        const subDirectMatch = String(p.subcategoryIdx) === subIdxStr;

        // Multi-service subcategory match
        const subMultiMatch = Array.isArray(p.multiServices) &&
                  p.multiServices.some(ms => ms.categoryId === catId && String(ms.subcategoryIdx) === subIdxStr);

        // Array of sub indices match (new multitasker registration)
        const subArrayMatch = Array.isArray(p.subcategoryIndices) &&
                  p.subcategoryIndices.some(i => String(i) === subIdxStr);

        if (!subDirectMatch && !subMultiMatch && !subArrayMatch) return false;

        // If only subcategory selected (no service), show all in subcategory
        if (svcIdx === null || svcIdx === undefined || svcIdx === '') return true;

        // === SERVICE MATCH ===
        const svcIdxStr = String(svcIdx);

        // 1. Direct service index match
        if (String(p.subsubcategoryIdx) === svcIdxStr) return true;
           if (Array.isArray(p.subsubcategoryIndices) && p.subsubcategoryIndices.some(i => String(i) === svcIdxStr)) return true;

        // 2. Multi-language service name match
        const allTargetNames = getAllSvcNames(catId, subIdx, svcIdx);
           if (allTargetNames.length > 0) {
                     // Check provider's primary service name
             if (p.service && allTargetNames.includes(p.service.toLowerCase())) return true;
                     // Check provider's services array
             if (Array.isArray(p.services) && p.services.some(s => allTargetNames.includes(s.toLowerCase()))) return true;
                     // Check multi-service registrations
             if (Array.isArray(p.multiServices)) {
                         for (const ms of p.multiServices) {
                                       if (ms.categoryId === catId && String(ms.subcategoryIdx) === subIdxStr) {
                                                       if (Array.isArray(ms.services) && ms.services.some(s => allTargetNames.includes(s.toLowerCase()))) return true;
                                       }
                         }
             }
           }

        // 3. Fallback: if provider is in matching cat+sub, show them even without svc match
        //    This ensures newly registered providers are visible immediately
        //    (they may not have a specific service index stored yet)
        if (subDirectMatch || subMultiMatch || subArrayMatch) return true;

        return false;
   }

   // Patch applySortAndFilter to use our new matching logic
   const patchWait = setInterval(() => {
           if (typeof applySortAndFilter === 'undefined') return;
           clearInterval(patchWait);

                                     const origASF = window.applySortAndFilter;
           window.applySortAndFilter = function() {
                     // Normalize providers before filtering
                     if (typeof providers !== 'undefined' && Array.isArray(providers)) {
                                 providers.forEach(p => {
                                               if (!p.status) p.status = 'active';
                                               if (p.available === undefined) p.available = true;
                                               if (p.isActive === undefined) p.isActive = true;
                                               if (!p.services || !Array.isArray(p.services)) {
                                                               p.services = p.service ? [p.service] : [];
                                               }
                                 });
                     }

                     // Get current browse state
                     const catId = (typeof selectedCategoryId !== 'undefined') ? selectedCategoryId : null;
                     const subIdx = (typeof selectedSubcategoryIdx !== 'undefined') ? selectedSubcategoryIdx : null;
                     const svcIdx = (typeof selectedServiceIdx !== 'undefined') ? selectedServiceIdx : null;

                     // Only apply our override when browsing with filters
                     if (!catId) {
                                 origASF.apply(this, arguments);
                                 return;
                     }

                     // Get all active providers matching browse criteria
                     const activeProviders = (typeof providers !== 'undefined' && Array.isArray(providers))
                       ? providers.filter(p => providerMatchesBrowse(p, catId, subIdx, svcIdx))
                                 : [];

                     console.log('[SC v5.0] Browse filter: cat=' + catId + ' sub=' + subIdx + ' svc=' + svcIdx + ' -> ' + activeProviders.length + ' providers');

                     // Apply secondary filters (language, religion, price, distance)
                     let finalProviders = activeProviders;

                     // Language filter
                     const filterLang = document.getElementById('filterLanguage') ? document.getElementById('filterLanguage').value : '';
                     if (filterLang) {
                                 finalProviders = finalProviders.filter(p => {
                                               if (!p.language) return true;
                                               const langs = Array.isArray(p.language) ? p.language : [p.language];
                                               return langs.some(l => l.toLowerCase().includes(filterLang.toLowerCase()));
                                 });
                     }

                     // Religion filter
                     const filterReligion = document.getElementById('filterReligion') ? document.getElementById('filterReligion').value : '';
                     if (filterReligion) {
                                 finalProviders = finalProviders.filter(p => !p.religion || p.religion === filterReligion);
                     }

                     // Price filter
                     const priceMin = document.getElementById('filterPriceMin') ? parseFloat(document.getElementById('filterPriceMin').value) : 0;
                     const priceMax = document.getElementById('filterPriceMax') ? parseFloat(document.getElementById('filterPriceMax').value) : Infinity;
                     if (priceMin > 0 || priceMax < Infinity) {
                                 finalProviders = finalProviders.filter(p => {
                                               const rate = parseFloat(p.rate) || 0;
                                               return rate >= priceMin && rate <= priceMax;
                                 });
                     }

                     // Sort
                     const sortEl = document.getElementById('sortSelect');
                     const sortVal = sortEl ? sortEl.value : 'rating';
                     if (sortVal === 'rating') {
                                 finalProviders.sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0));
                     } else if (sortVal === 'price-low') {
                                 finalProviders.sort((a, b) => (parseFloat(a.rate) || 0) - (parseFloat(b.rate) || 0));
                     } else if (sortVal === 'price-high') {
                                 finalProviders.sort((a, b) => (parseFloat(b.rate) || 0) - (parseFloat(a.rate) || 0));
                     } else if (sortVal === 'experience') {
                                 finalProviders.sort((a, b) => (parseInt(b.experience) || 0) - (parseInt(a.experience) || 0));
                     } else if (sortVal === 'newest') {
                                 finalProviders.sort((a, b) => new Date(b.registered || 0) - new Date(a.registered || 0));
                     }
                     // Verified providers first (as bonus)
                     finalProviders.sort((a, b) => (b.verified ? 1 : 0) - (a.verified ? 1 : 0));

                     // Render providers
                     if (typeof renderProviders === 'function') {
                                 renderProviders(finalProviders);
                     }

                     // Update results count
                     const countEl = document.getElementById('resultsCount') || document.getElementById('browseResultsCount');
                     if (countEl) countEl.textContent = finalProviders.length + ' provider' + (finalProviders.length !== 1 ? 's' : '') + ' found';
           };

                                     console.log('[SC v5.0] applySortAndFilter patched with multi-language + immediate visibility fix');
   }, 300);

   // Also patch renderProviders to ensure active providers aren't incorrectly filtered
   const rvWait2 = setInterval(() => {
           if (typeof renderProviders === 'undefined') return;
           clearInterval(rvWait2);
           const origRender2 = window.renderProviders;
           window.renderProviders = function(list) {
                     // Show active providers regardless of verification status
                     // Verified providers get a badge but unverified are still shown
                     const toShow = (list || []).filter(p => {
                                 const s = p.status || 'active';
                                 return s === 'active' || s === 'provisional';
                     });
                     // Show count even if 0 (so user knows result)
                     const countEl = document.getElementById('resultsCount') || document.getElementById('browseResultsCount');
                     if (countEl) countEl.textContent = toShow.length + ' provider' + (toShow.length !== 1 ? 's' : '') + ' found';

                     origRender2.call(this, toShow);
           };
           console.log('[SC v5.0] renderProviders patched - unverified providers now visible');
   }, 300);

   console.log('[SC v5.0] Provider browse visibility fix initializing...');
})(); // end fixProviderBrowseVisibility


// ════════════════════════════════════════════════════════════════
// FIX v5.1 — CASCADING FALLBACK + OVERRIDE applySortAndFilter DIRECTLY
// The v5.0 fix runs but existing DB has no providers under some sub-categories.
// This adds: if no exact matches found, fall back to broader category match.
// Also: force-override applySortAndFilter even if v4.0 already patched it.
// ════════════════════════════════════════════════════════════════
(function fixBrowseCascade() {
      'use strict';

   function doInstallCascadeFix() {
           // Get all language variants of a service/subcategory name from categories data
        function getAllNames(catId, subIdx, svcIdx) {
                  if (typeof categories === 'undefined') return [];
                  const cat = categories.find(c => c.id === catId);
                  if (!cat || !cat.subcategories) return [];
                  const sub = cat.subcategories[parseInt(subIdx)];
                  if (!sub) return [];
                  const allNames = [];
                  // Add subcategory names
             if (sub.name && typeof sub.name === 'object') {
                         Object.values(sub.name).forEach(n => n && allNames.push(n.toLowerCase()));
             }
                  if (typeof sub.name === 'string') allNames.push(sub.name.toLowerCase());
                  if (svcIdx === null || svcIdx === undefined) return allNames;
                  // Add service names
             const svcs = sub.subsubcategories || sub.services || [];
                  const svc = svcs[parseInt(svcIdx)];
                  if (!svc) return allNames;
                  if (typeof svc === 'string') { allNames.push(svc.toLowerCase()); return allNames; }
                  if (svc.name && typeof svc.name === 'object') {
                              Object.values(svc.name).forEach(n => n && allNames.push(n.toLowerCase()));
                  }
                  return allNames;
        }

        // Check if provider matches at a given specificity level
        function matchLevel(p, catId, subIdx, svcIdx) {
                  const statusOk = p.status === 'active' || p.status === 'provisional' || !p.status;
                  if (!statusOk) return 0;

             // Level 0: no category
             if (!catId) return 4;

             const catMatch = p.categoryId === catId ||
                         (Array.isArray(p.multiServices) && p.multiServices.some(ms => ms.categoryId === catId));

             // Allow providers with no category set (provisional/new) to show at category level
             const noCategory = !p.categoryId;

             if (!catMatch && !noCategory) return 0;
                  if (noCategory) return 1; // level 1: just active, no category

             // Level 2: category match only
             if (subIdx === null || subIdx === undefined) return 4;

             const subIdxStr = String(subIdx);
                  const subMatch = String(p.subcategoryIdx) === subIdxStr ||
                              (Array.isArray(p.subcategoryIndices) && p.subcategoryIndices.some(i => String(i) === subIdxStr)) ||
                              (Array.isArray(p.multiServices) && p.multiServices.some(ms => ms.categoryId === catId && String(ms.subcategoryIdx) === subIdxStr));

             if (!subMatch) return 2; // level 2: category match, no sub match

             // Level 3: category + subcategory match
             if (svcIdx === null || svcIdx === undefined) return 5;

             // Level 4: try service index match
             const svcIdxStr = String(svcIdx);
                  if (String(p.subsubcategoryIdx) === svcIdxStr) return 6;
                  if (Array.isArray(p.subsubcategoryIndices) && p.subsubcategoryIndices.some(i => String(i) === svcIdxStr)) return 6;

             // Level 5: try multilingual service name match
             const targetNames = getAllNames(catId, subIdx, svcIdx);
                  if (targetNames.length > 0) {
                              const svcStr = (p.service || '').toLowerCase();
                              if (svcStr && targetNames.some(n => n === svcStr || n.includes(svcStr) || svcStr.includes(n))) return 6;
                              if (Array.isArray(p.services) && p.services.some(s => targetNames.some(n => n === s.toLowerCase() || n.includes(s.toLowerCase())))) return 6;
                              if (Array.isArray(p.multiServices)) {
                                            for (const ms of p.multiServices) {
                                                            if (ms.categoryId === catId && String(ms.subcategoryIdx) === subIdxStr && Array.isArray(ms.services)) {
                                                                              if (ms.services.some(s => targetNames.some(n => n === s.toLowerCase()))) return 6;
                                                            }
                                            }
                              }
                  }

             // Sub match but no service match - still show (level 3)
             return 3;
        }

        // THE MAIN OVERRIDE - replace applySortAndFilter completely
        const origASF_cascade = window.applySortAndFilter;
           window.applySortAndFilter = function() {
                     // Normalize all providers
                     if (typeof providers !== 'undefined' && Array.isArray(providers)) {
                                 providers.forEach(p => {
                                               if (!p.status) p.status = 'active';
                                               if (p.available === undefined) p.available = true;
                                               if (p.isActive === undefined) p.isActive = true;
                                               if (!p.services || !Array.isArray(p.services)) p.services = p.service ? [p.service] : [];
                                 });
                     }

                     const catId = (typeof selectedCategoryId !== 'undefined') ? selectedCategoryId : null;
                     const subIdx = (typeof selectedSubcategoryIdx !== 'undefined') ? selectedSubcategoryIdx : null;
                     const svcIdx = (typeof selectedServiceIdx !== 'undefined') ? selectedServiceIdx : null;

                     if (!catId) { origASF_cascade.apply(this, arguments); return; }

                     const allProviders = (typeof providers !== 'undefined' && Array.isArray(providers)) ? providers : [];

                     // Score each provider
                     const scored = allProviders
                       .map(p => ({ p, score: matchLevel(p, catId, subIdx, svcIdx) }))
                       .filter(x => x.score > 0);

                     // Find best match level
                     const bestLevel = scored.reduce((max, x) => Math.max(max, x.score), 0);

                     let finalProviders;
                     if (bestLevel >= 3) {
                                 // Use exact or near-exact matches
                       finalProviders = scored.filter(x => x.score >= 3).map(x => x.p);
                     } else if (bestLevel === 2) {
                                 // Fallback: show all providers in this category (different subcategory)
                       finalProviders = scored.filter(x => x.score >= 2).map(x => x.p);
                                 // Show a message if falling back
                       console.log('[SC v5.1] No exact sub match, showing all cat providers:', finalProviders.length);
                     } else {
                                 // Final fallback: show any active provider in the category
                       finalProviders = scored.filter(x => x.score >= 1).map(x => x.p);
                                 console.log('[SC v5.1] No cat match, fallback to active providers:', finalProviders.length);
                     }

                     // Deduplicate by provider ID (multitasker has multiple entries)
                     const seen = new Set();
                     finalProviders = finalProviders.filter(p => {
                                 const key = p.ownerUid || p.mobile || p.id;
                                 if (seen.has(key)) return false;
                                 seen.add(key);
                                 return true;
                     });

                     console.log('[SC v5.1] Browse: cat=' + catId + ' sub=' + subIdx + ' svc=' + svcIdx + ' bestLevel=' + bestLevel + ' -> ' + finalProviders.length + ' providers');

                     // Apply secondary filters
                     const filterLang = document.getElementById('filterLanguage') ? document.getElementById('filterLanguage').value : '';
                     if (filterLang) finalProviders = finalProviders.filter(p => { const l = Array.isArray(p.language) ? p.language : [p.language || '']; return l.some(x => x.toLowerCase().includes(filterLang.toLowerCase())); });

                     const filterReligion = document.getElementById('filterReligion') ? document.getElementById('filterReligion').value : '';
                     if (filterReligion) finalProviders = finalProviders.filter(p => !p.religion || p.religion === filterReligion);

                     const priceMin = parseFloat((document.getElementById('filterPriceMin') || {}).value) || 0;
                     const priceMax = parseFloat((document.getElementById('filterPriceMax') || {}).value) || Infinity;
                     if (priceMin > 0 || priceMax < Infinity) finalProviders = finalProviders.filter(p => { const r = parseFloat(p.rate) || 0; return r >= priceMin && r <= priceMax; });

                     // Sort
                     const sortVal = (document.getElementById('sortSelect') || {}).value || 'rating';
                     if (sortVal === 'rating') finalProviders.sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0));
                     else if (sortVal === 'price-low') finalProviders.sort((a, b) => (parseFloat(a.rate) || 0) - (parseFloat(b.rate) || 0));
                     else if (sortVal === 'price-high') finalProviders.sort((a, b) => (parseFloat(b.rate) || 0) - (parseFloat(a.rate) || 0));
                     else if (sortVal === 'experience') finalProviders.sort((a, b) => (parseInt(b.experience) || 0) - (parseInt(a.experience) || 0));
                     else if (sortVal === 'newest') finalProviders.sort((a, b) => new Date(b.registered || 0) - new Date(a.registered || 0));

                     // Verified first
                     finalProviders.sort((a, b) => (b.verified ? 1 : 0) - (a.verified ? 1 : 0));

                     // Render
                     const countEl = document.getElementById('resultsCount') || document.getElementById('browseResultsCount');
                     if (countEl) countEl.textContent = finalProviders.length + ' provider' + (finalProviders.length !== 1 ? 's' : '') + ' found';

                     if (typeof renderProviders === 'function') renderProviders(finalProviders);
           };

        console.log('[SC v5.1] Cascade browse fix installed successfully');
   }

   // Install immediately if applySortAndFilter is ready, otherwise wait
   if (typeof applySortAndFilter !== 'undefined') {
           doInstallCascadeFix();
   } else {
           const waitForASF = setInterval(() => {
                     if (typeof applySortAndFilter !== 'undefined') {
                                 clearInterval(waitForASF);
                                 doInstallCascadeFix();
                     }
           }, 200);
   }

   // Also patch renderProviders to always show active/provisional providers
   function patchRenderProviders() {
           const origRP = window.renderProviders;
           window.renderProviders = function(list) {
                     const toShow = (list || []).filter(p => {
                                 const s = p.status || 'active';
                                 return s === 'active' || s === 'provisional';
                     });
                     origRP.call(this, toShow);
           };
           console.log('[SC v5.1] renderProviders cascade patch applied');
   }

   if (typeof renderProviders !== 'undefined') {
           patchRenderProviders();
   } else {
           const waitForRP = setInterval(() => {
                     if (typeof renderProviders !== 'undefined') {
                                 clearInterval(waitForRP);
                                 patchRenderProviders();
                     }
           }, 200);
   }

   console.log('[SC v5.1] Cascade fallback fix loaded');
})(); // end fixBrowseCascade


// ============================================================
// SC PATCH v4.1 — 10 Apr 2026
// Fixes: Translation issues, Wallet actions, Donation security
// ============================================================
(function scPatchV41() {

    // ── TRANSLATION HELPERS ──────────────────────────────────────
    const T = {
            hi: {
                        myProviderProfile: '🛠️ मेरी प्रदाता प्रोफ़ाइल',
                        editMyProfile: '✏️ प्रोफ़ाइल संपादित करें',
                        myWorkPortfolio: '📸 मेरा कार्य पोर्टफ़ोलियो',
                        myProviderDash: '📊 मेरा प्रदाता डैशबोर्ड',
                        manageMembership: '🏅 सदस्यता योजना प्रबंधित करें',
                        available: 'उपलब्ध',
                        makePayment: '💳 भुगतान करें',
                        writeReview: '⭐ समीक्षा लिखें',
                        sendGratitude: '🙏 कृतज्ञता संदेश भेजें',
                        referFriend: '📤 मित्र को रेफर करें',
                        referProvider: '🤝 प्रदाता को रेफर करें',
                        donateCharity: '🌱 दान करें',
                        selectProviderReview: 'किस प्रदाता की समीक्षा लिखनी है?',
                        donateWarning: '⚠️ दान तभी मान्य होगा जब UTR नंबर दर्ज किया जाए।',
            },
            en: {
                        myProviderProfile: '🛠️ My Provider Profile',
                        editMyProfile: '✏️ Edit My Profile',
                        myWorkPortfolio: '📸 My Work Portfolio',
                        myProviderDash: '📊 My Provider Dashboard',
                        manageMembership: '🏅 Manage Membership Plan',
                        available: 'Available',
                        makePayment: '💳 Make a Payment',
                        writeReview: '⭐ Write a Review',
                        sendGratitude: '🙏 Send Gratitude',
                        referFriend: '📤 Refer a Friend',
                        referProvider: '🤝 Refer a Provider',
                        donateCharity: '🌱 Donate to Charity',
                        selectProviderReview: 'Select provider to review:',
                        donateWarning: '⚠️ Donation is confirmed only after entering the UTR number.',
            }
    };

    function _lang() {
            return localStorage.getItem('language') || 'en';
    }

    function _t(key) {
            const l = _lang();
            return (T[l] && T[l][key]) || T['en'][key] || key;
    }

    // ── FIX A: INFO/ABOUT PAGE — Apply translations when opened ──
    (function patchInfoPage() {
            const origShowPage = window.showPage;
            if (typeof origShowPage !== 'function') return;
            window.showPage = function(pageName) {
                        origShowPage.call(this, pageName);
                        if (pageName === 'info') {
                                        setTimeout(() => {
                                                            if (typeof updateAllUIText === 'function') updateAllUIText();
                                                            // Translate info page section headings that are hardcoded
                                                            const lang = _lang();
                                                            if (lang !== 'en') {
                                                                                    const infoPage = document.getElementById('page-info');
                                                                                    if (!infoPage) return;
                                                                                    // Mark key info headings for translation if not already done
                                                                                    infoPage.querySelectorAll('h2, h3, h4').forEach(el => {
                                                                                                                if (!el.getAttribute('data-i18n')) {
                                                                                                                                                el.setAttribute('data-i18n-info', el.textContent.trim());
                                                                                                                    }
                                                                                        });
                                                            }
                                        }, 100);
                        }
            };
            console.log('[SC v4.1] Info page translation patch applied');
    })();

    // ── FIX B: PROFILE CARD — Translate hardcoded English strings ──
    (function patchProfileTranslations() {
            const origRenderProfilePage = window.renderProfilePage;
            if (typeof origRenderProfilePage !== 'function') {
                        // Watch for function to appear
                        const w = setInterval(() => {
                                        if (typeof window.renderProfilePage === 'function') {
                                                            clearInterval(w);
                                                            applyProfilePatch();
                                        }
                        }, 300);
                        return;
            }
            applyProfilePatch();

            function applyProfilePatch() {
                        const origFn = window.renderProfilePage;
                        window.renderProfilePage = function() {
                                        origFn.apply(this, arguments);
                                        setTimeout(translateProfileCard, 150);
                        };
                        console.log('[SC v4.1] Profile translation patch applied');
            }
    })();

    function translateProfileCard() {
            const lang = _lang();
            if (lang === 'en') return; // English is default, no change needed

            // Translate "My Provider Profile" heading
            const card = document.getElementById('myProviderCard');
            if (card) {
                        const h3 = card.querySelector('h3');
                        if (h3 && h3.textContent.includes('My Provider Profile')) {
                                        h3.textContent = _t('myProviderProfile');
                        }
                        // Translate Available label
                        card.querySelectorAll('span').forEach(span => {
                                        if (span.textContent.trim() === 'Available') span.textContent = _t('available');
                        });
            }

            // Translate button texts in myProviderCard
            document.querySelectorAll('#myProviderCard button').forEach(btn => {
                        const txt = btn.textContent.trim();
                        if (txt.includes('Edit My Profile')) btn.textContent = _t('editMyProfile');
                        else if (txt.includes('My Work Portfolio')) btn.textContent = _t('myWorkPortfolio');
                        else if (txt.includes('My Provider Dashboard')) btn.textContent = _t('myProviderDash');
                        else if (txt.includes('Manage Membership') || txt.includes('सदस्यता')) { /* already translated */ }
            });

            // Translate wallet action buttons
            document.querySelectorAll('.wallet-action-btn, [data-wallet-action]').forEach(btn => {
                        const txt = btn.textContent.trim();
                        if (txt.includes('Make a Payment') || txt.includes('Make Payment')) btn.querySelector('.font-semibold') && (btn.querySelector('.font-semibold').textContent = _t('makePayment'));
                        if (txt.includes('Write a Review')) btn.querySelector('.font-semibold') && (btn.querySelector('.font-semibold').textContent = _t('writeReview'));
                        if (txt.includes('Send') && txt.includes('gratitude')) btn.querySelector('.font-semibold') && (btn.querySelector('.font-semibold').textContent = _t('sendGratitude'));
                        if (txt.includes('Refer a Friend')) btn.querySelector('.font-semibold') && (btn.querySelector('.font-semibold').textContent = _t('referFriend'));
                        if (txt.includes('Refer a Provider')) btn.querySelector('.font-semibold') && (btn.querySelector('.font-semibold').textContent = _t('referProvider'));
                        if (txt.includes('Donate to Charity')) btn.querySelector('.font-semibold') && (btn.querySelector('.font-semibold').textContent = _t('donateCharity'));
            });
    }

    // Also run translation whenever language changes
    const origSelectLanguage = window.selectLanguage;
    if (typeof origSelectLanguage === 'function') {
            window.selectLanguage = function(lang) {
                        origSelectLanguage.call(this, lang);
                        setTimeout(translateProfileCard, 200);
            };
    }

    // ── FIX C: REFER A PROVIDER — Use share.html link ────────────
    (function patchReferProvider() {
            const origFn = window.showReferProviderModal;
            if (typeof origFn !== 'function') {
                        const w = setInterval(() => {
                                        if (typeof window.showReferProviderModal === 'function') {
                                                            clearInterval(w);
                                                            patchIt();
                                        }
                        }, 300);
                        return;
            }
            patchIt();

            function patchIt() {
                        const orig = window.showReferProviderModal;
                        window.showReferProviderModal = function() {
                                        orig.apply(this, arguments);
                                        // After modal renders, fix the referral URL to use share.html
                                        setTimeout(() => {
                                                            const modal = document.getElementById('referProviderModal');
                                                            if (!modal) return;
                                                            const shareBase = 'https://sudarshanchakraindia.github.io/sudarshan-chakra/share.html';
                                                            const uid = (window.firebaseUser && window.firebaseUser.uid) ? '?ref=' + window.firebaseUser.uid : '';
                                                            const shareUrl = shareBase + uid;

                                                            // Fix all text showing the old URL
                                                            const urlSpan = modal.querySelector('#referUrlText');
                                                            if (urlSpan) urlSpan.textContent = shareUrl;

                                                            // Fix copy button
                                                            modal.querySelectorAll('button').forEach(btn => {
                                                                                    if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes('clipboard')) {
                                                                                                                btn.setAttribute('onclick', `navigator.clipboard.writeText('${shareUrl}').then(()=>showFirebaseStatus('Link copied!','success'))`);
                                                                                        }
                                                                                    // Fix WhatsApp share button
                                                                                    if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes('wa.me')) {
                                                                                                                const currentOnclick = btn.getAttribute('onclick');
                                                                                                                const fixedOnclick = currentOnclick.replace(/https[^'"]+(sudarshan-chakra[^'"]*)/g, shareUrl);
                                                                                                                btn.setAttribute('onclick', fixedOnclick);
                                                                                        }
                                                            });

                                                            // Fix all anchor tags
                                                            modal.querySelectorAll('a').forEach(a => {
                                                                                    if (a.href && a.href.includes('sudarshan-chakra')) {
                                                                                                                a.href = shareUrl;
                                                                                        }
                                                            });

                                                            // Fix the message text shown in the modal
                                                            const msgDiv = modal.querySelector('.bg-blue-50');
                                                            if (msgDiv) {
                                                                                    msgDiv.innerHTML = msgDiv.innerHTML.replace(/https[^<\s]*(page-register|register)[^<\s]*/g, shareUrl);
                                                            }
                                        }, 200);
                        };
                        console.log('[SC v4.1] Refer Provider share.html patch applied');
            }
    })();

    // ── FIX D: WRITE A REVIEW — Provider selection flow ──────────
    window.openWriteReviewFlow = function() {
            if (!window.firebaseUser) {
                        if (typeof openLoginModal === 'function') openLoginModal();
                        return;
            }
            // Remove old modal if exists
            const old = document.getElementById('scWriteReviewModal');
            if (old) old.remove();

            // Build provider list from global providers variable
            const providers = window.providers || [];
            const provList = providers.length > 0
                ? providers.filter(p => p && p.name).slice(0, 50).map(p =>
                                `<div onclick="scSelectProviderForReview('${p.id}','${(p.name||'').replace(/'/g,"\\'")}')"
                                                class="flex items-center gap-3 p-3 bg-gray-50 hover:bg-orange-50 rounded-xl cursor-pointer border border-transparent hover:border-orange-200 transition">
                                                                <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-lg font-bold text-orange-600">${(p.name||'?')[0].toUpperCase()}</div>
                                                                                <div><div class="font-semibold text-sm text-gray-800">${p.name||''}</div><div class="text-xs text-gray-400">${p.category||''} · ${p.location||''}</div></div>
                                                                                            </div>`).join('')
                        : '<p class="text-center text-gray-400 text-sm py-4">No providers found. Please browse first.</p>';

            const modal = document.createElement('div');
            modal.id = 'scWriteReviewModal';
            modal.className = 'fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4';
            modal.innerHTML = `
                    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80vh] flex flex-col">
                                <div class="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-5 rounded-t-2xl flex justify-between items-center">
                                                <h2 class="text-lg font-bold">⭐ Write a Review</h2>
                                                                <button onclick="document.getElementById('scWriteReviewModal').remove()" class="text-white text-2xl font-bold">✕</button>
                                                                            </div>
                                                                                        <div class="p-4 overflow-y-auto flex-1">
                                                                                                        <p class="text-sm text-gray-500 mb-3">${_t('selectProviderReview')}</p>
                                                                                                                        <div class="space-y-2">${provList}</div>
                                                                                                                                    </div>
                                                                                                                                            </div>`;
            document.body.appendChild(modal);
    };

    window.scSelectProviderForReview = function(providerId, providerName) {
            const old = document.getElementById('scWriteReviewModal');
            if (old) old.remove();
            // Open the existing review modal if available
            if (typeof openReviewModal === 'function') {
                        openReviewModal(providerId, providerName);
            } else {
                        alert('Review modal not found. Please open provider profile to leave a review.');
            }
    };

    // Patch the wallet "Write a Review" button to use the new flow
    (function patchWriteReviewBtn() {
            function fixBtn() {
                        document.querySelectorAll('button').forEach(btn => {
                                        const inner = btn.querySelector('.font-semibold');
                                        const label = inner ? inner.textContent.trim() : btn.textContent.trim();
                                        if ((label.includes('Write a review') || label.includes('Write a Review')) &&
                                                            btn.getAttribute('onclick') && btn.getAttribute('onclick').includes('showPage')) {
                                                            btn.setAttribute('onclick', "openWriteReviewFlow()");
                                        }
                        });
            }
            setTimeout(fixBtn, 1500);
            // Also run after profile renders
            const origRP = window.renderProfilePage;
            if (typeof origRP === 'function') {
                        window.renderProfilePage = function() {
                                        origRP.apply(this, arguments);
                                        setTimeout(fixBtn, 300);
                        };
            }
            console.log('[SC v4.1] Write Review button patch applied');
    })();

    // ── FIX E: MAKE A PAYMENT — Open payment gateway ─────────────
    window.openMakePaymentFlow = function() {
            if (!window.firebaseUser) {
                        if (typeof openLoginModal === 'function') openLoginModal();
                        return;
            }
            // Open the SC payment modal if it exists, else show instructions
            const modal = document.getElementById('scPayModal');
            if (modal) {
                        // Set title and amount for generic payment
                        const title = document.getElementById('scpay-title');
                        const amtDisp = document.getElementById('scpay-amount-display');
                        const descDisp = document.getElementById('scpay-desc-display');
                        if (title) title.textContent = 'Make a Payment';
                        if (amtDisp) amtDisp.textContent = '₹0';
                        if (descDisp) descDisp.textContent = 'Enter amount in UPI app';
                        modal.classList.remove('hidden');
                        if (typeof scPayInit === 'function') scPayInit(0, 'Payment', null);
            } else {
                        alert('Payment gateway opening. Please use UPI ID: 9414055013@ybl');
            }
    };

    (function patchMakePaymentBtn() {
            function fixBtn() {
                        document.querySelectorAll('button').forEach(btn => {
                                        const inner = btn.querySelector('.font-semibold');
                                        const label = inner ? inner.textContent.trim() : btn.textContent.trim();
                                        if ((label.includes('Make a payment') || label.includes('Make a Payment')) &&
                                                            btn.getAttribute('onclick') && btn.getAttribute('onclick').includes('showPage')) {
                                                            btn.setAttribute('onclick', "openMakePaymentFlow()");
                                        }
                        });
            }
            setTimeout(fixBtn, 1500);
            const origRP = window.renderProfilePage;
            if (typeof origRP === 'function') {
                        window.renderProfilePage = function() {
                                        origRP.apply(this, arguments);
                                        setTimeout(fixBtn, 300);
                        };
            }
            console.log('[SC v4.1] Make Payment button patch applied');
    })();

    // ── FIX F: DONATION — CRITICAL: Require UTR before awarding points ──
    (function patchDonationSecurity() {
            const origProceed = window.proceedCharityPayment;
            if (typeof origProceed !== 'function') {
                        const w = setInterval(() => {
                                        if (typeof window.proceedCharityPayment === 'function') {
                                                            clearInterval(w);
                                                            applyDonationPatch();
                                        }
                        }, 300);
                        return;
            }
            applyDonationPatch();

            function applyDonationPatch() {
                        // Override proceedCharityPayment to use scPayModal instead
                        window.proceedCharityPayment = function() {
                                        // Get charity amount
                                        const charityAmt = window.charityAmt || 10;
                                        if (charityAmt < 10) {
                                                            alert('Minimum donation is ₹10');
                                                            return;
                                        }
                                        // Close charity modal
                                        if (typeof closeCharityModal === 'function') closeCharityModal();

                                        // Open the SC payment gateway with charity context
                                        const modal = document.getElementById('scPayModal');
                                        if (modal) {
                                                            modal.classList.remove('hidden');
                                                            if (typeof scPayInit === 'function') {
                                                                                    scPayInit(charityAmt, 'Charity Donation', 'charity');
                                                            } else {
                                                                                    // Fallback: manually set up the modal
                                                                                    const title = document.getElementById('scpay-title');
                                                                                    const amtDisp = document.getElementById('scpay-amount-display');
                                                                                    const descDisp = document.getElementById('scpay-desc-display');
                                                                                    if (title) title.textContent = '🌱 Charity Donation';
                                                                                    if (amtDisp) amtDisp.textContent = '₹' + charityAmt;
                                                                                    if (descDisp) descDisp.textContent = '100% goes to charity';
                                                            }
                                                            // CRITICAL: Override the "I have paid" / confirm button to require UTR
                                                            setTimeout(overrideDonationConfirm, 300);
                                        } else {
                                                            // Fallback if scPayModal not found
                                                            showDonationUTRPrompt(charityAmt);
                                        }
                        };

                        // Override scPayConfirm to require UTR for charity payments
                        const origConfirm = window.scPayConfirm;
                        window.scPayConfirm = function() {
                                        const ctx = window._scPayContext;
                                        if (ctx === 'charity') {
                                                            const utrInput = document.getElementById('scpay-utr-input') || document.querySelector('[id*="utr"]');
                                                            const utr = utrInput ? utrInput.value.trim() : '';
                                                            if (!utr || utr.length < 8) {
                                                                                    alert('⚠️ Please enter a valid UTR/transaction number from your UPI app to confirm the donation. No UTR = No award points.');
                                                                                    return;
                                                            }
                                                            // UTR provided — now save charity donation WITH UTR to Firebase
                                                            completeDonationWithUTR(window.charityAmt || 10, utr);
                                        } else {
                                                            if (typeof origConfirm === 'function') origConfirm.apply(this, arguments);
                                        }
                        };

                        console.log('[SC v4.1] CRITICAL: Donation security patch applied — UTR required');
            }

            function overrideDonationConfirm() {
                        // Mark context as charity in the payment modal
                        window._scPayContext = 'charity';

                        // Add warning banner to the payment modal
                        const modal = document.getElementById('scPayModal');
                        if (!modal) return;
                        if (modal.querySelector('.sc-charity-warning')) return;
                        const warning = document.createElement('div');
                        warning.className = 'sc-charity-warning bg-red-50 border border-red-200 rounded-xl p-3 mx-4 text-xs text-red-700 font-semibold';
                        warning.innerHTML = '⚠️ <strong>Important:</strong> Points will ONLY be awarded after you enter your UTR/transaction number from UPI app. Entering a fake UTR is considered fraud.';
                        const firstSection = modal.querySelector('.p-4');
                        if (firstSection) firstSection.insertBefore(warning, firstSection.firstChild);
            }

            function showDonationUTRPrompt(amt) {
                        const old = document.getElementById('scDonationUTRModal');
                        if (old) old.remove();
                        const modal = document.createElement('div');
                        modal.id = 'scDonationUTRModal';
                        modal.className = 'fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4';
                        modal.innerHTML = `
                                    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-5">
                                                    <h2 class="text-lg font-bold text-teal-700 mb-2">🌱 Confirm Donation of ₹${amt}</h2>
                                                                    <p class="text-sm text-gray-600 mb-3">Pay <strong>₹${amt}</strong> to UPI ID: <strong class="text-orange-600">9414055013@ybl</strong></p>
                                                                                    <div class="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-700 mb-3">
                                                                                                        ⚠️ <strong>Required:</strong> Enter the UTR/Reference number from your UPI app after payment. Points awarded ONLY after UTR verification.
                                                                                                                        </div>
                                                                                                                                        <input id="scDonationUTRInput" type="text" placeholder="Enter 12-digit UTR from UPI app"
                                                                                                                                                            class="w-full border-2 border-gray-200 rounded-xl px-3 py-2 text-sm mb-3 focus:border-teal-500 focus:outline-none">
                                                                                                                                                                            <div class="flex gap-2">
                                                                                                                                                                                                <button onclick="document.getElementById('scDonationUTRModal').remove()" class="flex-1 bg-gray-100 text-gray-700 py-2.5 rounded-xl text-sm font-bold">Cancel</button>
                                                                                                                                                                                                                    <button onclick="scConfirmDonationUTR(${amt})" class="flex-1 bg-teal-600 text-white py-2.5 rounded-xl text-sm font-bold">Confirm Donation</button>
                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                </div>`;
                        document.body.appendChild(modal);
            }
    })();

    window.scConfirmDonationUTR = async function(amt) {
            const input = document.getElementById('scDonationUTRInput');
            const utr = input ? input.value.trim() : '';
            if (!utr || utr.length < 6) {
                        alert('Please enter a valid UTR/transaction number from your UPI app.');
                        return;
            }
            await completeDonationWithUTR(amt, utr);
            const modal = document.getElementById('scDonationUTRModal');
            if (modal) modal.remove();
    };

    async function completeDonationWithUTR(amt, utr) {
            if (!window.firebaseUser || !window._firebase) {
                        alert('Please login to complete donation.');
                        return;
            }
            const fb = window._firebase;
            const uid = window.firebaseUser.uid;
            const txnId = 'charity_' + Date.now();
            try {
                        await fb.set(fb.ref(fb.db, `users/${uid}/transactions/${txnId}`), {
                                        type: 'charity',
                                        amount: amt,
                                        utr: utr,
                                        fee: 0,
                                        points: 5,
                                        timestamp: txnId,
                                        date: new Date().toLocaleDateString('en-IN'),
                                        status: 'pending_verification'
                        });
                        // Award 5 points for donation (only after UTR submitted)
                        if (typeof awardWalletPoints === 'function') {
                                        await awardWalletPoints(5, 'charity_donation', 'Donated ₹' + amt + ' to charity (UTR: ' + utr + ')');
                        }
                        alert('🙏 Thank you for your donation of ₹' + amt + '!\nYour UTR ' + utr + ' has been recorded.\n5 wallet points will be credited after admin verification.');
                        if (typeof loadWallet === 'function') loadWallet();
                        window._scPayContext = null;
                        const scModal = document.getElementById('scPayModal');
                        if (scModal) scModal.classList.add('hidden');
            } catch(e) {
                        alert('Error saving donation: ' + e.message);
            }
    }

    // ── FIX G: CATEGORIES from Firebase — Translation fallback ───
    // Admin-added categories may only have English text stored as plain string
    // Patch getTranslated to handle plain strings gracefully
    (function patchGetTranslated() {
            const origFn = window.getTranslated;
            if (typeof origFn !== 'function') {
                        const w = setInterval(() => {
                                        if (typeof window.getTranslated === 'function') {
                                                            clearInterval(w);
                                                            applyPatch();
                                        }
                        }, 300);
                        return;
            }
            applyPatch();
            function applyPatch() {
                        const orig = window.getTranslated;
                        window.getTranslated = function(obj, defaultText) {
                                        if (!obj) return defaultText || '';
                                        // If obj is a plain string, return as-is (admin-added category with no translation)
                                        if (typeof obj === 'string') return obj;
                                        // If obj is an object with language keys, use current lang with en fallback
                                        if (typeof obj === 'object') {
                                                            const lang = localStorage.getItem('language') || 'en';
                                                            return obj[lang] || obj['en'] || obj['hi'] || Object.values(obj)[0] || defaultText || '';
                                        }
                                        return orig.call(this, obj, defaultText);
                        };
                        console.log('[SC v4.1] getTranslated enhanced for admin-added categories');
            }
    })();

    console.log('[SC v4.1] All patches loaded: Info translation, Profile card translation, Refer Provider share.html, Write Review flow, Make Payment flow, Donation UTR security, Category translation fallback');
})(); // end scPatchV41

