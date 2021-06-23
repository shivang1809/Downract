// const texts = ["Welcome", "स्वागत हे"]
// let count = 0;
// let index = 0;
// let currentText = "";
// let letter = "";

// (function type(){
//     if (count === texts.length){
//         count = 0;
//     }
//     currentText = texts[count];
//     letter = currentText.slice(0,++index);

//     document.querySelector(".typing").textContent = letter;
//     if (letter.length === currentText.length){

//         count++;
//         index = 0;
//     }
//     setTimeout(type,400);
// })();

var typed = new Typed(".typing", {
    strings:  ["Welcome to Downract", "डाउनरैक्ट में आपका स्वागत है", "Bienvenue à Downract ", "Bienvenido a Downract", "ডাউন্রেক্টে স্বাগতম", 'डाउनक्रॅक्टमध्ये आपले स्वागत आहे', 'Benvenuto in Downract', 'Huānyíng shǐyòng Downract', 'ڈاؤنٹرکٹ میں خوش آمدید '],
            typeSpeed: 100,
            backSpeed: 60,
            loop:true
})