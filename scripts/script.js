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
                "Fake Unbroken",
                "Thought they were on COD",
            ];

let eight = document.getElementById("eight");
let answer = document.getElementById("answer");

eight.addEventListener("click", function() {
    eight.innerHTML = "";
    let num = Math.floor(Math.random() * Math.floor(answers.length));
    answer.innerText = answers[num];
});