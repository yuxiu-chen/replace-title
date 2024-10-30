// ==UserScript==
// @name         改 Title
// @namespace    http://tampermonkey.net/
// @version      2024-10-23
// @description  try to take over the world!
// @author       Yuxiu
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mayohr.com
// @downloadURL  https://raw.githubusercontent.com/yuxiu-chen/replace-title/refs/heads/main/replace-title.js
// @updateURL    https://raw.githubusercontent.com/yuxiu-chen/replace-title/refs/heads/main/replace-title.js
// @grant        none
// @match        https://*.mayohr.com/foundation*
// @match        https://*.mayohr.com/ta*
// @match        https://*.mayohr.com/attendance*
// @match        https://*.mayohr.com/payroll*
// ==/UserScript==



function setNewTitle() {
    var menu = "li.apollo-sidebar-navigation-item.active div.apollo-sidebar-navigation-text";

    if(window.location.href.indexOf("attendance") > -1) { // PY
        menu = "li.apollo-sidebar-navigation-item.active span"
    }

    if(window.location.href.indexOf("attendance") > -1) { // PT 出勤記錄管理
        menu = "li.sc-bXCLTC.etuLpc.active div.sc-hmdomO.gACZpk"
    }

    console.log("yuxiu",menu, document.querySelector(menu))
    var newTitle = document.querySelector(menu).innerHTML;

    newTitle = newTitle.replace(/<span[^>]*>/g,'').replace(/<\/span>/g,'').replace(/<\!--.*?-->/g, "");
    console.log("yuxiu", newTitle)
    document.title = newTitle;
}

function runSetNewTitleMultiTimes() {
    // 四次是因為有時候頁面載太慢了
    setTimeout(function() { setNewTitle(); }, 1000);
    setTimeout(function() { setNewTitle(); }, 1500);
    setTimeout(function() { setNewTitle(); }, 2000);
    setTimeout(function() { setNewTitle(); }, 2500);
}

(function() {
    'use strict';
    // 載入時修改 title
   runSetNewTitleMultiTimes();

    // 點擊 menu 後修改 title
    setTimeout(function() {document.querySelector("ul.apollo-sidebar-navigation").addEventListener("click", (e) => {runSetNewTitleMultiTimes();});}, 1000);
    setTimeout(function() {document.querySelector("ul.apollo-sidebar-navigation").addEventListener("click", (e) => {runSetNewTitleMultiTimes();});}, 1500);
    setTimeout(function() {document.querySelector("ul.apollo-sidebar-navigation").addEventListener("click", (e) => {runSetNewTitleMultiTimes();});}, 2000);
    setTimeout(function() {document.querySelector("ul.apollo-sidebar-navigation").addEventListener("click", (e) => {runSetNewTitleMultiTimes();});}, 2500);
})();
