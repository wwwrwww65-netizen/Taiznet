/* =========================================================================
 *  CardBox Floating Button - زر كارد بوكس العائم
 * ========================================================================= */
(function() {
    // 👇 ضع رابط شبكتك هنا بكل وضوح:
    var CARDBOX_URL = "https://cardbox.basmasoft.com/n/86267";

    // نص الزر:
    var BUTTON_TEXT = "اشتري كرتك من \"كارد بوكس\"";

    if (document.getElementById('cardbox-float-btn')) return;

    // 1. إضافة تنسيقات الزر والأنيميشن التفاعلي
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = [
        '#cardbox-float-btn {',
        '    position: fixed !important;',
        '    top: 50px !important;',
        '    right: 18px !important;',
        '    z-index: 2147483647 !important;',
        '    display: inline-flex !important;',
        '    align-items: center !important;',
        '    justify-content: center !important;',
        '    gap: 9px !important;',
        '    padding: 12px 24px 12px 20px !important;',
        '    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 45%, #db2777 100%) !important;',
        '    color: #ffffff !important;',
        '    font-family: "Almarai", "Tajawal", "Cairo", system-ui, -apple-system, sans-serif !important;',
        '    font-size: 15.5px !important;',
        '    font-weight: 700 !important;',
        '    text-decoration: none !important;',
        '    line-height: 1.2 !important;',
        '    border-radius: 9999px !important;',
        '    border: 1.5px solid rgba(255, 255, 255, 0.5) !important;',
        '    box-shadow: 0 6px 22px rgba(124, 58, 237, 0.48), 0 2px 10px rgba(219, 39, 119, 0.38) !important;',
        '    direction: rtl !important;',
        '    cursor: pointer !important;',
        '    overflow: hidden !important;',
        '    -webkit-user-select: none !important;',
        '    user-select: none !important;',
        '    -webkit-tap-highlight-color: transparent !important;',
        '    transform-origin: 50% 20% !important;',
        '    transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease !important;',
        '    animation: cardboxBellAttention 4.5s infinite ease-in-out !important;',
        '}',
        '@supports (top: max(0px)) {',
        '    #cardbox-float-btn {',
        '        top: max(50px, calc(env(safe-area-inset-top) + 24px)) !important;',
        '        right: max(18px, env(safe-area-inset-right)) !important;',
        '    }',
        '}',
        '#cardbox-float-btn:hover {',
        '    color: #ffffff !important;',
        '    text-decoration: none !important;',
        '    animation-play-state: paused !important;',
        '    transform: translateY(-2px) scale(1.05) !important;',
        '    box-shadow: 0 10px 28px rgba(124, 58, 237, 0.7), 0 4px 16px rgba(219, 39, 119, 0.5) !important;',
        '}',
        '#cardbox-float-btn:active {',
        '    transform: translateY(1px) scale(0.96) !important;',
        '    box-shadow: 0 2px 10px rgba(124, 58, 237, 0.4) !important;',
        '}',
        '#cardbox-float-btn .cardbox-btn-text {',
        '    color: #ffffff !important;',
        '    font-size: 15.5px !important;',
        '    font-weight: 700 !important;',
        '    letter-spacing: -0.2px !important;',
        '    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25) !important;',
        '    white-space: nowrap !important;',
        '    display: inline-block !important;',
        '}',
        '#cardbox-float-btn .cardbox-btn-icon {',
        '    width: 20px !important;',
        '    height: 20px !important;',
        '    flex-shrink: 0 !important;',
        '    stroke: #ffffff !important;',
        '    fill: none !important;',
        '    stroke-width: 2.2 !important;',
        '    stroke-linecap: round !important;',
        '    stroke-linejoin: round !important;',
        '    transform-origin: 50% 10% !important;',
        '    animation: cardboxCartWiggle 4.5s infinite ease-in-out !important;',
        '}',
        '#cardbox-float-btn:hover .cardbox-btn-icon {',
        '    transform: scale(1.15) rotate(-6deg) !important;',
        '}',
        '#cardbox-float-btn::after {',
        '    content: "" !important;',
        '    position: absolute !important;',
        '    top: 0 !important;',
        '    right: -60% !important;',
        '    width: 40% !important;',
        '    height: 100% !important;',
        '    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent) !important;',
        '    transform: skewX(-25deg) !important;',
        '    animation: cardboxShimmer 4.5s infinite ease-in-out !important;',
        '    pointer-events: none !important;',
        '}',
        '@media screen and (max-width: 480px) {',
        '    #cardbox-float-btn {',
        '        top: 38px !important;',
        '        right: 12px !important;',
        '        padding: 9px 18px 9px 15px !important;',
        '        gap: 7px !important;',
        '    }',
        '    #cardbox-float-btn .cardbox-btn-text {',
        '        font-size: 13.5px !important;',
        '    }',
        '    #cardbox-float-btn .cardbox-btn-icon {',
        '        width: 17px !important;',
        '        height: 17px !important;',
        '    }',
        '}',
        '@keyframes cardboxBellAttention {',
        '    0%, 100% {',
        '        transform: scale(1) rotate(0deg);',
        '        box-shadow: 0 6px 20px rgba(124, 58, 237, 0.45), 0 2px 10px rgba(219, 39, 119, 0.35);',
        '    }',
        '    8% {',
        '        transform: scale(1.12) rotate(0deg);',
        '        box-shadow: 0 10px 28px rgba(124, 58, 237, 0.65), 0 4px 16px rgba(219, 39, 119, 0.5), 0 0 0 4px rgba(219, 39, 119, 0.25);',
        '    }',
        '    16% {',
        '        transform: scale(0.95) rotate(0deg);',
        '        box-shadow: 0 4px 14px rgba(124, 58, 237, 0.4), 0 2px 8px rgba(219, 39, 119, 0.3);',
        '    }',
        '    22% { transform: scale(1.04) rotate(0deg); }',
        '    26% { transform: scale(1.02) rotate(-9deg); }',
        '    30% { transform: scale(1.02) rotate(9deg); }',
        '    34% { transform: scale(1.01) rotate(-8deg); }',
        '    38% { transform: scale(1.01) rotate(8deg); }',
        '    42% { transform: scale(1) rotate(-5deg); }',
        '    46% { transform: scale(1) rotate(5deg); }',
        '    50% { transform: scale(1) rotate(-2deg); }',
        '    54% { transform: scale(1) rotate(2deg); }',
        '    58% {',
        '        transform: scale(1) rotate(0deg);',
        '        box-shadow: 0 8px 24px rgba(124, 58, 237, 0.55), 0 3px 12px rgba(219, 39, 119, 0.45);',
        '    }',
        '    72% { transform: scale(1) rotate(0deg); }',
        '}',
        '@keyframes cardboxCartWiggle {',
        '    0%, 25%, 58%, 100% { transform: rotate(0deg); }',
        '    28% { transform: rotate(-14deg); }',
        '    32% { transform: rotate(14deg); }',
        '    36% { transform: rotate(-12deg); }',
        '    40% { transform: rotate(12deg); }',
        '    44% { transform: rotate(-8deg); }',
        '    48% { transform: rotate(8deg); }',
        '    52% { transform: rotate(-4deg); }',
        '    56% { transform: rotate(0deg); }',
        '}',
        '@keyframes cardboxShimmer {',
        '    0% { right: -60%; }',
        '    15%, 100% { right: 140%; }',
        '}'
    ].join('\n');
    (document.head || document.documentElement).appendChild(style);

    // 2. دالة حقن الزر في الصفحة
    function injectBtn() {
        if (document.getElementById('cardbox-float-btn') || !document.body) return false;

        var btn = document.createElement('a');
        btn.id = 'cardbox-float-btn';
        btn.href = CARDBOX_URL;
        btn.target = '_blank';
        btn.rel = 'noopener noreferrer';
        btn.title = 'شراء كروت الإنترنت عبر كارد بوكس';

        var span = document.createElement('span');
        span.className = 'cardbox-btn-text';
        span.textContent = BUTTON_TEXT;

        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'cardbox-btn-icon');
        svg.setAttribute('viewBox', '0 0 24 24');

        var circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle1.setAttribute('cx', '9');
        circle1.setAttribute('cy', '20');
        circle1.setAttribute('r', '1.5');

        var circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle2.setAttribute('cx', '18');
        circle2.setAttribute('cy', '20');
        circle2.setAttribute('r', '1.5');

        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M1 2h3.5l2.4 12.2a1.8 1.8 0 0 0 1.8 1.4h9.6a1.8 1.8 0 0 0 1.8-1.4L22 6H5.2');

        svg.appendChild(circle1);
        svg.appendChild(circle2);
        svg.appendChild(path);

        btn.appendChild(span);
        btn.appendChild(svg);

        btn.addEventListener('click', function() {
            try {
                var popup = window.open(CARDBOX_URL, '_blank');
                if (!popup || popup.closed || typeof popup.closed === 'undefined') {
                    window.location.href = CARDBOX_URL;
                }
            } catch(e) {
                window.location.href = CARDBOX_URL;
            }
        });

        document.body.appendChild(btn);
        return true;
    }

    // 3. ضمان تشغيل الزر فور جاهزية الصفحة
    if (!injectBtn()) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', injectBtn);
        }
        window.addEventListener('load', injectBtn);
        var attempts = 0;
        var timer = setInterval(function() {
            attempts++;
            if (injectBtn() || attempts > 20) {
                clearInterval(timer);
            }
        }, 150);
    }
})();