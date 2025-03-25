
let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input){
    input.addEventListener('change', function(){
        let id = input.getAttribute('aria-valuemax');
        let thisSwiper = document.getElementById('swiper' + id);

        if (thisSwiper && thisSwiper.swiper) {
            thisSwiper.swiper.update();
        }
    });
});

function E(selector, parent) {
    if (selector instanceof HTMLElement)
        return selector;
    return (parent || document).querySelectorAll(selector)
}

function hasClass(element, className) {
    return element.ClassList.contains(className);
}

function radioClass(element, className) {
    E("." + className).forEach((elem)=>
    elem.ClassList.remove(className));
    element.ClassList.toggle(className);
}

function tabs(nav) {
    let navElem = E(nav)(0);

    navElem.addEventListener("click", (e) =>{
        let target = e.target;

        if(hasClass(target, "tab"))
            radioClass(target, "active");
        let linkedTab = E("." + target.id)[0];

        radioClass(linkedTab, "visible");
    });

    let active = E(".tab.active"){0};
    if (active) {
        radioClass(E("."+active.id)[0], "visible");
    }

}

tabs(".menu-nav")
