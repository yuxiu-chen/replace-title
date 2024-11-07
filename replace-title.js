// ==UserScript==
// @name         改 Title
// @namespace    http://tampermonkey.net/
// @version      2024-11-07
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

    if(window.location.href.indexOf("mayohr.com/payroll/") > -1) { // PY
        menu = "li.apollo-sidebar-navigation-item.active span"
    }

    if(window.location.href.indexOf("mayohr.com/attendance/") > -1) { // PT 出勤記錄管理
        menu = "li.sc-bXCLTC.active div.sc-hmdomO"
    }

    var newTitle = document.querySelector(menu).innerHTML;

    newTitle = newTitle.replace(/<span[^>]*>/g,'').replace(/<\/span>/g,'').replace(/<\!--.*?-->/g, "");
    document.title = newTitle;
}

(function() {
    'use strict';
    setInterval(setNewTitle, 1000)
})();
