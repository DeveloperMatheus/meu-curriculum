var myTabs = document.querySelectorAll(".tab-curriculum__header-button");

var myTabBody = document.querySelectorAll(".tab-curriculum__mode");



function initTab() {
    myTabs[0].classList.add('tab-curriculum__header-button--selected');
    myTabBody[1].classList.add('d-none');
}

function tabHandler(tab) {
    if (tab === 'exp') {
        myTabs[0].classList.add('tab-curriculum__header-button--selected')
        myTabBody[0].classList.remove('d-none');

        myTabBody[1].classList.add('d-none');
        myTabs[1].classList.remove('tab-curriculum__header-button--selected')
        return;
    }

    if (tab === 'tools') {
        myTabs[1].classList.add('tab-curriculum__header-button--selected')
        myTabBody[1].classList.remove('d-none');
        
        myTabBody[0].classList.add('d-none');
        myTabs[0].classList.remove('tab-curriculum__header-button--selected')
        return;
    }

}


initTab();