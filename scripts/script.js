let answers = ["Failure to complete the mechanic...",
                "You're actually terrible at Destiny.",
                "Global Reach didn't work!",
                "You're actually ass at Destiny", 
                "Warlock jump sucks.",
                "Fix your game bungie.",
                "Squared fell asleep",
                "Jake was deafened",
                "Snow forgot to unmute his mic",
                "We're not streamers.",
                "Cam was busy playing bass.",
                "Not enough optimal DPS.",
                "Bungus good.",
                "No Warmind Cell.",
                "Can't relate. Didn't die.",
                "Should've prepped more.",
                "Ah yes, 1.8M damage",
                "Physics'd.",
                "The game cheated.",
                "Answer is in the Collector's Edition.",
                "Forgot to turn on Perfect Aim",
                "No heavy bricks.",
                "Ran out of Mountain Dew",
                "Spaghetti code",
                "Stupid fucking engine",
                "RNG",
            ];

let eight = document.getElementById("eight");
let answer = document.getElementById("answer");
let eightball = document.getElementById("eight-ball");
let question = document.getElementById("question");

eight.addEventListener("click", function() {
    let num = Math.floor(Math.random() * Math.floor(answers.length));
    answer.innerText = answers[num];
});

    
    // eightball.addEventListener("click", function() {
    //     if (question.value.length <= 1) {
    //     alert('Enter a question!');
    //     } else {
    //     eight.innerText = "";
    //     var num = Math.floor(Math.random() * Math.floor(answers.length));
    //     answer.innerText = answers[num];


// window.onload = function() {
//     var eight = document.getElementById("eight");
//     var answer = document.getElementById("answer");
//     var eightball = document.getElementById("eight-ball");
//     var question = document.getElementById("question");
    
//     eightball.addEventListener("click", function() {
//         if (question.value.length < 1) {
//         // alert('Enter a question!');
//         } else {
//         eight.innerText = "";
//         var num = Math.floor(Math.random() * Math.floor(answers.length));
//         answer.innerText = answers[num];
//         }
//     });
// };