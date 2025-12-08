$("#output").append( "hello" );
$("#boudy").append( "We are in a forest, watch out for ghosts!");
$("#talking").append( "Tucked in Evan's cozy forest cabin, Jhon wakes to birds doing karaoke and pine trees gossiping in the breeze. He brews a mug of something warm, pokes the friendly fire, and steps outside like it's his tiny kingdom. No traffic, no buzz, just moss, mugs, and mischief. Forest life suits him just fine.")


const characterA = {
    dayPhrase:  "Good morning! The forest is waking up.",
    nightPhrase: "Good night. The cabin is cozy and quiet now."
};

function switchMode(mode) {
    const body = document.body;
    const talking = document.getElementById("talking");

    if (mode === "night") {
        body.classList.remove("day");
        body.classList.add("night");
        talking.textContent = characterA.nightPhrase;
    } else {
        body.classList.remove("night");
        body.classList.add("day");
        talking.textContent = characterA.dayPhrase;
    }
}

switchMode("day");



