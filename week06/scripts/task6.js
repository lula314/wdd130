
// writes given line one char at a time to "things" element
function writeLine(line, element) {
    let paragraph = document.getElementById(element);
    let i = 0;

    return new Promise(resolve => {
        let interval = setInterval(function() {
            paragraph.append(line[i]);
            i++
            if (i == line.length) {
                clearInterval(interval);
                resolve();
            }
        }, 22);
    });
}

// document.getElementById("button").addEventListener("click", function() {writeLine("sphinx of black quartz judge my vow")});
// document.getElementById("button").addEventListener("click", function() {toggle("1a_1")});


// toggles a button element between hidden and visible
function toggle(elements) {
    elements.forEach(function(element) {
        element = document.getElementById(element);
        let hidden = element.getAttribute("hidden");

        if (hidden) {
        element.removeAttribute("hidden");
        }else {
        element.setAttribute("hidden", "hidden");
        }
    });
}


async function printSection(buttons_1, line, element, buttons_2) {
    // toggle(previous buttons(elements array))
    toggle(buttons_1);
    // writeline(line)
    await writeLine(line, element);
    // toggle(current buttons(elements array))
    toggle(buttons_2);
}

async function printEnding(buttons_1, line, line2, buttons_2) {
    // toggle(previous buttons(elements array))
    toggle(buttons_1);
    // writeline(line)
    await writeLine(line, "end_p");
    // writeline(line)
    await writeLine("THE END", "end_h3");
    // writeline(line)
    await writeLine(line2, "end_h4");
    // toggle(current buttons(elements array))
    toggle(buttons_2);
}

// intro
document.getElementById("start_btn").addEventListener("click", function() {printSection(["start_btn"], "You are walking home down a busy street from your college campus and you see a path of glowing wisps trailing down the sidewalk. Do you FOLLOW or WALK HOME?", "intro_p", ["intro_1", "intro_2"])});

    // 1a
    document.getElementById("intro_1").addEventListener("click", function() {printSection(["intro_1", "intro_2"], "You follow the wisps and they take you to a fantasy forest setting, you come across a little boy standing amongst the trees. He tells you his mommy and daddy want to meet you. Do you FOLLOW or RUN the other way?", "1a_p", ["1a_1", "1a_2"])});

        // 1b
        document.getElementById("1a_1").addEventListener("click", function() {printSection(["1a_1", "1a_2"], "You follow the boy through dark and difficult terrain. You see things shift and the color seem to drain from your surroundings. You come upon a clearing with a campfire burning in the center. A very old couple sits around the fire humming an almost familiar tune, they beckon you to sit with them. Do you SIT or grab the kid and RUN?", "1b_p", ["1b_1", "1b_2"])});

            // 1c
            document.getElementById("1b_1").addEventListener("click", function() {printSection(["1b_1", "1b_2"], "You sit with the old couple around the fire. They speak to you as if they've known you your whole life. They ask if they can teach you the lullaby they were humming. Do you LEARN the song or SAY NOTHING?", "1c_p", ["1c_1", "1c_2"])});

                // 1d(end)
                document.getElementById("1c_1").addEventListener("click", function() {printEnding(["1c_1", "1c_2"], "They teach you the song and you begin to remember something strange from when you were little and they give you a piece of strange advice, 'Your childhood is forever a part of you. Do not forget those pieces in your heart.' You suddenly find yourself on the outskirts of the forest, you turn and begin the journey home turning over this advice in your mind.", "You have found the 'Neverland' ending (1/13)", ["replay"])});

                // 2d(end)
                document.getElementById("1c_2").addEventListener("click", function() {printEnding(["1c_1", "1c_2"], "You say nothing. The fire goes out and the area dims even further. The kid disappears and the parents morph into towering beasts. They begin whispering to you, 'You should always seek to learn. Knowledge is all we can take to the grave. You would do well to remember that.' You wake up in your childhood bedroom, your parents calling you to get ready for school.", "You have found the 'Smack You With A Book' ending (2/13)", ["replay"])});

            // 2c
            document.getElementById("1b_2").addEventListener("click", function() {printSection(["1b_1", "1b_2"], "You try to grab the boy's wrist but your hand goes right through his arm. He begins giggling and says, 'No silly. That's not how the game works.' Do you ASK him what the rules are or do you try to WAKE UP from this nightmare?", "2c_p", ["2c_1", "2c_2"])});

                // 3d(end)
                document.getElementById("2c_1").addEventListener("click", function() {printEnding(["2c_1", "2c_2"], "You ask the boy what the rules are and you hear the words repeated with a dark undertone, 'No no silly. That's not how the game works. It takes a lifetime to learn the game, maybe when you join me, you can tell me how you played.' He looks over and points in a direction, 'The next round's beginning. You better get going' You begin the journey forward in the direction he pointed.", "You have found the 'Game Of Life' ending (3/13)", ["replay"])});

                // 4d
                document.getElementById("2c_2").addEventListener("click", function() {printSection(["2c_1", "2c_2"], "You try to wake up but the boy asks, 'What are you doing? You came here of your own free will, you have to finish what you started.' Do you STOP or do you CONTINUE trying to wake up?", "4d_p", ["4d_1", "4d_2"])});

                    // 1e(end)
                    document.getElementById("4d_1").addEventListener("click", function() {printEnding(["4d_1", "4d_2"], "You stop your efforts to wake up. The boy smiles, you listened, you finally learned. 'Mommy always tells me it's important to listen and to finish what you start. Even though you didn't play, at least you learned. It's time to go home.' He offers his hand to you, you take it and he guides you home.", "You have found the 'Rebellious Player' ending (4/13)", ["replay"])});

                    // 2e(end)
                    document.getElementById("4d_2").addEventListener("click", function() {printEnding(["4d_1", "4d_2"], "Despite the boy's urgings, you continue trying to wake up. You feel a dull ache spread throughout your being and you see the brightest darkness you never thought possible. As the pain ceases, you feel your consciousness do the same. You have died.", "You have found the 'Dream Of Death' ending (5/13)", ["replay"])});

        // 2b
        document.getElementById("1a_2").addEventListener("click", function() {printSection(["1a_1", "1a_2"], "As you run the other way, you can hear the boy begin to hum a strangely familiar tune. Eventually, the humming ceases but you continue onward. It is dark and nothing looks familiar, you begin to feel lost. As you run, you feel your foot catch on a tree root and you hear a gnarly snap, you let out a howl as you fall. You inspect your leg and see that your ankle is broken. Do you CONTINUE hobbling or SIT for a while?", "2b_p", ["2b_1", "2b_2"])});

            // 3c
            document.getElementById("2b_1").addEventListener("click", function() {printSection(["2b_1", "2b_2"], "You pick yourself up and continue hobbling. As you continue onward, you hear bones grinding in your ankle as a sharp pain shoots through your leg. You grab a branch to lean on and continue walking. You hear noises from what appears to be a wounded animal. You can see that it looks like a fiery bird. Do you APPROACH it or CONTINUE on?", "3c_p", ["3c_1", "3c_2"])});

                // 5d(end)
                document.getElementById("3c_1").addEventListener("click", function() {printEnding(["3c_1", "3c_2"], "You walk up to the animal and you can see now that it is a phoenix, but it is trapped in some sort of metal cage contraption and is unable to escape. You find the release lever on the device and the beautiful bird flies freely from its prison. It lands next to you and, with a tear in its eye, leans over your injured ankle. When the tear hits your mangled skin, you feel the pain cease and your leg return to its former glory. The phoenix soars into the air and beckons you to follow. You run after the bird, being sure to avoid any roots in the path, and after a while, you break from the forest and can see the familiar skyline in the distance as the sun is beginning to set.", "You have found the 'Phoenix Tale' ending (6/13)", ["replay"])});

                // 6d(end)
                document.getElementById("3c_2").addEventListener("click", function() {printEnding(["3c_1", "3c_2"], "You hobble away from the bird and continue wandering, trying to find your way home. After many days of not being able to escape the forest and living off of the surroundings, you decide that this is a better life than returning to school anyways. You live out the rest of your days in the woods, creating a home for yourself among the trees with your twisted leg and trusted walking stick.", "You have found the 'Forest Hermit' ending (7/13)", ["replay"])});

            // 4c
            document.getElementById("2b_2").addEventListener("click", function() {printSection(["2b_1", "2b_2"], "You remain sitting and try to think out your next move. After sitting for a while, you hear hoof steps getting louder. You see a strikingly dark stallion come from within the trees, a horn atop its head draws your attention. Do you let it APPROACH or do you SCARE it off?", "4c_p", ["4c_1", "4c_2"])});

                // 7d
                document.getElementById("4c_1").addEventListener("click", function() {printSection(["4c_1", "4c_2"], "You allow the animal to approach you. The unicorn comes up to you gently and bows its horn to your broken ankle and the pain disappears. The unicorn lowers himself allowing you to climb onto his back. Do you RIDE the black unicorn or REFUSE?", "7d_p", ["7d_1", "7d_2"])});

                    // 3e(end)
                    document.getElementById("7d_1").addEventListener("click", function() {printEnding(["7d_1", "7d_2"], "You mount the majestic unicorn and it safely carries you through and out of the woods. You carefully dismount at a familiar road. You walk home reminiscing on the adventures you've had and whether or not you may be delusional.", "You have found the 'Shrooms?' ending (8/13)", ["replay"])});

                    // 4e(end)
                    document.getElementById("7d_2").addEventListener("click", function() {printEnding(["7d_1", "7d_2"], "You politely refuse the unicorn's offer and it wanders off. You begin walking in the direction you think is home. You hear a rustling and see a park ranger walking towards you calling you by name with a confused look on his face. 'We've been looking for you. You're roommates called in a missing persons report about two weeks ago. Let's get you home.' You are puzzled, it seems like it has only been a few hours at most but you follow him back to the city in safety.", "You have found the 'Shoulda Gone With The Unicorn' ending (9/13)", ["replay"])});

                // 8d(end)
                document.getElementById("4c_2").addEventListener("click", function() {printEnding(["4c_1", "4c_2"], "You scare off the majestic unicorn and it leaves you to your injury. It feels like it has been days, your body is weak, you feel you may be dying. Out of nowhere, a mythical, angelic being floats to you and reaches for your hand. As it pulls you up, you look down to see your body laying on the ground. The being speaks to you in a surreal voice saying, 'Your time in this game is complete. There are others who have been waiting to see you.'", "You have found the 'Why Would You Scare Off A Unicorn?' ending (10/13)", ["replay"])});

    // 2a
    document.getElementById("intro_2").addEventListener("click", function() {printSection(["intro_1", "intro_2"], "After seeing the wisps, you decide to continue home. Do you take the BUS, WALK, or take a NEW PATH home?", "2a_p", ["2a_1", "2a_2", "2a_3"])});

        // 3b(end)
        document.getElementById("2a_1").addEventListener("click", function() {printEnding(["2a_1", "2a_2", "2a_3"], "You take the moldy, germ-infested bus home. You see a billboard that says 'Follow your dreams. Seek adventure' so you go home depressed.", "You have found the 'Get A Life' ending (11/13)", ["replay"])});

        // 4b(end)
        document.getElementById("2a_2").addEventListener("click", function() {printEnding(["2a_1", "2a_2", "2a_3"], "As you walk down the street towards your apartment, you hear a commotion from above you followed by gasps of surprise. You look up to see a full grand piano falling directly above you.", "You have found the 'B-Flat' ending (12/13)", ["replay"])});

        // 5b(end)
        document.getElementById("2a_3").addEventListener("click", function() {printEnding(["2a_1", "2a_2", "2a_3"], "You decide to take a new path home that you have never taken before. As you take in the new sights you hear a whimper coming from an abandoned box on the sidewalk. You walk up to it and see the most adorable greed-eyed puppy staring up at you. You pick it up, determined to give this little pupper a good, new home.", "You have found the 'Jax Prefers Cats' ending (13/13)", ["replay"])});

// Replay
document.getElementById("replay").addEventListener("click", function() {
    toggle(["replay"]);
    lines = document.querySelectorAll("p");
    lines.forEach(function(line) {
        line.innerHTML = "";
    });
    toggle(["start_btn"]);
    document.querySelector("h3").innerHTML = "";
    document.querySelector("h4").innerHTML = "";
})