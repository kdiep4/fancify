function BigClick() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function radio() {
    const textInput = document.getElementById('textArea');
    const fancy = document.getElementById('fancy');
    const boring = document.getElementById('boring');

    if (fancy.checked) {
        // Set styles for FancyShmancy
        textInput.style.fontWeight = 'bold';
        textInput.style.color = 'blue';
        textInput.style.textDecoration = 'underline';
    } else if (boring.checked) {
        // Set styles for BoringBetty
        textInput.style.fontWeight = 'normal';
        textInput.style.color = 'black';
        textInput.style.textDecoration = 'none';
    }
}

function mooClick() {
    const textInput = document.getElementById('textArea');
    const words = textInput.value.split(" ");

    for (let i = 0; i < words.length; i++) {
        // Check if the word ends with a period
        if (words[i].endsWith(".")) {
            // Remove the period and add "-Moo"
            words[i] = words[i].substring(0, words[i].length - 1) + "-Moo";
        } else {
            // Uppercase the word
            words[i] = words[i].toUpperCase();
        }
    }

    // Join the words back into a sentence
    textInput.value = words.join(" ");
}