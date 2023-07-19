document.documentElement.classList.add('is-content-expanded');

var pageSideToolsWrapper = document.querySelector('.page-side-tools__wrapper');
if (pageSideToolsWrapper) {
    pageSideToolsWrapper.remove();
}

var rightRail = document.querySelector('.page__right-rail');
if (rightRail) {
  rightRail.remove();
}

var stickyHeader = document.querySelector('.fandom-sticky-header');
if (stickyHeader) {
  stickyHeader.remove();
}

var globalFooter = document.querySelector('.global-footer');
if (globalFooter) {
    globalFooter.remove();
}

var pageCounterValue = document.querySelector('.page-counter__value');
if (pageCounterValue) {
    pageCounterValue.remove();
}

var pageCounterLabel = document.querySelector('.page-counter__label');
if (pageCounterLabel) {
    pageCounterLabel.remove();
}

var globalNavigation = document.querySelector('.global-navigation'); 
if (globalNavigation) {
    globalNavigation.remove(); //messes up sign in
}

var mixedContentFooter = document.getElementById('mixed-content-footer');
if (mixedContentFooter) {
    mixedContentFooter.parentNode.removeChild(mixedContentFooter);
}

var wikiaBar = document.getElementById('WikiaBar');
if (wikiaBar) {
  wikiaBar.parentNode.removeChild(wikiaBar);
}

var articleComments = document.getElementById('articleComments');
if (articleComments) {
    articleComments.parentNode.removeChild(articleComments);
}

var dataAfterContent = document.getElementById('mw-data-after-content');
if (dataAfterContent) {
  dataAfterContent.parentNode.removeChild(dataAfterContent);
}

function removeStaggeredBloat() {
    var marketingNotifications = document.querySelector('.marketing-notifications');
    if (marketingNotifications) {
      marketingNotifications.remove();
    }
    var registrationButtons = document.querySelector('.ph-registration-buttons'); 
    if (registrationButtons) {
        registrationButtons.remove();
    }
  }
var observer = new MutationObserver(function(mutationsList) {
for (var mutation of mutationsList) {
    if (mutation.type === 'childList') {
    if (mutation.addedNodes.length > 0) {
        removeStaggeredBloat();
    }
    }
}
});
observer.observe(document.body, { childList: true, subtree: true });
removeStaggeredBloat();

var actionButtons = document.querySelectorAll('.page-header__actions .wds-button.wds-is-text.page-header__action-button');
for (var i = 0; i < actionButtons.length; i++) {
  var button = actionButtons[i];
  
  if (!button.classList.contains('has-label') && !button.classList.contains('wds-dropdown__toggle')) {
    button.remove();
  }
}

var wikiTools = document.querySelector('.wiki-tools');
if (wikiTools) {
  var element = wikiTools.querySelector('a[href="/f"]');
  if (element) {
    element.remove();
  }
}

var mainContainer = document.querySelector('.main-container');
if (mainContainer) {
    mainContainer.style.margin = '0';
    mainContainer.style.width = '100%';
}

var headerBackground = document.querySelector('.fandom-community-header__background');
if (headerBackground) {
  headerBackground.style.width = '100%';
}
