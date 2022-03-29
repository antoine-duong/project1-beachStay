const navFeature = {};

navFeature.toggleAction = () => {
    navFeature.toggle.addEventListener("click", () => {
        const visibility = navFeature.mainNav.getAttribute("elementVisible");
// switching assigned attributes to trigger the declared transformation state in CSS
        if (visibility === "false") {
            navFeature.mainNav.setAttribute("elementVisible", "true");
        } else {
            navFeature.mainNav.setAttribute("elementVisible", "false");
        }
    });
}

navFeature.init = () => {
    navFeature.mainNav = document.querySelector(".mainNav");
    navFeature.toggle = document.querySelector(".mobileMenuToggle");

    navFeature.toggleAction();
}

navFeature.init();