/**
 * Sudarshan Chakra — fixes.js v3.0
 * All bug fixes + RADHEY AI Assistant (fully offline, no API needed)
 * Add before </body> in index.html: <script src="fixes.js"></script>
 */

// ── Local Knowledge Base for RADHEY (works offline, no CORS) ──
window.radheyLocalAnswer = function(quehry) {
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
        fixBug2_ProviderDashBtn();
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
                            fixBug2_ProviderDashBtn();
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

    window._PROVIDER_STEPS = ['type','name','mobile','category','subcategory','service','language','hours','area','religion','location','rate','bio','photo','gps','id'];
    window._SEEKER_STEPS   = ['type','name','mobile','language','religion','location'];
    const PROVIDER_STEPS = window._PROVIDER_STEPS;
    const SEEKER_STEPS   = window._SEEKER_STEPS;

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
                const u = new SpeechSynthesisUtterance(speakText);
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
                        setTimeout(function() { if (typeof radheyAutoMic === 'function') radheyAutoMic(); }, 100);
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
                // C2: Start interrupt-mic simultaneously with TTS (reg mode)
                if (window._radheyRegMode && !window._radheyListening && !window._isIOS()) {
                    var _SR2 = window.SpeechRecognition || window.webkitSpeechRecognition;
                    if (_SR2) {
                        var _iRec = new _SR2();
                        _iRec.lang = (window._getLangCode ? window._getLangCode() : 'hi-IN');
                        _iRec.interimResults = true;
                        _iRec.maxAlternatives = 3;
                        _iRec.continuous = false;
                        window._radheyIntRec = _iRec;
                        _iRec.onresult = function(ev) {
                            var best = ev.results[0][0].transcript;
                            for (var _j=0; _j<ev.results[0].length; _j++) {
                                var _t = ev.results[0][_j].transcript;
                                if (/[0-9]|\bone\b|\btwo\b|do|teen|char|paanch|ek/.test(_t.toLowerCase())) { best = _t; break; }
                            }
                            if (!ev.results[0].isFinal && best.trim().length < 2) return;
                            try { window.speechSynthesis.cancel(); } catch(e) {}
                            try { _iRec.stop(); } catch(e) {}
                            window._radheyIntRec = null;
                            window._radheyListening = false;
                            if (window._ttsKeepAlive) { clearInterval(window._ttsKeepAlive); window._ttsKeepAlive = null; }
                            if (best.trim().length >= 2 && window._radheyRegMode) { radheyUser(best); radheyHandleRegStep(best); }
                        };
                        _iRec.onerror = function() { window._radheyIntRec = null; };
                        _iRec.onend = function() { window._radheyIntRec = null; };
                        try { _iRec.start(); window._radheyListening = true; } catch(e) { window._radheyListening = false; }
                    }
                }
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
        // Unlock audio on user gesture (Register button click)
        if (window._unlockAudio) window._unlockAudio();
        // C1: STT priming — unlock mic within gesture
        if (!window._isIOS() && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
            try {
                var _primeSR = window.SpeechRecognition || window.webkitSpeechRecognition;
                var _primeRec = new _primeSR();
                _primeRec.lang = (window._getLangCode ? window._getLangCode() : 'hi-IN');
                _primeRec.onresult = function() {}; _primeRec.onerror = function() {}; _primeRec.onend = function() {};
                _primeRec.start();
                setTimeout(function() { try { _primeRec.abort(); } catch(e) {} }, 300);
            } catch(e) {}
        }
        window._radheyRegMode = true; window._radheyRegStep = 0;
        window._radheyRegData = {}; window._radheySteps = null;
        panel.classList.add('open');
        radheyBot(window._T ? window._T('🎤 Voice Registration शुरू!\n\nMain step-by-step guide karunga.\n\nStep 1: Aap kya banna chahte hain?\n\n👷 "Provider" — agar aap kaam dete hain\n🔍 "Seeker" — agar aapko kaam karaana hai\n🤝 "Dono" — agar aap dono hain', '🎤 Voice Registration Started!\n\nI will guide you step by step.\n\nStep 1: What do you want to be?\n\n👷 Say "Provider" — if you offer services\n🔍 Say "Seeker" — if you need services\n🤝 Say "Both" — if you are both') : '🎤 Voice Registration शुरू!\n\nMain step-by-step guide karunga.\n\nStep 1: Aap kya banna chahte hain?\n\n👷 "Provider" — agar aap kaam dete hain\n🔍 "Seeker" — agar aapko kaam karaana hai\n🤝 "Dono" — agar aap dono hain');
        window._radheySetProgress(0, 1);
    };

    window.radheyHandleRegStep = function (answer) {
        const a = answer.toLowerCase().trim();
        const d = window._radheyRegData;
        const step = window._radheyRegStep;
        const total = (window._radheySteps || (window._PROVIDER_STEPS||["type","name","mobile","category","subcategory","service","language","hours","area","religion","location","rate","bio","photo","gps","id"])).length;
        const field = window._radheySteps ? window._radheySteps[step] : null;

        window._radheySetProgress(step, total);

        // C5: Draft save to localStorage
        try { localStorage.setItem('_radheyDraft', JSON.stringify({step: step, data: window._radheyRegData})); } catch(e) {}

        // C5: Back-correction
        if (step > 0 && (a.includes('wapas') || a.includes('back') || a.includes('galat') || a.includes('correction') || a.includes('phir se') || a.includes('badle') || a.includes('change') || a === 'no' || a.includes('गलत') || a.includes('वापस') || a.includes('बदलो'))) {
            window._radheyRegStep = Math.max(0, step - 1);
            var _prevField = (window._radheySteps || [])[window._radheyRegStep];
            var _prevPrompts = {'type':'Step 1: Provider / Seeker / Dono?','name':'Step 2: Aapka poora naam?','mobile':'Step 3: 10 digit mobile number?','category':'Category chunein.','subcategory':'Sub-category chunein.','service':'Service chunein.','language':'Bhasha chunein.','hours':'Kab kaam? 1.Mon-Fri 2.Weekends 3.Roz 4.24x7','area':'Service area? 1.10km 2.Poora shehar','religion':'Dharm chunein.','location':'Shehar/Address bolein.','rate':'Charges ya skip/negotiable.','bio':'Bio ya skip.','photo':'Photo - camera/gallery/skip.','gps':'GPS? Haan/Nahi.','id':'ID proof ya skip.'};
            radheyBot('↩️ Ek kadam wapas!\n\n' + (_prevPrompts[_prevField] || 'Pichla jawab dobara bolein.'));
            return;
        }

        if (step === 0) {
            if (a.includes('provider') || a.includes('प्रोवाइडर') || a.includes('kaam deta') || a.includes('kaam deti') || a.includes('काम देता') || a.includes('काम देती') || a.includes('provid') || a.includes('kaam karta') || a.includes('kaam karti') || a.includes('karigar') || a.includes('kaarigaar') || a === '1' || a.startsWith('1')) {
                d.type = 'provider'; window._radheySteps = [...(window._PROVIDER_STEPS||["type","name","mobile","category","subcategory","service","language","hours","area","religion","location","rate","bio","photo","gps","id"])]; window._radheyRegStep = 1;
                window._radheySetProgress(1, (window._PROVIDER_STEPS||["type","name","mobile","category","subcategory","service","language","hours","area","religion","location","rate","bio","photo","gps","id"]).length);
                radheyBot('✅ Provider!\n\nStep 2: Aapka poora naam?\nJaise: "Ramesh Kumar"');
            } else if (a.includes('seeker') || a.includes('सीकर') || a.includes('kaam karana') || a.includes('kaam kaaraana') || a.includes('काम कराना') || a.includes('काम चाहिए')) {
                d.type = 'seeker'; window._radheySteps = [...(window._SEEKER_STEPS||["type","name","mobile","language","religion","location"])]; window._radheyRegStep = 1;
                window._radheySetProgress(1, (window._SEEKER_STEPS||["type","name","mobile","language","religion","location"]).length);
                radheyBot('✅ Seeker!\n\nStep 2: Aapka poora naam?\nJaise: "Sunita Devi"');
            } else if (a.includes('dono') || a.includes('both') || a.includes('दोनों')) {
                d.type = 'both'; window._radheySteps = [...(window._PROVIDER_STEPS||["type","name","mobile","category","subcategory","service","language","hours","area","religion","location","rate","bio","photo","gps","id"])]; window._radheyRegStep = 1;
                window._radheySetProgress(1, (window._PROVIDER_STEPS||["type","name","mobile","category","subcategory","service","language","hours","area","religion","location","rate","bio","photo","gps","id"]).length);
                radheyBot('✅ Dono!\n\nStep 2: Aapka poora naam?\nJaise: "Ramesh Kumar"');
            } else {
                radheyBot('❓ "Provider", "Seeker" ya "Dono" bolein.');
            }
             return;
        }

        if (field === 'name') {
            if (answer.trim().length < 2) { radheyBot('❓ Poora naam batayein.');  return; }
            d.name = answer.trim(); window._radheyRegStep++;
            window._radheySetProgress(window._radheyRegStep, total);
            radheyBot('✅ Naam: ' + d.name + '\n\nStep ' + (window._radheyRegStep + 1) + ': 10 digit mobile number?\nJaise: "9414055013"');
             return;
        }

        if (field === 'mobile') {
            const nums = answer.replace(/\D/g, '').slice(-10);
            if (nums.length !== 10) { radheyBot('❌ 10 digit number chahiye. Dobara bolein.');  return; }
            d.mobile = nums; window._radheyRegStep++;
            window._radheySetProgress(window._radheyRegStep, total);
            if (d.type === 'provider' || d.type === 'both') {
                // Always fetch categories fresh from Firebase (includes admin-added ones)
                const fb = window._firebase;
                const fetchAndShowCats = async function() {
                  let catList = '';
                  try {
                    const snap = await fb.get(fb.ref(fb.db, 'categories'));
                    if (snap.exists()) {
                      const cData = snap.val();
                      const cArr = Array.isArray(cData) ? cData : Object.values(cData);
                      window._radheyCats = cArr;
                      catList = cArr.map((c, i) => (i + 1) + '. ' + (c.name?.en || c.name || c.id)).join('\n');
                    }
                  } catch(e) {}
                  if (!catList) catList = '1. Home Services\n2. Beauty & Wellness\n3. Cleaning Services\n4. Event Services\n5. Education\n6. Transport\n7. Business\n8. Pet Services';
                  radheyBot('\u2705 Mobile: ' + nums.split('').join(' ') + '\n\nStep ' + (window._radheyRegStep + 1) + ': Category chunein:\n\n' + catList + '\n\nNumber ya naam bolein.');
                };
                fetchAndShowCats();
                // NOTE: autoMic is triggered by radheyBot's u.onend after TTS completes
                // No extra setTimeout needed for provider path
                return;
            } else {
                radheyBot('✅ Mobile: ' + nums.split('').join(' ') + '\n\nStep ' + (window._radheyRegStep + 1) + ': Bhasha chunein (number bolein):\n1. Hindi\n2. English\n3. Bengali\n4. Gujarati\n5. Marathi\n6. Kannada\n7. Telugu\n8. Malayalam\n9. Tamil\n10. Punjabi\n11. Odia\n12. Assamese\n\nEk ya zyada number bolein.');
            }
             return;
        }

        if (field === 'category') {
            // If categories not yet loaded, fetch first then re-call
            if (!window._radheyCats && !(typeof categories !== 'undefined')) {
              const fb = window._firebase;
              if (fb) {
                fb.get(fb.ref(fb.db, 'categories')).then(snap => {
                  if (snap.exists()) {
                    const cData = snap.val();
                    window._radheyCats = Array.isArray(cData) ? cData : Object.values(cData);
                  }
                  radheyHandleRegStep(answer);
                });
                return; // wait for async fetch
              }
            }
            let matched = null;
            // Use _radheyCats (loaded from Firebase) or fallback to categories global
            const catArr = window._radheyCats || (typeof categories !== 'undefined' ? categories : null);
            if (catArr) {
                const hindiNums = {'ek':1,'do':2,'teen':3,'char':4,'paanch':5,'chhe':6,'saat':7,'aath':8,'nau':9,'das':10,'gyarah':11,'barah':12,'terah':13,'chaudah':14,'pandrah':15,'solah':16,'satrah':17,'atharah':18,'unnis':19,'bees':20,'एक':1,'दो':2,'तीन':3,'चार':4,'पाँच':5,'छह':6,'सात':7,'आठ':8,'नौ':9,'दस':10,'ग्यारह':11,'बारह':12,'तेरह':13,'चौदह':14,'पंद्रह':15,'सोलह':16,'सत्रह':17,'अठारह':18,'उन्नीस':19,'बीस':20};
                let num = parseInt(a);
                if (!(num > 0)) { for (const [w,n] of Object.entries(hindiNums)) { if (a.includes(w)) { num = n; break; } } }
                if (num > 0 && num <= catArr.length) matched = catArr[num - 1];
                if (!matched) matched = catArr.find(c => { const n = (c.name?.en || c.name || '').toLowerCase(); return n.includes(a) || a.includes(n.split(' ')[0]); });
            }
            if (matched) {
                d.categoryId = matched.id; d.categoryName = matched.name?.en || matched.name;
                window._radheyRegStep++;
                window._radheySetProgress(window._radheyRegStep, total);
                const subs = (matched.subcategories || []).map((s, i) => (i + 1) + '. ' + (s.name?.en || s.name)).join('\n');
                radheyBot('✅ Category: ' + d.categoryName + '\n\nStep ' + (window._radheyRegStep + 1) + ': Sub-category:\n\n' + (subs || 'Koi sub-category nahi') + '\n\nNumber ya naam bolein.');
            } else {
                radheyBot('❓ Category clearly batayein ya number bolein.');
            }
             return;
        }

        if (field === 'subcategory') {
            const cat = (window._radheyCats || (typeof categories !== 'undefined' ? categories : null) || []).find(c => c.id === d.categoryId) || null;
            const subs = cat ? (cat.subcategories || []) : [];
                        let matched = null;
            const hindiNumsSub = {'ek':1,'do':2,'teen':3,'char':4,'paanch':5,'chhe':6,'saat':7,'aath':8,'nau':9,'das':10,'gyarah':11,'barah':12,'terah':13,'chaudah':14,'pandrah':15,'एक':1,'दो':2,'तीन':3,'चार':4,'पाँच':5,'छह':6,'सात':7,'आठ':8,'नौ':9,'दस':10,'ग्यारह':11,'बारह':12,'तेरह':13,'चौदह':14,'पंद्रह':15};
            let num = parseInt(a);
            if (!(num > 0)) { for (const [w,n] of Object.entries(hindiNumsSub)) { if (a.includes(w)) { num = n; break; } } }
            if (num > 0 && num <= subs.length) matched = subs[num - 1];
            if (!matched) matched = subs.find(s => { const n=(s.name?.en||s.name||'').toLowerCase(); return n.includes(a)||a.includes(n.split(' ')[0]); });
            if (matched) {
                d.subcategoryIdx = subs.indexOf(matched); d.subcategoryName = matched.name?.en || matched.name;
                window._radheyRegStep++;
                window._radheySetProgress(window._radheyRegStep, total);
                const svcs = (matched.subsubcategories || []).map((s, i) => (i + 1) + '. ' + (s.name?.en || s.name)).join('\n');
                radheyBot('✅ Sub-category: ' + d.subcategoryName + '\n\nStep ' + (window._radheyRegStep + 1) + ': Service type:\n\n' + (svcs || 'Default service') + '\n\nNumber ya naam bolein.');
            } else { radheyBot('❓ Sub-category naam ya number bolein.'); }
             return;
        }

        if (field === 'service') {
            const cat = (window._radheyCats || (typeof categories !== 'undefined' ? categories : null) || []).find(c => c.id === d.categoryId) || null;
            const sub = cat ? (cat.subcategories || [])[d.subcategoryIdx] : null;
            const svcs = sub ? (sub.subsubcategories || []) : [];
                        let matched = null;
            const hindiNumsSvc = {'ek':1,'do':2,'teen':3,'char':4,'paanch':5,'chhe':6,'saat':7,'aath':8,'nau':9,'das':10,'gyarah':11,'barah':12,'terah':13,'chaudah':14,'pandrah':15,'solah':16,'satrah':17,'atharah':18,'unnis':19,'bees':20,'एक':1,'दो':2,'तीन':3,'चार':4,'पाँच':5,'छह':6,'सात':7,'आठ':8,'नौ':9,'दस':10,'ग्यारह':11,'बारह':12,'तेरह':13,'चौदह':14,'पंद्रह':15,'सोलह':16,'सत्रह':17,'अठारह':18,'उन्नीस':19,'बीस':20};
            let num = parseInt(a);
            if (!(num > 0)) { for (const [w,n] of Object.entries(hindiNumsSvc)) { if (a.includes(w)) { num = n; break; } } }
            if (num > 0 && num <= svcs.length) matched = svcs[num - 1];
            if (!matched && svcs.length) matched = svcs.find(s => { const n=(s.name?.en||s.name||'').toLowerCase(); return n.includes(a)||a.includes(n.split(' ')[0]); });
            d.serviceName = matched ? (matched.name?.en || matched.name) : (d.subcategoryName || 'General Service');
            d.serviceIdx = matched ? svcs.indexOf(matched) : 0;
            window._radheyRegStep++;
            window._radheySetProgress(window._radheyRegStep, total);
            radheyBot('✅ Service: ' + d.serviceName + '\n\nStep ' + (window._radheyRegStep + 1) + ': Bhasha chunein (number bolein):\n1. Hindi\n2. English\n3. Bengali\n4. Gujarati\n5. Marathi\n6. Kannada\n7. Telugu\n8. Malayalam\n9. Tamil\n10. Punjabi\n11. Odia\n12. Assamese\n\nEk ya zyada number bolein.');
             return;
        }

        if (field === 'language') {
            const langList = ['Hindi','English','Bengali','Gujarati','Marathi','Kannada','Telugu','Malayalam','Tamil','Punjabi','Odia','Assamese'];
            const lmap = { 'hindi': 'Hindi', 'english': 'English', 'bengali': 'Bengali', 'gujarati': 'Gujarati', 'marathi': 'Marathi', 'kannada': 'Kannada', 'telugu': 'Telugu', 'malayalam': 'Malayalam', 'tamil': 'Tamil', 'punjabi': 'Punjabi', 'odia': 'Odia', 'assamese': 'Assamese', 'हिंदी': 'Hindi', 'अंग्रेजी': 'English', 'हिन्दी': 'Hindi' };
            const numWords = {'ek':1,'do':2,'teen':3,'char':4,'paanch':5,'chhe':6,'saat':7,'aath':8,'nau':9,'das':10,'gyarah':11,'barah':12,'एक':1,'दो':2,'तीन':3,'चार':4,'पाँच':5,'छह':6,'सात':7,'आठ':8,'नौ':9,'दस':10,'ग्यारह':11,'बारह':12};
            const found = [];
            for (const [w, n] of Object.entries(numWords)) { if (a.includes(w) && langList[n-1]) found.push(langList[n-1]); }
            const digitMatches = a.match(/\b(\d+)\b/g) || [];
            for (const d2 of digitMatches) { const n = parseInt(d2); if (n >= 1 && n <= langList.length) found.push(langList[n-1]); }
            for (const [k, v] of Object.entries(lmap)) { if (a.includes(k.toLowerCase())) found.push(v); }
            d.language = found.length ? [...new Set(found)] : ['Hindi'];
            window._radheyRegStep++;
            window._radheySetProgress(window._radheyRegStep, total);
            const nextField = (window._radheySteps || [])[window._radheyRegStep];
            if (nextField === 'hours') {
                radheyBot('✅ Bhasha: ' + d.language.join(', ') + '\n\nStep ' + (window._radheyRegStep + 1) + ': Kab kaam karte hain?\n1. Mon-Fri\n2. Weekends Only\n3. Roz (All 7 days)\n4. 24×7');
            } else {
                radheyBot('✅ Bhasha: ' + d.language.join(', ') + '\n\nStep ' + (window._radheyRegStep + 1) + ': Dharm chunein (number bolein):\n1. Hindu\n2. Muslim\n3. Christian\n4. Sikh\n5. Buddhist\n6. Jain');
            }
             return;
        }

        if (field === 'hours') {
            let h = 'all-days';
            if (a.includes('1') || a.includes('mon') || a.includes('friday') || a.includes('सोम')) h = 'mon-fri';
            else if (a.includes('2') || a.includes('weekend') || a.includes('शनि')) h = 'weekends';
            else if (a.includes('3') || a.includes('roz') || a.includes('रोज') || a.includes('all')) h = 'all-days';
            else if (a.includes('4') || a.includes('24') || a.includes('हमेशा')) h = '24x7';
            d.workingHours = h;
            const hl = { 'mon-fri': 'Mon-Fri', 'weekends': 'Weekends', 'all-days': 'All Days', '24x7': '24×7' }[h] || h;
            window._radheyRegStep++;
            window._radheySetProgress(window._radheyRegStep, total);
            radheyBot('✅ Hours: ' + hl + '\n\nStep ' + (window._radheyRegStep + 1) + ': Service area?\n1. 10 km tak\n2. Poore shehar mein');
             return;
        }

        if (field === 'area') {
            d.serviceArea = (a.includes('1') || a.includes('10') || a.includes('paas') || a.includes('पास')) ? '10km' : 'city';
            window._radheyRegStep++;
            window._radheySetProgress(window._radheyRegStep, total);
            radheyBot('✅ Area: ' + (d.serviceArea === '10km' ? '10 km' : 'Poora shehar') + '\n\nStep ' + (window._radheyRegStep + 1) + ': Dharm chunein (number bolein):\n1. Hindu\n2. Muslim\n3. Christian\n4. Sikh\n5. Buddhist\n6. Jain');
             return;
        }

        if (field === 'religion') {
            const relList = ['Hindu','Muslim','Christian','Sikh','Buddhist','Jain'];
            const rmap = { 'hindu': 'Hindu', 'muslim': 'Muslim', 'christian': 'Christian', 'sikh': 'Sikh', 'buddhist': 'Buddhist', 'jain': 'Jain', 'हिंदू': 'Hindu', 'मुस्लिम': 'Muslim', 'सिख': 'Sikh', 'बौद्ध': 'Buddhist', 'जैन': 'Jain', 'ईसाई': 'Christian' };
            let rel = null;
            const rNum = parseInt(a.match(/\b(\d+)\b/)?.[0]);
            if (rNum >= 1 && rNum <= relList.length) rel = relList[rNum - 1];
            if (!rel) { for (const [k, v] of Object.entries(rmap)) { if (a.includes(k.toLowerCase())) { rel = v; break; } } }
            if (!rel) { radheyBot('❓ Number bolein:\n1. Hindu  2. Muslim  3. Christian\n4. Sikh  5. Buddhist  6. Jain');  return; }
            d.religion = rel; window._radheyRegStep++;
            window._radheySetProgress(window._radheyRegStep, total);
            radheyBot('✅ Dharm: ' + rel + '\n\nStep ' + (window._radheyRegStep + 1) + ': Shehar / Address?\nJaise: "Malviya Nagar, Jaipur"');
             return;
        }

        if (field === 'location') {
            d.location = answer.trim(); window._radheyRegStep++;
            window._radheySetProgress(window._radheyRegStep, total);
            const nextField2 = (window._radheySteps || [])[window._radheyRegStep];
            if (nextField2 === 'rate') {
                radheyBot('✅ Location: ' + d.location + '\n\nStep ' + (window._radheyRegStep + 1) + ': Charges (Optional)?\nHourly fees bolein. Jaise: "200" ya "paanch sau"\n"skip" ya "negotiable" bolein agar mutual decide karna hai.');
            } else { radheyConfirmReg(); }
             return;
        }

        if (field === 'rate') {
            // Charges is OPTIONAL - allow skip, negotiable, or a number
            const wmap = { 'ek sau': 100, 'do sau': 200, 'teen sau': 300, 'char sau': 400, 'paanch sau': 500, 'panch sau': 500, 'chhe sau': 600, 'saat sau': 700, 'aath sau': 800, 'nau sau': 900, 'ek hazaar': 1000, 'das sau': 1000 };
            let rate = 0;
            if (a.includes('skip') || a.includes('स्किप') || a.includes('nahi') || a.includes('नहीं') || a.includes('नही') || a.includes('negotiable') || a.includes('mutual') || a.includes('baad') || a.includes('बाद') || a.includes('छोड़') || a.includes('तय करेंगे')) {
                d.rate = 0; d.rateLabel = 'Negotiable';
            } else {
                for (const [k, v] of Object.entries(wmap)) { if (a.includes(k)) { rate = v; break; } }
                if (!rate) rate = parseInt(answer.replace(/\D/g, '')) || 0;
                if (rate > 0 && rate < 10) { radheyBot('❌ Rate ₹10 se zyada hona chahiye. Ya "skip" / "negotiable" bolein.');  return; }
                d.rate = rate; d.rateLabel = rate > 0 ? ('₹' + rate + '/hr') : 'Negotiable';
            }
            window._radheyRegStep++;
            window._radheySetProgress(window._radheyRegStep, total);
            radheyBot('✅ Charges: ' + (d.rateLabel || (d.rate ? '₹' + d.rate + '/hr' : 'Negotiable')) + '\n\nStep ' + (window._radheyRegStep + 1) + ': Bio (apne baare mein)?\nJaise: "Main 5 saal se kaam kar raha hoon."\n\nYa "skip" bolein.');
             return;
        }

        if (field === 'bio') {
            if (!a.includes('skip') && !a.includes('स्किप') && !a.includes('nahi') && !a.includes('नहीं') && !a.includes('नही') && !a.includes('छोड़') && answer.trim().length > 3) d.bio = answer.trim();
            window._radheyRegStep++;
            window._radheySetProgress(window._radheyRegStep, total);
            radheyBot((d.bio ? '✅ Bio save hua!' : 'Bio skip kiya.') + '\n\nStep ' + (window._radheyRegStep + 1) + ': Profile Photo 📸\n\nApni photo lein!\n"Photo lo" ya "camera" bolein\n"gallery" — gallery se chunein\n"skip" — baad mein add karein'); return;
        }

        if (field === 'photo') {
            // Guard: skip empty/noise input, retry mic silently
            if (!a || a.length < 2) { setTimeout(radheyAutoMic, 1500); return; }
            if (a.includes('skip') || a.includes('nahi') || a.includes('नहीं') || a.includes('नही') || a.includes('baad') || a.includes('bad mein') || a.includes('बाद') || a.includes('later') || a.includes('स्किप') || a.includes('छोड़')) {
                window._radheyRegStep++;
                window._radheySetProgress(window._radheyRegStep, total);
                radheyBot('Photo skip kiya.\n\nStep ' + (window._radheyRegStep + 1) + ': GPS location detect karein?\n1. Haan — GPS se auto\n2. Nahi — address use hogi');
                
            } else if (a.includes('camera') || a.includes('कैमरा') || a.includes('photo') || a.includes('फोटो') || a.includes('gallery') || a.includes('गैलरी') || a.includes('selfie') || a.includes('lelo') || a === 'lo' || a === 'photo lo') {
              var msgs4 = document.getElementById('radhey-messages');
              if (msgs4) {
                var oldBtns = document.getElementById('radhey-photo-btns');
                if (oldBtns) oldBtns.remove();
                var btnWrap = document.createElement('div');
                btnWrap.id = 'radhey-photo-btns';
                btnWrap.style.cssText = 'display:flex;flex-direction:column;gap:8px;padding:8px 0;width:100%;';
                var camBtn = document.createElement('button');
                camBtn.style.cssText = 'background:linear-gradient(135deg,#ea580c,#f97316);color:white;border:none;border-radius:12px;padding:14px;font-size:14px;font-weight:700;cursor:pointer;width:100%;';
                camBtn.textContent = '\uD83D\uDCF7 Camera se Photo Lo (TAP HERE)';
                camBtn.onclick = function() { btnWrap.remove(); radheyOpenCamera(false); };
                var galBtn = document.createElement('button');
                galBtn.style.cssText = 'background:rgba(255,255,255,0.15);color:white;border:1px solid rgba(255,255,255,0.3);border-radius:12px;padding:14px;font-size:14px;font-weight:700;cursor:pointer;width:100%;';
                galBtn.textContent = '\uD83D\uDDBC\uFE0F Gallery se Chunein (TAP HERE)';
                galBtn.onclick = function() { btnWrap.remove(); radheyOpenCamera(true); };
                var skipBtn2 = document.createElement('button');
                skipBtn2.style.cssText = 'background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.15);border-radius:12px;padding:10px;font-size:12px;cursor:pointer;width:100%;';
                skipBtn2.textContent = 'Skip - baad mein add karein';
                skipBtn2.onclick = function() {
                  btnWrap.remove();
                  window._radheyRegStep++;
                  var tot2 = (window._radheySteps||[]).length;
                  window._radheySetProgress(window._radheyRegStep, tot2);
                  radheyBot('Photo skip kiya.\n\nStep ' + (window._radheyRegStep + 1) + ': GPS location detect karein?\n1. Haan - GPS se auto\n2. Nahi - address use hogi');
                };
                btnWrap.appendChild(camBtn);
                btnWrap.appendChild(galBtn);
                btnWrap.appendChild(skipBtn2);
                msgs4.appendChild(btnWrap);
                msgs4.scrollTop = msgs4.scrollHeight;
              }
            } else {
                radheyBot('Photo ke liye bolein:\n"camera" — photo lein\n"gallery" — chunein\n"skip" — baad mein');
                
            }
            return;
        }

        if (field === 'gps') {
            if (a.includes('haan') || a.includes('yes') || a.includes('हां') || a.includes('gps') || a.includes('location') || a.includes('detect')) {
                radheyBot('📍 GPS detect ho rahi hai...');
                if ('geolocation' in navigator) {
                    navigator.geolocation.getCurrentPosition(
                        function(pos) {
                            window._radheyRegData.lat = pos.coords.latitude;
                            window._radheyRegData.lng = pos.coords.longitude;
                            radheyUser('📍 Location mili!');
                            radheyBot('✅ GPS Location mil gayi!\n' + pos.coords.latitude.toFixed(4) + ', ' + pos.coords.longitude.toFixed(4) + '\n\nStep ' + (window._radheyRegStep + 2) + ': Identity Proof (Optional)\nAadhaar, DL, Voter ID, PAN, Passport?\n"skip" bolein agar nahi hai.');
                            window._radheyRegStep++;
                            window._radheySetProgress(window._radheyRegStep, total);
                            
                        },
                        function() {
                            radheyBot('GPS nahi mila. Manual address use hogi.\n\nStep ' + (window._radheyRegStep + 2) + ': Identity Proof (Optional)\nAadhaar, DL, Voter ID, PAN?\n"skip" bolein agar nahi hai.');
                            window._radheyRegStep++;
                            window._radheySetProgress(window._radheyRegStep, total);
                            
                        },
                        { enableHighAccuracy: true, timeout: 8000 }
                    );
                } else {
                    radheyBot('GPS is device par supported nahi.\n\nAge badh rahe hain...');
                    window._radheyRegStep++;
                    window._radheySetProgress(window._radheyRegStep, total);
                    
                }
            } else {
                radheyBot('ठीक है, manual address use hogi.\n\nStep ' + (window._radheyRegStep + 2) + ': Identity Proof (Optional)\nAadhaar, DL, Voter ID, PAN?\n"skip" bolein agar nahi hai.');
                window._radheyRegStep++;
                window._radheySetProgress(window._radheyRegStep, total);
                
            }
            return;
        }

        if (field === 'id') {
            if (!a.includes('skip') && !a.includes('nahi')) {
                const idmap = { 'aadhaar': 'aadhaar', 'aadhar': 'aadhaar', 'driving': 'driving', 'licence': 'driving', 'voter': 'voter', 'pan': 'pan', 'passport': 'passport', 'आधार': 'aadhaar', 'ड्राइविंग': 'driving', 'वोटर': 'voter', 'पैन': 'pan' };
                for (const [k, v] of Object.entries(idmap)) { if (a.includes(k)) { d.idType = v; break; } }
            }
            window._radheyRegStep++;
            setTimeout(() => radheyConfirmReg(), 500);
            return;
        }

        // Confirmation
        if (step >= (window._radheySteps || (window._PROVIDER_STEPS||["type","name","mobile","category","subcategory","service","language","hours","area","religion","location","rate","bio","photo","gps","id"])).length) {
            if (a.includes('haan') || a.includes('yes') || a.includes('हां') || a.includes('हाँ') || a.includes('sahi') || a.includes('bilkul') || a.includes('correct')) {
                radheySubmitReg();
            } else if (a.includes('nahi') || a.includes('no') || a.includes('galat') || a.includes('wrong')) {
                window._radheyRegMode = false; window._radheyRegStep = 0;
                radheyBot('ठीक है! Dobara try karein — "🎤 Register" button tap karein.');
                window._radheySetProgress(0, 0);
            } else {
                radheyBot('"Haan" bolein confirm karne ke liye\n"Nahi" bolein dobara shuru karne ke liye.');
                
            }
        }
    };

    // Camera/Gallery picker for voice registration
    window.radheyOpenCamera = function(useGallery) {
        // Always create a fresh picker to avoid stale onchange handlers
        const oldPicker = document.getElementById('radhey-photo-picker');
        if (oldPicker) oldPicker.remove();
        const picker = document.createElement('input');
        picker.type = 'file';
        picker.id = 'radhey-photo-picker';
        picker.accept = 'image/*';
        picker.style.cssText = 'position:fixed;top:-999px;left:-999px;opacity:0;';
        // Set capture only for camera mode (NOT for gallery - capture blocks file browse on mobile)
        if (!useGallery) {
            picker.setAttribute('capture', 'environment');
        }
        document.body.appendChild(picker);

        picker.onchange = function() {
            if (window._photoTimeout) { clearTimeout(window._photoTimeout); window._photoTimeout = null; }
            if (!picker.files || !picker.files[0]) {
                if (window._radheySteps && window._radheySteps[window._radheyRegStep] === 'photo') {
                    radheyBot('Photo nahi mili. Skip kar rahe hain.\n\nGPS location detect karein?\n1. Haan  2. Nahi');
                    window._radheyRegStep++;
                    window._radheySetProgress(window._radheyRegStep, (window._radheySteps||[]).length);
                }
                return;
            }
            const file = picker.files[0];
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = new Image();
                img.onload = function() {
                    const canvas = document.createElement('canvas');
                    const max = 400;
                    let w = img.width, h = img.height;
                    if (w > h) { if (w > max) { h = h * max / w; w = max; } }
                    else { if (h > max) { w = w * max / h; h = max; } }
                    canvas.width = w; canvas.height = h;
                    canvas.getContext('2d').drawImage(img, 0, 0, w, h);
                    window._radheyRegData.photo = canvas.toDataURL('image/jpeg', 0.7);
                    radheyUser('Photo upload kiya! 📸');
                    radheyBot('\u2705 Photo save ho gayi! 📸\n\nStep ' + (window._radheyRegStep + 2) + ': GPS location detect karein?\n"Haan" ya "Nahi" bolein.');
                    window._radheyRegStep++;
                    const total = (window._radheySteps || ['type','name','mobile','category','subcategory','service','language','hours','area','religion','location','rate','bio','photo','gps','id']).length;
                    window._radheySetProgress(window._radheyRegStep, total);
                // C4: bring panel to foreground after photo
                var _rp = document.getElementById('radhey-panel');
                if (_rp) { _rp.classList.add('open'); _rp.style.zIndex = '99999'; setTimeout(function(){ _rp.style.zIndex=''; }, 3000); }
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        };
        // Click picker synchronously — Android requires user-gesture context
        try { picker.click(); } catch(e) {}
        radheyBot('📸 ' + (useGallery ? 'Gallery khul rahi hai' : 'Camera khul raha hai') + '...\nPhoto chunein ya "skip" bolein.');
    };

    window.radheyConfirmReg = function () {
        const d = window._radheyRegData;
        let s = '📋 Registration Summary:\n━━━━━━━━━━━━━━━\n';
        s += '👤 Naam: ' + (d.name || '-') + '\n';
        s += '📱 Mobile: ' + (d.mobile || '-') + '\n';
        s += '🙏 Dharm: ' + (d.religion || '-') + '\n';
        s += '📍 Location: ' + (d.location || '-') + '\n';
        s += '🗣️ Bhasha: ' + ((d.language || []).join(', ') || '-') + '\n';
        if (d.type === 'provider' || d.type === 'both') {
            s += '📋 Category: ' + (d.categoryName || '-') + '\n';
            s += '🔧 Service: ' + (d.serviceName || '-') + '\n';
            s += '⏰ Hours: ' + (d.workingHours || '-') + '\n';
            s += '🗺️ Area: ' + (d.serviceArea || '-') + '\n';
            s += '💰 Charges: ' + (d.rateLabel || (d.rate ? '₹' + d.rate + '/hr' : 'Negotiable')) + '\n';
            if (d.bio) s += '📝 Bio: ' + d.bio.slice(0, 40) + '...\n';
            if (d.photo) s += '📸 Photo: ✅\n';
        if (d.lat && d.lat !== 26.9124) s += '📍 GPS: ' + d.lat.toFixed(4) + ', ' + d.lng.toFixed(4) + '\n';
        if (d.idType) s += '🪪 ID: ' + d.idType.toUpperCase() + '\n';
        }
        s += '\n━━━━━━━━━━━━━━━\n✅ "Haan" — Register karo\n❌ "Nahi" — Dobara shuru karo';
        radheyBot(s);
        window._radheyRegStep = (window._radheySteps || (window._PROVIDER_STEPS||["type","name","mobile","category","subcategory","service","language","hours","area","religion","location","rate","bio","photo","gps","id"])).length;
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
        rec.interimResults = true;
        rec.maxAlternatives = 3;
        rec.continuous = false;
        rec.onresult = function (e) {
            // C3: pick best alt with number
            let txt = e.results[0][0].transcript;
            for (let _ai = 0; _ai < e.results[0].length; _ai++) {
                const _alt = e.results[0][_ai].transcript;
                if (/[0-9]|\bone\b|\btwo\b|\bthree\b|\bfour\b|\bfive\b|do|teen|char|paanch|chhe|saat|aath|nau|das|ek/.test(_alt.toLowerCase())) { txt = _alt; break; }
            }
            // Guard: skip very short/noise transcripts silently
            if (!txt || txt.trim().length < 2) { window._radheyListening = false; setTimeout(radheyAutoMic, 1500); return; }
            radheyUser(txt);
            window._radheyListening = false;
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
            radheyBot('Samajh nahi aaya. Dobara bolein.');
            setTimeout(radheyAutoMic, 1500);
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

    window.radheySubmitReg = async function () {
        const d = window._radheyRegData;
        radheyBot('⏳ Registration ho rahi hai...');
        window._radheyRegMode = false;
        window._radheySetProgress(1, 1);
        const fb = window._firebase;
        if (!fb) { radheyBot('❌ Database connect nahi hua.\nManually register karein ya dobara try karein.'); return; }
        try {
            const uid = window.firebaseUser?.uid || null;
            const now = new Date().toISOString();
            if (d.type === 'provider' || d.type === 'both') {
                const p = { id: 'p_' + Date.now(), name: d.name, mobile: d.mobile, religion: d.religion, location: d.location, language: d.language || ['Hindi'], categoryId: d.categoryId || null, subcategoryIdx: d.subcategoryIdx ?? null, subsubcategoryIdx: d.serviceIdx ?? null, service: d.serviceName || d.subcategoryName || 'General Service', services: d.serviceName ? [d.serviceName] : null, workingHours: d.workingHours || 'all-days', serviceArea: d.serviceArea || 'city', rate: (d.rate !== undefined ? d.rate : 0), experience: 0, bio: d.bio || null, photo: d.photo || null, idVerification: d.idType ? { type: d.idType, status: 'pending', submittedAt: now } : null, verified: false, status: 'active', available: true, ownerUid: uid, registered: now, lat: d.lat || 26.9124, lng: d.lng || 75.7873 };
                const ref = await fb.push(fb.ref(fb.db, 'providers'), p);
                await fb.update(ref, { id: ref.key });
            }
            if (d.type === 'seeker' || d.type === 'both') {
                const s = { id: 's_' + Date.now(), name: d.name, mobile: d.mobile, religion: d.religion, location: d.location, language: d.language || ['Hindi'], status: 'active', ownerUid: uid, registered: now, lat: 26.9124, lng: 75.7873 };
                const ref = await fb.push(fb.ref(fb.db, 'seekers'), s);
                await fb.update(ref, { id: ref.key });
            }
            window._radheySetProgress(1, 1);
            radheyBot('🎉 बधाई हो ' + d.name + ' जी!\n\nRegistration successfully complete!\n\n✅ Ab aap Sudarshan Chakra ke member hain\n✅ Profile icon → apna profile dekhen\n✅ Customers ab aapko dhundh sakenge\n\n🙏 Sudarshan Chakra mein swagat!\nJai Hind 🇮🇳');
            setTimeout(() => window._radheySetProgress(0, 0), 3000);
        } catch (e) {
            console.error('RADHEY reg error:', e);
            radheyBot('❌ Registration mein error.\nManually register karein ya email karein:\nsupport@sudarshanchakraindia.com');
            window._radheySetProgress(0, 0);
        }
    };

    // ── radheyStop: cancel TTS + mic + reset state ──
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

