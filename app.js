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
        B: 'images/B.png',
        O: 'images/O.png',
        S: 'images/S.png',
        // ... Add images for all letters and words
    },
};

// New functions
function createImageElement(src) {
    const aslImage = document.createElement('img');
    aslImage.src = src;
    aslImage.classList.add('asl-image');
    return aslImage;
}

function createWordSpan(aslImage) {
    const wordSpan = document.createElement('span');
    wordSpan.classList.add('word-border');
    wordSpan.appendChild(aslImage);
    return wordSpan;
}

function displaySignLanguageImages(signLanguage, text) {
    aslOutput.innerHTML = '';

    for (const letter of text) {
        if (signLanguageImages[signLanguage][letter]) {
            const aslImage = createImageElement(signLanguageImages[signLanguage][letter]);
            const wordSpan = createWordSpan(aslImage);
            aslOutput.appendChild(wordSpan);
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
