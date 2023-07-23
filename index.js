function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}
let r;
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        r ="I can't hear you!";
    } else if (string === string.toUpperCase()) {
        r ="YES INDEED!";
    } else {
        r = "I would love to!"
    }
    return r;
}