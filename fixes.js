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
// RADHEY — Floating AI Assistant (Top-right, Chakra icon)
// Complete voice registration with all fields
// ════════════════════════════════════════════════════════════════
(function initRADHEY() {
    if (document.getElementById('radhey-widget')) return;

    // ── Styles ──
    const style = document.createElement('style');
    style.textContent = `
        /* RADHEY nav widget — sits in top nav */
        #radhey-widget {
            display: flex; align-items: center; gap: 6px;
            cursor: pointer; padding: 4px 10px 4px 6px;
            border-radius: 20px;
            background: linear-gradient(135deg,#fff7ed,#ffedd5);
            border: 2px solid #fb923c;
            transition: all 0.2s;
            position: relative;
            user-select: none;
        }
        #radhey-widget:hover { background: linear-gradient(135deg,#ffedd5,#fed7aa); box-shadow: 0 2px 12px rgba(234,88,12,0.3); }
        #radhey-chakra {
            width: 32px; height: 32px; border-radius: 50%;
            background: linear-gradient(135deg,#ea580c,#f97316);
            display: flex; align-items: center; justify-content: center;
            font-size: 18px; flex-shrink: 0; border: 2px solid #fff;
            box-shadow: 0 2px 8px rgba(234,88,12,0.4);
            animation: chakraSpin 8s linear infinite;
        }
        @keyframes chakraSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        #radhey-widget:hover #radhey-chakra { animation-duration: 1s; }
        #radhey-widget-text { line-height: 1.1; }
        #radhey-widget-text .r-name { font-size: 11px; font-weight: 800; color: #c2410c; letter-spacing: 0.5px; }
        #radhey-widget-text .r-sub  { font-size: 9px; color: #9a3412; }
        #radhey-dot {
            position: absolute; top: 2px; right: 2px;
            width: 8px; height: 8px; border-radius: 50%;
            background: #16a34a; border: 1.5px solid white;
            animation: radheyPulse 2s infinite;
        }
        @keyframes radheyPulse { 0%,100%{opacity:1} 50%{opacity:0.4} }

        /* RADHEY chat panel */
        #radhey-panel {
            position: fixed; top: 70px; right: 16px; z-index: 9998;
            width: 340px; max-height: 560px;
            background: linear-gradient(160deg,#1a1a2e 0%,#16213e 60%,#0f3460 100%);
            border-radius: 20px; box-shadow: 0 8px 40px rgba(0,0,0,0.5);
            display: flex; flex-direction: column; overflow: hidden;
            border: 1px solid rgba(234,88,12,0.4);
            transform: scale(0.9) translateY(-10px); opacity: 0;
            pointer-events: none;
            transition: all 0.25s cubic-bezier(0.34,1.4,0.64,1);
        }
        #radhey-panel.open { transform: scale(1) translateY(0); opacity:1; pointer-events:all; }
        #radhey-panel-head {
            background: linear-gradient(90deg,#ea580c,#f97316,#fb923c);
            padding: 12px 14px; display:flex; align-items:center; gap:10px; flex-shrink:0;
        }
        #radhey-panel-avatar {
            width:38px;height:38px;border-radius:50%;
            background:white;display:flex;align-items:center;justify-content:center;
            font-size:20px;flex-shrink:0;
            animation: chakraSpin 6s linear infinite;
        }
        #radhey-messages {
            flex:1;overflow-y:auto;padding:10px;
            display:flex;flex-direction:column;gap:7px;
            max-height:300px; min-height:160px;
            scrollbar-width:thin; scrollbar-color:rgba(234,88,12,0.3) transparent;
        }
        .rm-bot {
            background:rgba(255,255,255,0.07);color:#f1f1f1;
            border-radius:14px 14px 14px 3px;
            padding:9px 12px;font-size:12px;line-height:1.6;
            max-width:90%;align-self:flex-start;white-space:pre-wrap;
            border:1px solid rgba(234,88,12,0.15);
        }
        .rm-user {
            background:linear-gradient(135deg,#ea580c,#f97316);
            color:white;border-radius:14px 14px 3px 14px;
            padding:9px 12px;font-size:12px;line-height:1.6;
            max-width:82%;align-self:flex-end;
        }
        #radhey-quick {
            padding:7px 10px;display:flex;flex-wrap:wrap;gap:4px;
            border-top:1px solid rgba(255,255,255,0.06);flex-shrink:0;
        }
        .rq-btn {
            background:rgba(234,88,12,0.15);border:1px solid rgba(234,88,12,0.35);
            border-radius:14px;padding:4px 9px;font-size:10px;color:#fb923c;
            cursor:pointer;white-space:nowrap;transition:all 0.15s;
        }
        .rq-btn:hover{background:rgba(234,88,12,0.3);}
        #radhey-inputrow {
            padding:8px 10px;border-top:1px solid rgba(255,255,255,0.07);
            display:flex;gap:5px;align-items:center;background:rgba(0,0,0,0.25);flex-shrink:0;
        }
        #radhey-inp {
            flex:1;background:rgba(255,255,255,0.08);
            border:1px solid rgba(234,88,12,0.3);
            border-radius:16px;padding:7px 13px;color:white;font-size:12px;outline:none;
        }
        #radhey-inp::placeholder{color:rgba(255,255,255,0.35);}
        #radhey-inp:focus{border-color:#f97316;}
        .r-icon-btn {
            width:32px;height:32px;border-radius:50%;border:none;
            display:flex;align-items:center;justify-content:center;
            font-size:15px;cursor:pointer;flex-shrink:0;transition:all 0.15s;
        }
        #radhey-mic-btn { background:rgba(255,255,255,0.1); color:white; }
        #radhey-mic-btn.listening { background:#dc2626; animation:radheyPulse 0.8s infinite; }
        #radhey-send-btn { background:linear-gradient(135deg,#ea580c,#f97316); color:white; }
        #radhey-send-btn:hover { background:linear-gradient(135deg,#c2410c,#ea580c); }

        /* Progress bar for voice reg */
        #radhey-progress {
            height:3px;background:rgba(255,255,255,0.1);flex-shrink:0;
            display:none;
        }
        #radhey-progress-bar {
            height:100%;background:linear-gradient(90deg,#ea580c,#fb923c);
            transition:width 0.4s;width:0%;
        }

        @media(max-width:480px){
            #radhey-panel{width:calc(100vw - 20px);right:10px;top:64px;}
        }
    `;
    document.head.appendChild(style);

    // ── Inject RADHEY widget into nav ──
    function injectNavWidget() {
        const nav = document.querySelector('nav .flex.gap-2');
        if (!nav) { setTimeout(injectNavWidget, 500); return; }
        if (document.getElementById('radhey-widget')) return;

        const widget = document.createElement('div');
        widget.id = 'radhey-widget';
        widget.title = 'RADHEY — आपका AI सहायक';
        widget.innerHTML = `
            <div id="radhey-chakra">🔱</div>
            <div id="radhey-widget-text">
                <div class="r-name">RADHEY</div>
                <div class="r-sub">🙏 Namaste</div>
            </div>
            <div id="radhey-dot"></div>
        `;
        // Insert before the language button (🌏)
        const langBtn = nav.querySelector('button[onclick="changeLang()"]');
        if (langBtn) nav.insertBefore(widget, langBtn);
        else nav.appendChild(widget);

        widget.onclick = radheyTogglePanel;
    }

    // ── Chat Panel HTML ──
    const panel = document.createElement('div');
    panel.id = 'radhey-panel';
    panel.innerHTML = `
        <div id="radhey-panel-head">
            <div id="radhey-panel-avatar">🔱</div>
            <div style="flex:1">
                <div style="font-weight:800;font-size:14px;color:white">RADHEY &nbsp;🙏</div>
                <div style="font-size:10px;color:rgba(255,255,255,0.85)">Sudarshan Chakra · AI सहायक</div>
            </div>
            <button onclick="radheyStartVoiceReg()" title="Voice Registration"
                style="background:rgba(255,255,255,0.2);border:none;border-radius:8px;padding:4px 8px;color:white;font-size:11px;cursor:pointer;font-weight:700">
                🎤 Register
            </button>
            <button onclick="radheyTogglePanel()"
                style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:26px;height:26px;color:white;font-size:14px;cursor:pointer;margin-left:4px">✕</button>
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
            <input id="radhey-inp" placeholder="Kuch bhi pucho... / Ask me anything"
                onkeydown="if(event.key==='Enter')radheyAsk()">
            <button class="r-icon-btn" id="radhey-mic-btn" onclick="radheyToggleMic()" title="Voice">🎤</button>
            <button class="r-icon-btn" id="radhey-send-btn" onclick="radheyAsk()">➤</button>
        </div>
    `;
    document.body.appendChild(panel);

    // Close panel on outside click
    document.addEventListener('click', function(e) {
        if (!panel.contains(e.target) && e.target.id !== 'radhey-widget' && !document.getElementById('radhey-widget')?.contains(e.target)) {
            panel.classList.remove('open');
        }
    });

    // ── State ──
    window._radheyOpen       = false;
    window._radheyRegMode    = false;
    window._radheyRegStep    = 0;
    window._radheyRegData    = {};
    window._radheyListening  = false;
    window._radheyRec        = null;

    // Total registration steps (for progress bar)
    const REG_STEPS_PROVIDER = 10; // type,name,mobile,category,subcategory,service,language,hours,area,religion,location,rate,bio,id = 14 but we group
    const REG_STEPS_SEEKER   = 6;

    window.radheyTogglePanel = function() {
        const p = document.getElementById('radhey-panel');
        if (!p) return;
        p.classList.toggle('open');
        window._radheyOpen = p.classList.contains('open');
        if (window._radheyOpen && document.getElementById('radhey-messages').children.length === 0) {
            radheyGreet();
        }
    };

    window.radheyGreet = function() {
        const fu = window.firebaseUser;
        const name = (fu && window.userProfile?.name) ? window.userProfile.name.split(' ')[0] : 'दोस्त';
        radheyBotMsg(`🙏 Namaste ${name}!\n\nMain RADHEY hoon — Sudarshan Chakra ka AI sahayak.\n\nMain kya kar sakta hoon:\n🔍 Koi bhi service dhundhna\n📝 Provider / Seeker register karna (voice se!)\n💰 Wallet & points samjhana\n✅ Verification guide karna\n\nBataiye, kya chahiye? 😊`);
    };

    // ── Messages ──
    window.radheyBotMsg = function(text) {
        const msgs = document.getElementById('radhey-messages');
        if (!msgs) return;
        const d = document.createElement('div');
        d.className = 'rm-bot'; d.textContent = text;
        msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight;
        // TTS
        if ('speechSynthesis' in window && text.length < 250) {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(text.replace(/[🔱🙏🔍💰📝🎤⚡🧹🔧✅❌⏳📋━]/gu,''));
            u.lang = (typeof currentLanguage!=='undefined' && currentLanguage==='hi') ? 'hi-IN' : 'en-IN';
            u.rate = 0.88; u.volume = 0.85;
            window.speechSynthesis.speak(u);
        }
    };
    window.radheyUserMsg = function(text) {
        const msgs = document.getElementById('radhey-messages');
        if (!msgs) return;
        const d = document.createElement('div');
        d.className = 'rm-user'; d.textContent = text;
        msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight;
    };

    function setProgress(step, total) {
        const bar = document.getElementById('radhey-progress');
        const fill = document.getElementById('radhey-progress-bar');
        if (!bar || !fill) return;
        bar.style.display = total > 0 ? 'block' : 'none';
        fill.style.width = total > 0 ? Math.round((step/total)*100)+'%' : '0%';
    }

    // ── Ask RADHEY ──
    window.radheyAsk = async function(forced) {
        const inp = document.getElementById('radhey-inp');
        const text = forced || (inp ? inp.value.trim() : '');
        if (!text) return;
        if (inp) inp.value = '';
        radheyUserMsg(text);

        if (window._radheyRegMode) { radheyHandleRegStep(text); return; }

        const q = text.toLowerCase();
        // Service search
        if (['chahiye','खोजो','find','search','book','hire','need','want','ढूंढो','दिखाओ','show'].some(w=>q.includes(w))) {
            if (typeof processVoiceCommand==='function') processVoiceCommand(q);
            radheyBotMsg('🔍 Search chal rahi hai...\nBrowse page mein results dekhen!');
            if (typeof showPage==='function') setTimeout(()=>showPage('browse'),800);
            return;
        }
        if (q.includes('register')||q.includes('join')||q.includes('provider banna')||q.includes('seeker banna')) {
            radheyBotMsg('📝 Main aapko voice se register kar sakta hoon!\n"🎤 Register" button tap karein — main step by step guide karunga.');
            return;
        }
        if (q.includes('wallet')||q.includes('points')||q.includes('paise')) {
            radheyBotMsg('💰 Wallet Points:\n• Daily login = 2 pts\n• Review = 5 pts\n• Referral = 5 pts\n• Provider refer = 10 pts\n\n10 pts = ₹1\n\nWallet tab → profile icon tap karein 🌟');
            return;
        }

        // Claude API
        const typing = document.createElement('div');
        typing.className='rm-bot'; typing.textContent='⏳ Soch raha hoon...';
        document.getElementById('radhey-messages').appendChild(typing);
        document.getElementById('radhey-messages').scrollTop=999999;
        try {
            const lang = (typeof currentLanguage!=='undefined'&&currentLanguage==='hi')?'hi':'en';
            const res = await fetch("https://api.anthropic.com/v1/messages",{
                method:"POST", headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                    model:"claude-sonnet-4-20250514", max_tokens:300,
                    system:`You are RADHEY, friendly AI for Sudarshan Chakra India (hyperlocal service app). Reply in ${lang==='hi'?'Hindi (Devanagari + some English)':'English'}. Warm, concise, use emojis. Under 120 words. Key facts: OTP login, 12 languages, wallet points (10pts=₹1), verified badge via ID upload, plans Basic(free)/Pro(₹99)/Elite(₹199) per quarter.`,
                    messages:[{role:"user",content:text}]
                })
            });
            if(res.ok){const d=await res.json(); typing.textContent=d.content?.[0]?.text||'Maafi, dobara try karein 🙏';}
            else throw new Error();
        } catch(e){ typing.textContent='Net connection mein dikkat hai.\nEmail: support@sudarshanchakraindia.com 🙏'; }
        document.getElementById('radhey-messages').scrollTop=999999;
    };

    // ── Mic ──
    window.radheyToggleMic = function() {
        const mic = document.getElementById('radhey-mic-btn');
        if(!('webkitSpeechRecognition' in window)&&!('SpeechRecognition' in window)){
            radheyBotMsg('❌ Voice support nahi hai. Chrome browser use karein.'); return;
        }
        if(window._radheyListening){ window._radheyRec?.stop(); return; }
        const SR = window.SpeechRecognition||window.webkitSpeechRecognition;
        const rec = new SR();
        rec.lang = (typeof currentLanguage!=='undefined'&&currentLanguage==='hi')?'hi-IN':'en-IN';
        rec.onresult = e => { const t=e.results[0][0].transcript; const inp=document.getElementById('radhey-inp'); if(inp)inp.value=t; radheyAsk(t); };
        rec.onend = ()=>{ if(mic)mic.classList.remove('listening'); window._radheyListening=false; };
        rec.onerror = ()=>{ if(mic)mic.classList.remove('listening'); window._radheyListening=false; };
        rec.start();
        if(mic)mic.classList.add('listening');
        window._radheyListening=true; window._radheyRec=rec;
    };

    // ════════════════════════════════════════════════════════
    // VOICE REGISTRATION — Complete flow (14 steps for provider)
    // ════════════════════════════════════════════════════════

    // Step definitions
    const PROVIDER_STEPS = [
        'type','name','mobile','category','subcategory','service','language','hours','area','religion','location','rate','bio','id'
    ];
    const SEEKER_STEPS = [
        'type','name','mobile','language','religion','location'
    ];

    window.radheyStartVoiceReg = function() {
        window._radheyRegMode = true;
        window._radheyRegStep = 0;
        window._radheyRegData = {};
        window._radheySteps  = null; // set after type chosen

        const p = document.getElementById('radhey-panel');
        if(p) p.classList.add('open');
        window._radheyOpen = true;

        radheyBotMsg(`🎤 Voice Registration शुरू!\n\nMain aapko step by step guide karunga.\nHar sawaal ke baad bolein ya type karein.\n\n━━━━━━━━━━━━━━━\n\nStep 1: Aap kya banana chahte hain?\n\n👷 "Provider" — agar aap kaam dete hain\n🔍 "Seeker" — agar aapko kaam karaana hai\n🤝 "Dono" — agar aap dono hain`);

        setProgress(0, 1);
        setTimeout(radheyAutoMic, 1200);
    };

    window.radheyHandleRegStep = function(answer) {
        const a = answer.toLowerCase().trim();
        const d = window._radheyRegData;
        const step = window._radheyRegStep;

        // Step 0: Type selection
        if (step === 0) {
            if (a.includes('provider')||a.includes('प्रोवाइडर')||a.includes('kaam deta')||a.includes('काम देता')) {
                d.type='provider'; window._radheySteps=[...PROVIDER_STEPS]; window._radheyRegStep=1;
                setProgress(1,PROVIDER_STEPS.length);
                radheyBotMsg('✅ Provider!\n\nStep 2: Aapka poora naam batayein.\nJaise: "Ramesh Kumar"');
            } else if(a.includes('seeker')||a.includes('सीकर')||a.includes('kaam karana')||a.includes('काम कराना')) {
                d.type='seeker'; window._radheySteps=[...SEEKER_STEPS]; window._radheyRegStep=1;
                setProgress(1,SEEKER_STEPS.length);
                radheyBotMsg('✅ Seeker!\n\nStep 2: Aapka poora naam batayein.\nJaise: "Sunita Devi"');
            } else if(a.includes('dono')||a.includes('both')||a.includes('दोनों')) {
                d.type='both'; window._radheySteps=[...PROVIDER_STEPS]; window._radheyRegStep=1;
                setProgress(1,PROVIDER_STEPS.length);
                radheyBotMsg('✅ Dono — Provider aur Seeker!\n\nStep 2: Aapka poora naam batayein.\nJaise: "Ramesh Kumar"');
            } else {
                radheyBotMsg('❓ "Provider", "Seeker" ya "Dono" bolein.');
            }
            setTimeout(radheyAutoMic,600); return;
        }

        const totalSteps = window._radheySteps ? window._radheySteps.length : PROVIDER_STEPS.length;
        const currentField = window._radheySteps ? window._radheySteps[step] : null;
        setProgress(step, totalSteps);

        // Step 1: Name
        if (currentField === 'name') {
            if (answer.trim().length < 2) { radheyBotMsg('❓ Kripya apna poora naam batayein.'); setTimeout(radheyAutoMic,600); return; }
            d.name = answer.trim();
            window._radheyRegStep++;
            setProgress(window._radheyRegStep, totalSteps);
            radheyBotMsg(`✅ Naam: ${d.name}\n\nStep ${window._radheyRegStep+1}: Aapka 10 digit mobile number?\nJaise: "9414055013"`);
            setTimeout(radheyAutoMic,600); return;
        }

        // Step 2: Mobile
        if (currentField === 'mobile') {
            const nums = answer.replace(/\D/g,'').slice(-10);
            if (nums.length !== 10) { radheyBotMsg('❌ 10 digit number chahiye.\nDobara bolein.'); setTimeout(radheyAutoMic,600); return; }
            d.mobile = nums;
            window._radheyRegStep++;
            setProgress(window._radheyRegStep, totalSteps);

            if (d.type === 'provider' || d.type === 'both') {
                // Build category list for voice
                let catList = '';
                if(typeof categories!=='undefined' && categories.length) {
                    catList = categories.slice(0,8).map((c,i)=>`${i+1}. ${c.name?.en||c.name}`).join('\n');
                } else {
                    catList = '1. Home Services\n2. Beauty & Wellness\n3. Cleaning Services\n4. Event Services\n5. Education\n6. Transport\n7. Business Services\n8. Pet Services';
                }
                radheyBotMsg(`✅ Mobile: ${nums}\n\nStep ${window._radheyRegStep+1}: Kaunsi category mein aap kaam karte hain?\n\n${catList}\n\nNumber bolein ya naam bolein.`);
            } else {
                // Seeker → go to language
                radheyBotMsg(`✅ Mobile: ${nums}\n\nStep ${window._radheyRegStep+1}: Aap kaunsi bhasha mein baat karna chahte hain?\n\nHindi, English, Bengali, Gujarati, Marathi, Kannada, Telugu, Malayalam, Tamil, Punjabi`);
            }
            setTimeout(radheyAutoMic,600); return;
        }

        // Step 3: Category (provider)
        if (currentField === 'category') {
            let matchedCat = null;
            if(typeof categories!=='undefined') {
                // Try by number
                const num = parseInt(a);
                if (num > 0 && num <= categories.length) matchedCat = categories[num-1];
                // Try by name
                if (!matchedCat) matchedCat = categories.find(c => {
                    const n = (c.name?.en||c.name||'').toLowerCase();
                    return n.includes(a) || a.includes(n.split(' ')[0].toLowerCase());
                });
                // Common Hindi keywords
                if (!matchedCat) {
                    const hindiMap = {'घर':'Home Services','सफाई':'Cleaning Services','सौंदर्य':'Beauty & Wellness','खाना':'Food & Catering','health':'Health & Medical','transport':'Transport & Travel','शिक्षा':'Education & Skill Services','event':'Events & Entertainment'};
                    for (const [k,v] of Object.entries(hindiMap)) {
                        if (a.includes(k)) { matchedCat = categories.find(c=>(c.name?.en||c.name)===v); break; }
                    }
                }
            }
            if (!matchedCat && typeof categories!=='undefined') {
                // Fuzzy: any partial match
                matchedCat = categories.find(c => a.includes((c.name?.en||c.name||'').toLowerCase().split(' ')[0]));
            }
            if (matchedCat) {
                d.categoryId = matchedCat.id;
                d.categoryName = matchedCat.name?.en || matchedCat.name;
                window._radheyRegStep++;
                setProgress(window._radheyRegStep, totalSteps);
                // List subcategories
                const subs = matchedCat.subcategories || [];
                const subList = subs.slice(0,8).map((s,i)=>`${i+1}. ${s.name?.en||s.name}`).join('\n');
                radheyBotMsg(`✅ Category: ${d.categoryName}\n\nStep ${window._radheyRegStep+1}: Sub-category chunein:\n\n${subList||'Koi sub-category nahi'}\n\nNumber ya naam bolein.`);
            } else {
                radheyBotMsg('❓ Category clearly batayein.\nJaise: "Home Services", "Cleaning", "Beauty", ya number bolein.');
            }
            setTimeout(radheyAutoMic,600); return;
        }

        // Step 4: Subcategory (provider)
        if (currentField === 'subcategory') {
            const cat = typeof categories!=='undefined' ? categories.find(c=>c.id===d.categoryId) : null;
            const subs = cat ? (cat.subcategories||[]) : [];
            let matchedSub = null;
            const num = parseInt(a);
            if (num > 0 && num <= subs.length) matchedSub = subs[num-1];
            if (!matchedSub) matchedSub = subs.find(s=>(s.name?.en||s.name||'').toLowerCase().includes(a)||a.includes((s.name?.en||s.name||'').toLowerCase()));
            if (matchedSub) {
                d.subcategoryIdx = subs.indexOf(matchedSub);
                d.subcategoryName = matchedSub.name?.en || matchedSub.name;
                window._radheyRegStep++;
                setProgress(window._radheyRegStep, totalSteps);
                const svcs = matchedSub.subsubcategories || [];
                const svcList = svcs.slice(0,8).map((s,i)=>`${i+1}. ${s.name?.en||s.name}`).join('\n');
                radheyBotMsg(`✅ Sub-category: ${d.subcategoryName}\n\nStep ${window._radheyRegStep+1}: Service type chunein:\n\n${svcList||'Koi service nahi'}\n\nNumber ya naam bolein.`);
            } else {
                radheyBotMsg('❓ Sub-category naam ya number bolein.');
            }
            setTimeout(radheyAutoMic,600); return;
        }

        // Step 5: Service type (provider)
        if (currentField === 'service') {
            const cat = typeof categories!=='undefined' ? categories.find(c=>c.id===d.categoryId) : null;
            const sub = cat ? (cat.subcategories||[])[d.subcategoryIdx] : null;
            const svcs = sub ? (sub.subsubcategories||[]) : [];
            let matchedSvc = null;
            const num = parseInt(a);
            if (num > 0 && num <= svcs.length) matchedSvc = svcs[num-1];
            if (!matchedSvc) matchedSvc = svcs.find(s=>(s.name?.en||s.name||'').toLowerCase().includes(a));
            if (matchedSvc || svcs.length === 0) {
                d.serviceName = matchedSvc ? (matchedSvc.name?.en||matchedSvc.name) : d.subcategoryName;
                d.serviceIdx = matchedSvc ? svcs.indexOf(matchedSvc) : 0;
                window._radheyRegStep++;
                setProgress(window._radheyRegStep, totalSteps);
                radheyBotMsg(`✅ Service: ${d.serviceName}\n\nStep ${window._radheyRegStep+1}: Aap kaunsi bhasha mein baat kar sakte hain?\n\nHindi, English, Bengali, Gujarati, Marathi, Kannada, Telugu, Malayalam, Tamil, Punjabi, Odia, Assamese\n\n(Ek ya zyada bol sakte hain)`);
            } else {
                radheyBotMsg('❓ Service number ya naam clearly bolein.');
            }
            setTimeout(radheyAutoMic,600); return;
        }

        // Step 6: Language
        if (currentField === 'language') {
            const langMap = {
                'hindi':'Hindi','english':'English','bengali':'Bengali','gujarati':'Gujarati',
                'marathi':'Marathi','kannada':'Kannada','telugu':'Telugu','malayalam':'Malayalam',
                'tamil':'Tamil','punjabi':'Punjabi','odia':'Odia','assamese':'Assamese',
                'हिंदी':'Hindi','अंग्रेजी':'English','बंगाली':'Bengali','गुजराती':'Gujarati',
                'मराठी':'Marathi','कन्नड़':'Kannada','तेलुगू':'Telugu','मलयालम':'Malayalam',
                'तमिल':'Tamil','पंजाबी':'Punjabi','ओडिया':'Odia','असमिया':'Assamese'
            };
            const found = [];
            for (const [k,v] of Object.entries(langMap)) { if(a.includes(k.toLowerCase())) found.push(v); }
            if (found.length === 0) found.push('Hindi'); // default
            const langs = [...new Set(found)];
            d.language = langs;
            window._radheyRegStep++;
            setProgress(window._radheyRegStep, totalSteps);

            if (window._radheySteps[window._radheyRegStep] === 'hours') {
                radheyBotMsg(`✅ Bhasha: ${langs.join(', ')}\n\nStep ${window._radheyRegStep+1}: Aap kab kaam karte hain?\n\n1. सोम-शुक्र (Monday to Friday)\n2. Weekends only\n3. Roz (All 7 days)\n4. 24×7 Available`);
            } else {
                // Seeker → religion
                radheyBotMsg(`✅ Bhasha: ${langs.join(', ')}\n\nStep ${window._radheyRegStep+1}: Aapka dharm?\nHindu, Muslim, Christian, Sikh, Buddhist, Jain`);
            }
            setTimeout(radheyAutoMic,600); return;
        }

        // Step 7: Working hours (provider)
        if (currentField === 'hours') {
            let hours = 'all-days';
            if(a.includes('1')||a.includes('mon')||a.includes('सोम')||a.includes('friday')) hours='mon-fri';
            else if(a.includes('2')||a.includes('weekend')||a.includes('शनि')||a.includes('रवि')) hours='weekends';
            else if(a.includes('3')||a.includes('roz')||a.includes('रोज')||a.includes('all')) hours='all-days';
            else if(a.includes('4')||a.includes('24')||a.includes('हमेशा')) hours='24x7';
            d.workingHours = hours;
            const hLabel = {'mon-fri':'Mon-Fri','weekends':'Weekends','all-days':'All Days','24x7':'24×7'}[hours]||hours;
            window._radheyRegStep++;
            setProgress(window._radheyRegStep, totalSteps);
            radheyBotMsg(`✅ Kaam ke ghante: ${hLabel}\n\nStep ${window._radheyRegStep+1}: Aap kitne door tak jaate hain?\n\n1. 10 km tak\n2. Poore shehar mein`);
            setTimeout(radheyAutoMic,600); return;
        }

        // Step 8: Service area (provider)
        if (currentField === 'area') {
            let area = 'city';
            if(a.includes('1')||a.includes('10')||a.includes('paas')||a.includes('पास')) area='10km';
            else if(a.includes('2')||a.includes('city')||a.includes('shehar')||a.includes('शहर')) area='city';
            d.serviceArea = area;
            window._radheyRegStep++;
            setProgress(window._radheyRegStep, totalSteps);
            radheyBotMsg(`✅ Service Area: ${area==='10km'?'10 km tak':'Poora shehar'}\n\nStep ${window._radheyRegStep+1}: Aapka dharm?\nHindu, Muslim, Christian, Sikh, Buddhist, ya Jain`);
            setTimeout(radheyAutoMic,600); return;
        }

        // Step 9: Religion
        if (currentField === 'religion') {
            const relMap = {'hindu':'Hindu','muslim':'Muslim','christian':'Christian','sikh':'Sikh','buddhist':'Buddhist','jain':'Jain','हिंदू':'Hindu','मुस्लिम':'Muslim','सिख':'Sikh','बौद्ध':'Buddhist','जैन':'Jain','ईसाई':'Christian'};
            let rel = null;
            for(const [k,v] of Object.entries(relMap)){if(a.includes(k.toLowerCase())){rel=v;break;}}
            if(!rel){radheyBotMsg('❓ Dharm clearly bolein: Hindu, Muslim, Christian, Sikh, Buddhist, ya Jain'); setTimeout(radheyAutoMic,600); return;}
            d.religion = rel;
            window._radheyRegStep++;
            setProgress(window._radheyRegStep, totalSteps);
            radheyBotMsg(`✅ Dharm: ${rel}\n\nStep ${window._radheyRegStep+1}: Aapka shehar / mohalla / address batayein.\nJaise: "Malviya Nagar, Jaipur"`);
            setTimeout(radheyAutoMic,600); return;
        }

        // Step 10: Location
        if (currentField === 'location') {
            d.location = answer.trim();
            window._radheyRegStep++;
            setProgress(window._radheyRegStep, totalSteps);

            if(window._radheySteps[window._radheyRegStep] === 'rate') {
                radheyBotMsg(`✅ Location: ${d.location}\n\nStep ${window._radheyRegStep+1}: Aap ek ghante ka kitna charge lete hain? (₹)\nJaise: "200", "300", "paanch sau"`);
            } else {
                radheyConfirmReg();
            }
            setTimeout(radheyAutoMic,600); return;
        }

        // Step 11: Rate (provider)
        if (currentField === 'rate') {
            const words = {'ek sau':100,'do sau':200,'teen sau':300,'char sau':400,'paanch sau':500,'ek hazaar':1000,'panch sau':500,'das sau':1000};
            let rate = 0;
            for(const[k,v] of Object.entries(words)){if(a.includes(k)){rate=v;break;}}
            if(!rate) rate = parseInt(answer.replace(/\D/g,''))||0;
            if(rate < 50){radheyBotMsg('❌ Rate kam se kam ₹50 hona chahiye.\nDobara bolein.'); setTimeout(radheyAutoMic,600); return;}
            d.rate = rate;
            window._radheyRegStep++;
            setProgress(window._radheyRegStep, totalSteps);
            radheyBotMsg(`✅ Rate: ₹${rate}/ghanta\n\nStep ${window._radheyRegStep+1}: Apne baare mein kuch batayein (Bio).\nJaise: "Main 5 saal se kaam kar raha hoon, professional aur time par aata hoon."\n\nYa "skip" bolein.`);
            setTimeout(radheyAutoMic,600); return;
        }

        // Step 12: Bio (provider)
        if (currentField === 'bio') {
            if(!a.includes('skip')&&!a.includes('nahi')&&answer.trim().length>3) {
                d.bio = answer.trim();
            }
            window._radheyRegStep++;
            setProgress(window._radheyRegStep, totalSteps);
            radheyBotMsg(`${d.bio?'✅ Bio save hua!':' Bio skip kiya.'}\n\nStep ${window._radheyRegStep+1}: Identity Verification (Optional)\n\nAapke paas koi ID hai?\nAadhaar, Driving Licence, Voter ID, PAN\n\nID type bolein ya "skip" bolein.\n(ID se ✅ Verified badge milta hai — zyada customers aate hain!)`);
            setTimeout(radheyAutoMic,600); return;
        }

        // Step 13: ID type (provider)
        if (currentField === 'id') {
            if(!a.includes('skip')&&!a.includes('nahi')) {
                const idMap={'aadhaar':'aadhaar','aadhar':'aadhaar','driving':'driving','licence':'driving','voter':'voter','pan':'pan','passport':'passport','आधार':'aadhaar','ड्राइविंग':'driving','वोटर':'voter','पैन':'pan'};
                for(const[k,v] of Object.entries(idMap)){if(a.includes(k)){d.idType=v;break;}}
                if(d.idType) {
                    radheyBotMsg(`✅ ID Type: ${d.idType.toUpperCase()}\n\n📸 Ab apni ID ki photo upload karein.\n"Register Provider" form mein ID section mein upload kar sakte hain baad mein bhi.\n\nAbhi confirm karte hain!`);
                } else {
                    radheyBotMsg('✅ ID noted!\n\nAbhi confirm karte hain!');
                }
            }
            window._radheyRegStep++;
            setTimeout(()=>radheyConfirmReg(), 800);
            return;
        }

        // Confirmation step
        if (window._radheyRegStep >= (window._radheySteps||PROVIDER_STEPS).length) {
            if(a.includes('haan')||a.includes('yes')||a.includes('हां')||a.includes('हाँ')||a.includes('sahi')||a.includes('correct')||a.includes('bilkul')) {
                radheySubmitReg();
            } else if(a.includes('nahi')||a.includes('no')||a.includes('galat')||a.includes('wrong')) {
                window._radheyRegMode=false; window._radheyRegStep=0;
                radheyBotMsg('ठीक है! Dobara try karein — "🎤 Register" button tap karein.');
                setProgress(0,0);
            } else {
                radheyBotMsg('"Haan" bolein confirm karne ke liye\n"Nahi" bolein dobara shuru karne ke liye.');
                setTimeout(radheyAutoMic,600);
            }
            return;
        }

        setTimeout(radheyAutoMic,600);
    };

    window.radheyConfirmReg = function() {
        const d = window._radheyRegData;
        let s = `📋 Registration Summary:\n━━━━━━━━━━━━━━━\n`;
        s += `👤 Naam: ${d.name||'-'}\n`;
        s += `📱 Mobile: ${d.mobile||'-'}\n`;
        s += `🙏 Dharm: ${d.religion||'-'}\n`;
        s += `📍 Location: ${d.location||'-'}\n`;
        s += `🗣️ Bhasha: ${(d.language||[]).join(', ')||'-'}\n`;
        if(d.type==='provider'||d.type==='both'){
            s += `📋 Category: ${d.categoryName||'-'}\n`;
            s += `🔧 Service: ${d.serviceName||'-'}\n`;
            s += `⏰ Kaam ke ghante: ${d.workingHours||'-'}\n`;
            s += `🗺️ Area: ${d.serviceArea||'-'}\n`;
            s += `💰 Rate: ₹${d.rate||'-'}/ghanta\n`;
            if(d.bio) s += `📝 Bio: ${d.bio.slice(0,50)}...\n`;
            if(d.idType) s += `🪪 ID: ${d.idType.toUpperCase()}\n`;
        }
        s += `\n━━━━━━━━━━━━━━━\nKya ye sahi hai?\n✅ "Haan" — Register karo\n❌ "Nahi" — Dobara shuru karo`;
        radheyBotMsg(s);
        window._radheyRegStep = (window._radheySteps||PROVIDER_STEPS).length;
        setTimeout(radheyAutoMic, 800);
    };

    window.radheyAutoMic = function() {
        if(!window._radheyRegMode) return;
        if(!('webkitSpeechRecognition' in window)&&!('SpeechRecognition' in window)) return;
        if(window._radheyListening) return;
        const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
        const rec=new SR();
        rec.lang='hi-IN';
        rec.interimResults=false;
        rec.onresult=function(e){
            const txt=e.results[0][0].transcript;
            radheyUserMsg(txt);
            const step=window._radheyRegStep;
            const total=(window._radheySteps||PROVIDER_STEPS).length;
            if(step>=total){
                const a=txt.toLowerCase();
                if(a.includes('haan')||a.includes('yes')||a.includes('हां')||a.includes('sahi')||a.includes('bilkul')){radheySubmitReg();}
                else if(a.includes('nahi')||a.includes('no')||a.includes('galat')){window._radheyRegMode=false;window._radheyRegStep=0;radheyBotMsg('ठीक है! Dobara try karein.');setProgress(0,0);}
                else{radheyBotMsg('"Haan" ya "Nahi" bolein.');setTimeout(radheyAutoMic,600);}
            } else { radheyHandleRegStep(txt); }
        };
        rec.onend=()=>{window._radheyListening=false;};
        rec.onerror=()=>{window._radheyListening=false;};
        try{rec.start();window._radheyListening=true;window._radheyRec=rec;}catch(e){}
    };

    window.radheySubmitReg = async function() {
        const d=window._radheyRegData;
        radheyBotMsg('⏳ Registration ho rahi hai Firebase mein...');
        window._radheyRegMode=false;
        setProgress(1,1);

        const fb=window._firebase;
        if(!fb){radheyBotMsg('❌ Database se connect nahi ho pa raha.\nManually register karein ya dobara try karein.'); return;}

        try {
            const uid=window.firebaseUser?.uid||null;
            const now=new Date().toISOString();

            if(d.type==='provider'||d.type==='both'){
                const provider={
                    id:'p_'+Date.now(), name:d.name, mobile:d.mobile,
                    religion:d.religion, location:d.location,
                    language:d.language||['Hindi'],
                    categoryId:d.categoryId||null,
                    subcategoryIdx:d.subcategoryIdx??null,
                    subsubcategoryIdx:d.serviceIdx??null,
                    service:d.serviceName||d.subcategoryName||'General Service',
                    services:d.serviceName?[d.serviceName]:null,
                    workingHours:d.workingHours||'all-days',
                    serviceArea:d.serviceArea||'city',
                    rate:d.rate||200, experience:0,
                    bio:d.bio||null,
                    idVerification:d.idType?{type:d.idType,status:'pending',submittedAt:now}:null,
                    verified:false, status:'active',
                    ownerUid:uid, registered:now,
                    lat:26.9124, lng:75.7873
                };
                const ref=await fb.push(fb.ref(fb.db,'providers'),provider);
                await fb.update(ref,{id:ref.key});
            }
            if(d.type==='seeker'||d.type==='both'){
                const seeker={
                    id:'s_'+Date.now(), name:d.name, mobile:d.mobile,
                    religion:d.religion, location:d.location,
                    language:d.language||['Hindi'],
                    status:'active', ownerUid:uid, registered:now,
                    lat:26.9124, lng:75.7873
                };
                const ref=await fb.push(fb.ref(fb.db,'seekers'),seeker);
                await fb.update(ref,{id:ref.key});
            }

            setProgress(1,1);
            radheyBotMsg(`🎉 बधाई हो ${d.name} जी!\n\nAapka registration successfully complete hua!\n\n✅ Aap ab Sudarshan Chakra ke member hain\n✅ Browse mein apna profile dekhen\n✅ Customers ab aapko dhundh sakte hain\n\n🙏 Sudarshan Chakra mein aapka swagat hai!\nJai Hind 🇮🇳`);
            setTimeout(()=>setProgress(0,0),3000);

        } catch(e){
            console.error('RADHEY reg error:',e);
            radheyBotMsg('❌ Registration mein error aaya.\nPlease manually register karein ya support@sudarshanchakraindia.com par email karein.');
            setProgress(0,0);
        }
    };

    // ── Init ──
    injectNavWidget();
    console.log('✅ RADHEY v2.0 initialized — Top-right nav, complete 14-step voice registration');
})();
