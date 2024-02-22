inputEl = document.getElementById("textToSpeak");
speakButtonEl = document.getElementById("speakButton");

function speak(){
    const text = inputEl.value;

    const utterance = new SpeechSynthesisUtterance(text);

    speechSynthesis.speak(utterance);
};

speakButtonEl.addEventListener("click", function(){
    speak();
})

