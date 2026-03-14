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
