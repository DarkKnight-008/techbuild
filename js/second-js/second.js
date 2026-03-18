document.addEventListener("DOMContentLoaded", () => {

    const headers = document.querySelectorAll(".filter-header");

    headers.forEach(header => {

        header.addEventListener("click", () => {

            const content = header.nextElementSibling;
            const icon = header.querySelector(".icon");

            const isOpen = content.style.maxHeight;

            if(isOpen){
                content.style.maxHeight = null;
                icon.style.transform = "rotate(0deg)";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.style.transform = "rotate(180deg)";
            }

        });

    });

});