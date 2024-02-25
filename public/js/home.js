let greetings = [
    { language: 'Hindi', greeting: 'Namaste' },
    { language: 'Telugu', greeting: 'Namaskaramulu' },
    { language: 'Kannada', greeting: 'Namaskara' },
    { language: 'Tamil', greeting: 'Vanakkam' },
    { language: 'Malayalam', greeting: 'Namaskaram' },
    { language: 'Bengali', greeting: 'Nomoshkar' },
    { language: 'Assamese', greeting: 'Nomoskar' },
    { language: 'null', greeting: 'null' }
];

let index = 0;

let interval = setInterval(() => {
    let greetingElement = document.querySelector('.welcome').firstElementChild.firstElementChild;

    greetingElement.style.backgroundColor = "White";
    greetingElement.style.color = "#ce2718";

    greetingElement.innerHTML = `${greetings[index].greeting}!`;
    console.log(greetings[index].greeting);

    index++;

    if (index === greetings.length) {
        greetingElement.style.backgroundColor = "#ce2718";
        greetingElement.style.color = "White";
        greetingElement.innerHTML = `${greetings[0].greeting}!`;
        greetingElement.style.transition = "all ease 2s",
            console.log(greetings[0].greeting);
        clearInterval(interval);
    }
}, 1000);