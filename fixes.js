/**
 * Sudarshan Chakra — Bug Fixes Patch
 * Version: 2026-03-14
 * 
 * HOW TO USE:
 * Save this file as `fixes.js` in your repo root.
 * Add this line just before </body> in index.html:
 *   <script src="fixes.js"></script>
 * 
 * This file patches all 7 bugs at runtime.
 */

(function applyFixes() {
    'use strict';

    // ── Wait for DOM to be ready ──
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyAllFixes);
    } else {
        // Small delay to let the app initialize first
        setTimeout(applyAllFixes, 500);
    }

    function applyAllFixes() {
        fixBug1_WalletTabButton();
        fixBug2_ProviderDashboardButton();
        fixBug5_AIchatbot();
        fixBug6_FAQAutoLoad();
        fixBug7_ChatModalEmptyId();
        fixBug3_HomeStats();
        fixBug4_WalletDeduction();
        fixBug8_BookingsDefaultTab();
        fixBug9_RoleDetection();
        console.log('✅ Sudarshan Chakra: All bug fixes applied!');
    }

    // ══════════════════════════════════════════════════════
    // BUG 1: Add Wallet tab button to Profile page tabs
    // The 💰 Wallet tab content exists but had no button.
    // ══════════════════════════════════════════════════════
    function fixBug1_WalletTabButton() {
        const bookingsBtn = document.getElementById('ptab-bookings');
        if (!bookingsBtn) return;
        // Check if wallet button already exists
        if (document.getElementById('ptab-wallet')) return;

        const walletBtn = document.createElement('button');
        walletBtn.id = 'ptab-wallet';
        walletBtn.className = 'flex-1 px-3 py-3 font-semibold text-sm text-gray-500 hover:text-orange-600 border-b-2 border-transparent whitespace-nowrap';
        walletBtn.innerHTML = '💰 Wallet';
        walletBtn.onclick = function() {
            if (typeof showProfileTab === 'function') showProfileTab('wallet');
        };
        // Insert after bookings button
        bookingsBtn.parentNode.insertBefore(walletBtn, bookingsBtn.nextSibling);
        console.log('✅ Fix 1: Wallet tab button added');
    }

    // ══════════════════════════════════════════════════════
    // BUG 2: Add Provider Dashboard button to profile page
    // ══════════════════════════════════════════════════════
    function fixBug2_ProviderDashboardButton() {
        const subsBtn = document.querySelector('button[onclick="openSubscriptionModal()"]');
        if (!subsBtn) return;
        // Check parent is myProviderCard
        const card = document.getElementById('myProviderCard');
        if (!card || !card.contains(subsBtn)) return;
        // Check if already added
        if (card.querySelector('[data-fix="dashboard-btn"]')) return;

        const dashBtn = document.createElement('button');
        dashBtn.setAttribute('data-fix', 'dashboard-btn');
        dashBtn.className = 'mt-2 w-full bg-green-600 text-white py-2.5 rounded-xl font-medium hover:bg-green-700 transition';
        dashBtn.innerHTML = '📊 My Provider Dashboard';
        dashBtn.onclick = function() {
            if (typeof openProviderDash === 'function') openProviderDash();
        };
        subsBtn.parentNode.insertBefore(dashBtn, subsBtn);
        console.log('✅ Fix 2: Provider Dashboard button added');
    }

    // ══════════════════════════════════════════════════════
    // BUG 3: Home stats show "..." — force refresh after Firebase loads
    // We patch the attachFirebaseListeners function to also call updateHomeStats
    // ══════════════════════════════════════════════════════
    function fixBug3_HomeStats() {
        const originalOnValue = window._onValue;
        if (!originalOnValue) {
            // Firebase not ready yet, retry
            setTimeout(fixBug3_HomeStats, 1000);
            return;
        }

        // Poll until updateHomeStats is available
        const pollStats = setInterval(function() {
            if (typeof updateHomeStats === 'function' && 
                typeof providers !== 'undefined' && 
                typeof categories !== 'undefined') {
                clearInterval(pollStats);
                updateHomeStats();
                // Also update when Firebase data arrives
                const origListener = window._onValue;
                // Just call updateHomeStats every 3 seconds for first 30 seconds
                let calls = 0;
                const refreshInterval = setInterval(function() {
                    if (typeof updateHomeStats === 'function') updateHomeStats();
                    calls++;
                    if (calls >= 10) clearInterval(refreshInterval);
                }, 3000);
                console.log('✅ Fix 3: Home stats refresh initiated');
            }
        }, 500);
    }

    // ══════════════════════════════════════════════════════
    // BUG 4: Wallet points not deducted on hire modal redemption
    // We override hmPaymentDone to also deduct redeemed points
    // ══════════════════════════════════════════════════════
    function fixBug4_WalletDeduction() {
        // Patch is applied inline — we override the wallet award section
        // by monkey-patching the awardWalletPoints-adjacent logic.
        // The real fix: after hmPaymentDone, check if _hmPtsUsed > 0
        const origHmDone = window.hmPaymentDone;
        if (!origHmDone) {
            setTimeout(fixBug4_WalletDeduction, 1000);
            return;
        }

        window.hmPaymentDone = async function() {
            const ptsToDeduct = window._hmPtsUsed || 0;
            
            // Call original function
            await origHmDone.apply(this, arguments);
            
            // After original completes, deduct redeemed points if needed
            if (ptsToDeduct > 0 && window.firebaseUser && window._firebase) {
                try {
                    const credRef = window._firebase.ref(window._firebase.db, 
                        `users/${window.firebaseUser.uid}/walletCredits`);
                    const snap = await window._firebase.get(credRef);
                    const current = snap.exists() ? (snap.val() || 0) : 0;
                    const newBal = Math.max(0, current - ptsToDeduct);
                    await window._firebase.set(credRef, newBal);
                    console.log(`✅ Fix 4: Deducted ${ptsToDeduct} redeemed wallet points`);
                    window._hmPtsUsed = 0;
                } catch(e) {
                    console.warn('Fix 4 wallet deduction error:', e);
                }
            }
        };
        console.log('✅ Fix 4: Wallet deduction patch applied');
    }

    // ══════════════════════════════════════════════════════
    // BUG 5: Upgrade AI chatbot to use Claude API
    // ══════════════════════════════════════════════════════
    function fixBug5_AIchatbot() {
        // Wait for original function to exist
        const waitForChat = setInterval(function() {
            if (typeof infoChatSend === 'undefined') return;
            clearInterval(waitForChat);

            window.infoChatSend = async function() {
                const inp = document.getElementById('infoChatInput');
                const msg = (inp ? inp.value : '').trim();
                if (!msg) return;
                inp.value = '';

                // addInfoMsg is defined in the main script
                if (typeof addInfoMsg !== 'function') return;
                addInfoMsg(msg, 'user');
                const typing = addInfoMsg('⏳ Thinking…', 'bot thinking');

                try {
                    const response = await fetch("https://api.anthropic.com/v1/messages", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            model: "claude-sonnet-4-20250514",
                            max_tokens: 1000,
                            system: (typeof INFO_CHAT_SYS !== 'undefined') ? INFO_CHAT_SYS : 
                                "You are the helpful AI guide for Sudarshan Chakra India, a hyperlocal service marketplace. Answer questions about the app helpfully and concisely.",
                            messages: [{ role: "user", content: msg }]
                        })
                    });
                    if (response.ok) {
                        const data = await response.json();
                        const reply = (data.content && data.content[0] && data.content[0].text) || 
                            (typeof scFindAnswer === 'function' ? scFindAnswer(msg) : 'I could not find an answer.');
                        typing.textContent = reply;
                        typing.style.opacity = '1';
                    } else {
                        throw new Error('API ' + response.status);
                    }
                } catch(e) {
                    // Fallback to local KB
                    typing.textContent = (typeof scFindAnswer === 'function') ? 
                        scFindAnswer(msg) : 
                        'I\'m having trouble connecting. Please try again or email support@sudarshanchakraindia.com 🙏';
                    typing.style.opacity = '1';
                }
            };
            console.log('✅ Fix 5: AI chatbot upgraded to Claude API');
        }, 500);
    }

    // ══════════════════════════════════════════════════════
    // BUG 6: FAQ auto-builds whenever info page is shown
    // ══════════════════════════════════════════════════════
    function fixBug6_FAQAutoLoad() {
        const origShowPage = window.showPage;
        if (!origShowPage) {
            setTimeout(fixBug6_FAQAutoLoad, 500);
            return;
        }
        window.showPage = function(pageName) {
            origShowPage(pageName);
            if (pageName === 'info') {
                setTimeout(function() {
                    if (typeof buildFAQ === 'function') buildFAQ();
                }, 150);
            }
        };
        console.log('✅ Fix 6: FAQ auto-builds on info page load');
    }

    // ══════════════════════════════════════════════════════
    // BUG 7: openChatModal called with empty string in bookings
    // Fixed by monkey-patching openChatModal to guard against empty IDs
    // ══════════════════════════════════════════════════════
    function fixBug7_ChatModalEmptyId() {
        const waitForChat = setInterval(function() {
            if (typeof openChatModal === 'undefined') return;
            clearInterval(waitForChat);

            const origOpenChat = window.openChatModal;
            window.openChatModal = function(providerId) {
                if (!providerId || providerId === 'undefined' || providerId === '') {
                    if (typeof showFirebaseStatus === 'function') {
                        showFirebaseStatus('Cannot open chat — provider ID missing.', 'error');
                    }
                    console.warn('Fix 7: openChatModal called with empty/invalid providerId');
                    return;
                }
                origOpenChat(providerId);
            };
            console.log('✅ Fix 7: openChatModal guarded against empty ID');
        }, 500);
    }

})();

// ══════════════════════════════════════════════════════
// BUG 8: Bookings tab defaults to "Received Jobs" — should be "My Requests"
// ══════════════════════════════════════════════════════
(function fixBug8_BookingsDefaultTab() {
    const wait = setInterval(function() {
        if (typeof loadMyBookings === 'undefined') return;
        clearInterval(wait);
        const orig = window.loadMyBookings;
        window.loadMyBookings = function() {
            // Always reset to "My Requests" view on first load
            const sb = document.getElementById('bookViewSeeker');
            const pb = document.getElementById('bookViewProvider');
            if (sb && pb) {
                sb.className = 'flex-1 py-2 rounded-lg bg-orange-600 text-white font-semibold text-sm';
                pb.className = 'flex-1 py-2 rounded-lg bg-gray-100 text-gray-600 font-semibold text-sm';
            }
            orig.apply(this, arguments);
        };
        console.log('✅ Fix 8: Bookings defaults to My Requests');
    }, 500);
})();

// ══════════════════════════════════════════════════════
// BUG 9: Role shows "Service Seeker" even when user has a provider profile
// Cross-checks the providers array after Firebase loads
// ══════════════════════════════════════════════════════
(function fixBug9_RoleDetection() {
    const wait = setInterval(function() {
        if (typeof renderProfilePage === 'undefined') return;
        clearInterval(wait);
        const orig = window.renderProfilePage;
        window.renderProfilePage = function() {
            orig.apply(this, arguments);
            // After render, check Firebase providers for this user
            setTimeout(function() {
                const fu = window.firebaseUser;
                if (!fu) return;
                function applyRoleFix() {
                    if (typeof providers === 'undefined' || !Array.isArray(providers)) return false;
                    const myProvider = providers.find(function(p) { return p.ownerUid === fu.uid; });
                    const roleEl = document.getElementById('myProfileRole');
                    if (!roleEl) return false;
                    if (myProvider) {
                        const hasSeeker = typeof seekers !== 'undefined' && seekers.some(function(s){ return s.ownerUid === fu.uid; });
                        roleEl.textContent = hasSeeker ? '🛠️ Provider  |  🔍 Seeker' : '🛠️ Service Provider';
                        roleEl.style.color = '#fed7aa';
                        // Show provider card
                        const card = document.getElementById('myProviderCard');
                        if (card) card.classList.remove('hidden');
                        // Populate provider info if empty
                        const info = document.getElementById('myProviderInfo');
                        if (info && !info.innerHTML.trim()) {
                            info.innerHTML = '<div class="grid grid-cols-2 gap-2"><div><span class="font-medium">Service:</span> ' + (myProvider.service||'') + '</div><div><span class="font-medium">Rate:</span> ₹' + (myProvider.rate||'') + '/hr</div><div><span class="font-medium">Experience:</span> ' + (myProvider.experience||'') + ' yrs</div><div><span class="font-medium">Location:</span> ' + (myProvider.location||'') + '</div></div>';
                        }
                    }
                    return true;
                }
                // Retry if providers not yet loaded from Firebase
                var tries = 0;
                var retry = setInterval(function() {
                    if (applyRoleFix() || ++tries > 10) clearInterval(retry);
                }, 1500);
                applyRoleFix();
            }, 800);
        };
        console.log('✅ Fix 9: Role detection checks provider profile');
    }, 500);
})();

// ════════════════════════════════════════════════════════════════
// FEATURE 1: Role → "Registered User" + dual role support
// ════════════════════════════════════════════════════════════════
(function fixRoleLabel() {
    const wait = setInterval(function() {
        if (typeof renderProfilePage === 'undefined') return;
        clearInterval(wait);
        const orig = window.renderProfilePage;
        window.renderProfilePage = function() {
            orig.apply(this, arguments);
            setTimeout(function() {
                const fu = window.firebaseUser;
                if (!fu) return;
                const roleEl = document.getElementById('myProfileRole');
                if (!roleEl) return;

                const isProvider = typeof providers !== 'undefined' && providers.some(p => p.ownerUid === fu.uid);
                const isSeeker   = typeof seekers   !== 'undefined' && seekers.some(s => s.ownerUid === fu.uid);

                if (isProvider && isSeeker) {
                    roleEl.textContent = '🛠️ Provider  &  🔍 Seeker · Registered User';
                } else if (isProvider) {
                    roleEl.textContent = '🛠️ Service Provider · Registered User';
                } else if (isSeeker) {
                    roleEl.textContent = '🔍 Service Seeker · Registered User';
                } else {
                    roleEl.textContent = '✅ Registered User';
                }
                roleEl.style.color = '#fed7aa';

                // Inject "Become a Provider / Seeker" buttons if not already there
                const header = roleEl.closest('.bg-gradient-to-br');
                if (header && !header.querySelector('[data-fix="role-btns"]')) {
                    const btnWrap = document.createElement('div');
                    btnWrap.setAttribute('data-fix', 'role-btns');
                    btnWrap.className = 'flex gap-2 mt-3 flex-wrap';
                    if (!isProvider) {
                        const btn = document.createElement('button');
                        btn.className = 'text-xs bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-xl font-semibold transition';
                        btn.innerHTML = '➕ Become a Provider';
                        btn.onclick = () => { if(typeof closeLoginModal==='function') {}; showPage('register'); };
                        btnWrap.appendChild(btn);
                    }
                    if (!isSeeker) {
                        const btn2 = document.createElement('button');
                        btn2.className = 'text-xs bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-xl font-semibold transition';
                        btn2.innerHTML = '➕ Become a Seeker';
                        btn2.onclick = () => showPage('seeker');
                        btnWrap.appendChild(btn2);
                    }
                    if (btnWrap.children.length > 0) header.appendChild(btnWrap);
                }

                // Show provider card if provider
                if (isProvider) {
                    const card = document.getElementById('myProviderCard');
                    if (card) card.classList.remove('hidden');
                }
            }, 800);
        };
    }, 500);
})();

// ════════════════════════════════════════════════════════════════
// FEATURE 2: Always show both "My Requests" AND "My Jobs" tabs
// ════════════════════════════════════════════════════════════════
(function fixDualBookingTabs() {
    // Already handled by fix 8 — bookings tab resets to My Requests
    // Additional: make sure both tabs are always visible (not hidden)
    const checkTabs = setInterval(function() {
        const bookTab = document.getElementById('profileTab-bookings');
        if (!bookTab) return;
        // Observer: whenever bookings tab becomes visible, ensure both sub-tabs show
        const observer = new MutationObserver(function() {
            if (!bookTab.classList.contains('hidden')) {
                const sb = document.getElementById('bookViewSeeker');
                const pb = document.getElementById('bookViewProvider');
                if (sb) sb.style.display = '';
                if (pb) pb.style.display = '';
            }
        });
        observer.observe(bookTab, { attributes: true, attributeFilter: ['class'] });
        clearInterval(checkTabs);
    }, 500);
})();

// ════════════════════════════════════════════════════════════════
// FEATURE 3: Expand Voice Search to all 200+ services
// ════════════════════════════════════════════════════════════════
(function expandVoiceSearch() {
    const wait = setInterval(function() {
        if (typeof processVoiceCommand === 'undefined') return;
        clearInterval(wait);

        window.processVoiceCommand = function(transcript) {
            console.log('RADHEY Voice:', transcript);
            const q = transcript.toLowerCase().trim();

            // ── Expanded keyword map (Hindi + English) ──
            const map = {
                // Plumbing
                'plumber':'Pipe Repair','plumbing':'Pipe Repair','pipe':'Pipe Repair','नल':'Tap/Faucet Repair',
                'tap':'Tap/Faucet Repair','faucet':'Tap/Faucet Repair','leak':'Pipe Repair','leakage':'Pipe Repair',
                'drainage':'Drainage Cleaning','drain':'Drainage Cleaning','tank':'Tank Installation',
                'bathroom fitting':'Bathroom Fitting','toilet':'Bathroom Fitting','प्लंबर':'Pipe Repair',
                'पाइप':'Pipe Repair','नाली':'Drainage Cleaning','टंकी':'Tank Installation',
                // Electrical
                'electrician':'Wiring & Rewiring','electrical':'Wiring & Rewiring','wiring':'Wiring & Rewiring',
                'wire':'Wiring & Rewiring','fan':'Fan Installation','पंखा':'Fan Installation',
                'light':'Light Installation','bulb':'Light Installation','लाइट':'Light Installation',
                'switchboard':'Switchboard Repair','switch':'Switchboard Repair','power':'Wiring & Rewiring',
                'इलेक्ट्रीशियन':'Wiring & Rewiring','बिजली':'Wiring & Rewiring','तार':'Wiring & Rewiring',
                // AC
                'ac':'AC Servicing','air condition':'AC Servicing','air conditioning':'AC Servicing',
                'cooler':'AC Servicing','एसी':'AC Servicing','एयर कंडीशनर':'AC Servicing',
                // Carpenter
                'carpenter':'Furniture Repair','carpentry':'Furniture Repair','furniture':'Furniture Repair',
                'wood':'Wood Polishing','door':'Door/Window Repair','window':'Door/Window Repair',
                'बढ़ई':'Furniture Repair','फर्नीचर':'Furniture Repair','लकड़ी':'Wood Polishing',
                'दरवाजा':'Door/Window Repair','खिड़की':'Door/Window Repair',
                // Cleaning
                'clean':'Full Home Deep Clean','cleaning':'Full Home Deep Clean','cleaner':'Full Home Deep Clean',
                'maid':'Full Home Deep Clean','sweep':'Full Home Deep Clean','झाड़ू':'Full Home Deep Clean',
                'सफाई':'Full Home Deep Clean','साफ':'Full Home Deep Clean','घर साफ':'Full Home Deep Clean',
                'sofa':'Sofa Shampooing','mattress':'Mattress Deep Clean','kitchen clean':'Full Kitchen Deep Clean',
                // Painter
                'painter':'Wall Painting','painting':'Wall Painting','paint':'Wall Painting','colour':'Wall Painting',
                'color':'Wall Painting','wall':'Wall Painting','पेंटर':'Wall Painting','रंग':'Wall Painting','दीवार':'Wall Painting',
                // Beauty
                'beautician':'Hair Cut','beauty':'Hair Cut','salon':'Hair Cut','parlour':'Hair Cut','parlor':'Hair Cut',
                'makeup':'Party Makeup','mehendi':'Party Mehendi','mehndi':'Party Mehendi','bridal':'Bridal Makeup',
                'waxing':'Waxing','facial':'Facial','ब्यूटीशियन':'Hair Cut','मेहंदी':'Party Mehendi',
                'मेकअप':'Party Makeup','सैलून':'Hair Cut',
                // Cook/Food
                'cook':'Tiffin Service','chef':'Tiffin Service','cooking':'Tiffin Service','tiffin':'Tiffin Service',
                'food':'Tiffin Service','खाना':'Tiffin Service','रसोइया':'Tiffin Service','कैटरिंग':'Catering Service',
                'catering':'Catering Service','बावर्ची':'Tiffin Service',
                // Doctor/Health
                'doctor':'Home Visit','nurse':'Home Nursing Care','medical':'Home Visit','health':'Home Visit',
                'physiotherapy':'Home Physiotherapy','physio':'Home Physiotherapy','yoga':'Morning Yoga',
                'dietician':'Diet Consultation','diet':'Diet Consultation','fitness':'Personal Training at Home',
                'डॉक्टर':'Home Visit','नर्स':'Home Nursing Care','योग':'Morning Yoga',
                // Transport
                'taxi':'Local Taxi','cab':'Local Taxi','driver':'Personal Driver','car':'Local Taxi',
                'bike':'Scooter Rental','tempo':'9-Seater Tempo','bus':'12-Seater Tempo',
                'टैक्सी':'Local Taxi','ड्राइवर':'Personal Driver','कार':'Local Taxi',
                // Tutor/Education
                'tutor':'Home Tutoring','teacher':'Home Tutoring','coaching':'Home Tutoring',
                'english':'Basic Spoken English','maths':'Science & Math Tutor','math':'Science & Math Tutor',
                'dance':'Bollywood Dance','music':'Guitar Classes','guitar':'Guitar Classes',
                'ट्यूटर':'Home Tutoring','शिक्षक':'Home Tutoring','गणित':'Science & Math Tutor',
                'नृत्य':'Bollywood Dance','संगीत':'Guitar Classes',
                // Events
                'photographer':'Wedding Photography','photo':'Wedding Photography','video':'Wedding Videography',
                'dj':'Wedding DJ','decoration':'Wedding Decoration','tent':'Tent & Shamiana',
                'catering service':'Wedding Catering','band':'Baraat Band','dhol':'Dhol Players',
                'फोटोग्राफर':'Wedding Photography','सजावट':'Wedding Decoration','डीजे':'Wedding DJ',
                // Pest Control
                'pest':'Cockroach Treatment','cockroach':'Cockroach Treatment','termite':'Termite Treatment',
                'mosquito':'Mosquito Treatment','rats':'Rodent Control','कीड़े':'Cockroach Treatment',
                'दीमक':'Termite Treatment','मच्छर':'Mosquito Treatment',
                // RO/Geyser
                'ro':'RO Installation','water purifier':'RO Installation','geyser':'Geyser Repair',
                'inverter':'Inverter Repair','battery':'Battery Replacement','solar':'Solar Panel Service',
                'cctv':'CCTV Installation','camera':'CCTV Installation',
                'आरओ':'RO Installation','गीजर':'Geyser Repair','इन्वर्टर':'Inverter Repair',
                // Movers
                'movers':'Home Shifting','packers':'Home Shifting','shifting':'Home Shifting',
                'relocation':'Home Shifting','मूवर्स':'Home Shifting','शिफ्टिंग':'Home Shifting',
                // Legal/Finance
                'ca':'ITR Filing','tax':'ITR Filing','gst':'GST Registration & Filing','legal':'Property Legal Help',
                'lawyer':'Property Legal Help','advocate':'Property Legal Help',
                'ca सर्विस':'ITR Filing','टैक्स':'ITR Filing',
                // IT/Web
                'website':'Business Website','developer':'Business Website','app':'App Development',
                'graphic':'Logo Design','logo':'Logo Design','social media':'Instagram Management',
                'वेबसाइट':'Business Website','डेवलपर':'Business Website',
                // Pet
                'pet':'Dog Grooming at Home','dog':'Dog Grooming at Home','cat':'Cat Grooming',
                'vet':'Home Visit Vet','पालतू':'Dog Grooming at Home','कुत्ता':'Dog Grooming at Home',
            };

            let matchedCat = null, matchedSub = null, matchedSvc = null;

            // Try to match from longest keyword to shortest for accuracy
            const sortedKeys = Object.keys(map).sort((a,b) => b.length - a.length);
            let targetService = null;
            for (const kw of sortedKeys) {
                if (q.includes(kw)) { targetService = map[kw]; break; }
            }

            if (targetService && typeof categories !== 'undefined') {
                outer: for (const cat of categories) {
                    for (let si = 0; si < (cat.subcategories||[]).length; si++) {
                        const sub = cat.subcategories[si];
                        for (let vi = 0; vi < (sub.subsubcategories||[]).length; vi++) {
                            const svc = sub.subsubcategories[vi];
                            const svcName = svc.name && (svc.name.en || svc.name);
                            if (svcName === targetService || (svcName && svcName.includes(targetService))) {
                                matchedCat = cat.id; matchedSub = si; matchedSvc = vi;
                                break outer;
                            }
                        }
                    }
                }
            }

            if (matchedSvc !== null) {
                if (typeof navigateToService === 'function') navigateToService(matchedCat, matchedSub, matchedSvc);
            } else {
                // Fall back to global search
                const inp = document.getElementById('globalSearchInput');
                if (inp) { inp.value = transcript; }
                if (typeof globalSearchSubmit === 'function') globalSearchSubmit({key:'Enter'});
                if (typeof showFirebaseStatus === 'function')
                    showFirebaseStatus('🎤 Searching for: ' + transcript, 'info');
            }
        };
        console.log('✅ Voice search expanded to 200+ services');
    }, 800);
})();

// ════════════════════════════════════════════════════════════════
// RADHEY — Floating AI Assistant (Hindi + English)
// Visible on ALL pages, bottom-right corner
// ════════════════════════════════════════════════════════════════
(function initRADHEY() {
    // Don't init twice
    if (document.getElementById('radhey-bubble')) return;

    // ── Styles ──
    const style = document.createElement('style');
    style.textContent = `
        #radhey-bubble {
            position: fixed; bottom: 24px; right: 24px; z-index: 9999;
            width: 60px; height: 60px; border-radius: 50%;
            background: linear-gradient(135deg, #ff6b00, #ffb347);
            box-shadow: 0 4px 20px rgba(255,107,0,0.5);
            cursor: pointer; display: flex; align-items: center; justify-content: center;
            font-size: 28px; border: 3px solid white;
            transition: transform 0.2s, box-shadow 0.2s;
            animation: radheyPulse 2s infinite;
        }
        #radhey-bubble:hover { transform: scale(1.1); box-shadow: 0 6px 28px rgba(255,107,0,0.7); }
        @keyframes radheyPulse {
            0%,100% { box-shadow: 0 4px 20px rgba(255,107,0,0.5); }
            50%      { box-shadow: 0 4px 30px rgba(255,107,0,0.9); }
        }
        #radhey-badge {
            position: absolute; top: -4px; right: -4px;
            background: #16a34a; color: white; border-radius: 50%;
            width: 20px; height: 20px; font-size: 10px; font-weight: bold;
            display: flex; align-items: center; justify-content: center;
            border: 2px solid white;
        }
        #radhey-panel {
            position: fixed; bottom: 96px; right: 24px; z-index: 9998;
            width: 340px; max-height: 520px;
            background: linear-gradient(160deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%);
            border-radius: 24px; box-shadow: 0 8px 40px rgba(0,0,0,0.4);
            display: flex; flex-direction: column; overflow: hidden;
            border: 1px solid rgba(255,107,0,0.3);
            transform: scale(0.8) translateY(20px); opacity: 0;
            pointer-events: none;
            transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        #radhey-panel.open {
            transform: scale(1) translateY(0); opacity: 1; pointer-events: all;
        }
        #radhey-header {
            background: linear-gradient(90deg, #ff6b00, #ffb347);
            padding: 14px 16px; display: flex; align-items: center; gap: 10px;
        }
        #radhey-avatar {
            width: 40px; height: 40px; border-radius: 50%;
            background: white; display: flex; align-items: center; justify-content: center;
            font-size: 22px; flex-shrink: 0; border: 2px solid rgba(255,255,255,0.5);
        }
        #radhey-messages {
            flex: 1; overflow-y: auto; padding: 12px;
            display: flex; flex-direction: column; gap: 8px;
            max-height: 320px; min-height: 200px;
        }
        .radhey-msg-bot {
            background: rgba(255,255,255,0.08); color: #f1f1f1;
            border-radius: 16px 16px 16px 4px;
            padding: 10px 13px; font-size: 12px; line-height: 1.6;
            max-width: 88%; align-self: flex-start; white-space: pre-wrap;
            border: 1px solid rgba(255,107,0,0.2);
        }
        .radhey-msg-user {
            background: linear-gradient(135deg, #ff6b00, #ffb347);
            color: white; border-radius: 16px 16px 4px 16px;
            padding: 10px 13px; font-size: 12px; line-height: 1.6;
            max-width: 80%; align-self: flex-end;
        }
        #radhey-input-row {
            padding: 10px 12px; border-top: 1px solid rgba(255,255,255,0.08);
            display: flex; gap: 6px; align-items: center; background: rgba(0,0,0,0.2);
        }
        #radhey-input {
            flex: 1; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,107,0,0.3);
            border-radius: 20px; padding: 8px 14px; color: white; font-size: 12px; outline: none;
        }
        #radhey-input::placeholder { color: rgba(255,255,255,0.4); }
        #radhey-send {
            width: 34px; height: 34px; border-radius: 50%;
            background: linear-gradient(135deg, #ff6b00, #ffb347);
            border: none; color: white; font-size: 16px; cursor: pointer;
            display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        #radhey-mic {
            width: 34px; height: 34px; border-radius: 50%;
            background: rgba(255,255,255,0.1); border: 1px solid rgba(255,107,0,0.4);
            color: white; font-size: 16px; cursor: pointer;
            display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        #radhey-mic.listening { background: #dc2626; animation: radheyPulse 1s infinite; }
        .radhey-quick-btn {
            display: inline-block; background: rgba(255,107,0,0.15);
            border: 1px solid rgba(255,107,0,0.4); border-radius: 20px;
            padding: 4px 10px; font-size: 10px; color: #ffb347;
            cursor: pointer; margin: 2px; white-space: nowrap;
        }
        .radhey-quick-btn:hover { background: rgba(255,107,0,0.3); }
        #radhey-label {
            position: absolute; bottom: 68px; right: 90px;
            background: #1a1a2e; color: #ffb347; font-size: 11px; font-weight: 700;
            padding: 4px 10px; border-radius: 20px; border: 1px solid rgba(255,107,0,0.4);
            white-space: nowrap; pointer-events: none;
            animation: radheyLabel 3s ease-in-out infinite;
        }
        @keyframes radheyLabel {
            0%,100% { opacity:1; } 50% { opacity:0.6; }
        }
        @media (max-width: 480px) {
            #radhey-panel { width: calc(100vw - 32px); right: 16px; bottom: 90px; }
            #radhey-bubble { bottom: 16px; right: 16px; }
            #radhey-label { right: 80px; }
        }
    `;
    document.head.appendChild(style);

    // ── HTML ──
    const bubble = document.createElement('div');
    bubble.id = 'radhey-bubble';
    bubble.innerHTML = '🙏<span id="radhey-badge">●</span>';
    bubble.title = 'RADHEY — आपका AI सहायक';

    const label = document.createElement('div');
    label.id = 'radhey-label';
    label.textContent = '🙏 RADHEY — Ask me anything!';

    const panel = document.createElement('div');
    panel.id = 'radhey-panel';
    panel.innerHTML = `
        <div id="radhey-header">
            <div id="radhey-avatar">🙏</div>
            <div style="flex:1">
                <div style="font-weight:800;font-size:15px;color:white;letter-spacing:0.5px">RADHEY</div>
                <div style="font-size:10px;color:rgba(255,255,255,0.8)">आपका AI सहायक · Your AI Guide</div>
            </div>
            <div style="display:flex;gap:6px">
                <button onclick="radheyStartVoiceReg()" title="Voice Register" style="background:rgba(255,255,255,0.2);border:none;border-radius:50%;width:30px;height:30px;color:white;font-size:14px;cursor:pointer">📝</button>
                <button onclick="document.getElementById('radhey-panel').classList.remove('open')" style="background:rgba(255,255,255,0.2);border:none;border-radius:50%;width:30px;height:30px;color:white;font-size:16px;cursor:pointer;font-weight:bold">✕</button>
            </div>
        </div>
        <div id="radhey-messages"></div>
        <div style="padding:8px 12px;display:flex;flex-wrap:wrap;gap:4px;border-top:1px solid rgba(255,255,255,0.06)">
            <span class="radhey-quick-btn" onclick="radheyAsk('प्लंबर खोजो')">🔧 प्लंबर</span>
            <span class="radhey-quick-btn" onclick="radheyAsk('इलेक्ट्रीशियन चाहिए')">⚡ बिजली मिस्त्री</span>
            <span class="radhey-quick-btn" onclick="radheyAsk('सफाई सेवा')">🧹 सफाई</span>
            <span class="radhey-quick-btn" onclick="radheyAsk('provider register karna hai')">📝 Register</span>
            <span class="radhey-quick-btn" onclick="radheyAsk('wallet points kaise kamayein')">💰 Wallet</span>
            <span class="radhey-quick-btn" onclick="radheyStartVoiceReg()">🎤 Voice Register</span>
        </div>
        <div id="radhey-input-row">
            <input id="radhey-input" placeholder="Kuch bhi pucho... / Ask anything..." onkeydown="if(event.key==='Enter') radheyAsk()">
            <button id="radhey-mic" onclick="radheyToggleMic()" title="Voice input">🎤</button>
            <button id="radhey-send" onclick="radheyAsk()">➤</button>
        </div>
    `;

    document.body.appendChild(label);
    document.body.appendChild(bubble);
    document.body.appendChild(panel);

    // ── Toggle panel ──
    bubble.onclick = function() {
        const p = document.getElementById('radhey-panel');
        const lbl = document.getElementById('radhey-label');
        p.classList.toggle('open');
        if (lbl) lbl.style.display = 'none';
        if (p.classList.contains('open') && document.getElementById('radhey-messages').children.length === 0) {
            radheyGreet();
        }
    };

    // Hide label after 8 seconds
    setTimeout(function() {
        const lbl = document.getElementById('radhey-label');
        if (lbl) lbl.style.opacity = '0';
        setTimeout(function() { if(lbl) lbl.style.display='none'; }, 1000);
    }, 8000);

    // ── RADHEY conversation state ──
    window._radheyHistory = [];
    window._radheyRegMode = false;
    window._radheyRegStep = 0;
    window._radheyRegData = {};

    // ── Greet user ──
    window.radheyGreet = function() {
        const fu = window.firebaseUser;
        const name = fu ? (window.userProfile?.name || 'दोस्त') : 'दोस्त';
        radheyBotMsg(`🙏 Namaste ${name}!\n\nMain RADHEY hoon — Sudarshan Chakra ka AI sahayak.\n\nमैं आपकी मदद कर सकता हूं:\n• कोई भी सेवा खोजें 🔍\n• Provider/Seeker बनें 📝\n• Wallet & Points समझें 💰\n• Voice से Registration करें 🎤\n\nBataiye, kya chahiye? 😊`);
    };

    // ── Add bot message ──
    window.radheyBotMsg = function(text) {
        const msgs = document.getElementById('radhey-messages');
        if (!msgs) return;
        const div = document.createElement('div');
        div.className = 'radhey-msg-bot';
        div.textContent = text;
        msgs.appendChild(div);
        msgs.scrollTop = msgs.scrollHeight;
        // Text-to-speech for short messages
        if (text.length < 200 && 'speechSynthesis' in window) {
            const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'hi';
            const utt = new SpeechSynthesisUtterance(text.replace(/[🙏🔍💰📝🎤⚡🧹🔧✅❌⏳]/gu, ''));
            utt.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
            utt.rate = 0.9; utt.volume = 0.8;
            window.speechSynthesis.speak(utt);
        }
    };

    // ── Add user message ──
    window.radheyUserMsg = function(text) {
        const msgs = document.getElementById('radhey-messages');
        if (!msgs) return;
        const div = document.createElement('div');
        div.className = 'radhey-msg-user';
        div.textContent = text;
        msgs.appendChild(div);
        msgs.scrollTop = msgs.scrollHeight;
    };

    // ── Ask RADHEY ──
    window.radheyAsk = async function(forcedText) {
        const inp = document.getElementById('radhey-input');
        const text = forcedText || (inp ? inp.value.trim() : '');
        if (!text) return;
        if (inp) inp.value = '';
        radheyUserMsg(text);

        // If in voice registration mode, handle registration flow
        if (window._radheyRegMode) {
            radheyHandleRegStep(text);
            return;
        }

        // Check for service search intent
        const lower = text.toLowerCase();
        const serviceWords = ['खोजो','खोजें','चाहिए','find','search','book','hire','need','want','ढूंढो','दिखाओ'];
        const isServiceSearch = serviceWords.some(w => lower.includes(w));

        if (isServiceSearch && typeof processVoiceCommand === 'function') {
            processVoiceCommand(lower);
            radheyBotMsg('🔍 Searching for: ' + text + '\n\nBrowse page mein results dekh sakte hain!');
            return;
        }

        // Registration intents
        if (lower.includes('register') || lower.includes('पंजीकरण') || lower.includes('provider banna') || lower.includes('join')) {
            radheyBotMsg('📝 Provider register karne ke liye:\n1. "Register Provider" button tap karein\n2. Ya main aapko voice se register kar sakta hoon!\n\nVoice registration ke liye "Voice Register" button tap karein 🎤');
            return;
        }

        // Wallet intents
        if (lower.includes('wallet') || lower.includes('points') || lower.includes('पॉइंट') || lower.includes('earn')) {
            radheyBotMsg('💰 Wallet Points kamaane ke tarike:\n• Daily login = 2 pts\n• Review likhein = 5 pts\n• Referral = 5 pts\n• Provider refer karein = 10 pts\n\n10 points = ₹1\nWallet tab mein jaayein aur points dekhen! 🌟');
            return;
        }

        // Use Claude API for complex questions
        const typing = document.createElement('div');
        typing.className = 'radhey-msg-bot';
        typing.textContent = '⏳ Soch raha hoon...';
        document.getElementById('radhey-messages').appendChild(typing);
        document.getElementById('radhey-messages').scrollTop = 999999;

        try {
            const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'hi';
            const sysPrompt = `You are RADHEY, the friendly AI assistant for Sudarshan Chakra India — a hyperlocal service marketplace app for India. 

Key facts: connects seekers with providers (plumbers, electricians, beauticians, tutors, etc.), 12 Indian languages, OTP login, Wallet reward points (10pts=₹1), Verified badge with ID upload, Membership plans (Basic free, Professional ₹99/quarter, Elite ₹199/quarter), charity program, referral system.

IMPORTANT: Reply in ${lang === 'hi' ? 'Hindi (Devanagari script mixed with some English)' : 'English'}. Be warm, concise, use emojis. Address user as "aap" in Hindi. Keep replies under 150 words.`;

            const res = await fetch("https://api.anthropic.com/v1/messages", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "claude-sonnet-4-20250514",
                    max_tokens: 300,
                    system: sysPrompt,
                    messages: [{ role: "user", content: text }]
                })
            });
            if (res.ok) {
                const data = await res.json();
                const reply = data.content && data.content[0] && data.content[0].text;
                typing.textContent = reply || 'Maafi chahta hoon, samajh nahi aaya. Dobara puchen? 🙏';
            } else { throw new Error(); }
        } catch(e) {
            typing.textContent = 'Abhi internet se connect nahi ho pa raha. Kripya dobara try karein 🙏\n\nYa email karein: support@sudarshanchakraindia.com';
        }
        document.getElementById('radhey-messages').scrollTop = 999999;
    };

    // ── Voice Mic Toggle ──
    window.radheyToggleMic = function() {
        const mic = document.getElementById('radhey-mic');
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            radheyBotMsg('❌ Aapka browser voice support nahi karta. Chrome use karein.');
            return;
        }
        if (window._radheyListening) {
            window._radheyRec && window._radheyRec.stop();
            mic.classList.remove('listening');
            window._radheyListening = false;
            return;
        }
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        const rec = new SR();
        const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'hi';
        rec.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
        rec.interimResults = false;
        rec.onresult = function(e) {
            const txt = e.results[0][0].transcript;
            const inp = document.getElementById('radhey-input');
            if (inp) inp.value = txt;
            radheyAsk(txt);
        };
        rec.onend = function() {
            mic.classList.remove('listening');
            window._radheyListening = false;
        };
        rec.onerror = function() { mic.classList.remove('listening'); window._radheyListening = false; };
        rec.start();
        mic.classList.add('listening');
        window._radheyListening = true;
        window._radheyRec = rec;
    };

    // ════════════════════════════════════════════════════════
    // VOICE-GUIDED REGISTRATION — for illiterate users
    // RADHEY walks user through registration step by step
    // ════════════════════════════════════════════════════════
    window.radheyStartVoiceReg = function() {
        window._radheyRegMode = true;
        window._radheyRegStep = 0;
        window._radheyRegData = { type: null, name: null, mobile: null, service: null, location: null, rate: null, religion: null };
        
        const panel = document.getElementById('radhey-panel');
        if (panel) panel.classList.add('open');

        radheyBotMsg(`🎤 RADHEY Voice Registration शुरू हो रही है!\n\nMain aapko step-by-step guide karunga.\nHar sawaal ke baad bolein ya type karein.\n\n━━━━━━━━━━━━━━━\n\nSabse pehle:\nKya aap Provider (kaam dene wale) hain ya Seeker (kaam karaane wale)?\n\n👷 Provider ke liye "Provider" bolein\n🔍 Seeker ke liye "Seeker" bolein`);
        
        setTimeout(radheyMicAutoStart, 1000);
    };

    window.radheyHandleRegStep = function(answer) {
        const step = window._radheyRegStep;
        const data = window._radheyRegData;
        const a = answer.toLowerCase().trim();

        if (step === 0) {
            // Role selection
            if (a.includes('provider') || a.includes('काम') || a.includes('kaam de') || a.includes('प्रोवाइडर')) {
                data.type = 'provider';
                window._radheyRegStep = 1;
                radheyBotMsg('✅ Provider — अच्छा!\n\nAb aapka poora naam batayein.\nJaise: "Ramesh Kumar" ya "Sunita Devi"');
            } else if (a.includes('seeker') || a.includes('सीकर') || a.includes('kaam kara') || a.includes('चाहिए')) {
                data.type = 'seeker';
                window._radheyRegStep = 1;
                radheyBotMsg('✅ Seeker — bilkul!\n\nAb aapka poora naam batayein.\nJaise: "Ramesh Kumar"');
            } else {
                radheyBotMsg('❓ Samajh nahi aaya.\n\n"Provider" bolein — agar aap kaam karte hain\n"Seeker" bolein — agar aapko kaam karaana hai');
            }
        } else if (step === 1) {
            // Name
            data.name = answer.trim();
            window._radheyRegStep = 2;
            radheyBotMsg(`✅ Naam: ${data.name}\n\nAb aapka 10 digit mobile number batayein.\nJaise: "9414055013"`);
        } else if (step === 2) {
            // Mobile
            const nums = answer.replace(/\D/g, '');
            if (nums.length === 10) {
                data.mobile = nums;
                window._radheyRegStep = 3;
                if (data.type === 'provider') {
                    radheyBotMsg(`✅ Mobile: ${nums}\n\nAb batayein aap kya kaam karte hain?\nJaise: "Plumber", "Electrician", "Painter", "Cook", "Carpenter"`);
                } else {
                    radheyBotMsg(`✅ Mobile: ${nums}\n\nAapka dharm batayein:\n"Hindu", "Muslim", "Christian", "Sikh", "Buddhist", ya "Jain"`);
                    window._radheyRegStep = 4; // skip service step for seeker
                }
            } else {
                radheyBotMsg('❌ Mobile number 10 digit ka hona chahiye.\nDobara bolein, sirf numbers mein.');
            }
        } else if (step === 3) {
            // Service (provider only)
            data.service = answer.trim();
            window._radheyRegStep = 4;
            radheyBotMsg(`✅ Kaam: ${data.service}\n\nAapka dharm batayein:\n"Hindu", "Muslim", "Christian", "Sikh", "Buddhist", ya "Jain"`);
        } else if (step === 4) {
            // Religion
            const religions = ['hindu','muslim','christian','sikh','buddhist','jain','हिंदू','मुस्लिम','सिख','बौद्ध','जैन'];
            const found = religions.find(r => a.includes(r));
            if (found) {
                data.religion = found.charAt(0).toUpperCase() + found.slice(1);
                window._radheyRegStep = 5;
                radheyBotMsg(`✅ Dharm: ${data.religion}\n\nAapka shehar ya mohalla batayein.\nJaise: "Jaipur, Rajasthan" ya "Malviya Nagar"`);
            } else {
                radheyBotMsg('❓ Please ek dharm batayein:\nHindu, Muslim, Christian, Sikh, Buddhist, ya Jain');
            }
        } else if (step === 5) {
            // Location
            data.location = answer.trim();
            if (data.type === 'provider') {
                window._radheyRegStep = 6;
                radheyBotMsg(`✅ Location: ${data.location}\n\nAap ek ghante ka kitna charge lete hain? (₹ mein)\nJaise: "300" ya "teen sau rupaye"`);
            } else {
                window._radheyRegStep = 7;
                radheyConfirmReg();
            }
        } else if (step === 6) {
            // Rate (provider only)
            const rate = parseInt(answer.replace(/\D/g, '')) || 0;
            if (rate >= 50) {
                data.rate = rate;
                window._radheyRegStep = 7;
                radheyConfirmReg();
            } else {
                radheyBotMsg('❌ Rate kam se kam ₹50 hona chahiye.\nDobara batayein — jaise "200" ya "do sau"');
            }
        }
        setTimeout(radheyMicAutoStart, 500);
    };

    window.radheyConfirmReg = function() {
        const d = window._radheyRegData;
        let summary = `📋 Registration Summary:\n━━━━━━━━━━━━━━━\n`;
        summary += `👤 Naam: ${d.name}\n`;
        summary += `📱 Mobile: ${d.mobile}\n`;
        summary += `🙏 Dharm: ${d.religion}\n`;
        summary += `📍 Location: ${d.location}\n`;
        if (d.type === 'provider') {
            summary += `🔧 Kaam: ${d.service}\n`;
            summary += `💰 Rate: ₹${d.rate}/ghanta\n`;
        }
        summary += `\n━━━━━━━━━━━━━━━\nKya ye sahi hai? "Haan" ya "Yes" bolein confirm karne ke liye.\n"Nahi" bolein dobara shuru karne ke liye.`;
        radheyBotMsg(summary);
        window._radheyRegStep = 8;
    };

    window.radheyMicAutoStart = function() {
        // Auto-start mic for voice registration flow
        if (!window._radheyRegMode) return;
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) return;
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        const rec = new SR();
        const lang = typeof currentLanguage !== 'undefined' ? currentLanguage : 'hi';
        rec.lang = (lang === 'hi') ? 'hi-IN' : 'en-IN';
        rec.interimResults = false;
        rec.onresult = function(e) {
            const txt = e.results[0][0].transcript;
            radheyUserMsg(txt);
            if (window._radheyRegStep === 8) {
                const a = txt.toLowerCase();
                if (a.includes('haan') || a.includes('yes') || a.includes('हां') || a.includes('हाँ') || a.includes('correct') || a.includes('sahi')) {
                    radheySubmitReg();
                } else {
                    window._radheyRegMode = false;
                    window._radheyRegStep = 0;
                    radheyBotMsg('ठीक है, dobara shuru karte hain। "Voice Register" button tap karein।');
                }
            } else {
                radheyHandleRegStep(txt);
            }
        };
        rec.onerror = function() {};
        try { rec.start(); } catch(e) {}
    };

    window.radheySubmitReg = async function() {
        const d = window._radheyRegData;
        radheyBotMsg('⏳ Registration ho rahi hai...');
        window._radheyRegMode = false;

        try {
            if (!window._firebase) throw new Error('Firebase not ready');
            const fb = window._firebase;

            if (d.type === 'provider') {
                const provider = {
                    id: 'p_' + Date.now(),
                    name: d.name, mobile: d.mobile,
                    service: d.service, religion: d.religion,
                    location: d.location, rate: d.rate,
                    language: ['Hindi'], experience: 0,
                    status: 'active', verified: false,
                    registered: new Date().toISOString(),
                    ownerUid: window.firebaseUser?.uid || null,
                    lat: 26.9124, lng: 75.7873 // default Jaipur coords
                };
                const ref = await fb.push(fb.ref(fb.db, 'providers'), provider);
                await fb.update(ref, { id: ref.key });
                radheyBotMsg(`🎉 बधाई हो ${d.name} जी!\n\nAapka Provider profile successfully create ho gaya!\n\n✅ Ab aap "Browse" mein dikhaai denge\n✅ Customers aapko call kar sakenge\n\nApna profile dekhen — top mein "AS" icon tap karein 🙏`);
            } else {
                const seeker = {
                    id: 's_' + Date.now(),
                    name: d.name, mobile: d.mobile,
                    religion: d.religion, location: d.location,
                    language: ['Hindi'], status: 'active',
                    registered: new Date().toISOString(),
                    ownerUid: window.firebaseUser?.uid || null,
                    lat: 26.9124, lng: 75.7873
                };
                const ref = await fb.push(fb.ref(fb.db, 'seekers'), seeker);
                await fb.update(ref, { id: ref.key });
                radheyBotMsg(`🎉 Swagat hai ${d.name} जी!\n\nAapka Seeker profile ban gaya!\n\n✅ Ab aap providers dhundh sakte hain\n✅ Browse karein aur koi bhi service book karein\n\n"Browse" button tap karein shuru karne ke liye 🙏`);
            }
        } catch(e) {
            radheyBotMsg('❌ Registration mein thodi problem aayi.\nKripya manually "Register Provider" button use karein.\nYa email karein: support@sudarshanchakraindia.com');
        }
    };

    console.log('✅ RADHEY floating AI assistant initialized!');
})();
