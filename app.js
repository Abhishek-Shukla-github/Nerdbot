//Globals
let transcript;
let helloResponse=["I'm still better than you","I'm good, you little piece of shit"]
let weather=["Why do you want to know about the weather if you just want to lie on your couch eating all day and posting dumb status like you're doing now, you're a loser , i hate you!"];
//DOM Elements
const inputText=document.querySelector("#inputText");
const button=document.querySelector("#button");
const textDisplay=document.querySelector("#textDisplay");

//Fetching the API
const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;

//Defining the variable tp use to fetch info from API
const recognition=new SpeechRecognition();

recognition.onstart=function(){
    textDisplay.innerText="Listening to you..."
}

inputText.addEventListener("change",()=>{
    let greeting=new window.SpeechSynthesisUtterance();
    greeting.text=`Greetings from the Nerdot ${inputText.value}, click the button to talk to me`;
    let greetingDisplay=`Greetings from the Nerdot ${inputText.value}`;
    window.speechSynthesis.speak(greeting);
    textDisplay.innerText=`${greeting.text}`;
})

recognition.onresult=function(event){
    transcript=event.results[0][0].transcript;
    textDisplay.innerText=transcript;
    speakOutLoud(transcript);
}

function changeColor(){

}

const speakOutLoud=(message)=>{
    let speech=new window.SpeechSynthesisUtterance();
    speech.text=`I don't know what ${message} is, ask again or ask something`;
    if(message.includes("how are you")){
        speech.text=helloResponse[Math.floor(Math.random()*helloResponse.length)];
    }
    if(message.includes("blue")){
        speech.text=`Hold on`;
        document.body.style.background="blue";
        speech.text=`Done`;
    }
    textDisplay.innerText=`${speech.text}`;
    window.speechSynthesis.speak(speech);
}

button.addEventListener("click",()=>{
    recognition.start();
})
