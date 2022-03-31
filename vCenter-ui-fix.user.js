// ==UserScript==
// @name         vCenter 7.0.3 ui fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  kill whitespace!
// @author       junkhacker
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( `
    clr-tabs.tab-content {
        line-height: 1rem !important;
        }
    .clr-treenode-caret {
        height: 1rem !important;
        }
    .cdk-tree-node {
        line-height: 1rem !important;
        }
    }
` );
