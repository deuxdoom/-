// ==UserScript==
// @name         Remove YouTube Sponsored Label Overlay
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hides YouTube "includes promotion" overlays and disables redirection
// @author       꾸라
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const BLOCK_SELECTORS = [
        'a[href*="https://support.google.com/youtube?p=ppp"]',
        '.ytm-paid-content-overlay-renderer',
        '.YtmPaidContentOverlayHost',
        '#paid-content-overlay', // 기타 다양한 이름들 고려
        '[aria-label*="includes promotion"]', // 접근성 기준으로도 잡기
        'tp-yt-paper-tooltip' // 일부 툴팁도 차단
    ];

    const observer = new MutationObserver(() => {
        BLOCK_SELECTORS.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.remove(); // 통째로 제거
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
