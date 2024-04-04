let greetings = [
    { language: 'Hindi', greeting: 'नमस्ते' },
    { language: 'Marathi', greeting: 'नमस्कार' },
    { language: 'Magadhi', greeting: 'प्रणाम' },
    { language: 'Kashmir', greeting: 'आदाब' },
    { language: 'Bengali', greeting: 'নমস্কার' },
    { language: 'Punjabi', greeting: 'ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ' },
    { language: 'Gujrati', greeting: 'जय श्री कृष्णा' },
    { language: 'Malayalam', greeting: 'നമസ്കാരം' },
    { language: 'Tamil', greeting: 'வணக்கம்' },
    { language: 'Telugu', greeting: 'నమస్కారం' },
    { language: 'Kannada', greeting: 'ನಮಸ್ಕಾರ' },
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
        greetingElement.style.transition = "all ease 2s";
        console.log(greetings[0].greeting);
        clearInterval(interval);
    }
}, 1000);
