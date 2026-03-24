// ============================================
// ~*~*~ ETHEREUM.ORG PARODY ~*~*~
// site.js - Router, Pages, and Interactivity
// Best viewed in Netscape Navigator 4.0
// ============================================

// ========== MATRIX RAIN BACKGROUND ==========
(function initMatrix() {
  var canvas = document.getElementById('matrix-bg');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var cols = Math.floor(canvas.width / 18);
  var drops = [];
  for (var i = 0; i < cols; i++) drops[i] = Math.floor(Math.random() * -50);
  var chars = 'ETHΞ01アイウエオカキクケコ♦◊∞≈⟐⬡⬢△▽❤'.split('');
  // Color pools inspired by the teal/cyan/purple palette
  var colColors = [];
  for (var i = 0; i < cols; i++) {
    var r = Math.random();
    if (r > 0.7) colColors[i] = 'cyan';
    else if (r > 0.4) colColors[i] = 'teal';
    else if (r > 0.15) colColors[i] = 'purple';
    else colColors[i] = 'pink';
  }
  function draw() {
    ctx.fillStyle = 'rgba(6, 8, 24, 0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '16px monospace';
    for (var i = 0; i < drops.length; i++) {
      var c = chars[Math.floor(Math.random() * chars.length)];
      var g = Math.random();
      var pool = colColors[i];
      if (g > 0.96) ctx.fillStyle = '#ffffff';
      else if (pool === 'cyan') ctx.fillStyle = g > 0.7 ? '#66eeff' : '#1a99aa';
      else if (pool === 'teal') ctx.fillStyle = g > 0.7 ? '#44ddcc' : '#117766';
      else if (pool === 'purple') ctx.fillStyle = g > 0.7 ? '#bb88ff' : '#6633aa';
      else ctx.fillStyle = g > 0.7 ? '#ff88cc' : '#aa3377';
      ctx.fillText(c, i * 18, drops[i] * 18);
      if (drops[i] * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  setInterval(draw, 60);
  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
})();

// ========== AMBIENT FLOATING ELEMENTS ==========
(function initAmbient() {
  var container = document.getElementById('ambient-container');
  if (!container) return;

  // --- Floating Ethereum Diamonds ---
  var diamondSymbols = ['◆', '⬡', '◇', '💎', 'Ξ'];
  var diamondColors = ['#66eeff','#bb88ff','#ff88cc','#44ddcc','#ffcc44'];
  function spawnDiamond() {
    var d = document.createElement('div');
    d.className = 'float-diamond';
    d.textContent = diamondSymbols[Math.floor(Math.random() * diamondSymbols.length)];
    var color = diamondColors[Math.floor(Math.random() * diamondColors.length)];
    d.style.left = Math.random() * 100 + '%';
    d.style.color = color;
    d.style.textShadow = '0 0 12px ' + color + ', 0 0 25px ' + color + '44';
    d.style.fontSize = (16 + Math.random() * 20) + 'px';
    d.style.animationDuration = (18 + Math.random() * 25) + 's';
    d.style.animationDelay = (Math.random() * 5) + 's';
    container.appendChild(d);
    setTimeout(function() { d.remove(); }, 50000);
  }
  for (var i = 0; i < 8; i++) setTimeout(spawnDiamond, i * 2500);
  setInterval(spawnDiamond, 4000);

  // --- Rainbow Prism Orbs ---
  function spawnOrb() {
    var o = document.createElement('div');
    o.className = 'prism-orb';
    o.style.left = Math.random() * 90 + '%';
    o.style.top = Math.random() * 90 + '%';
    var size = 50 + Math.random() * 100;
    o.style.width = size + 'px';
    o.style.height = size + 'px';
    o.style.animationDuration = (15 + Math.random() * 20) + 's';
    o.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(o);
    setTimeout(function() { o.remove(); }, 60000);
  }
  for (var i = 0; i < 4; i++) setTimeout(spawnOrb, i * 3000);
  setInterval(spawnOrb, 12000);

  // --- Drifting Terminal Text ---
  var termTexts = [
    'CONNECTION_ESTABLISHED', 'HEARTBEAT_SYNC', 'INFINITE_LOVE',
    'ABUNDANCE_REGARDLESS_OF_MEANS', 'PLENITUDE_ACHIEVED',
    'OVERFLOWING_LOVE', 'DATA_STREAM_ACTIVE', 'ACTIVATE_SOVEREIGNTY',
    'CONSENSUS_REACHED', 'BLOCK_FINALIZED', 'VALIDATOR_ONLINE',
    'TRUST_VERIFIED', 'DECENTRALIZE_EVERYTHING', 'GM_GM_GM',
    'WAGMI', 'PROOF_OF_STAKE', 'WE_ARE_ALL_ONE_IN_LOVE',
    'HOPE_SPRINGS_ETERNAL', 'HEART_CONNECTION', 'L.O.V.E._BUFFERING',
    'KINDNESS_LOOP', 'LOVE_IS_THE_DATA', 'WHITEPILLED',
    'LOVEPILLED', 'CLEARPILLED', 'NODE_SYNCHRONIZED'
  ];
  function spawnText() {
    var t = document.createElement('div');
    t.className = 'drift-text';
    t.textContent = termTexts[Math.floor(Math.random() * termTexts.length)];
    t.style.top = (5 + Math.random() * 90) + '%';
    var colors = [
      'rgba(100,220,255,0.2)', 'rgba(180,130,255,0.18)',
      'rgba(255,130,200,0.15)', 'rgba(80,220,200,0.2)',
      'rgba(255,200,100,0.12)'
    ];
    t.style.color = colors[Math.floor(Math.random() * colors.length)];
    var dur = 25 + Math.random() * 35;
    t.style.animationDuration = dur + 's';
    // Some go right-to-left
    if (Math.random() > 0.5) t.style.direction = 'rtl';
    container.appendChild(t);
    setTimeout(function() { t.remove(); }, dur * 1000 + 1000);
  }
  for (var i = 0; i < 3; i++) setTimeout(spawnText, i * 4000);
  setInterval(spawnText, 6000);

  // --- VHS Color Bar Glitch Strips ---
  var vhsColors = [
    ['#fff','#ff0','#0ff','#0f0','#f0f','#f00','#00f'],
    ['#f00','#0f0','#00f','#ff0','#f0f'],
    ['#0ff','#f0f','#ff0','#0f0']
  ];
  function spawnVHS() {
    var barSet = vhsColors[Math.floor(Math.random() * vhsColors.length)];
    var g = document.createElement('div');
    g.style.position = 'absolute';
    g.style.top = Math.random() * 100 + '%';
    g.style.left = Math.random() * 60 + '%';
    g.style.display = 'flex';
    g.style.opacity = '0';
    g.style.zIndex = '0';
    g.className = 'vhs-bar';
    for (var i = 0; i < barSet.length; i++) {
      var bar = document.createElement('div');
      bar.style.width = (8 + Math.random() * 15) + 'px';
      bar.style.height = (3 + Math.random() * 5) + 'px';
      bar.style.background = barSet[i];
      g.appendChild(bar);
    }
    g.style.animationDelay = (Math.random() * 6) + 's';
    g.style.animationDuration = (6 + Math.random() * 8) + 's';
    container.appendChild(g);
    setTimeout(function() { g.remove(); }, 20000);
  }
  for (var i = 0; i < 5; i++) setTimeout(spawnVHS, i * 1500);
  setInterval(spawnVHS, 5000);

  // --- Pixel Glitch Blocks ---
  function spawnPixelBlock() {
    var p = document.createElement('canvas');
    p.className = 'pixel-block';
    var size = 20 + Math.floor(Math.random() * 40);
    p.width = size; p.height = size;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 95 + '%';
    p.style.top = Math.random() * 95 + '%';
    var pCtx = p.getContext('2d');
    // Draw random colored pixels
    var px = 4;
    for (var x = 0; x < size; x += px) {
      for (var y = 0; y < size; y += px) {
        var r = Math.random();
        if (r > 0.3) {
          var colors = ['#ff0055','#00ffaa','#ffcc00','#0088ff','#ff00ff','#00ffff','#8844ff','#ff8800'];
          pCtx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
          pCtx.fillRect(x, y, px, px);
        }
      }
    }
    p.style.animationDelay = (Math.random() * 10) + 's';
    p.style.animationDuration = (8 + Math.random() * 10) + 's';
    container.appendChild(p);
    setTimeout(function() { p.remove(); }, 25000);
  }
  for (var i = 0; i < 4; i++) setTimeout(spawnPixelBlock, i * 2000);
  setInterval(spawnPixelBlock, 7000);

  // --- Expanding Diamond Halos ---
  function spawnHalo() {
    var h = document.createElement('div');
    h.className = 'diamond-halo';
    h.style.left = Math.random() * 90 + '%';
    h.style.top = Math.random() * 90 + '%';
    h.style.animationDuration = (4 + Math.random() * 4) + 's';
    var colors = ['rgba(100,200,255,','rgba(180,100,255,','rgba(255,130,200,','rgba(80,220,200,'];
    var c = colors[Math.floor(Math.random() * colors.length)];
    h.style.borderColor = c + '0.3)';
    h.style.boxShadow = '0 0 20px ' + c + '0.15), inset 0 0 20px ' + c + '0.08)';
    container.appendChild(h);
    setTimeout(function() { h.remove(); }, 8000);
  }
  setInterval(spawnHalo, 3000);

  // --- Floating Milady NFTs ---
  var miladyPool = [];
  var miladyIds = [];
  // Generate 30 random token IDs to cycle through
  for (var i = 0; i < 30; i++) miladyIds.push(Math.floor(Math.random() * 9998));
  var miladyPreloadIdx = 0;

  function preloadNextMilady() {
    if (miladyPreloadIdx >= miladyIds.length) return;
    var id = miladyIds[miladyPreloadIdx];
    miladyPreloadIdx++;
    var img = new Image();
    var url = 'https://www.miladymaker.net/milady/' + id + '.png';
    img.onload = function() {
      miladyPool.push(url);
    };
    img.onerror = function() {
      // skip failed loads silently
    };
    img.src = url;
  }
  // Preload first 8 right away, rest lazily
  for (var i = 0; i < 8; i++) preloadNextMilady();
  setInterval(preloadNextMilady, 2000);

  function spawnMilady() {
    if (miladyPool.length === 0) return;
    var src = miladyPool[Math.floor(Math.random() * miladyPool.length)];
    var el = document.createElement('img');
    el.src = src;
    el.className = 'float-milady';
    // Random size 45-75px
    var size = 45 + Math.floor(Math.random() * 30);
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    // Random vertical position
    el.style.top = (5 + Math.random() * 85) + '%';
    // Use translateX for animation instead of left/right (more reliable)
    var dur = 22 + Math.random() * 20;
    el.style.animationDuration = dur + 's';
    // Random direction
    if (Math.random() > 0.5) {
      el.classList.add('milady-ltr');
    } else {
      el.classList.add('milady-rtl');
    }
    el.style.setProperty('--milady-rot', (Math.random() * 16 - 8) + 'deg');
    container.appendChild(el);
    setTimeout(function() { el.remove(); }, (dur + 5) * 1000);
  }
  // Start spawning after images have had time to preload
  setTimeout(function() {
    spawnMilady();
    setInterval(spawnMilady, 7000);
  }, 6000);

})();

// ========== AUDIO PLAYER ==========
var bgAudio = null;
var audioStarted = false;

function initAudio() {
  bgAudio = document.getElementById('bgAudio');
  if (!bgAudio) return;
  bgAudio.volume = 0.3;
}

function toggleAudio() {
  if (!bgAudio) initAudio();
  if (!bgAudio) return;
  if (bgAudio.paused) {
    bgAudio.play().catch(function(){});
    audioStarted = true;
    var btn = document.getElementById('btn-play');
    if (btn) btn.textContent = '▶ Playing';
  } else {
    bgAudio.pause();
    var btn = document.getElementById('btn-play');
    if (btn) btn.textContent = '▶ Play';
  }
}

function pauseAudio() {
  if (bgAudio) { bgAudio.pause(); var btn = document.getElementById('btn-play'); if (btn) btn.textContent = '▶ Play'; }
}

function stopAudio() {
  if (bgAudio) { bgAudio.pause(); bgAudio.currentTime = 0; var btn = document.getElementById('btn-play'); if (btn) btn.textContent = '▶ Play'; }
}

function setVolume(v) {
  if (bgAudio) bgAudio.volume = v / 100;
}

// Auto-play on first user interaction (browsers block autoplay without interaction)
function tryAutoplay() {
  if (audioStarted) return;
  initAudio();
  if (!bgAudio) return;
  bgAudio.play().then(function() {
    audioStarted = true;
    var btn = document.getElementById('btn-play');
    if (btn) btn.textContent = '▶ Playing';
  }).catch(function() {
    // Blocked by browser - wait for user interaction
    document.addEventListener('click', function handler() {
      if (audioStarted) return;
      bgAudio.play().then(function() {
        audioStarted = true;
        var btn = document.getElementById('btn-play');
        if (btn) btn.textContent = '▶ Playing';
      }).catch(function(){});
      document.removeEventListener('click', handler);
    }, {once: true});
  });
}
setTimeout(tryAutoplay, 1000);

// ========== SPARKLE CURSOR TRAIL ==========
document.addEventListener('mousemove', function(e) {
  if (Math.random() > 0.88) {
    var s = document.createElement('div');
    s.className = 'sparkle';
    s.style.left = e.pageX + 'px';
    s.style.top = e.pageY + 'px';
    var emojis = ['✨', '💎', '⭐', '🔥', '💰', 'Ξ'];
    s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    document.body.appendChild(s);
    setTimeout(function() { s.remove(); }, 800);
  }
});

// ========== POPUP (EVASIVE SIDE POPUP) ==========
var popupEvadeCount = 0;
var popupDismissed = false;

// Sidebar ads sit at top:200px and are ~160px tall, so avoid 180–380px range on sides.
// Also avoid going off-screen at the bottom.
function getRandomPopupPosition(avoidSide) {
  // Pick a side: 'left' or 'right', but avoid the side we were just on
  var side;
  if (avoidSide) {
    side = avoidSide === 'right' ? 'left' : 'right';
  } else {
    side = Math.random() > 0.5 ? 'right' : 'left';
  }

  // Pick a vertical position that avoids the sidebar ad zone (180-380px)
  // Safe zones: 30-160px, or 400px to (viewportHeight - 350px)
  var vh = window.innerHeight;
  var safeSlots = [];
  // Top zone
  if (160 > 30) safeSlots.push([30, 160]);
  // Below sidebar ads
  var bottomZoneStart = 400;
  var bottomZoneEnd = Math.max(bottomZoneStart + 50, vh - 350);
  if (bottomZoneEnd > bottomZoneStart) safeSlots.push([bottomZoneStart, bottomZoneEnd]);

  var zone = safeSlots[Math.floor(Math.random() * safeSlots.length)];
  var top = zone[0] + Math.floor(Math.random() * (zone[1] - zone[0]));

  return { side: side, top: top };
}

function movePopup(avoidSide) {
  var popup = document.getElementById('winnerPopup');
  if (!popup || popupDismissed) return;

  var pos = getRandomPopupPosition(avoidSide);

  // Remove both position classes
  popup.classList.remove('show-left', 'show-right');
  // Reset both left/right so they don't fight
  popup.style.left = '';
  popup.style.right = '';
  popup.style.top = pos.top + 'px';

  // Brief delay so the browser registers the class removal for transition
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      popup.classList.add(pos.side === 'right' ? 'show-right' : 'show-left');
    });
  });

  popup._currentSide = pos.side;
}

function closePopup() {
  // They can never truly close it... or can they?
  popupEvadeCount++;
  if (popupEvadeCount >= 5) {
    // OK fine, let them close it after 15 evades
    document.getElementById('winnerPopup').style.display = 'none';
    popupDismissed = true;
  } else {
    movePopup(document.getElementById('winnerPopup')._currentSide);
  }
}

// Show popup after delay
setTimeout(function() {
  var popup = document.getElementById('winnerPopup');
  if (!popup) return;
  popup.style.display = 'block';
  movePopup(null);

  // Evade on mouseenter - the popup runs away the instant you touch it
  popup.addEventListener('mouseenter', function() {
    if (popupDismissed) return;
    popupEvadeCount++;
    if (popupEvadeCount >= 5) {
      popup.style.display = 'none';
      popupDismissed = true;
      return;
    }
    movePopup(popup._currentSide);
  });
}, 2500);

// ========== VISITOR COUNTER ==========
var visitorCount = 4523;
setInterval(function() {
  visitorCount += Math.floor(Math.random() * 3) + 1;
  var s = visitorCount.toString().padStart(7, '0');
  var el = document.getElementById('visitorCount');
  if (el) el.textContent = s.slice(0,1) + ',' + s.slice(1,4) + ',' + s.slice(4);
}, 2000);

// ========== STATUS BAR MESSAGES ==========
var statusMessages = [
  "Welcome to Ethereum.org!!! The BEST blockchain website on the WORLD WIDE WEB!!!",
  "gm gm gm!!! Have you bought your ETH today?!?",
  "WAGMI!!! We're All Gonna Make It!!!",
  "Don't forget to sign the guestbook!!!",
  "This site is best viewed in Netscape Navigator 4.0 at 800x600...",
  "Ethereum: The World Computer!!! Now with 100% more Comic Sans!!!",
  "Remember: Not your keys, not your crypto!!!",
  "Fun fact: This website uses ZERO smart contracts!!!",
  "Powered by HTML 4.01 Transitional - The Way The Web Was Meant To Be!!!",
  "🚀 ETH to $100,000 - Source: Trust me bro 🚀"
];
var statusIdx = 0;
setInterval(function() {
  var el = document.getElementById('statusText');
  if (el) el.textContent = statusMessages[statusIdx];
  statusIdx = (statusIdx + 1) % statusMessages.length;
}, 4000);

// ========== RIGHT-CLICK JOKE ==========
var rightClickCount = 0;
document.addEventListener('contextmenu', function(e) {
  if (rightClickCount === 0) {
    e.preventDefault();
    alert('⚠️ Sorry!!! Right-clicking is DISABLED on this website!!!\n\n(Just kidding, try again)\n\nThis is a classic early 2000s website feature 😂');
    rightClickCount++;
  }
});

// ========== KONAMI CODE ==========
var konamiCode = [38,38,40,40,37,39,37,39,66,65];
var konamiIdx = 0;
document.addEventListener('keydown', function(e) {
  if (e.keyCode === konamiCode[konamiIdx]) {
    konamiIdx++;
    if (konamiIdx === konamiCode.length) {
      konamiIdx = 0;
      document.body.style.transform = 'rotate(180deg)';
      document.body.style.transition = 'transform 2s';
      setTimeout(function() {
        alert('🎮 KONAMI CODE ACTIVATED!!!\n\n+30 lives\n+∞ ETH\n\nJust kidding. But you DO get bragging rights!');
        document.body.style.transform = 'none';
      }, 2000);
    }
  } else { konamiIdx = 0; }
});

// ========== FAQ TOGGLE ==========
document.addEventListener('click', function(e) {
  var q = e.target.closest('.faq-question');
  if (q) {
    var item = q.parentElement;
    item.classList.toggle('open');
  }
});

// ========== HELPER: AD BANNER ==========
function adBanner(text, subtext, link, linkText, colors) {
  colors = colors || 'linear-gradient(135deg,#ffff00,#ff8800,#ff0000)';
  return '<div class="ad-banner" style="background:' + colors + '">' +
    '<div class="blink-text">' + text + '</div>' +
    '<div style="font-size:14px">' + subtext + ' <a href="' + link + '" style="font-size:12px">' + linkText + '</a></div></div>';
}

// ========== HELPER: FIRE DIVIDER ==========
var FIRE = '<div class="divider-fire">🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥</div>';

// ========== HELPER: BREADCRUMB ==========
function breadcrumb(parts) {
  var html = '<div class="breadcrumb">🏠 <a href="#/">Home</a>';
  for (var i = 0; i < parts.length; i++) {
    html += ' &gt; ';
    if (parts[i].link) html += '<a href="' + parts[i].link + '">' + parts[i].text + '</a>';
    else html += '<span style="color:#ff8800">' + parts[i].text + '</span>';
  }
  return html + '</div>';
}

// ========== HELPER: SECTION ==========
function section(title, content) {
  return '<div class="section-box"><h2>' + title + '</h2>' + content + '</div>';
}

// ========== HELPER: RELATED LINKS ==========
function relatedLinks(links) {
  var html = '<div class="section-box"><h2>📎 rElAtEd LiNkS!!! 📎</h2>';
  for (var i = 0; i < links.length; i++) {
    html += '<div class="news-item">' + links[i][0] + ' <a href="#/' + links[i][1] + '">' + links[i][2] + '</a>';
    if (i < 3) html += ' <span class="new-badge">HOT!</span>';
    html += '</div>';
  }
  return html + '</div>';
}

// ========== HELPER: PAGE HERO ==========
function pageHero(emoji, title, desc) {
  return '<div class="page-hero"><span class="page-emoji">' + emoji + '</span>' +
    '<h1>' + title + '</h1>' +
    '<div class="page-desc">' + desc + '</div></div>';
}

// ========== ALL PAGE CONTENT ==========
var PAGES = {};

// ---------- HOME ----------
PAGES[''] = {
  title: 'Home',
  content: function() {
    return '<div class="site-header">' +
      '<div class="eth-diamond">💎</div>' +
      '<h1>ETHEREUM</h1>' +
      '<div class="subtitle">✨ wElCoMe tO eThErEuM!!! ✨</div>' +
      '<div class="tagline">~ The leading platform for innovative apps and blockchain networks ~</div>' +
      '<div style="font-size:12px;color:#888;margin-top:5px">Last updated: March 13, 2026 | Best viewed at 800x600 | <a href="https://ethereum.org/en/" target="_blank" style="font-size:12px" id="boring-version">View boring version</a></div>' +
      '<div class="cta-grid">' +
        '<a class="cta-btn" href="#/wallets/find-wallet">💳 Pick a Wallet!!!</a>' +
        '<a class="cta-btn" href="#/get-eth">💰 Get ETH Now!!!</a>' +
        '<a class="cta-btn" href="#/apps">🎮 Try Apps!!!</a>' +
        '<a class="cta-btn" href="#/developers">⚡ Start Building!!!</a>' +
      '</div></div>' +

      '<div class="marquee-bar"><span class="scroll-text">🔥🔥🔥 BREAKING NEWS: ETH price is <span class="eth-price">$2,141.53</span>!!! 🚀🚀🚀 TO THE MOON!!! 🌙 ||| $55.67 BILLION locked in DeFi!!! ||| 13.06 MILLION transactions in 24 hours!!! ||| ETHEREUM IS THE FUTURE OF THE INTERNET!!! ||| gm gm gm ||| WAGMI!!! 🔥🔥🔥</span></div>' +

      '<div class="under-construction">🚧 ⚠️ THIS SITE IS UNDER CONSTRUCTION ⚠️ 🚧</div>' +
      FIRE +

      adBanner('⚡ FREE ETHEREUM!!! ⚡', 'Send 0.1 ETH and receive 10 ETH back! <span style="font-size:10px">(jk this is a scam,', '#/security', 'learn about security)</span>', '') +

      section('🤔 WuT iS eThErEuM?!? 🤔',
        '<table width="100%" cellpadding="0" cellspacing="0"><tr>' +
        '<td style="padding-right:15px;vertical-align:top">' +
          '<p>Ethereum is a <font color="#ff0000"><b>DECENTRALIZED</b></font>, open source blockchain network and software development platform, powered by the cryptocurrency <font color="#ffff00"><b>ether (ETH)</b></font>. Ethereum is the secure, global foundation for a new generation of <font color="#00ffff"><b>UNSTOPPABLE</b></font> applications.</p>' +
          '<p>The Ethereum network is open to everyone: <b>no permission required</b>. It has no owner, and is built and maintained by <font color="#ff88ff">thousands of people, organizations, and users</font> around the world.</p>' +
          '<p><a href="#/what-is-ethereum">&gt;&gt;&gt; Learn about Ethereum &gt;&gt;&gt;</a></p>' +
        '</td><td style="width:160px;text-align:center;vertical-align:top">' +
          '<div style="font-size:100px;animation:floatUpDown 3s ease-in-out infinite">💎</div>' +
          '<div style="font-size:11px;color:#888">~*~ The Future ~*~</div>' +
        '</td></tr></table>' +
        '<table width="100%" cellpadding="5" cellspacing="3" border="1" bordercolor="#6666ff" style="margin-top:10px;font-size:12px">' +
          '<tr bgcolor="#111155"><td>📚 <a href="#/wallets">What are crypto wallets?</a></td><td>📖 <a href="#/guides">Step-by-step Ethereum guides</a></td></tr>' +
          '<tr bgcolor="#111155"><td>📄 <a href="#/whitepaper">Ethereum Whitepaper</a> <span class="new-badge">NEW!</span></td><td>🗺️ <a href="#/roadmap">Ethereum roadmap</a></td></tr></table>'
      ) +
      FIRE +

      section('🌐 A nEw WaY tO uSe ThE iNtErNeT!!! 🌐',
        '<table class="use-case-table">' +
        '<tr><td><h3>💵 Digital Cash for Everyday Use</h3><p>Stablecoins for instant global payments and digital dollars on Ethereum. Send money anywhere in the world, anytime!</p><a href="#/stablecoins">&gt;&gt;&gt; Discover stablecoins &gt;&gt;&gt;</a></td>' +
        '<td><h3>🏦 A Financial System Open to ALL</h3><p>Borrow, lend, earn interest without a bank account. Open 24/7, 365 days a year. No KYC required!!!</p><a href="#/defi">&gt;&gt;&gt; Explore DeFi &gt;&gt;&gt;</a></td></tr>' +
        '<tr><td><h3>🔗 The Network of Networks</h3><p>Hundreds of Layer 2 networks built on Ethereum. Low fees, near-instant transactions. It\'s like the INTERNET but for MONEY!</p><a href="#/layer-2">&gt;&gt;&gt; Discover Layer 2s &gt;&gt;&gt;</a></td>' +
        '<td><h3>🔒 Apps That Respect Your Privacy</h3><p>No data selling! Use the same account across all apps. YOUR data, YOUR rules. Take THAT, big tech!!!</p><a href="#/apps">&gt;&gt;&gt; Browse apps &gt;&gt;&gt;</a></td></tr>' +
        '<tr><td><h3>🎨 The Internet of Assets</h3><p>Art, real estate, stocks - all tokenized on Ethereum. Own ANYTHING as a digital token! The future is NOW!!!</p><a href="#/nft">&gt;&gt;&gt; More on NFTs &gt;&gt;&gt;</a></td>' +
        '<td><h3>🌍 Decentralized Identity</h3><p>One identity, all of Web3. No more 500 passwords! Be your own identity provider!!!</p><a href="#/decentralized-identity">&gt;&gt;&gt; Learn more &gt;&gt;&gt;</a></td></tr></table>'
      ) +

      adBanner('🤖 LEARN SOLIDITY IN 24 HOURS!!! 🤖', 'Become a blockchain developer OVERNIGHT!', '#/developers/docs', 'Click here for docs!', 'linear-gradient(135deg,#00ff00,#00aa00,#004400)') +

      section('💰 WhAt Is ETH?!? 💰',
        '<p><font color="#ffff00"><b>Ether (ETH)</b></font> is the native cryptocurrency that powers the Ethereum network, used to pay transaction fees and secure the blockchain through staking. Beyond its technical role, ETH is open, programmable <font color="#00ff00"><b>DIGITAL MONEY</b></font>.</p>' +
        '<p style="text-align:center"><a href="#/what-is-ether">&gt;&gt;&gt; Learn more about ether &gt;&gt;&gt;</a></p>'
      ) +

      '<div class="price-ticker"><div class="label">~~ LIVE ETH PRICE ~~</div>' +
      '<div class="price eth-price">$2,141.53</div>' +
      '<div class="label"><span class="eth-price-direction" style="color:#44eedd">▲ TO THE MOON 🚀🌙</span></div>' +
      '<div style="font-size:10px;color:#444;margin-top:5px">* Updates every 60 seconds via CoinGecko API. Yes, even Comic Sans websites can have live data.</div></div>' +
      FIRE +

      section('💪 ThE sTrOnGeSt EcOsYsTeM!!! 💪',
        '<p>Ethereum is the <font color="#ff0000"><b>LEADING PLATFORM</b></font> for issuing, managing, and settling digital assets. From tokenized money and financial instruments to real-world assets, Ethereum provides a <font color="#00ffff">secure, neutral foundation</font> for the digital economy.</p>' +
        '<table class="stats-table"><tr>' +
          '<td><span class="stat-value">$55.67B</span><span class="stat-label">Value locked in DeFi 🔒</span></td>' +
          '<td><span class="stat-value">$81.34B</span><span class="stat-label">Value protecting ETH 🛡️</span></td>' +
          '<td><span class="stat-value">$0.0016</span><span class="stat-label">Avg transaction cost 💸</span></td>' +
          '<td><span class="stat-value">13.06M</span><span class="stat-label">24h transactions 📊</span></td>' +
        '</tr></table>' +
        '<p style="text-align:center;margin-top:10px"><a href="#/enterprise">🏢 Ethereum for institutions</a> | <a href="#/resources">📦 More ecosystem resources</a></p>'
      ) +

      section('👨‍💻 bLoCkChAiN\'s BiGgEsT bUiLdEr CoMmUnItY!!! 👩‍💻',
        '<p>Ethereum is home to Web3\'s <font color="#ff8800"><b>LARGEST</b></font> and most vibrant developer ecosystem. Use <font color="#ffff00">JavaScript</font> and <font color="#00ff00">Python</font>, or learn a smart contract language like <font color="#00ffff"><a href="https://soliditylang.org/" target="_blank">Solidity</a></font> or <font color="#ff88ff"><a href="https://vyperlang.org/" target="_blank">Vyper</a></font> to write your own app.</p>' +
        '<p style="text-align:center"><a href="#/developers">🏗️ Builder\'s portal</a> | <a href="#/developers/docs">📚 Documentation</a></p>' +
        '<div class="code-card"><h4>🏦 Your own bank</h4><code style="color:#0f0">contract MyBank { mapping(address =&gt; uint) balances; }</code><div style="color:#888;font-size:10px">Build a bank powered by logic YOU programmed!</div></div>' +
        '<div class="code-card"><h4>💰 Your own currency</h4><code style="color:#0f0">contract MyCoin is ERC20 { constructor() ERC20("MyCoin","MC") {} }</code><div style="color:#888;font-size:10px">Create tokens transferable across applications!</div></div>' +
        '<div class="code-card"><h4>🌐 A JavaScript Ethereum wallet</h4><code style="color:#0f0">const provider = new ethers.BrowserProvider(window.ethereum);</code><div style="color:#888;font-size:10px">Use existing languages to interact with Ethereum!</div></div>' +
        '<div class="code-card"><h4>📡 An open, permissionless DNS</h4><code style="color:#0f0">const name = await provider.lookupAddress(address);</code><div style="color:#888;font-size:10px">Re-imagine services as decentralized, open applications!</div></div>'
      ) +

      adBanner('🎨 MINT YOUR NFT TODAY!!! 🎨', 'Turn your MS Paint masterpieces into VALUABLE digital assets!!!', '#/nft', 'Learn about NFTs!', 'linear-gradient(135deg,#ff00ff,#8800ff,#0000ff)') +

      section('📰 EtHeReUm NeWs!!! 📰',
        '<p style="color:#888;font-size:12px">The latest blog posts and updates from the community</p>' +
        '<div class="news-item">📢 <a href="https://blog.ethereum.org/" target="_blank">Ethereum Foundation Blog</a> <span class="new-badge">NEW!</span></div>' +
        '<div class="news-item">📢 <a href="#/community">Community Updates</a> <span class="new-badge">HOT!</span></div>' +
        '<div class="news-item">📢 <a href="https://soliditylang.org/blog/" target="_blank">Solidity Lang Blog</a></div>' +
        '<div class="news-item">📢 <a href="https://vitalik.eth.limo/" target="_blank">Vitalik Buterin\'s website</a> <span class="new-badge">🔥</span></div>' +
        '<div class="news-item">📢 <a href="https://ethstaker.cc/" target="_blank">ethstaker</a></div>'
      ) +

      section('🎉 EtHeReUm eVeNtS!!! 🎉',
        '<p style="color:#888;font-size:12px">Ethereum communities host events all around the globe, all year long!</p>' +
        '<table class="events-table">' +
        '<tr><th>📅 Event</th><th>📍 Location</th><th>🗓️ Date</th></tr>' +
        '<tr><td><a href="#/community/events">Ethereum Munich #2</a></td><td>Munich, Germany 🇩🇪</td><td>March 26, 2026</td></tr>' +
        '<tr><td><a href="#/community/events">BEAST MODE | zkEVM day</a></td><td>Cannes, France 🇫🇷</td><td>March 28, 2026</td></tr>' +
        '<tr><td><a href="#/community/events">FORT MODE</a></td><td>Cannes, France 🇫🇷</td><td>March 29, 2026</td></tr>' +
        '</table>' +
        '<p style="text-align:center;margin-top:10px"><a href="#/community/events">&gt;&gt;&gt; See ALL events &gt;&gt;&gt;</a></p>'
      ) +
      FIRE +

      section('🤝 jOiN eThErEuM.oRg!!! 🤝',
        '<p>The ethereum.org website is built and maintained by <font color="#ffff00"><b>THOUSANDS</b></font> of translators, coders, designers, copywriters, and community members. YOU can help too!!!</p>' +
        '<p style="text-align:center"><a href="#/contributing">📝 How to contribute</a> | <a href="https://github.com/ethereum/ethereum-org-website/" target="_blank">🐙 GitHub</a> | <a href="https://discord.gg/ethereum-org" target="_blank">💬 Discord</a> | <a href="https://x.com/EthDotOrg" target="_blank">🐦 X (Twitter)</a></p>' +
        '<p style="text-align:center"><a href="#/community">🌍 ethereum.org contributor hub</a></p>'
      );
  }
};

// ---------- WHAT IS ETHEREUM ----------
PAGES['what-is-ethereum'] = {
  title: 'What is Ethereum?',
  content: function() {
    return breadcrumb([{link:'#/learn',text:'Learn'},{text:'What is Ethereum?'}]) +
      pageHero('💎', 'WhAt iS eThErEuM?!?', 'The world\'s programmable blockchain!!! It\'s like a GIANT COMPUTER that NOBODY can turn off!!!') +
      FIRE +
      section('🌍 eThErEuM eXpLaInEd!!! 🌍',
        '<p>Imagine the internet. Now imagine it\'s <font color="#ff0000"><b>DECENTRALIZED</b></font>. That\'s basically Ethereum. It\'s a global, open-source platform that lets you build <font color="#ffff00"><b>UNSTOPPABLE APPLICATIONS</b></font> that run exactly as programmed.</p>' +
        '<p>No downtime. No censorship. No fraud. No third-party interference. <font color="#00ffff"><b>THE FUTURE IS HERE!!!</b></font></p>' +
        '<p>Ethereum was proposed in 2013 by <a href="https://vitalik.eth.limo/" target="_blank">Vitalik Buterin</a>, who was only <font color="#ff88ff"><b>19 YEARS OLD</b></font> at the time. If a teenager can invent a world-changing technology, what\'s YOUR excuse?!?</p>'
      ) +
      section('🤔 hOw DoEs It WoRk?!? 🤔',
        '<p>Ethereum runs on a global network of <font color="#00ff00"><b>THOUSANDS of computers</b></font> (called nodes) all around the world. These computers all agree on the same data using a process called <font color="#ffff00"><b>consensus</b></font>.</p>' +
        '<ul class="feature-list">' +
          '<li>💻 <b>Decentralized</b> - No single point of failure. Not even if aliens invaded!!!</li>' +
          '<li>📜 <b>Smart Contracts</b> - Self-executing code that runs EXACTLY as programmed. <a href="#/smart-contracts">Learn more</a></li>' +
          '<li>🔒 <b>Secure</b> - Protected by cryptography and thousands of validators</li>' +
          '<li>🌐 <b>Permissionless</b> - Anyone can use it. No application required. No background check.</li>' +
          '<li>💰 <b>Programmable Money</b> - ETH is not just money, it\'s PROGRAMMABLE money!!!</li>' +
        '</ul>'
      ) +
      adBanner('💡 STILL CONFUSED?!? 💡', 'Don\'t worry, nobody understood the internet in 1995 either!!!', '#/learn', 'Visit the Learn Hub!', 'linear-gradient(135deg,#0088ff,#0044aa,#002266)') +
      section('🏗️ wHaT cAn YoU bUiLd?!? 🏗️',
        '<div class="card-grid">' +
          '<div class="card-item"><span class="card-emoji">🏦</span><div class="card-title">DeFi (Decentralized Finance)</div><div class="card-desc">Be your own bank! Lend, borrow, trade without middlemen. <a href="#/defi">Explore DeFi</a></div></div>' +
          '<div class="card-item"><span class="card-emoji">🎨</span><div class="card-title">NFTs (Non-Fungible Tokens)</div><div class="card-desc">Own digital art, music, and more! <a href="#/nft">Learn about NFTs</a></div></div>' +
          '<div class="card-item"><span class="card-emoji">🏛️</span><div class="card-title">DAOs (Decentralized Orgs)</div><div class="card-desc">Democracy on the blockchain! <a href="#/dao">Explore DAOs</a></div></div>' +
          '<div class="card-item"><span class="card-emoji">🎮</span><div class="card-title">dApps (Decentralized Apps)</div><div class="card-desc">Apps that can\'t be censored! <a href="#/apps">Browse dApps</a></div></div>' +
        '</div>'
      ) +
      relatedLinks([
        ['📚','learn','Learn Hub'],['💰','what-is-ether','What is Ether?'],
        ['💳','wallets','Ethereum Wallets'],['📄','whitepaper','Ethereum Whitepaper'],
        ['🗺️','roadmap','Ethereum Roadmap'],['🌐','web3','What is Web3?']
      ]);
  }
};

// ---------- WHAT IS ETHER ----------
PAGES['what-is-ether'] = {
  title: 'What is Ether (ETH)?',
  content: function() {
    return breadcrumb([{link:'#/learn',text:'Learn'},{text:'What is Ether?'}]) +
      pageHero('💰', 'WhAt iS eThEr (ETH)?!?', 'The MAGIC INTERNET MONEY that powers the world computer!!!') +
      FIRE +
      '<div class="price-ticker"><div class="label">~~ LIVE ETH PRICE ~~</div><div class="price eth-price">$2,141.53</div><div class="label"><span class="eth-price-direction" style="color:#44eedd">▲ UP ONLY (hopefully) 🚀</span></div></div>' +
      section('💎 eTh ExPlAiNeD!!! 💎',
        '<p><font color="#ffff00"><b>Ether (ETH)</b></font>, represented by the symbol <font color="#00ffff" style="font-size:20px"><b>Ξ</b></font>, is Ethereum\'s native cryptocurrency. Think of it like the GAS that powers a car, except the car is a <font color="#ff0000"><b>WORLD COMPUTER</b></font> and the gas is <font color="#00ff00"><b>DIGITAL MONEY</b></font>!!!</p>' +
        '<p>Every time you want to do something on Ethereum - send money, interact with a smart contract, mint an NFT - you need to pay a small fee in ETH. This is called <a href="#/gas">gas</a>.</p>'
      ) +
      section('🔥 wHaT mAkEs ETH sPeCiAl?!? 🔥',
        '<ul class="feature-list">' +
          '<li>🌐 <b>Global</b> - Send ETH to anyone, anywhere, anytime. No bank needed!!!</li>' +
          '<li>🔐 <b>Secure</b> - Protected by cryptography, not by some guy in a suit at a bank</li>' +
          '<li>📈 <b>Deflationary</b> - ETH gets BURNED with every transaction. Less supply = ???</li>' +
          '<li>🥩 <b>Stakeable</b> - Stake your ETH to earn more ETH! <a href="#/staking">Learn about staking</a></li>' +
          '<li>🏗️ <b>Programmable</b> - It\'s not just money, it\'s PROGRAMMABLE money!!!</li>' +
          '<li>💪 <b>Battle-tested</b> - Securing billions of dollars since 2015</li>' +
        '</ul>'
      ) +
      section('📊 ETH bY tHe NuMbErS!!! 📊',
        '<table class="stats-table"><tr>' +
          '<td><span class="stat-value eth-price-short">$2,141</span><span class="stat-label">Current Price 📈</span></td>' +
          '<td><span class="stat-value">~120M</span><span class="stat-label">Total Supply 🪙</span></td>' +
          '<td><span class="stat-value">2015</span><span class="stat-label">Year Launched 🎂</span></td>' +
          '<td><span class="stat-value">∞</span><span class="stat-label">Potential 🚀</span></td>' +
        '</tr></table>'
      ) +
      adBanner('🚀 BUY ETH NOW!!! 🚀', 'Before it goes to $100,000!!! (Not financial advice!!!)', '#/get-eth', 'Get ETH &gt;&gt;&gt;', 'linear-gradient(135deg,#00ff00,#008800)') +
      relatedLinks([
        ['💎','what-is-ethereum','What is Ethereum?'],['💳','wallets','Get a Wallet'],
        ['🛒','get-eth','How to Get ETH'],['🥩','staking','Stake Your ETH'],
        ['⛽','gas','Understanding Gas Fees'],['📊','defi','Explore DeFi']
      ]);
  }
};

// ---------- LEARN HUB ----------
PAGES['learn'] = {
  title: 'Learn Hub',
  content: function() {
    return breadcrumb([{text:'Learn'}]) +
      pageHero('📚', 'LeArN aBoUt EtHeReUm!!!', 'Your one-stop shop for understanding blockchain, crypto, and the future of the internet!!!') +
      FIRE +
      section('📖 sTaRt HeRe!!! 📖',
        '<p>Whether you\'re a total <font color="#ff0000"><b>N00B</b></font> or a seasoned <font color="#00ff00"><b>CRYPTO VETERAN</b></font>, we\'ve got resources for you!!!</p>' +
        '<div class="card-grid">' +
          '<div class="card-item"><span class="card-emoji">💎</span><div class="card-title"><a href="#/what-is-ethereum">What is Ethereum?</a></div><div class="card-desc">The basics! Start here if you\'re new.</div></div>' +
          '<div class="card-item"><span class="card-emoji">💰</span><div class="card-title"><a href="#/what-is-ether">What is Ether (ETH)?</a></div><div class="card-desc">Learn about the magic internet money!</div></div>' +
          '<div class="card-item"><span class="card-emoji">💳</span><div class="card-title"><a href="#/wallets">Ethereum Wallets</a></div><div class="card-desc">Your gateway to the Ethereum world!</div></div>' +
          '<div class="card-item"><span class="card-emoji">🌐</span><div class="card-title"><a href="#/web3">What is Web3?</a></div><div class="card-desc">The next evolution of the internet!</div></div>' +
          '<div class="card-item"><span class="card-emoji">📜</span><div class="card-title"><a href="#/smart-contracts">Smart Contracts</a></div><div class="card-desc">Code that executes itself! MAGIC!!!</div></div>' +
          '<div class="card-item"><span class="card-emoji">⛽</span><div class="card-title"><a href="#/gas">Gas Fees</a></div><div class="card-desc">The cost of doing business on-chain.</div></div>' +
          '<div class="card-item"><span class="card-emoji">🔒</span><div class="card-title"><a href="#/security">Security</a></div><div class="card-desc">Don\'t get REKT! Stay safe out there!</div></div>' +
          '<div class="card-item"><span class="card-emoji">📖</span><div class="card-title"><a href="#/glossary">Glossary</a></div><div class="card-desc">All the crypto lingo explained!</div></div>' +
        '</div>'
      ) +
      adBanner('🧠 KNOWLEDGE IS POWER!!! 🧠', 'And knowing about Ethereum is SUPER POWER!!!', '#/quizzes', 'Test your knowledge!', 'linear-gradient(135deg,#8800ff,#4400aa,#220066)') +
      section('🎓 aDvAnCeD tOpIcS!!! 🎓',
        '<ul class="feature-list">' +
          '<li>📄 <a href="#/whitepaper">Ethereum Whitepaper</a> - The document that started it all!!!</li>' +
          '<li>🗺️ <a href="#/roadmap">Ethereum Roadmap</a> - Where we\'re going (hint: THE MOON 🌙)</li>' +
          '<li>📜 <a href="#/eips">EIPs</a> - Ethereum Improvement Proposals</li>' +
          '<li>🏛️ <a href="#/governance">Governance</a> - How decisions get made</li>' +
          '<li>📚 <a href="#/history">History</a> - The complete saga of Ethereum</li>' +
          '<li>🖥️ <a href="#/run-a-node">Run a Node</a> - Become part of the network!!!</li>' +
        '</ul>'
      );
  }
};

// ---------- WALLETS ----------
PAGES['wallets'] = {
  title: 'Ethereum Wallets',
  content: function() {
    return breadcrumb([{link:'#/learn',text:'Learn'},{text:'Wallets'}]) +
      pageHero('💳', 'EtHeReUm WaLlEtS!!!', 'Your key to the Ethereum world!!! It\'s like a wallet, but DIGITAL and WAY cooler!!!') +
      FIRE +
      section('🔑 wHaT iS a WaLlEt?!? 🔑',
        '<p>An Ethereum wallet is an application that lets you interact with your Ethereum account. Think of it like your <font color="#ff0000"><b>INTERNET BANKING APP</b></font>, except <font color="#ffff00"><b>YOU</b></font> are the bank!!!</p>' +
        '<p>Your wallet lets you:</p>' +
        '<ul class="feature-list">' +
          '<li>💰 Check your ETH balance</li>' +
          '<li>📤 Send ETH and tokens to others</li>' +
          '<li>🔗 Connect to decentralized applications</li>' +
          '<li>🎨 View your NFT collection</li>' +
        '</ul>' +
        '<div class="alert-box info">💡 <b>IMPORTANT:</b> Your wallet does NOT store your crypto! It stores your <b>keys</b> that give you access to your crypto on the blockchain. Not your keys, not your crypto!!!</div>'
      ) +
      section('🏪 tYpEs Of WaLlEtS!!! 🏪',
        '<div class="card-grid">' +
          '<div class="card-item"><span class="card-emoji">📱</span><div class="card-title">Mobile Wallets</div><div class="card-desc">Crypto in your pocket! Available on iOS and Android.</div></div>' +
          '<div class="card-item"><span class="card-emoji">🖥️</span><div class="card-title">Desktop Wallets</div><div class="card-desc">Full-featured wallets for your computer.</div></div>' +
          '<div class="card-item"><span class="card-emoji">🌐</span><div class="card-title">Browser Extension</div><div class="card-desc">Connect to dApps right from your browser!</div></div>' +
          '<div class="card-item"><span class="card-emoji">🔐</span><div class="card-title">Hardware Wallets</div><div class="card-desc">Maximum security! Keep your keys OFFLINE.</div></div>' +
        '</div>' +
        '<p style="text-align:center;margin-top:15px"><a href="#/wallets/find-wallet" style="font-size:18px">🔍 &gt;&gt;&gt; FIND YOUR PERFECT WALLET &gt;&gt;&gt; 🔍</a></p>'
      ) +
      relatedLinks([
        ['💎','what-is-ethereum','What is Ethereum?'],['💰','get-eth','Get ETH'],
        ['🔒','security','Stay Safe'],['📱','apps','Explore dApps']
      ]);
  }
};

// ---------- FIND WALLET ----------
PAGES['wallets/find-wallet'] = {
  title: 'Find a Wallet',
  content: function() {
    return breadcrumb([{link:'#/learn',text:'Learn'},{link:'#/wallets',text:'Wallets'},{text:'Find a Wallet'}]) +
      pageHero('🔍', 'FiNd YoUr PeRfEcT wAlLeT!!!', 'So many wallets, so little time!!! Let us help you choose!!!') +
      FIRE +
      section('👛 pOpUlAr WaLlEtS!!! 👛',
        '<table class="info-table">' +
          '<tr><th>Wallet</th><th>Type</th><th>Best For</th><th>Vibe</th></tr>' +
          '<tr><td>🦊 <a href="https://metamask.io/" target="_blank">MetaMask</a></td><td>Browser / Mobile</td><td>Everything!</td><td>The OG. Everyone knows this fox.</td></tr>' +
          '<tr><td>🌈 <a href="https://rainbow.me/" target="_blank">Rainbow</a></td><td>Mobile</td><td>NFT collectors</td><td>Pretty colors! Very aesthetic.</td></tr>' +
          '<tr><td>💎 <a href="https://www.ledger.com/" target="_blank">Ledger</a></td><td>Hardware</td><td>Maximum security</td><td>Fort Knox for your crypto.</td></tr>' +
          '<tr><td>🔵 <a href="https://www.coinbase.com/wallet" target="_blank">Coinbase Wallet</a></td><td>Mobile / Browser</td><td>Beginners</td><td>Easy peasy lemon squeezy.</td></tr>' +
          '<tr><td>🏦 <a href="https://trezor.io/" target="_blank">Trezor</a></td><td>Hardware</td><td>Security nerds</td><td>Open source and proud of it.</td></tr>' +
          '<tr><td>🐰 <a href="https://rabby.io/" target="_blank">Rabby</a></td><td>Browser</td><td>DeFi power users</td><td>Pre-sign transaction previews!</td></tr>' +
        '</table>' +
        '<div class="alert-box warning">⚠️ <b>PRO TIP:</b> ALWAYS download wallets from their official websites! Scammers love making fake wallet apps!!!</div>'
      ) +
      relatedLinks([
        ['💳','wallets','Back to Wallets'],['💰','get-eth','Get ETH'],
        ['📱','apps','Try Some dApps'],['🔒','security','Stay Safe']
      ]);
  }
};

// ---------- GET ETH ----------
PAGES['get-eth'] = {
  title: 'Get ETH',
  content: function() {
    return breadcrumb([{link:'#/guides',text:'Use'},{text:'Get ETH'}]) +
      pageHero('🛒', 'GeT yOuRsElF sOmE ETH!!!', 'Step 1: Get ETH. Step 2: ??? Step 3: PROFIT!!!') +
      FIRE +
      section('💵 hOw To GeT ETH!!! 💵',
        '<p>There are several ways to get your hands on some <font color="#ffff00"><b>sweet, sweet ETH</b></font>:</p>' +
        '<ul class="feature-list">' +
          '<li>🏦 <b>Centralized Exchanges (CEXs)</b> - Buy with a credit card or bank transfer. The normie way. Works great!</li>' +
          '<li>🔄 <b>Decentralized Exchanges (DEXs)</b> - Swap other crypto for ETH. No KYC required! <a href="#/defi">Learn about DeFi</a></li>' +
          '<li>🤝 <b>Peer-to-peer</b> - Buy directly from other people. Meet in a Starbucks and do the deal. (Be careful!)</li>' +
          '<li>⛏️ <b>Earn It</b> - Get paid in ETH for work or services. The gigachad way!!!</li>' +
          '<li>🥩 <b>Staking Rewards</b> - Stake existing ETH to earn more ETH! <a href="#/staking">Learn about staking</a></li>' +
        '</ul>'
      ) +
      section('🏦 pOpUlAr ExChAnGeS!!! 🏦',
        '<table class="info-table">' +
          '<tr><th>Exchange</th><th>Type</th><th>Best For</th></tr>' +
          '<tr><td>🔵 <a href="https://www.coinbase.com/" target="_blank">Coinbase</a></td><td>CEX</td><td>Beginners - simple UI, easy bank connection</td></tr>' +
          '<tr><td>🟡 <a href="https://www.binance.com/" target="_blank">Binance</a></td><td>CEX</td><td>Low fees, huge selection of trading pairs</td></tr>' +
          '<tr><td>🟣 <a href="https://www.kraken.com/" target="_blank">Kraken</a></td><td>CEX</td><td>Security-focused, great for pros</td></tr>' +
          '<tr><td>🟢 <a href="https://www.gemini.com/" target="_blank">Gemini</a></td><td>CEX</td><td>Regulated, insured, founded by the Winklevoss twins</td></tr>' +
          '<tr><td>🦄 <a href="https://app.uniswap.org/" target="_blank">Uniswap</a></td><td>DEX</td><td>Swap any token, no account needed, fully on-chain</td></tr>' +
          '<tr><td>🐄 <a href="https://swap.cow.fi/" target="_blank">CoW Swap</a></td><td>DEX Aggregator</td><td>MEV-protected swaps, best prices across DEXs</td></tr>' +
        '</table>' +
        '<div class="alert-box warning" style="margin-top:10px">⚠️ <b>IMPORTANT:</b> After buying ETH on a CEX, transfer it to your own <a href="#/wallets/find-wallet">self-custody wallet</a> for maximum security! Not your keys, not your crypto!!!</div>'
      ) +
      adBanner('⚠️ NOT FINANCIAL ADVICE!!! ⚠️', 'Do your own research! We\'re just a website made with Comic Sans!!!', '#/security', 'Learn about security', 'linear-gradient(135deg,#ff8800,#cc4400)') +
      section('🔒 sAfEtY fIrSt!!! 🔒',
        '<div class="alert-box">' +
          '<p><font color="#ff0000"><b>⚠️ SCAM ALERT ⚠️</b></font></p>' +
          '<p>Nobody will EVER give you free ETH! If someone promises to double your ETH, they are a <b>SCAMMER</b>!!!</p>' +
          '<p>Always:</p>' +
          '<ul style="color:#88ff88">' +
            '<li>Use reputable exchanges</li>' +
            '<li>Enable 2FA (Two-Factor Authentication)</li>' +
            '<li>NEVER share your seed phrase</li>' +
            '<li>Double-check addresses before sending</li>' +
          '</ul>' +
        '</div>'
      ) +
      relatedLinks([
        ['💳','wallets/find-wallet','Get a Wallet First'],['🏦','defi','Explore DeFi'],
        ['🥩','staking','Stake Your ETH'],['🔒','security','Security Tips']
      ]);
  }
};

// ---------- APPS ----------
PAGES['apps'] = {
  title: 'Decentralized Apps (dApps)',
  content: function() {
    return breadcrumb([{link:'#/guides',text:'Use'},{text:'Apps'}]) +
      pageHero('📱', 'DeCeNtRaLiZeD aPpS (dApPs)!!!', 'Apps that can\'t be censored, can\'t be shut down, and can\'t be stopped!!! Like regular apps but COOLER!!!') +
      FIRE +
      section('🌟 fEaTuReD aPpS!!! 🌟',
        '<div class="card-grid">' +
          '<div class="card-item"><span class="card-emoji">🦄</span><div class="card-title"><a href="https://app.uniswap.org/" target="_blank">Uniswap</a></div><div class="card-desc">Swap tokens instantly! The king of DEXs. <a href="#/defi">DeFi</a></div></div>' +
          '<div class="card-item"><span class="card-emoji">👻</span><div class="card-title"><a href="https://aave.com/" target="_blank">Aave</a></div><div class="card-desc">Lend and borrow crypto without a bank!</div></div>' +
          '<div class="card-item"><span class="card-emoji">🎨</span><div class="card-title"><a href="https://opensea.io/" target="_blank">OpenSea</a></div><div class="card-desc">The biggest NFT marketplace! <a href="#/nft">NFTs</a></div></div>' +
          '<div class="card-item"><span class="card-emoji">🏦</span><div class="card-title"><a href="https://makerdao.com/" target="_blank">MakerDAO</a></div><div class="card-desc">Generate DAI stablecoin! <a href="#/stablecoins">Stablecoins</a></div></div>' +
          '<div class="card-item"><span class="card-emoji">🔮</span><div class="card-title"><a href="https://ens.domains/" target="_blank">ENS</a></div><div class="card-desc">Get your own .eth name! Like a domain but cooler.</div></div>' +
          '<div class="card-item"><span class="card-emoji">📊</span><div class="card-title"><a href="https://lido.fi/" target="_blank">Lido</a></div><div class="card-desc">Liquid staking made easy! <a href="#/staking">Staking</a></div></div>' +
        '</div>'
      ) +
      section('📂 aPp CaTeGoRiEs!!! 📂',
        '<ul class="feature-list">' +
          '<li>🏦 <a href="#/defi">DeFi</a> - Decentralized Finance (lending, borrowing, trading)</li>' +
          '<li>🎨 <a href="#/nft">NFTs</a> - Digital collectibles, art, music</li>' +
          '<li>🎮 Gaming - <a href="https://axieinfinity.com/" target="_blank">Axie Infinity</a>, <a href="https://www.darkforest.xyz/" target="_blank">Dark Forest</a>, <a href="https://lootproject.com/" target="_blank">Loot</a></li>' +
          '<li>🏛️ <a href="#/dao">DAOs</a> - Decentralized organizations</li>' +
          '<li>🆔 <a href="#/decentralized-identity">Identity</a> - Own your digital identity</li>' +
          '<li>💬 Social - <a href="https://warpcast.com/" target="_blank">Farcaster</a>, <a href="https://lens.xyz/" target="_blank">Lens Protocol</a></li>' +
        '</ul>'
      ) +
      adBanner('🎮 ETHEREUM: NOT JUST FOR FINANCE!!! 🎮', 'Games, social media, and more!!!', '#/what-is-ethereum', 'Learn more!', 'linear-gradient(135deg,#ff00ff,#8800ff)');
  }
};

// ---------- DEFI ----------
PAGES['defi'] = {
  title: 'Decentralized Finance (DeFi)',
  content: function() {
    return breadcrumb([{link:'#/guides',text:'Use'},{text:'DeFi'}]) +
      pageHero('🏦', 'DeCeNtRaLiZeD fInAnCe (DeFi)!!!', 'Be your own bank!!! Open 24/7, 365 days a year!!! No suit and tie required!!!') +
      FIRE +
      section('💰 wHaT iS dEfI?!? 💰',
        '<p><font color="#ffff00"><b>DeFi (Decentralized Finance)</b></font> is a term for financial services on public blockchains, primarily Ethereum. With DeFi, you can do most of the things that banks support - earn interest, borrow, lend, buy insurance, trade derivatives, trade assets, and more - but it\'s <font color="#00ff00"><b>FASTER</b></font> and doesn\'t require <font color="#ff0000"><b>PAPERWORK</b></font> or a <font color="#ff0000"><b>THIRD PARTY</b></font>.</p>' +
        '<div class="alert-box success">✅ <b>DeFi is:</b> Open to anyone with an internet connection, 24/7, global, transparent, and permissionless!</div>'
      ) +
      section('🔥 pOpUlAr DeFi AcTiViTiEs!!! 🔥',
        '<div class="card-grid">' +
          '<div class="card-item"><span class="card-emoji">🔄</span><div class="card-title">Swap Tokens</div><div class="card-desc">Trade any token instantly on <a href="https://app.uniswap.org/" target="_blank">Uniswap</a> or <a href="https://swap.cow.fi/" target="_blank">CoW Swap</a>!</div></div>' +
          '<div class="card-item"><span class="card-emoji">💸</span><div class="card-title">Lend & Borrow</div><div class="card-desc">Earn interest on <a href="https://aave.com/" target="_blank">Aave</a> or <a href="https://compound.finance/" target="_blank">Compound</a>!</div></div>' +
          '<div class="card-item"><span class="card-emoji">🌊</span><div class="card-title">Liquidity Pools</div><div class="card-desc">Provide liquidity on <a href="https://app.uniswap.org/" target="_blank">Uniswap</a> or <a href="https://curve.fi/" target="_blank">Curve</a>!</div></div>' +
          '<div class="card-item"><span class="card-emoji">🪙</span><div class="card-title">Stablecoins</div><div class="card-desc">Crypto pegged to the dollar! <a href="#/stablecoins">Learn more</a></div></div>' +
        '</div>'
      ) +
      section('📊 DeFi StAtS!!! 📊',
        '<table class="stats-table"><tr>' +
          '<td><span class="stat-value">$55.67B</span><span class="stat-label">Total Value Locked 🔒</span></td>' +
          '<td><span class="stat-value">1000+</span><span class="stat-label">DeFi Protocols 📊</span></td>' +
          '<td><span class="stat-value">24/7</span><span class="stat-label">Always Open 🕐</span></td>' +
          '<td><span class="stat-value">0</span><span class="stat-label">Bankers Required 🎩</span></td>' +
        '</tr></table>'
      ) +
      relatedLinks([
        ['💰','get-eth','Get ETH to Start'],['🪙','stablecoins','Learn About Stablecoins'],
        ['📱','apps','Browse DeFi Apps'],['🔗','layer-2','Try Layer 2 for Lower Fees']
      ]);
  }
};

// ---------- NFTs ----------
PAGES['nft'] = {
  title: 'Non-Fungible Tokens (NFTs)',
  content: function() {
    return breadcrumb([{link:'#/guides',text:'Use'},{text:'NFTs'}]) +
      pageHero('🎨', 'NoN-fUnGiBlE tOkEnS (NFTs)!!!', 'Right-click save THIS!!! (Just kidding, the blockchain knows who really owns it!!!)') +
      FIRE +
      section('🖼️ wHaT aRe NFTs?!? 🖼️',
        '<p><font color="#ffff00"><b>NFTs (Non-Fungible Tokens)</b></font> are unique digital items whose ownership is tracked on the Ethereum blockchain. They can represent <font color="#ff00ff"><b>art, music, videos, virtual real estate, collectibles</b></font>, and so much more!!!</p>' +
        '<p>"Non-fungible" means <font color="#00ffff"><b>ONE OF A KIND</b></font>. Unlike ETH or dollars, each NFT is unique and can\'t be swapped 1:1 for another.</p>' +
        '<div class="alert-box info">💡 Think of it like this: Every dollar bill is the same (fungible). But the Mona Lisa? There\'s only ONE (non-fungible)!!!</div>'
      ) +
      section('🎭 wHaT cAn Be An NFT?!? 🎭',
        '<ul class="feature-list">' +
          '<li>🎨 <b>Digital Art</b> - Paintings, illustrations, generative art on <a href="https://opensea.io/" target="_blank">OpenSea</a> or <a href="https://foundation.app/" target="_blank">Foundation</a></li>' +
          '<li>🎵 <b>Music</b> - Songs, albums, beats on <a href="https://sound.xyz/" target="_blank">Sound.xyz</a></li>' +
          '<li>🎮 <b>Gaming Items</b> - Swords, skins, virtual land</li>' +
          '<li>📜 <b>Documents</b> - Certificates, deeds, tickets</li>' +
          '<li>🐵 <b>Profile Pictures</b> - The JPEG that costs more than your car!!!</li>' +
          '<li>🏠 <b>Virtual Real Estate</b> - Land in the metaverse</li>' +
        '</ul>'
      ) +
      adBanner('🎨 YOUR MS PAINT MASTERPIECE COULD BE WORTH MILLIONS!!! 🎨', 'Probably not though lol', '#/apps', 'Browse NFT marketplaces', 'linear-gradient(135deg,#ff00ff,#ff8800,#ffff00)') +
      relatedLinks([
        ['💎','what-is-ethereum','What is Ethereum?'],['💳','wallets','Get a Wallet'],
        ['📱','apps','NFT Marketplaces'],['🏦','defi','DeFi']
      ]);
  }
};

// ---------- STABLECOINS ----------
PAGES['stablecoins'] = {
  title: 'Stablecoins',
  content: function() {
    return breadcrumb([{link:'#/guides',text:'Use'},{text:'Stablecoins'}]) +
      pageHero('🪙', 'StAbLeCoInS!!!', 'Crypto that doesn\'t make your heart rate go up!!! Stable like a table!!!') +
      FIRE +
      section('📊 wHaT aRe StAbLeCoInS?!? 📊',
        '<p><font color="#ffff00"><b>Stablecoins</b></font> are cryptocurrencies designed to maintain a stable value, typically pegged to a fiat currency like the <font color="#00ff00"><b>US Dollar</b></font>. They give you the benefits of crypto (fast, global, permissionless) without the <font color="#ff0000"><b>WILD PRICE SWINGS</b></font>!!!</p>' +
        '<p>1 stablecoin ≈ $1. That\'s it. That\'s the tweet.</p>'
      ) +
      section('🪙 pOpUlAr StAbLeCoInS!!! 🪙',
        '<table class="info-table">' +
          '<tr><th>Coin</th><th>Symbol</th><th>Type</th><th>Backed By</th></tr>' +
          '<tr><td>💵 <a href="https://www.circle.com/usdc" target="_blank">USDC</a></td><td>USDC</td><td>Centralized</td><td>US Dollars in a bank</td></tr>' +
          '<tr><td>💰 <a href="https://makerdao.com/" target="_blank">DAI</a></td><td>DAI</td><td>Decentralized</td><td>Crypto collateral (overcollateralized)</td></tr>' +
          '<tr><td>🏦 <a href="https://tether.to/" target="_blank">USDT</a></td><td>USDT</td><td>Centralized</td><td>"Trust me bro" (cash equivalents)</td></tr>' +
        '</table>'
      ) +
      relatedLinks([
        ['🏦','defi','DeFi'],['💰','get-eth','Get ETH'],
        ['📱','apps','Use Stablecoins in dApps'],['🔗','layer-2','Send Stablecoins Cheaply']
      ]);
  }
};

// ---------- LAYER 2 ----------
PAGES['layer-2'] = {
  title: 'Layer 2',
  content: function() {
    return breadcrumb([{link:'#/guides',text:'Use'},{text:'Layer 2'}]) +
      pageHero('🔗', 'LaYeR 2 nEtWoRkS!!!', 'Ethereum but FASTER and CHEAPER!!! Like putting a turbocharger on a rocket ship!!!') +
      FIRE +
      section('⚡ wHaT aRe LaYeR 2s?!? ⚡',
        '<p><font color="#ffff00"><b>Layer 2 (L2)</b></font> networks are built ON TOP of Ethereum to make it faster and cheaper. They handle transactions off the main chain, then batch them back to Ethereum for <font color="#00ff00"><b>SECURITY</b></font>.</p>' +
        '<p>Think of it like this: Ethereum is the <font color="#00ffff"><b>HIGHWAY</b></font>, and Layer 2s are the <font color="#ff8800"><b>EXPRESS LANES</b></font>!!!</p>'
      ) +
      section('🏎️ pOpUlAr LaYeR 2s!!! 🏎️',
        '<div class="card-grid">' +
          '<div class="card-item"><span class="card-emoji">🔴</span><div class="card-title"><a href="https://www.optimism.io/" target="_blank">Optimism</a></div><div class="card-desc">Optimistic rollups! Fast and cheap transactions.</div></div>' +
          '<div class="card-item"><span class="card-emoji">🔵</span><div class="card-title"><a href="https://arbitrum.io/" target="_blank">Arbitrum</a></div><div class="card-desc">The biggest L2 by TVL! Tons of dApps.</div></div>' +
          '<div class="card-item"><span class="card-emoji">🟣</span><div class="card-title"><a href="https://zksync.io/" target="_blank">zkSync</a></div><div class="card-desc">ZK rollups! Math-powered scaling.</div></div>' +
          '<div class="card-item"><span class="card-emoji">⬜</span><div class="card-title"><a href="https://base.org/" target="_blank">Base</a></div><div class="card-desc">Built by Coinbase. Easy onboarding.</div></div>' +
        '</div>'
      ) +
      section('📊 l2 StAtS!!! 📊',
        '<table class="stats-table"><tr>' +
          '<td><span class="stat-value">$0.01</span><span class="stat-label">Avg L2 Transaction 💸</span></td>' +
          '<td><span class="stat-value">100+</span><span class="stat-label">L2 Networks 🔗</span></td>' +
          '<td><span class="stat-value">10,000+</span><span class="stat-label">TPS Capacity ⚡</span></td>' +
          '<td><span class="stat-value">100%</span><span class="stat-label">Ethereum Security 🔒</span></td>' +
        '</tr></table>'
      ) +
      relatedLinks([
        ['💎','what-is-ethereum','What is Ethereum?'],['⛽','gas','Understanding Gas'],
        ['🏦','defi','DeFi on L2'],['📱','apps','L2 Apps']
      ]);
  }
};

// ---------- DAO ----------
PAGES['dao'] = {
  title: 'Decentralized Autonomous Organizations (DAOs)',
  content: function() {
    return breadcrumb([{link:'#/guides',text:'Use'},{text:'DAOs'}]) +
      pageHero('🏛️', 'DaOs!!!', 'Democracy on the blockchain!!! It\'s like a company, but everyone gets a vote and nobody wears a suit!!!') +
      FIRE +
      section('🗳️ wHaT iS a DaO?!? 🗳️',
        '<p>A <font color="#ffff00"><b>DAO (Decentralized Autonomous Organization)</b></font> is an organization represented by rules encoded as a computer program that is <font color="#00ff00"><b>TRANSPARENT</b></font>, controlled by the organization members, and not influenced by a central government.</p>' +
        '<p>Think of it as a <font color="#00ffff"><b>GROUP CHAT WITH A SHARED BANK ACCOUNT</b></font> and voting rights!!!</p>'
      ) +
      section('🏗️ hOw DaOs WoRk!!! 🏗️',
        '<ul class="feature-list">' +
          '<li>📜 <b>Smart Contract Rules</b> - The DAO\'s rules are written in code</li>' +
          '<li>🪙 <b>Token Voting</b> - Hold tokens = get votes. More tokens = more votes!</li>' +
          '<li>💰 <b>Treasury</b> - The DAO manages a shared treasury</li>' +
          '<li>📋 <b>Proposals</b> - Anyone can propose changes via <a href="https://snapshot.org/" target="_blank">Snapshot</a> or <a href="https://tally.xyz/" target="_blank">Tally</a></li>' +
          '<li>🗳️ <b>On-chain Voting</b> - Votes are recorded on the blockchain forever</li>' +
        '</ul>'
      ) +
      section('🌟 pOpUlAr DaOs!!! 🌟',
        '<table class="info-table">' +
          '<tr><th>DAO</th><th>Purpose</th><th>Vibe</th></tr>' +
          '<tr><td><a href="https://makerdao.com/" target="_blank">MakerDAO</a></td><td>Manages the DAI stablecoin</td><td>The OG DAO. Billions in TVL.</td></tr>' +
          '<tr><td><a href="https://uniswap.org/governance" target="_blank">Uniswap DAO</a></td><td>Governs Uniswap protocol</td><td>UNI holders run the biggest DEX</td></tr>' +
          '<tr><td><a href="https://aave.com/governance" target="_blank">Aave DAO</a></td><td>Governs Aave lending protocol</td><td>Decentralized lending decisions</td></tr>' +
          '<tr><td><a href="https://nouns.wtf/" target="_blank">Nouns DAO</a></td><td>Community treasury & art</td><td>One noun a day, forever. ⌐◨-◨</td></tr>' +
        '</table>'
      ) +
      relatedLinks([
        ['💎','what-is-ethereum','What is Ethereum?'],['📜','smart-contracts','Smart Contracts'],
        ['🏛️','governance','Governance'],['📱','apps','DAO Tools']
      ]);
  }
};

// ---------- STAKING ----------
PAGES['staking'] = {
  title: 'Stake ETH',
  content: function() {
    return breadcrumb([{link:'#/guides',text:'Use'},{text:'Staking'}]) +
      pageHero('🥩', 'StAkE yOuR ETH!!!', 'Put your ETH to work!!! Earn rewards while you sleep!!! (Not financial advice!!!)') +
      FIRE +
      section('📈 wHaT iS sTaKiNg?!? 📈',
        '<p><font color="#ffff00"><b>Staking</b></font> is the act of depositing 32 ETH to activate validator software. As a <font color="#00ff00"><b>VALIDATOR</b></font>, you\'ll be responsible for storing data, processing transactions, and adding new blocks to the blockchain. This helps keep Ethereum <font color="#00ffff"><b>SECURE</b></font> and earns you <font color="#ff8800"><b>REWARDS</b></font>!!!</p>'
      ) +
      section('💰 sTaKiNg oPtIoNs!!! 💰',
        '<table class="info-table">' +
          '<tr><th>Method</th><th>ETH Required</th><th>Difficulty</th><th>Vibe</th></tr>' +
          '<tr><td>🏠 Solo Staking</td><td>32 ETH</td><td>Hard</td><td>Maximum decentralization! The GIGACHAD option.</td></tr>' +
          '<tr><td>🤝 Staking as a Service</td><td>32 ETH</td><td>Medium</td><td>Someone else runs the node for you.</td></tr>' +
          '<tr><td>🌊 <a href="https://lido.fi/" target="_blank">Pooled Staking</a></td><td>Any amount!</td><td>Easy</td><td>Stake via <a href="https://lido.fi/" target="_blank">Lido</a> or <a href="https://rocketpool.net/" target="_blank">Rocket Pool</a>. Perfect for beginners.</td></tr>' +
          '<tr><td>🏢 CEX Staking</td><td>Any amount!</td><td>Easiest</td><td>Via <a href="https://www.coinbase.com/" target="_blank">Coinbase</a>, <a href="https://www.kraken.com/" target="_blank">Kraken</a>, etc. Not your keys tho...</td></tr>' +
        '</table>'
      ) +
      section('📊 sTaKiNg StAtS!!! 📊',
        '<table class="stats-table"><tr>' +
          '<td><span class="stat-value">$81.34B</span><span class="stat-label">Total Staked 🔒</span></td>' +
          '<td><span class="stat-value">~3-5%</span><span class="stat-label">APR Rewards 📈</span></td>' +
          '<td><span class="stat-value">900K+</span><span class="stat-label">Validators 👥</span></td>' +
          '<td><span class="stat-value">32 ETH</span><span class="stat-label">To Solo Stake 💎</span></td>' +
        '</tr></table>'
      ) +
      relatedLinks([
        ['💰','what-is-ether','What is ETH?'],['💎','what-is-ethereum','What is Ethereum?'],
        ['🖥️','run-a-node','Run a Node'],['🔒','security','Staking Security']
      ]);
  }
};

// ---------- DEVELOPERS ----------
PAGES['developers'] = {
  title: 'Developer Portal',
  content: function() {
    return breadcrumb([{text:'Developers'}]) +
      pageHero('👨‍💻', 'BuIlDeR\'s PoRtAl!!!', 'Welcome, fellow HACKER!!! (the good kind!!!) Build the future of the internet!!!') +
      FIRE +
      section('🚀 sTaRt BuIlDiNg!!! 🚀',
        '<p>Ethereum is home to the <font color="#ff8800"><b>LARGEST</b></font> developer community in Web3. Whether you know <font color="#ffff00">JavaScript</font>, <font color="#00ff00">Python</font>, <font color="#00ffff">Rust</font>, or want to learn <font color="#ff88ff"><a href="https://soliditylang.org/" target="_blank">Solidity</a></font>, there\'s a place for you!!!</p>' +
        '<div class="card-grid">' +
          '<div class="card-item"><span class="card-emoji">📚</span><div class="card-title"><a href="#/developers/docs">Documentation</a></div><div class="card-desc">The complete developer docs!</div></div>' +
          '<div class="card-item"><span class="card-emoji">🎓</span><div class="card-title"><a href="#/developers/tutorials">Tutorials</a></div><div class="card-desc">Step-by-step guides to build dApps!</div></div>' +
          '<div class="card-item"><span class="card-emoji">🛠️</span><div class="card-title"><a href="#/developers/learning-tools">Learning Tools</a></div><div class="card-desc">Interactive tools to learn Solidity!</div></div>' +
          '<div class="card-item"><span class="card-emoji">🎨</span><div class="card-title"><a href="#/developers/docs/design-and-ux">UX/UI Design</a></div><div class="card-desc">Design beautiful dApps!</div></div>' +
        '</div>'
      ) +
      section('💻 cOdE eXaMpLeS!!! 💻',
        '<div class="code-card"><h4>🏦 Your own bank</h4><code style="color:#0f0">contract MyBank {\n  mapping(address =&gt; uint) public balances;\n  function deposit() public payable { balances[msg.sender] += msg.value; }\n}</code></div>' +
        '<div class="code-card"><h4>💰 Your own currency</h4><code style="color:#0f0">contract MyCoin is ERC20 {\n  constructor() ERC20("MyCoin", "MC") {\n    _mint(msg.sender, 1000000 * 10**18);\n  }\n}</code></div>' +
        '<div class="code-card"><h4>🌐 Connect to Ethereum (JavaScript)</h4><code style="color:#0f0">const provider = new ethers.BrowserProvider(window.ethereum);\nconst signer = await provider.getSigner();\nconst balance = await provider.getBalance(signer.address);</code></div>'
      ) +
      relatedLinks([
        ['📚','developers/docs','Full Documentation'],['🎓','developers/tutorials','Tutorials'],
        ['💰','community/grants','Developer Grants'],['🏢','enterprise','Enterprise Solutions']
      ]);
  }
};

// ---------- DEVELOPERS/DOCS ----------
PAGES['developers/docs'] = {
  title: 'Developer Documentation',
  content: function() {
    return breadcrumb([{link:'#/developers',text:'Developers'},{text:'Documentation'}]) +
      pageHero('📚', 'DeVeLoPeR dOcS!!!', 'Everything you need to build on Ethereum!!! It\'s like a textbook but WAY more fun!!!') +
      FIRE +
      section('📖 dOcUmEnTaTiOn!!! 📖',
        '<p>Welcome to the Ethereum developer documentation! Here you\'ll find everything from <font color="#00ff00"><b>beginner guides</b></font> to <font color="#ff0000"><b>advanced protocols</b></font>.</p>' +
        '<ul class="feature-list">' +
          '<li>📜 <b>Intro to Ethereum</b> - The basics of how Ethereum works under the hood</li>' +
          '<li>🔗 <b>Ethereum Stack</b> - Overview of the full Ethereum technology stack</li>' +
          '<li>📜 <a href="#/smart-contracts"><b>Smart Contracts</b></a> - Write self-executing code on the blockchain</li>' +
          '<li>🛠️ <b>Development Frameworks</b> - <a href="https://hardhat.org/" target="_blank">Hardhat</a>, <a href="https://getfoundry.sh/" target="_blank">Foundry</a>, and more</li>' +
          '<li>⛽ <a href="#/gas"><b>Gas & Fees</b></a> - Understanding transaction costs</li>' +
          '<li>🔐 <b>Security</b> - Best practices for secure smart contracts</li>' +
          '<li>🧪 <b>Testing</b> - How to test your smart contracts</li>' +
          '<li>🚀 <b>Deploying</b> - Launch your dApp to the world!</li>' +
          '<li>🔗 <a href="#/layer-2"><b>Layer 2 Development</b></a> - Build on L2 networks</li>' +
        '</ul>'
      ) +
      relatedLinks([
        ['🎓','developers/tutorials','Tutorials'],['🛠️','developers/learning-tools','Learning Tools'],
        ['👨‍💻','developers','Builder\'s Home'],['💰','community/grants','Grants']
      ]);
  }
};

// ---------- SMART CONTRACTS ----------
PAGES['smart-contracts'] = {
  title: 'Smart Contracts',
  content: function() {
    return breadcrumb([{link:'#/learn',text:'Learn'},{text:'Smart Contracts'}]) +
      pageHero('📜', 'SmArT cOnTrAcTs!!!', 'Code that runs itself!!! It\'s like a vending machine, but for ANYTHING!!!') +
      FIRE +
      section('🤖 wHaT aRe SmArT cOnTrAcTs?!? 🤖',
        '<p>A <font color="#ffff00"><b>smart contract</b></font> is simply a program that runs on the Ethereum blockchain. It\'s a collection of code (its <font color="#00ff00"><b>functions</b></font>) and data (its <font color="#00ffff"><b>state</b></font>) that resides at a specific address on the blockchain.</p>' +
        '<p>Once deployed, a smart contract <font color="#ff0000"><b>CANNOT BE CHANGED</b></font>. Code is law! The contract will execute exactly as written, no matter what.</p>' +
        '<div class="alert-box info">💡 <b>Think of it like a vending machine:</b> Put in money + make a selection = get your item. No shopkeeper needed. No negotiation. Just CODE.</div>'
      ) +
      section('💻 eXaMpLe SmArT cOnTrAcT!!! 💻',
        '<div class="code-card"><h4>📜 A Simple Storage Contract (Solidity)</h4><code style="color:#0f0;white-space:pre">// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract SimpleStorage {\n    uint256 storedData;\n\n    function set(uint256 x) public {\n        storedData = x;\n    }\n\n    function get() public view returns (uint256) {\n        return storedData;\n    }\n}</code></div>' +
        '<p style="color:#888;font-size:12px">This simple contract stores a number on the blockchain forever! Anyone can read it, and anyone can change it. <font color="#ff0000"><b>THE POWER OF SMART CONTRACTS!!!</b></font></p>'
      ) +
      relatedLinks([
        ['👨‍💻','developers','Developer Portal'],['📚','developers/docs','Documentation'],
        ['⛽','gas','Gas Fees'],['🔒','security','Smart Contract Security']
      ]);
  }
};

// ---------- WEB3 ----------
PAGES['web3'] = {
  title: 'What is Web3?',
  content: function() {
    return breadcrumb([{link:'#/learn',text:'Learn'},{text:'Web3'}]) +
      pageHero('🌐', 'WhAt Is WeB3?!?', 'The internet is evolving!!! Web1 → Web2 → WEB3!!! We are HERE!!!') +
      FIRE +
      section('📡 tHe EvOlUtIoN oF tHe WeB!!! 📡',
        '<table class="info-table">' +
          '<tr><th>Era</th><th>Years</th><th>Vibe</th><th>You Were</th></tr>' +
          '<tr><td>🖥️ Web1</td><td>1990-2004</td><td>Read-only. Static pages. GeoCities. (This website\'s aesthetic!!!)</td><td>A consumer</td></tr>' +
          '<tr><td>📱 Web2</td><td>2004-now</td><td>Read-write. Social media. Big tech owns your data.</td><td>The product</td></tr>' +
          '<tr><td>💎 Web3</td><td>NOW!!!</td><td>Read-write-OWN. Decentralized. YOU own your data!</td><td>The OWNER</td></tr>' +
        '</table>'
      ) +
      section('🔑 wHy WeB3?!? 🔑',
        '<ul class="feature-list">' +
          '<li>🔐 <b>Ownership</b> - You OWN your data, your identity, your assets</li>' +
          '<li>🚫 <b>No Censorship</b> - Nobody can take down your content</li>' +
          '<li>💰 <b>Native Payments</b> - Send money as easily as sending an email</li>' +
          '<li>🤝 <b>Trustless</b> - The code is the guarantee, not a company\'s pinky promise</li>' +
          '<li>🌍 <b>Permissionless</b> - Anyone can participate, no gatekeepers</li>' +
        '</ul>'
      ) +
      relatedLinks([
        ['💎','what-is-ethereum','What is Ethereum?'],['📱','apps','Web3 Apps'],
        ['🏛️','dao','DAOs'],['🆔','decentralized-identity','Decentralized Identity']
      ]);
  }
};

// ---------- GAS ----------
PAGES['gas'] = {
  title: 'Gas Fees',
  content: function() {
    return breadcrumb([{link:'#/learn',text:'Learn'},{text:'Gas Fees'}]) +
      pageHero('⛽', 'GaS fEeS!!!', 'The cost of doing business on the World Computer!!! Sometimes cheap, sometimes... not so cheap!!!') +
      FIRE +
      section('💸 wHaT iS gAs?!? 💸',
        '<p><font color="#ffff00"><b>Gas</b></font> refers to the unit that measures the amount of computational effort required to execute specific operations on the Ethereum network. Every transaction on Ethereum requires gas, which is paid in <font color="#00ff00"><b>ETH</b></font>.</p>' +
        '<p>Gas is like the <font color="#ff0000"><b>POSTAGE STAMP</b></font> of the blockchain. Want to send a letter (transaction)? You need a stamp (gas)!</p>' +
        '<div class="alert-box info">💡 <b>Current average gas cost:</b> $0.0016 per transaction! That\'s less than the fee your bank charges you to BREATHE!!!</div>'
      ) +
      section('📊 gAs TiPs!!! 📊',
        '<ul class="feature-list">' +
          '<li>⏰ <b>Timing Matters</b> - Gas is cheaper during off-peak hours (weekends, late night)</li>' +
          '<li>🔗 <a href="#/layer-2"><b>Use Layer 2!</b></a> - L2 networks have much lower gas fees</li>' +
          '<li>📦 <b>Batch Transactions</b> - Combine multiple actions into one transaction</li>' +
          '<li>🔥 <b>EIP-1559</b> - A portion of every gas fee is BURNED, making ETH deflationary!</li>' +
        '</ul>'
      ) +
      relatedLinks([
        ['💰','what-is-ether','What is ETH?'],['🔗','layer-2','Layer 2 (Lower Fees!)'],
        ['📜','smart-contracts','Smart Contracts'],['👨‍💻','developers/docs','Developer Docs']
      ]);
  }
};

// ---------- SECURITY ----------
PAGES['security'] = {
  title: 'Security & Scams',
  content: function() {
    return breadcrumb([{link:'#/learn',text:'Learn'},{text:'Security'}]) +
      pageHero('🔒', 'SeCuRiTy & ScAmS!!!', 'DON\'T GET REKT!!! Stay safe in the wild west of Web3!!!') +
      FIRE +
      '<div class="alert-box" style="margin:15px 5px;font-size:16px;text-align:center"><b>⚠️ RULE #1: IF IT SOUNDS TOO GOOD TO BE TRUE, IT IS!!! ⚠️</b></div>' +
      section('🚨 cOmMoN sCaMs!!! 🚨',
        '<table class="info-table">' +
          '<tr><th>Scam Type</th><th>How It Works</th><th>How to Avoid</th></tr>' +
          '<tr><td>🎁 Giveaway Scams</td><td>"Send 1 ETH, get 2 back!"</td><td>NOBODY gives free crypto. EVER.</td></tr>' +
          '<tr><td>🎣 Phishing</td><td>Fake websites that look real</td><td>Always check the URL! Bookmark official sites.</td></tr>' +
          '<tr><td>🤖 Fake Support</td><td>"DM me for help with your wallet"</td><td>Official support will NEVER DM you first!</td></tr>' +
          '<tr><td>💎 Rug Pulls</td><td>Devs create a token, then disappear with your money</td><td>DYOR (Do Your Own Research)!!!</td></tr>' +
          '<tr><td>🔑 Seed Phrase Theft</td><td>"Enter your seed phrase to verify"</td><td>NEVER share your seed phrase with ANYONE!!!</td></tr>' +
        '</table>'
      ) +
      section('🛡️ sAfEtY cHeCkLiSt!!! 🛡️',
        '<ul class="feature-list">' +
          '<li>🔐 <b>Use a Hardware Wallet</b> for large amounts</li>' +
          '<li>✅ <b>Enable 2FA</b> on ALL your accounts</li>' +
          '<li>🔑 <b>NEVER share your seed phrase</b> - write it on paper, store it safely</li>' +
          '<li>🔍 <b>Verify URLs</b> before connecting your wallet</li>' +
          '<li>🧠 <b>DYOR</b> - Do Your Own Research before investing</li>' +
          '<li>🚫 <b>Don\'t trust, verify</b> - If someone DMs you, they\'re probably a scammer</li>' +
        '</ul>'
      ) +
      relatedLinks([
        ['💳','wallets','Secure Wallets'],['💰','get-eth','Safe Ways to Get ETH'],
        ['📚','learn','Learn More'],['📖','guides','Step-by-Step Guides']
      ]);
  }
};

// ---------- WHITEPAPER ----------
PAGES['whitepaper'] = {
  title: 'Ethereum Whitepaper',
  content: function() {
    return breadcrumb([{link:'#/learn',text:'Learn'},{text:'Whitepaper'}]) +
      pageHero('📄', 'ThE eThErEuM wHiTePaPeR!!!', 'The document that started it ALL!!! Written by a 19-year-old in 2013!!!') +
      FIRE +
      section('📜 a NeXt-GeNeRaTiOn SmArT cOnTrAcT pLaTfOrM!!! 📜',
        '<p>The <font color="#ffff00"><b>Ethereum Whitepaper</b></font> was published by <font color="#00ffff"><b><a href="https://vitalik.eth.limo/" target="_blank">Vitalik Buterin</a></b></font> in 2013. It proposed a blockchain platform with a built-in programming language, allowing anyone to write <font color="#ff8800"><b>smart contracts</b></font> and <font color="#00ff00"><b>decentralized applications</b></font>.</p>' +
        '<div class="alert-box info">💡 <b>Fun fact:</b> Vitalik originally wanted to add smart contract functionality to <a href="https://bitcoin.org/" target="_blank">Bitcoin</a>. When the Bitcoin community said no, he created his own blockchain. Absolute LEGEND move!!!</div>' +
        '<p>The whitepaper covers:</p>' +
        '<ul class="feature-list">' +
          '<li>📖 History and motivation behind Ethereum</li>' +
          '<li>🔧 The Ethereum Virtual Machine (EVM)</li>' +
          '<li>📜 Smart contract programming</li>' +
          '<li>💰 The ETH token and gas mechanism</li>' +
          '<li>🔒 Security model and consensus</li>' +
          '<li>🌍 Applications: tokens, DeFi, DAOs, identity</li>' +
        '</ul>'
      ) +
      relatedLinks([
        ['💎','what-is-ethereum','What is Ethereum?'],['🗺️','roadmap','Ethereum Roadmap'],
        ['📚','history','Ethereum History'],['🏛️','governance','Governance']
      ]);
  }
};

// ---------- ROADMAP ----------
PAGES['roadmap'] = {
  title: 'Ethereum Roadmap',
  content: function() {
    return breadcrumb([{link:'#/learn',text:'Learn'},{text:'Roadmap'}]) +
      pageHero('🗺️', 'ThE eThErEuM rOaDmAp!!!', 'Where we\'re going, we don\'t need roads!!! (Actually we do, hence the roadmap!!!)') +
      FIRE +
      section('🚀 tHe RoAd To ThE mOoN!!! 🚀',
        '<p>Ethereum is constantly evolving and improving. Here\'s where we\'re headed:</p>' +
        '<div class="timeline-item"><div class="timeline-year">✅ The Merge (2022)</div><div class="timeline-text">Proof of Work → Proof of Stake. Reduced energy consumption by 99.95%!!! 🌱</div></div>' +
        '<div class="timeline-item"><div class="timeline-year">✅ Shanghai/Capella (2023)</div><div class="timeline-text">Enabled staked ETH withdrawals. Validators can finally access their rewards!</div></div>' +
        '<div class="timeline-item"><div class="timeline-year">✅ Dencun (2024)</div><div class="timeline-text">Proto-danksharding! Made Layer 2 transactions 10-100x cheaper! 💸</div></div>' +
        '<div class="timeline-item"><div class="timeline-year">🔜 Pectra (2025)</div><div class="timeline-text">Account abstraction, validator improvements, and more blob space!</div></div>' +
        '<div class="timeline-item"><div class="timeline-year">🔮 Future</div><div class="timeline-text">Full danksharding, Verkle trees, statelessness, and THE ENDGAME!!!</div></div>'
      ) +
      section('🎯 tHe FiVe PiLlArS!!! 🎯',
        '<div class="card-grid">' +
          '<div class="card-item"><span class="card-emoji">📦</span><div class="card-title">The Surge</div><div class="card-desc">100,000+ TPS through rollups! ZOOM ZOOM!</div></div>' +
          '<div class="card-item"><span class="card-emoji">🧹</span><div class="card-title">The Scourge</div><div class="card-desc">Censorship resistance and decentralization!</div></div>' +
          '<div class="card-item"><span class="card-emoji">🔐</span><div class="card-title">The Verge</div><div class="card-desc">Verkle trees and stateless verification!</div></div>' +
          '<div class="card-item"><span class="card-emoji">🧼</span><div class="card-title">The Purge</div><div class="card-desc">Reduce node storage requirements!</div></div>' +
        '</div>'
      ) +
      relatedLinks([
        ['📄','whitepaper','Whitepaper'],['📚','history','Ethereum History'],
        ['🔒','roadmap/security','Security Improvements'],['🏛️','eips','EIPs']
      ]);
  }
};

// ---------- COMMUNITY ----------
PAGES['community'] = {
  title: 'Community Hub',
  content: function() {
    return breadcrumb([{text:'Community'}]) +
      pageHero('👥', 'ThE eThErEuM cOmMuNiTy!!!', 'The most passionate, welcoming, and slightly unhinged community on the internet!!!') +
      FIRE +
      section('🤝 jOiN uS!!! 🤝',
        '<p>The Ethereum community includes <font color="#ffff00"><b>MILLIONS</b></font> of developers, designers, artists, writers, gamers, and enthusiasts from all over the world!</p>' +
        '<div class="card-grid">' +
          '<div class="card-item"><span class="card-emoji">💬</span><div class="card-title"><a href="#/community/online">Online Communities</a></div><div class="card-desc">Discord, Reddit, forums, and more!</div></div>' +
          '<div class="card-item"><span class="card-emoji">🎉</span><div class="card-title"><a href="#/community/events">Events</a></div><div class="card-desc">Meetups, conferences, hackathons!</div></div>' +
          '<div class="card-item"><span class="card-emoji">📝</span><div class="card-title"><a href="#/contributing">Contributing</a></div><div class="card-desc">Help build ethereum.org!</div></div>' +
          '<div class="card-item"><span class="card-emoji">💰</span><div class="card-title"><a href="#/community/grants">Grants</a></div><div class="card-desc">Get funded to build on Ethereum!</div></div>' +
        '</div>'
      ) +
      section('🌍 fInD yOuR tRiBe!!! 🌍',
        '<ul class="feature-list">' +
          '<li>💬 <a href="https://discord.gg/ethereum-org" target="_blank">Discord</a> - Chat with fellow Ethereans in real-time!</li>' +
          '<li>🐦 <a href="https://x.com/EthDotOrg" target="_blank">X (Twitter)</a> - Follow for news and memes!</li>' +
          '<li>🐙 <a href="https://github.com/ethereum/ethereum-org-website/" target="_blank">GitHub</a> - Contribute to the codebase!</li>' +
          '<li>📰 <a href="https://blog.ethereum.org/" target="_blank">Blog</a> - Official updates from the foundation!</li>' +
        '</ul>'
      ) +
      relatedLinks([
        ['🎉','community/events','Events'],['🔬','community/research','Research'],
        ['📝','contributing','Contributing'],['🐛','bug-bounty','Bug Bounty']
      ]);
  }
};

// ---------- GUIDES ----------
PAGES['guides'] = {
  title: 'Ethereum Guides',
  content: function() {
    return breadcrumb([{text:'Guides'}]) +
      pageHero('📖', 'StEp-By-StEp GuIdEs!!!', 'We\'ll hold your hand through EVERYTHING!!! (Not literally, this is a website!!!)') +
      FIRE +
      section('🗺️ gEtTiNg StArTeD!!! 🗺️',
        '<p>New to Ethereum? These guides will walk you through everything step by step!</p>' +
        '<ul class="feature-list">' +
          '<li>💳 <b>How to create a wallet</b> - <a href="#/wallets/find-wallet">Find a wallet</a> and set it up</li>' +
          '<li>💰 <b>How to buy ETH</b> - <a href="#/get-eth">Get your first ETH</a></li>' +
          '<li>📤 <b>How to send ETH</b> - Send ETH to another address</li>' +
          '<li>🔗 <b>How to use a DEX</b> - <a href="#/defi">Swap tokens on DeFi</a></li>' +
          '<li>🎨 <b>How to buy an NFT</b> - <a href="#/nft">Enter the NFT world</a></li>' +
          '<li>🥩 <b>How to stake ETH</b> - <a href="#/staking">Start earning rewards</a></li>' +
          '<li>🔗 <b>How to bridge to L2</b> - <a href="#/layer-2">Move to Layer 2</a></li>' +
          '<li>🆔 <b>How to get an <a href="https://ens.domains/" target="_blank">ENS</a> name</b> - Get your own .eth domain!</li>' +
        '</ul>'
      ) +
      adBanner('📚 KNOWLEDGE = POWER = MONEY = MORE ETH!!! 📚', 'Start learning NOW!!!', '#/learn', 'Visit Learn Hub!', 'linear-gradient(135deg,#0088ff,#0044aa)') +
      relatedLinks([
        ['📚','learn','Learn Hub'],['💎','what-is-ethereum','What is Ethereum?'],
        ['🔒','security','Stay Safe'],['📱','apps','Try dApps']
      ]);
  }
};

// ---------- GLOSSARY ----------
PAGES['glossary'] = {
  title: 'Glossary',
  content: function() {
    return breadcrumb([{link:'#/learn',text:'Learn'},{text:'Glossary'}]) +
      pageHero('📖', 'ThE cRyPtO gLoSsArY!!!', 'All the jargon, slang, and LINGO you need to survive in Web3!!!') +
      FIRE +
      section('📚 A-Z oF cRyPtO!!! 📚',
        '<div class="glossary-term">🅰️ Airdrop</div><div class="glossary-def">Free tokens sent to your wallet! Like finding money on the ground but DIGITAL!!!</div>' +
        '<div class="glossary-term">🐻 Bear Market</div><div class="glossary-def">When prices go down. Time to buy the dip? (Not financial advice!!!)</div>' +
        '<div class="glossary-term">🔗 Blockchain</div><div class="glossary-def">A chain of blocks (duh). Each block contains transactions that are linked together cryptographically.</div>' +
        '<div class="glossary-term">📈 Bull Market</div><div class="glossary-def">When prices go up! WAGMI!!! 🚀🌙</div>' +
        '<div class="glossary-term">🏛️ DAO</div><div class="glossary-def">Decentralized Autonomous Organization. Like a company but run by code and voting. <a href="#/dao">Learn more</a></div>' +
        '<div class="glossary-term">🏦 DeFi</div><div class="glossary-def">Decentralized Finance. Be your own bank! <a href="#/defi">Learn more</a></div>' +
        '<div class="glossary-term">💎🙌 Diamond Hands</div><div class="glossary-def">Holding your crypto no matter what. The opposite of paper hands.</div>' +
        '<div class="glossary-term">📤 DYOR</div><div class="glossary-def">Do Your Own Research. The most important acronym in crypto!!!</div>' +
        '<div class="glossary-term">⛽ Gas</div><div class="glossary-def">The fee for transactions on Ethereum. <a href="#/gas">Learn more</a></div>' +
        '<div class="glossary-term">☀️ GM</div><div class="glossary-def">Good Morning! The universal crypto greeting.</div>' +
        '<div class="glossary-term">💎 HODL</div><div class="glossary-def">Hold On for Dear Life! Originally a typo, now a way of life.</div>' +
        '<div class="glossary-term">🔗 L2</div><div class="glossary-def">Layer 2. Scaling solutions built on Ethereum. <a href="#/layer-2">Learn more</a></div>' +
        '<div class="glossary-term">🎨 NFT</div><div class="glossary-def">Non-Fungible Token. Unique digital item on the blockchain. <a href="#/nft">Learn more</a></div>' +
        '<div class="glossary-term">📄🙌 Paper Hands</div><div class="glossary-def">Selling your crypto at the first sign of trouble. The opposite of diamond hands.</div>' +
        '<div class="glossary-term">🔑 Seed Phrase</div><div class="glossary-def">12-24 words that are the keys to your crypto. NEVER share them!!!</div>' +
        '<div class="glossary-term">📜 Smart Contract</div><div class="glossary-def">Self-executing code on the blockchain. <a href="#/smart-contracts">Learn more</a></div>' +
        '<div class="glossary-term">🥩 Staking</div><div class="glossary-def">Locking up ETH to help secure the network and earn rewards. <a href="#/staking">Learn more</a></div>' +
        '<div class="glossary-term">🪙 Stablecoin</div><div class="glossary-def">Crypto pegged to a fiat currency (usually $1). <a href="#/stablecoins">Learn more</a></div>' +
        '<div class="glossary-term">🌐 Web3</div><div class="glossary-def">The decentralized internet. Read-write-OWN! <a href="#/web3">Learn more</a></div>' +
        '<div class="glossary-term">🚀 WAGMI</div><div class="glossary-def">We\'re All Gonna Make It!!! The crypto battle cry.</div>' +
        '<div class="glossary-term">🐋 Whale</div><div class="glossary-def">Someone who holds A LOT of crypto. They can move markets with a single trade!!!</div>'
      );
  }
};

// ---------- QUIZZES ----------
PAGES['quizzes'] = {
  title: 'Quiz Hub',
  content: function() {
    return breadcrumb([{link:'#/learn',text:'Learn'},{text:'Quizzes'}]) +
      pageHero('🧠', 'QuIz HuB!!!', 'Test your Ethereum knowledge!!! Are you a CRYPTO N00B or a BLOCKCHAIN WIZARD?!?') +
      FIRE +
      section('🎮 tEsT yOuR kNoWlEdGe!!! 🎮',
        '<div id="quiz-area">' +
          '<p style="color:#ffff00;font-size:16px"><b>Question 1:</b> What is Ethereum?</p>' +
          '<button class="quiz-option" onclick="checkAnswer(this,true)">A) A decentralized, open-source blockchain platform</button>' +
          '<button class="quiz-option" onclick="checkAnswer(this,false)">B) A type of pizza topping</button>' +
          '<button class="quiz-option" onclick="checkAnswer(this,false)">C) A brand of headphones</button>' +
          '<button class="quiz-option" onclick="checkAnswer(this,false)">D) A video game console</button>' +
          '<div style="margin-top:20px">' +
          '<p style="color:#ffff00;font-size:16px"><b>Question 2:</b> Who created Ethereum?</p>' +
          '<button class="quiz-option" onclick="checkAnswer(this,false)">A) Satoshi Nakamoto</button>' +
          '<button class="quiz-option" onclick="checkAnswer(this,true)">B) Vitalik Buterin</button>' +
          '<button class="quiz-option" onclick="checkAnswer(this,false)">C) Elon Musk</button>' +
          '<button class="quiz-option" onclick="checkAnswer(this,false)">D) Mark Zuckerberg</button>' +
          '</div>' +
          '<div style="margin-top:20px">' +
          '<p style="color:#ffff00;font-size:16px"><b>Question 3:</b> What do you need to pay for Ethereum transactions?</p>' +
          '<button class="quiz-option" onclick="checkAnswer(this,false)">A) Visa card</button>' +
          '<button class="quiz-option" onclick="checkAnswer(this,false)">B) PayPal</button>' +
          '<button class="quiz-option" onclick="checkAnswer(this,true)">C) Gas (paid in ETH)</button>' +
          '<button class="quiz-option" onclick="checkAnswer(this,false)">D) Prayers and hopes</button>' +
          '</div>' +
          '<div style="margin-top:20px">' +
          '<p style="color:#ffff00;font-size:16px"><b>Question 4:</b> What should you NEVER share with anyone?</p>' +
          '<button class="quiz-option" onclick="checkAnswer(this,false)">A) Your favorite color</button>' +
          '<button class="quiz-option" onclick="checkAnswer(this,false)">B) Your ETH address</button>' +
          '<button class="quiz-option" onclick="checkAnswer(this,true)">C) Your seed phrase / private key</button>' +
          '<button class="quiz-option" onclick="checkAnswer(this,false)">D) Your love of blockchain</button>' +
          '</div>' +
        '</div>'
      );
  }
};

// Quiz check function
window.checkAnswer = function(btn, correct) {
  if (correct) {
    btn.style.background = '#004400';
    btn.style.borderColor = '#00ff00';
    btn.textContent += ' ✅ CORRECT!!!';
  } else {
    btn.style.background = '#440000';
    btn.style.borderColor = '#ff0000';
    btn.textContent += ' ❌ WRONG!!!';
  }
};

// ========== TEMPLATE-BASED PAGES (less detailed) ==========

function templatePage(emoji, title, desc, content, links) {
  return function() {
    var bc = title.split(' ');
    return breadcrumb([{text: title}]) +
      pageHero(emoji, alternatingCaps(title) + '!!!', desc) +
      FIRE + content +
      (links ? relatedLinks(links) : '');
  };
}

function alternatingCaps(str) {
  return str.split('').map(function(c,i) {
    return i % 2 === 0 ? c.toUpperCase() : c.toLowerCase();
  }).join('');
}

// RUN A NODE
PAGES['run-a-node'] = {
  title: 'Run a Node',
  content: templatePage('🖥️', 'Run a Node', 'Become part of the Ethereum network!!! Run your own node and help decentralize the world!!!',
    section('🖥️ wHy RuN a NoDe?!? 🖥️',
      '<p>Running an Ethereum node means you\'re running the <font color="#ffff00"><b>ACTUAL ETHEREUM SOFTWARE</b></font> on your computer. You become part of the network!!!</p>' +
      '<ul class="feature-list">' +
        '<li>🔒 <b>Verify transactions yourself</b> - Don\'t trust, verify!</li>' +
        '<li>🌐 <b>Support decentralization</b> - More nodes = more secure</li>' +
        '<li>💪 <b>Sovereignty</b> - Your node, your rules</li>' +
        '<li>🚀 <b>Full access</b> - Direct access to the Ethereum network</li>' +
      '</ul>' +
      '<div class="alert-box info">💡 <b>Requirements:</b> A computer with 4+ cores, 16GB+ RAM, 2TB+ SSD, and a stable internet connection. Your electricity bill will go up, but you\'ll be <b>DECENTRALIZING THE WORLD</b>!!!</div>'
    ),
    [['💎','what-is-ethereum','What is Ethereum?'],['🥩','staking','Stake ETH'],
     ['🔒','security','Security'],['👨‍💻','developers','Developer Portal']]
  )
};

// DECENTRALIZED IDENTITY
PAGES['decentralized-identity'] = {
  title: 'Decentralized Identity',
  content: templatePage('🆔', 'Decentralized Identity', 'Own your identity!!! No more giving your data to Big Tech!!!',
    section('🆔 yOuR iDeNtItY, yOuR rUlEs!!! 🆔',
      '<p><font color="#ffff00"><b>Decentralized Identity</b></font> means YOU own and control your personal data, not Facebook, Google, or any other corporation!!!</p>' +
      '<ul class="feature-list">' +
        '<li>🔐 <b>Self-Sovereign</b> - You own your identity data</li>' +
        '<li>🌐 <b>Portable</b> - Use the same identity across all dApps</li>' +
        '<li>🔒 <b>Private</b> - Share only what you want, when you want</li>' +
        '<li>📛 <b><a href="https://ens.domains/" target="_blank">ENS</a> Names</b> - Get a human-readable .eth name instead of 0x123...</li>' +
      '</ul>'
    ),
    [['🌐','web3','What is Web3?'],['💳','wallets','Ethereum Wallets'],
     ['📱','apps','dApps'],['🏛️','dao','DAOs']]
  )
};

// HISTORY
PAGES['history'] = {
  title: 'Ethereum History',
  content: templatePage('📚', 'Ethereum History', 'The epic saga of Ethereum, from whitepaper to world computer!!!',
    section('📜 tHe EtHeReUm TiMeLiNe!!! 📜',
      '<div class="timeline-item"><div class="timeline-year">2013</div><div class="timeline-text">Vitalik Buterin publishes the Ethereum whitepaper at age 19!!!</div></div>' +
      '<div class="timeline-item"><div class="timeline-year">2014</div><div class="timeline-text">Ethereum crowdsale raises 31,529 BTC!!! The ICO to end all ICOs.</div></div>' +
      '<div class="timeline-item"><div class="timeline-year">2015</div><div class="timeline-text">Ethereum mainnet launches!!! "Frontier" goes live on July 30th.</div></div>' +
      '<div class="timeline-item"><div class="timeline-year">2016</div><div class="timeline-text">The DAO hack and the great chain split. <a href="https://ethereumclassic.org/" target="_blank">Ethereum Classic</a> is born.</div></div>' +
      '<div class="timeline-item"><div class="timeline-year">2017</div><div class="timeline-text">ICO mania!!! <a href="https://www.cryptokitties.co/" target="_blank">CryptoKitties</a> breaks the network!!! ETH hits $1,400.</div></div>' +
      '<div class="timeline-item"><div class="timeline-year">2020</div><div class="timeline-text">DeFi Summer!!! Yield farming, liquidity mining, food tokens. What a time to be alive.</div></div>' +
      '<div class="timeline-item"><div class="timeline-year">2021</div><div class="timeline-text">NFT explosion! EIP-1559 burns ETH! ETH hits $4,800!!!</div></div>' +
      '<div class="timeline-item"><div class="timeline-year">2022</div><div class="timeline-text">THE MERGE!!! Proof of Stake!!! Energy reduced by 99.95%!!!</div></div>' +
      '<div class="timeline-item"><div class="timeline-year">2024</div><div class="timeline-text">Dencun upgrade! L2 fees drop to near-zero. Blob space activated!</div></div>' +
      '<div class="timeline-item"><div class="timeline-year">2025-26</div><div class="timeline-text">Pectra upgrade, account abstraction, and more scaling!!! THE FUTURE IS NOW!!!</div></div>'
    ),
    [['📄','whitepaper','Whitepaper'],['🗺️','roadmap','Roadmap'],
     ['🏛️','governance','Governance'],['📜','eips','EIPs']]
  )
};

// GOVERNANCE
PAGES['governance'] = {
  title: 'Ethereum Governance',
  content: templatePage('🏛️', 'Governance', 'How decisions are made in a network with NO CEO, NO board, and NO headquarters!!!',
    section('🗳️ hOw EtHeReUm Is GoVeRnEd!!! 🗳️',
      '<p>Ethereum has no CEO, no president, no dictator. It\'s governed through a process of <font color="#ffff00"><b>rough consensus</b></font> involving developers, researchers, validators, users, and the broader community.</p>' +
      '<ul class="feature-list">' +
        '<li>📝 <b>EIPs</b> - <a href="#/eips">Ethereum Improvement Proposals</a> are how changes are proposed</li>' +
        '<li>💬 <b>Discussion</b> - Ideas are debated on forums, calls, and social media</li>' +
        '<li>🔧 <b>Implementation</b> - Client teams build and test the changes</li>' +
        '<li>🗳️ <b>Consensus</b> - The community agrees (or disagrees!) on changes</li>' +
        '<li>🚀 <b>Deployment</b> - Changes go live in network upgrades</li>' +
      '</ul>'
    ),
    [['📜','eips','EIPs'],['🗺️','roadmap','Roadmap'],
     ['📚','history','History'],['🏛️','dao','DAOs']]
  )
};

// EIPS
PAGES['eips'] = {
  title: 'Ethereum Improvement Proposals',
  content: templatePage('📜', 'EIPs', 'The formal process for proposing changes to Ethereum!!! Democracy in action!!!',
    section('📋 wHaT aRe EIPs?!? 📋',
      '<p><font color="#ffff00"><b>EIPs (Ethereum Improvement Proposals)</b></font> are design documents providing information about proposed changes to Ethereum. Anyone can write one! (Yes, even YOU!!!)</p>' +
      '<table class="info-table">' +
        '<tr><th>EIP</th><th>What It Did</th><th>Impact</th></tr>' +
        '<tr><td>EIP-1559</td><td>Burn base fees</td><td>Made ETH deflationary! 🔥</td></tr>' +
        '<tr><td>EIP-721</td><td>NFT standard</td><td>Created the NFT ecosystem! 🎨</td></tr>' +
        '<tr><td>EIP-20</td><td>Token standard (ERC-20)</td><td>Every token you\'ve heard of! 🪙</td></tr>' +
        '<tr><td>EIP-4844</td><td>Blob transactions</td><td>Made L2s 10-100x cheaper! ⚡</td></tr>' +
      '</table>'
    ),
    [['🏛️','governance','Governance'],['🗺️','roadmap','Roadmap'],
     ['📚','history','History'],['👨‍💻','developers','Developer Portal']]
  )
};

// CONTRIBUTING
PAGES['contributing'] = {
  title: 'Contributing to ethereum.org',
  content: templatePage('📝', 'Contributing', 'Help us build the BEST (and most Comic Sans-filled) website on the internet!!!',
    section('🤝 hOw To CoNtRiBuTe!!! 🤝',
      '<p>The ethereum.org website is open source and built by the community! Here\'s how you can help:</p>' +
      '<ul class="feature-list">' +
        '<li>📝 <b>Content</b> - Write articles, fix typos, improve explanations</li>' +
        '<li>🌍 <a href="#/contributing/translation-program"><b>Translation</b></a> - Help translate into 34+ languages</li>' +
        '<li>💻 <b>Code</b> - Fix bugs, add features, improve performance</li>' +
        '<li>🎨 <b>Design</b> - Create illustrations and improve UX</li>' +
        '<li>🐛 <b>Bug Reports</b> - Found a bug? Let us know!</li>' +
      '</ul>' +
      '<p style="text-align:center;margin-top:15px"><a href="https://github.com/ethereum/ethereum-org-website/" target="_blank" style="font-size:18px">🐙 Visit us on GitHub!!!</a></p>'
    ),
    [['👥','community','Community Hub'],['🌍','contributing/translation-program','Translation Program'],
     ['🐛','bug-bounty','Bug Bounty'],['📚','learn','Learn']]
  )
};

// COMMUNITY EVENTS
PAGES['community/events'] = {
  title: 'Ethereum Events',
  content: templatePage('🎉', 'Ethereum Events', 'Ethereum communities host events all around the globe, all year long!!!',
    section('📅 uPcOmInG eVeNtS!!! 📅',
      '<table class="events-table">' +
        '<tr><th>📅 Event</th><th>📍 Location</th><th>🗓️ Date</th></tr>' +
        '<tr><td>Ethereum Munich #2</td><td>Munich, Germany 🇩🇪</td><td>March 26, 2026</td></tr>' +
        '<tr><td>BEAST MODE | zkEVM day</td><td>Cannes, France 🇫🇷</td><td>March 28, 2026</td></tr>' +
        '<tr><td>FORT MODE</td><td>Cannes, France 🇫🇷</td><td>March 29, 2026</td></tr>' +
        '<tr><td>ETHGlobal Brussels</td><td>Brussels, Belgium 🇧🇪</td><td>April 2026</td></tr>' +
        '<tr><td>Devconnect</td><td>TBA 🌍</td><td>2026</td></tr>' +
      '</table>' +
      '<div class="alert-box success" style="margin-top:15px">✅ <b>Can\'t find an event near you?</b> Start your own!!! All you need is a venue, some pizza, and a love for Ethereum!!!</div>'
    ),
    [['👥','community','Community Hub'],['💬','community/online','Online Communities'],
     ['📝','contributing','Contributing'],['📚','learn','Learn']]
  )
};

// Generate remaining pages with a factory
var simplePages = {
  'community/online': ['💬','Online Communities','Find your tribe!!! Chat with fellow Ethereans online!!!',
    '<p>The Ethereum community is everywhere online! Here are the best places to hang out:</p>' +
    '<ul class="feature-list">' +
      '<li>💬 <b>Discord</b> - <a href="https://discord.gg/ethereum-org" target="_blank">ethereum.org Discord</a></li>' +
      '<li>📱 <b>Reddit</b> - <a href="https://www.reddit.com/r/ethereum/" target="_blank">r/ethereum</a> and <a href="https://www.reddit.com/r/ethdev/" target="_blank">r/ethdev</a></li>' +
      '<li>🐦 <b>X (Twitter)</b> - Follow <a href="https://x.com/EthDotOrg" target="_blank">@EthDotOrg</a></li>' +
      '<li>💬 <a href="https://warpcast.com/" target="_blank"><b>Farcaster</b></a> - Decentralized social media on Ethereum!</li>' +
      '<li>📺 <b>YouTube</b> - <a href="https://www.youtube.com/@EthereumFoundation" target="_blank">Ethereum Foundation channel</a></li>' +
    '</ul>',
    [['👥','community','Community Hub'],['🎉','community/events','Events'],['📝','contributing','Contributing']]],
  'community/grants': ['💰','Grants','Get PAID to build on Ethereum!!! Free money for builders!!!',
    '<p>The Ethereum ecosystem offers grants to fund development, research, and community building:</p>' +
    '<ul class="feature-list">' +
      '<li>🏛️ <b>Ethereum Foundation Grants</b> - Direct funding from the foundation</li>' +
      '<li>💰 <b>Ecosystem Support Program</b> - For projects that benefit the ecosystem</li>' +
      '<li>🔬 <b>Research Grants</b> - For academic and applied research</li>' +
      '<li>🌍 <b>Community Grants</b> - For meetups, content, and education</li>' +
    '</ul>',
    [['👨‍💻','developers','Developer Portal'],['👥','community','Community Hub'],['📝','contributing','Contributing']]],
  'community/research': ['🔬','Open Research','The bleeding edge of Ethereum research!!!',
    '<p>Ethereum\'s future is being shaped by researchers around the world working on:</p>' +
    '<ul class="feature-list">' +
      '<li>📦 <b>Sharding</b> - Splitting the network for maximum scalability</li>' +
      '<li>🔐 <b>Zero Knowledge Proofs</b> - Privacy and scaling with MATH</li>' +
      '<li>🌳 <b>Verkle Trees</b> - More efficient state storage</li>' +
      '<li>💡 <b>MEV Research</b> - Maximal Extractable Value challenges</li>' +
      '<li>🔮 <b>Account Abstraction</b> - Making wallets smarter</li>' +
    '</ul>',
    [['📄','whitepaper','Whitepaper'],['🗺️','roadmap','Roadmap'],['📜','eips','EIPs'],['🏛️','governance','Governance']]],
  'community/code-of-conduct': ['📜','Code of Conduct','Be excellent to each other!!! Party on, dudes!!!',
    '<p>The Ethereum community is welcoming and inclusive. Our code of conduct is simple:</p>' +
    '<ul class="feature-list">' +
      '<li>🤝 <b>Be Respectful</b> - Treat everyone with dignity</li>' +
      '<li>🌍 <b>Be Inclusive</b> - Welcome people of all backgrounds</li>' +
      '<li>💡 <b>Be Constructive</b> - Offer solutions, not just criticism</li>' +
      '<li>🚫 <b>No Harassment</b> - Zero tolerance for harassment of any kind</li>' +
      '<li>🤗 <b>Be Kind</b> - Remember there\'s a human behind every screen</li>' +
    '</ul>',
    [['👥','community','Community Hub'],['📝','contributing','Contributing']]],
  'contributing/translation-program': ['🌍','Translation Program','Help translate ethereum.org into ALL the languages!!!',
    '<p>Ethereum is global, and so should be our website! Help us translate ethereum.org into 34+ languages!</p>' +
    '<ul class="feature-list">' +
      '<li>🌐 <b>34+ Languages</b> - Already supported and growing!</li>' +
      '<li>🤝 <b>Community Driven</b> - Translated by volunteers worldwide</li>' +
      '<li>🏆 <b>Recognition</b> - Get recognized for your contributions!</li>' +
      '<li>📚 <b>Learn</b> - Improve your language skills while helping others!</li>' +
    '</ul>',
    [['📝','contributing','Contributing'],['👥','community','Community Hub']]],
  'bug-bounty': ['🐛','Bug Bounty','Find bugs, get PAID!!! (In ETH, of course!!!)','<p>The Ethereum <font color="#ffff00"><b>Bug Bounty Program</b></font> rewards security researchers who find and responsibly disclose vulnerabilities.</p>' +
    '<table class="info-table">' +
      '<tr><th>Severity</th><th>Reward</th><th>Vibes</th></tr>' +
      '<tr><td>🔴 Critical</td><td>Up to $250,000</td><td>You found something HUGE</td></tr>' +
      '<tr><td>🟠 High</td><td>Up to $50,000</td><td>Pretty serious stuff</td></tr>' +
      '<tr><td>🟡 Medium</td><td>Up to $10,000</td><td>Nice catch!</td></tr>' +
      '<tr><td>🟢 Low</td><td>Up to $2,000</td><td>Every bit helps!</td></tr>' +
    '</table>',
    [['🔒','security','Security'],['👨‍💻','developers','Developer Portal'],['👥','community','Community Hub']]],
  'foundation': ['🏛️','Ethereum Foundation','The non-profit organization supporting Ethereum development!!!',
    '<p>The <font color="#ffff00"><b>Ethereum Foundation (EF)</b></font> is a non-profit organization dedicated to supporting Ethereum and related technologies.</p>' +
    '<ul class="feature-list">' +
      '<li>💰 <b>Funding</b> - Grants for research, development, and community</li>' +
      '<li>🔬 <b>Research</b> - Pushing the boundaries of blockchain technology</li>' +
      '<li>📚 <b>Education</b> - This website! Plus conferences, workshops, and more</li>' +
      '<li>🌍 <b>Ecosystem Support</b> - Helping the entire Ethereum ecosystem grow</li>' +
    '</ul>' +
    '<p style="text-align:center"><a href="https://blog.ethereum.org/" target="_blank" style="font-size:16px">📰 Read the Foundation Blog</a></p>',
    [['👥','community','Community Hub'],['💰','community/grants','Grants'],['📝','contributing','Contributing']]],
  'enterprise': ['🏢','Enterprise Ethereum','Ethereum for BIG BUSINESS!!! Fortune 500 companies, THIS is for you!!!',
    '<p>Ethereum isn\'t just for degens and developers - <font color="#ffff00"><b>MAJOR CORPORATIONS</b></font> are building on Ethereum too!!!</p>' +
    '<ul class="feature-list">' +
      '<li>🏦 <b>Finance</b> - Banks using Ethereum for settlements and tokenization</li>' +
      '<li>📦 <b>Supply Chain</b> - Track products from factory to your door</li>' +
      '<li>🏥 <b>Healthcare</b> - Secure medical records on the blockchain</li>' +
      '<li>🎮 <b>Gaming</b> - Major studios building on Ethereum</li>' +
      '<li>🏠 <b>Real Estate</b> - Tokenized property ownership</li>' +
    '</ul>',
    [['💎','what-is-ethereum','What is Ethereum?'],['🔗','layer-2','Layer 2 Solutions'],['👨‍💻','developers','Developer Portal']]],
  'resources': ['📦','Ecosystem Resources','All the tools, dashboards, and resources you need!!!',
    '<p>The Ethereum ecosystem is MASSIVE. Here are some essential resources:</p>' +
    '<ul class="feature-list">' +
      '<li>📊 <b>Block Explorers</b> - <a href="https://etherscan.io/" target="_blank">Etherscan</a>, <a href="https://www.blockscout.com/" target="_blank">Blockscout</a>, and more</li>' +
      '<li>📈 <b>Analytics</b> - <a href="https://defillama.com/" target="_blank">DeFi Llama</a>, <a href="https://dune.com/" target="_blank">Dune Analytics</a>, <a href="https://www.nansen.ai/" target="_blank">Nansen</a></li>' +
      '<li>💰 <b>Price Tracking</b> - <a href="https://www.coingecko.com/" target="_blank">CoinGecko</a>, <a href="https://coinmarketcap.com/" target="_blank">CoinMarketCap</a></li>' +
      '<li>🔧 <b>Developer Tools</b> - <a href="https://hardhat.org/" target="_blank">Hardhat</a>, <a href="https://getfoundry.sh/" target="_blank">Foundry</a>, <a href="https://remix.ethereum.org/" target="_blank">Remix</a></li>' +
      '<li>📚 <b>Learning</b> - <a href="https://cryptozombies.io/" target="_blank">CryptoZombies</a>, <a href="https://speedrunethereum.com/" target="_blank">Speedrun Ethereum</a></li>' +
    '</ul>',
    [['📱','apps','dApps'],['👨‍💻','developers','Developer Portal'],['🏦','defi','DeFi']]],
  'developers/tutorials': ['🎓','Tutorials','Step-by-step guides to build your first dApp!!!',
    '<p>Learn to build on Ethereum with these tutorials, ranging from <font color="#00ff00"><b>BEGINNER</b></font> to <font color="#ff0000"><b>ADVANCED</b></font>!</p>' +
    '<ul class="feature-list">' +
      '<li>🟢 <b>Hello World Smart Contract</b> - Your first Solidity contract</li>' +
      '<li>🟢 <b>Deploy with <a href="https://hardhat.org/" target="_blank">Hardhat</a></b> - Set up your dev environment</li>' +
      '<li>🟡 <b>Build an ERC-20 Token</b> - Create your own cryptocurrency</li>' +
      '<li>🟡 <b>Build an NFT Collection</b> - Launch your own NFT project</li>' +
      '<li>🔴 <b>Build a DEX</b> - Create a decentralized exchange</li>' +
      '<li>🔴 <b>Build a DAO</b> - Deploy your own governance system</li>' +
    '</ul>',
    [['📚','developers/docs','Documentation'],['🛠️','developers/learning-tools','Learning Tools'],['👨‍💻','developers','Developer Portal']]],
  'developers/learning-tools': ['🛠️','Learning Tools','Interactive tools to learn Ethereum development!!!',
    '<p>The best way to learn is by DOING! Try these interactive learning tools:</p>' +
    '<ul class="feature-list">' +
      '<li>🧟 <a href="https://cryptozombies.io/" target="_blank"><b>CryptoZombies</b></a> - Learn Solidity by building a zombie game!</li>' +
      '<li>🏃 <a href="https://speedrunethereum.com/" target="_blank"><b>Speedrun Ethereum</b></a> - Build full-stack dApps at WARP SPEED</li>' +
      '<li>🔧 <a href="https://remix.ethereum.org/" target="_blank"><b>Remix IDE</b></a> - Write and test Solidity in your browser</li>' +
      '<li>🎨 <a href="https://scaffoldeth.io/" target="_blank"><b>Scaffold-ETH</b></a> - A full-stack starter kit for dApps</li>' +
      '<li>📦 <a href="https://hardhat.org/" target="_blank"><b>Hardhat</b></a> - The professional development framework</li>' +
    '</ul>',
    [['🎓','developers/tutorials','Tutorials'],['📚','developers/docs','Documentation'],['👨‍💻','developers','Developer Portal']]],
  'developers/docs/design-and-ux': ['🎨','UX/UI Design','Design dApps that people actually WANT to use!!!',
    '<p>Good UX is what separates a dApp that gets used from one that gets abandoned. <font color="#ff0000"><b>(Unlike this website, which has INTENTIONALLY bad design!!!)</b></font></p>' +
    '<ul class="feature-list">' +
      '<li>🎨 <b>Design Principles</b> - Clear, consistent, accessible</li>' +
      '<li>💳 <b>Wallet Connection UX</b> - Make connecting easy</li>' +
      '<li>📝 <b>Transaction Signing</b> - Help users understand what they\'re signing</li>' +
      '<li>⏳ <b>Loading States</b> - Blockchain is slow, handle it gracefully</li>' +
      '<li>❌ <b>Error Handling</b> - Help users recover from errors</li>' +
    '</ul>' +
    '<div class="alert-box warning">⚠️ <b>NOTE:</b> This parody website is NOT an example of good UX design. Please do not use Comic Sans in production. We beg you.</div>',
    [['👨‍💻','developers','Developer Portal'],['📚','developers/docs','Documentation'],['📱','apps','dApps']]],
  'about': ['ℹ️','About ethereum.org','The story behind the world\'s most informative blockchain website!!!',
    '<p><font color="#ffff00"><b>ethereum.org</b></font> is an open-source resource for the Ethereum community. It was originally launched in 2013 and has been continuously improved by <font color="#00ff00"><b>THOUSANDS</b></font> of contributors.</p>' +
    '<ul class="feature-list">' +
      '<li>🌍 <b>Available in 34+ languages</b></li>' +
      '<li>📝 <b>Thousands of pages of content</b></li>' +
      '<li>🤝 <b>Built by the community, for the community</b></li>' +
      '<li>💻 <b>Fully open source on GitHub</b></li>' +
    '</ul>' +
    '<p style="text-align:center"><a href="https://github.com/ethereum/ethereum-org-website/" target="_blank" style="font-size:16px">🐙 View source on GitHub</a></p>',
    [['📝','contributing','Contributing'],['👥','community','Community Hub']]],
  'assets': ['🎨','Brand Assets','The official Ethereum brand assets!!! Diamond emojis not included!!!',
    '<p>Need the Ethereum logo? Brand colors? Style guide? We\'ve got you covered!</p>' +
    '<ul class="feature-list">' +
      '<li>💎 <b>Ethereum Diamond</b> - The iconic diamond/octahedron logo</li>' +
      '<li>🎨 <b>Brand Colors</b> - The official Ethereum color palette</li>' +
      '<li>📝 <b>Typography</b> - Official fonts (NOT Comic Sans, unfortunately)</li>' +
      '<li>📏 <b>Usage Guidelines</b> - How to use the brand properly</li>' +
    '</ul>' +
    '<div style="text-align:center;font-size:80px;margin:20px 0;animation:spin 4s linear infinite;display:inline-block;width:100%">💎</div>',
    [['ℹ️','about','About Us'],['📝','contributing','Contributing']]],
  'privacy-policy': ['🔒','Privacy Policy','We respect your privacy!!! (Unlike Web2!!!)','<p>This parody website does not collect any personal data. We don\'t use cookies, analytics, or tracking. We don\'t even have a server - this is a static HTML file!!!</p>' +
    '<div class="alert-box success">✅ <b>Data collected:</b> ZERO. NOTHING. NADA. ZIP. ZILCH.</div>' +
    '<p>For the real ethereum.org privacy policy, visit the <a href="https://ethereum.org/en/privacy-policy/" target="_blank">official site</a>.</p>',
    [['ℹ️','about','About'],['📜','terms-of-use','Terms of Use'],['🍪','cookie-policy','Cookie Policy']]],
  'terms-of-use': ['📜','Terms of Use','The boring legal stuff!!! (Made slightly less boring with Comic Sans!!!)','<p>By visiting this parody website, you agree to:</p>' +
    '<ul class="feature-list">' +
      '<li>😂 <b>Have a sense of humor</b></li>' +
      '<li>🚫 <b>Not take financial advice from a website written in Comic Sans</b></li>' +
      '<li>💎 <b>Acknowledge that diamond emojis are NOT real diamonds</b></li>' +
      '<li>🚀 <b>Accept that "to the moon" is an expression, not a guarantee</b></li>' +
      '<li>📝 <b>Understand this is a PARODY</b></li>' +
    '</ul>' +
    '<p style="color:#888;font-size:11px">For real terms of use, visit <a href="https://ethereum.org/en/terms-of-use/" target="_blank" style="font-size:11px">ethereum.org</a>.</p>',
    [['ℹ️','about','About'],['🔒','privacy-policy','Privacy Policy'],['🍪','cookie-policy','Cookie Policy']]],
  'cookie-policy': ['🍪','Cookie Policy','We have NO cookies!!! (But we wish we had real ones!!!)','<p>This website uses <font color="#ff0000"><b>ZERO COOKIES</b></font>. None. Nada. Not a single one.</p>' +
    '<p>We\'re a static HTML file. We couldn\'t set cookies even if we wanted to.</p>' +
    '<div class="alert-box success">✅ <b>Cookies used:</b> 0<br>✅ <b>Trackers:</b> 0<br>✅ <b>Analytics:</b> 0<br>✅ <b>Real cookies eaten during development:</b> Many 🍪</div>',
    [['ℹ️','about','About'],['🔒','privacy-policy','Privacy Policy'],['📜','terms-of-use','Terms of Use']]],
  'roadmap/security': ['🔐','Improved Security','Making Ethereum MORE secure than ever!!!',
    '<p>Ethereum\'s roadmap includes significant <font color="#ffff00"><b>security improvements</b></font>:</p>' +
    '<ul class="feature-list">' +
      '<li>🔐 <b>Proposer-Builder Separation</b> - Preventing centralization of block building</li>' +
      '<li>🛡️ <b>Single Slot Finality</b> - Faster confirmation of transactions</li>' +
      '<li>🔒 <b>Secret Leader Election</b> - Protecting validators from DoS attacks</li>' +
      '<li>📊 <b>Distributed Validators</b> - More resilient staking</li>' +
    '</ul>',
    [['🗺️','roadmap','Roadmap'],['🥩','staking','Staking'],['🔒','security','Security']]],
};

// Register all simple pages
for (var path in simplePages) {
  (function(p, data) {
    PAGES[p] = {
      title: data[1],
      content: templatePage(data[0], data[1], data[2], section(data[0] + ' ' + alternatingCaps(data[1]) + '!!! ' + data[0], data[3]), data[4])
    };
  })(path, simplePages[path]);
}

// ---------- GUESTBOOK PAGE ----------
PAGES['guestbook'] = {
  title: 'Guestbook',
  content: function() {
    // Scroll to the guestbook section
    setTimeout(function() {
      var gb = document.getElementById('guestbook-section');
      if (gb) gb.scrollIntoView({behavior:'smooth'});
    }, 100);
    return pageHero('📝', 'GuEsTbOoK!!!', 'Sign our guestbook!!! Tell us what you think!!! (Not really, this is static HTML!!!)') +
      FIRE +
      section('📝 tHaNkS fOr ViSiTiNg!!! 📝',
        '<p>Scroll down to see our guestbook entries!!! In the glory days of Web 1.0, EVERY website had a guestbook.</p>' +
        '<p>Sadly, since this website has no backend (it\'s just an HTML file!!!), you can\'t actually sign it. But you can <font color="#ffff00"><b>PRETEND</b></font>!!!</p>'
      );
  }
};

// ---------- 404 PAGE ----------
PAGES['404'] = {
  title: '404 - Page Not Found!!!',
  content: function() {
    return pageHero('😱', '404!!!', 'THE PAGE YOU\'RE LOOKING FOR DOESN\'T EXIST!!!') +
      FIRE +
      section('🚧 pAgE nOt FoUnD!!! 🚧',
        '<div style="text-align:center">' +
          '<div style="font-size:120px;animation:shake 0.5s ease-in-out infinite">😱</div>' +
          '<p style="font-size:20px"><font color="#ff0000"><b>ERROR 404: Page not found!!!</b></font></p>' +
          '<p>The page you\'re looking for might have been:</p>' +
          '<ul class="feature-list" style="max-width:400px;margin:10px auto">' +
            '<li>🗑️ Deleted by a rogue smart contract</li>' +
            '<li>🚀 Sent to the moon (and didn\'t come back)</li>' +
            '<li>🐛 Eaten by a bug in the Matrix</li>' +
            '<li>🔥 Burned like ETH gas fees</li>' +
          '</ul>' +
          '<p><a href="#/" style="font-size:18px">&gt;&gt;&gt; GO BACK HOME &gt;&gt;&gt;</a></p>' +
        '</div>'
      );
  }
};


// ========== LIVE ETH PRICE ==========
var lastEthPrice = 2141.53;
var ethPriceUp = true;

function formatPrice(p) {
  return '$' + p.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
}

function updatePriceElements(price) {
  ethPriceUp = price >= lastEthPrice;
  lastEthPrice = price;
  var formatted = formatPrice(price);
  var short = '$' + Math.round(price).toLocaleString('en-US');
  // Update all .eth-price elements on the current page
  var els = document.querySelectorAll('.eth-price');
  for (var i = 0; i < els.length; i++) els[i].textContent = formatted;
  var shorts = document.querySelectorAll('.eth-price-short');
  for (var i = 0; i < shorts.length; i++) shorts[i].textContent = short;
  // Update direction arrows
  var dirs = document.querySelectorAll('.eth-price-direction');
  for (var i = 0; i < dirs.length; i++) {
    dirs[i].style.color = ethPriceUp ? '#44eedd' : '#ff5566';
    dirs[i].textContent = ethPriceUp ? '▲ TO THE MOON 🚀🌙' : '▼ BUY THE DIP!!! 🛒💎';
  }
  // Update marquee scroll text if visible
  var marquee = document.querySelector('.scroll-text');
  if (marquee) {
    marquee.innerHTML = marquee.innerHTML.replace(
      /ETH price is <span class="eth-price">[^<]*<\/span>/,
      'ETH price is <span class="eth-price">' + formatted + '</span>'
    );
  }
}

function fetchEthPrice() {
  fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (data && data.ethereum && data.ethereum.usd) {
        updatePriceElements(data.ethereum.usd);
      }
    })
    .catch(function() { /* silently fail, keep last price */ });
}

// Fetch immediately, then every 60 seconds
fetchEthPrice();
setInterval(fetchEthPrice, 60000);


// ========== ROUTER ==========
function getRoute() {
  var hash = location.hash || '#/';
  var path = hash.slice(2); // Remove '#/'
  // Remove trailing slash
  if (path.endsWith('/')) path = path.slice(0, -1);
  return path;
}

function navigate(path) {
  if (path === undefined) path = getRoute();
  var page = PAGES[path] || PAGES['404'];
  var contentEl = document.getElementById('page-content');
  if (!contentEl) return;

  // Generate content
  var content = typeof page.content === 'function' ? page.content() : page.content;
  contentEl.innerHTML = content;

  // Update title
  var title = page.title || 'Home';
  document.title = '~*~*~ ' + title + ' ~*~*~ EtHeReUm.OrG ~*~*~';

  // Scroll to top (unless guestbook)
  if (path !== 'guestbook') {
    window.scrollTo(0, 0);
  }

  // Re-apply live ETH price to any newly rendered elements
  if (lastEthPrice !== 2141.53) {
    setTimeout(function() { updatePriceElements(lastEthPrice); }, 50);
  }
}

// Listen for hash changes
window.addEventListener('hashchange', function() {
  navigate(getRoute());
});

// Handle link clicks - intercept ethereum.org links
document.addEventListener('click', function(e) {
  var link = e.target.closest('a');
  if (!link) return;

  var href = link.getAttribute('href');
  if (!href) return;

  // Don't intercept the "View boring version" link
  if (link.id === 'boring-version' || link.id === 'boring-link') return;

  // Don't intercept external links that open in new tab
  if (link.target === '_blank') return;

  // Don't intercept mailto links
  if (href.startsWith('mailto:')) return;

  // Intercept ethereum.org links
  if (href.includes('ethereum.org/en/')) {
    e.preventDefault();
    var path = href.replace(/.*ethereum\.org\/en\//, '').replace(/\/$/, '');
    location.hash = '#/' + path;
    return;
  }

  // Intercept ethereum.org root
  if (href.match(/ethereum\.org\/?$/) && !link.id) {
    e.preventDefault();
    location.hash = '#/';
    return;
  }
});

// Initial load
document.addEventListener('DOMContentLoaded', function() {
  navigate(getRoute());
});

// Also run on script load in case DOM is already ready
if (document.readyState !== 'loading') {
  navigate(getRoute());
}
