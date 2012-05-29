// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    if (request.isLeft) {

      // Get the currently selected tab
      chrome.tabs.getSelected(null, function(tab) {
        // Toggle the pinned statu
        //chrome.tabs.update(tab.id, {'pinned': !tab.pinned});
        chrome.tabs.getAllInWindow(null, function(tabs){
          var currentTabIndex = tab.index;
          if (tab.index >= tabs.length - 1) {
            return;
          }
          var nextTab = tabs[currentTabIndex+1];
          chrome.tabs.update(nextTab.id, {'active': true});
        });
      });
    } else {
      // Get the currently selected tab
      chrome.tabs.getSelected(null, function(tab) {
        // Toggle the pinned statu
        //chrome.tabs.update(tab.id, {'pinned': !tab.pinned});
        chrome.tabs.getAllInWindow(null, function(tabs){
          var currentTabIndex = tab.index;
          if (tab.index <= 0) {
            return;
          }
          var nextTab = tabs[currentTabIndex-1];
          chrome.tabs.update(nextTab.id, {'active': true});
        });
      });
    }
  }
);
