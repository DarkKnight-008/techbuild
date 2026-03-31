
document.addEventListener('DOMContentLoaded', () => {
    // Build PC button
    const build_pc_btn = document.querySelector(".build-pc-btn");
    if(build_pc_btn){
        build_pc_btn.addEventListener("click", () => {
            window.location.href = "./selectpurpose1.html";
            console.log("select purpose");
        });
    }


    const checkout_btn = document.querySelector(".btn-checkout");
    if (checkout_btn) {
        checkout_btn.addEventListener("click", ()=>{
             window.location.href = "./selectpurpose1.html";
            console.log("select purpose");
        })
    }

});
