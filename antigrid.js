// ==UserScript==
// @name         chzzk-anti-grid
// @encoding     utf-8
// @namespace    https://github.com/List-KR/chzzk-anti-grid
// @homepageURL  https://github.com/List-KR/chzzk-anti-grid
// @supportURL   https://github.com/List-KR/chzzk-anti-grid/issues
// @license      MIT
//
// @version      2.2.0
// @author       ADGuard
//
// @match        https://chzzk.naver.com/*
// @match        https://*.chzzk.naver.com/*
//
// @description  치지직 웹 사이트에 있는 그리드 컴퓨팅 프로그램 설치 강제에 대해 우회하는 유저스크립트입니다 
//
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==
(()=>{var o=typeof unsafeWindow<"u"?unsafeWindow:window;o.Object.defineProperty=new Proxy(o.Object.defineProperty,{apply(n,t,e){return typeof e[1]=="string"&&e[1]==="isSupportedPlatform"?Reflect.apply(n,t,[e[0],e[1],{value:()=>!1,writable:!1,enumerable:!0,configurable:!0}]):typeof e[1]=="string"&&e[1]==="isSupportedBrowser"?Reflect.apply(n,t,[e[0],e[1],{value:()=>!0,writable:!1,enumerable:!0,configurable:!0}]):Reflect.apply(n,t,e)}});})();
