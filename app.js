const signLanguageSelect = document.getElementById('sign-language-select');
const inputText = document.getElementById('input-text');
const aslOutput = document.getElementById('asl-output');

// Define ASL, BSL, and CSL images for each letter and word
const signLanguageImages = {
    asl: {
        A: 'images/ASL/A.png',
        B: 'images/ASL/B.png',
        C: 'images/ASL/C.png',
        D: 'images/ASL/D.png',
        E: 'images/ASL/E.png',
        F: 'images/ASL/F.png',
        G: 'images/ASL/G.png',
        H: 'images/ASL/H.png',
        I: 'images/ASL/I.png',
        J: 'images/ASL/J.png',
        K: 'images/ASL/K.png',
        L: 'images/ASL/L.png',
        M: 'images/ASL/M.png',
        N: 'images/ASL/N.png',
        O: 'images/ASL/O.png',
        P: 'images/ASL/P.png',
        Q: 'images/ASL/Q.png',
        R: 'images/ASL/R.png',
        S: 'images/ASL/S.png',
        T: 'images/ASL/T.png',
        U: 'images/ASL/U.png',
        V: 'images/ASL/V.png',
        W: 'images/ASL/W.png',
        X: 'images/ASL/X.png',
        Y: 'images/ASL/Y.png',
        Z: 'images/ASL/Z.png',
        ' ': '       ',
        // ... Add images for all letters
    },
    bsl: {
        A: 'images/BSL/A.png',
        B: 'images/BSL/B.png',
        C: 'images/BSL/C.png',
        D: 'images/BSL/D.png',
        E: 'images/BSL/E.png',
        F: 'images/BSL/F.png',
        G: 'images/BSL/G.png',
        H: 'images/BSL/H.png',
        I: 'images/BSL/I.png',
        J: 'images/BSL/J.png',
        K: 'images/BSL/K.png',
        L: 'images/BSL/L.png',
        M: 'images/BSL/M.png',
        N: 'images/BSL/N.png',
        O: 'images/BSL/O.png',
        P: 'images/BSL/P.png',
        Q: 'images/BSL/Q.png',
        R: 'images/BSL/R.png',
        S: 'images/BSL/S.png',
        T: 'images/BSL/T.png',
        U: 'images/BSL/U.png',
        V: 'images/BSL/V.png',
        W: 'images/BSL/W.png',
        X: 'images/BSL/X.png',
        Y: 'images/BSL/Y.png',
        Z: 'images/BSL/Z.png',
        ' ': '       ',
        // ... Add images for all letters and words
    },
};

// Function to display the selected sign language images
function displaySignLanguageImages(signLanguage, text) {
    aslOutput.innerHTML = '';

    for (const letter of text) {
        if (signLanguageImages[signLanguage][letter]) {
            const aslImage = document.createElement('img');
            aslImage.src = signLanguageImages[signLanguage][letter];
            aslImage.classList.add('asl-image');
            

            const wordSpan = document.createElement('span');
            wordSpan.classList.add('word-border');
            wordSpan.appendChild(aslImage);

            aslOutput.appendChild(wordSpan);


            // aslOutput.appendChild(aslImage);
        }
    }
}

// Event listener for form submission
document.getElementById('asl-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const signLanguage = signLanguageSelect.value;
    const inputTextValue = inputText.value.trim().toUpperCase();
    displaySignLanguageImages(signLanguage, inputTextValue);
});