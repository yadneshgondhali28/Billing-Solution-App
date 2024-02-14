let signupbtn = document.querySelector('.sign-up-btn');
console.log(signupbtn);
signupbtn.addEventListener("click", () => {
    let parent = document.querySelector('.parent')
    parent.innerHTML = `
    <div class="form-box-login">
        <h2>Sign up</h2>
        <form class="form" action="#" method="post">
            <div class="input-box">
                <span class="icon"><ion-icon name="person-sharp"></ion-icon> </span>
                <input type="text" required />
                <label>Username</label>
            </div>
            <div class="input-box">
                <span class="icon"><ion-icon name="mail"></ion-icon></span>
                <input type="email" required />
                <label>Email</label>
            </div>
            <div class="input-box">
                <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                <input type="password" required />
                <label>Password</label>
            </div>
            <div class="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" class="btn">Sign up</button>
            <div class="login-register">
                <p>
                    Already have an account?<a href="#" class="register-link">Login</a>
                </p>
            </div>
        </form>
    </div>`
})


const form = [...document.querySelector('.form').children];

console.log(form);
form.forEach((item) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, 200);
})