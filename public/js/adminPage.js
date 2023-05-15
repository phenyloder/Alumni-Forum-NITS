const rightContent = document.getElementsByClassName('rightContent');
const sidebarItem = document.getElementsByClassName('sidebarItem');

function func(tabname) {
    for (let i = 0; i < rightContent.length; i++){
        rightContent[i].classList.add('hidden');
    }

    for (let i = 0; i < sidebarItem.length; i++){
        sidebarItem[i].classList.remove('active');
    }

    event.currentTarget.classList.add('active');
    document.getElementById(tabname).classList.remove('hidden');
}