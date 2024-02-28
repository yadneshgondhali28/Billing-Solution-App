
const eyeImg = document.querySelector('#eye-img');

const password = document.querySelector("#password");

password.addEventListener('input', () => {
    if (password.value) {
        eyeImg.style.display = 'block';
    } else {
        eyeImg.style.display = 'none';
    }
});

eyeImg.addEventListener("click", () => {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    console.log(type);
    eyeImg.src = type === "password" ? "images/eye-closed.svg" : "images/eye-opened.svg";
})