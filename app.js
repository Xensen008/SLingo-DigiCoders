const signLanguageSelect = document.getElementById('sign-language-select');
const inputText = document.getElementById('input-text');
const aslOutput = document.getElementById('asl-output');


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
        A: 'images/BSL/a.png',
        B: 'images/BSL/b.png',
        C: 'images/BSL/c.png',
        D: 'images/BSL/d.png',
        E: 'images/BSL/e.png',
        F: 'images/BSL/f.png',
        G: 'images/BSL/g.png',
        H: 'images/BSL/h.png',
        I: 'images/BSL/i.png',
        J: 'images/BSL/j.png',
        K: 'images/BSL/k.png',
        L: 'images/BSL/l.png',
        M: 'images/BSL/m.png',
        N: 'images/BSL/n.png',
        O: 'images/BSL/o.png',
        P: 'images/BSL/p.png',
        Q: 'images/BSL/q.png',
        R: 'images/BSL/r.png',
        S: 'images/BSL/s.png',
        T: 'images/BSL/t.png',
        U: 'images/BSL/u.png',
        V: 'images/BSL/v.png',
        W: 'images/BSL/w.png',
        X: 'images/BSL/x.png',
        Y: 'images/BSL/y.png',
        Z: 'images/BSL/z.png',
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
    const specialCharRegex = /[^A-Za-z ]/;
    if (specialCharRegex.test(inputTextValue)) {
        alert('Please enter only alphabets and spaces.');
        return;
    }
    displaySignLanguageImages(signLanguage, inputTextValue);
});