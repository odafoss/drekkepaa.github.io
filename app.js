// Liste med spørsmål
var sporsmalListe = [
    "Hva er din favorittdrink?",
    "Hva er det merkeligste du har spist?",
    "Fortell om din beste festopplevelse.",
    "Hvilken matrett kunne du spist hver dag resten av livet?",
    "Hva er din mest pinlige drikkehistorie?",
    "Hvis du kunne reise hvor som helst i verden, hvor ville du dratt?",
    "Hva er den rareste drømmen du har hatt?",
    "Del en morsom historie fra din siste fyllekveld."
];

var currentQuestionIndex = 0; // Indeks for gjeldende spørsmål

// Funksjon for å vise spørsmålet basert på indeks
function visSporsmal(indeks) {
    document.getElementById("sporsmal").innerHTML = "<p>" + sporsmalListe[indeks] + "</p>";
}

// Kall funksjonen når siden lastes inn
window.onload = function () {
    visSporsmal(currentQuestionIndex);
};

// Legg til klikkhendelse for "Neste" -knapp
document.getElementById("nesteKnapp").addEventListener("click", function () {
    if (currentQuestionIndex < sporsmalListe.length - 1) {
        currentQuestionIndex++;
        visSporsmal(currentQuestionIndex);
    }
});

// Legg til klikkhendelse for "Forrige" -knapp
document.getElementById("forrigeKnapp").addEventListener("click", function () {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        visSporsmal(currentQuestionIndex);
    }
});

// Legg til klikkhendelse for "Tilbake til hovedsiden" -lenken
document.getElementById("tilbakeTekst").addEventListener("click", function () {
    window.location.href = "index.html"; // Sender brukeren tilbake til hovedsiden
});




