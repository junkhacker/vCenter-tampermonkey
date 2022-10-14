// ==UserScript==
// @name         vCenter 7.0.3 ui fix
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  get rid of excessive whitespace in the inventory tree
// @author       Junkhacker
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

function cleanup(){
    GM_addStyle(`
    clr-tabs.tab-content {
        line-height: 1rem !important;
        }
    .clr-treenode-caret {
        height: 1rem !important;
        }
    .cdk-tree-node {
        line-height: 1rem !important;
        }
    `)
};

window.onload = cleanup;
setInterval(cleanup, 50)
