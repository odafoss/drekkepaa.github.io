// Liste med spørsmål for spill 1
var sporsmalListe1 = [
    "Hva er din favorittdrink?",
    "Hva er det merkeligste du har spist?",
    "Fortell om din beste festopplevelse.",
    "Hvilken matrett kunne du spist hver dag resten av livet?",
    "Hva er din mest pinlige drikkehistorie?",
    "Hvis du kunne reise hvor som helst i verden, hvor ville du dratt?",
    "Hva er den rareste drømmen du har hatt?",
    "Del en morsom historie fra din siste fyllekveld."
];

// Liste med spørsmål for spill 2
var sporsmalListe2 = [
    "FIREBALL🔥",
    "Gjør som Oda å CHUGGG!",
    "SHOT",
    "Its giving old, eldste drikker",
    "You are the dancing queen, vis ditt beste danse move💃"
];

var currentQuestionIndex = 0; // Indeks for gjeldende spørsmål

// Funksjon for å vise spørsmålet basert på hvilket spill det er
function visSporsmal(indeks, sporsmalListe) {
    document.getElementById("sporsmal").innerHTML = "<p>" + sporsmalListe[indeks] + "</p>";
}

// Funksjon for å blande spørsmålslisten
function blandSporsmalListe(sporsmalListe) {
    for (var i = sporsmalListe.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [sporsmalListe[i], sporsmalListe[j]] = [sporsmalListe[j], sporsmalListe[i]];
    }
}

// Kall funksjonen når siden lastes inn
window.onload = function () {
    var spill = document.body.className; // Henter klassenavnet til body-elementet
    if (spill === "spill1") {
        blandSporsmalListe(sporsmalListe1); // Bland spørsmål for spill 1
        visSporsmal(currentQuestionIndex, sporsmalListe1);
    } else if (spill === "spill2") {
        blandSporsmalListe(sporsmalListe2); // Bland spørsmål for spill 2
        visSporsmal(currentQuestionIndex, sporsmalListe2);
    }
};

// Legg til klikkhendelse for "Neste" -knapp
document.getElementById("nesteKnapp").addEventListener("click", function () {
    var spill = document.body.className; // Henter klassenavnet til body-elementet
    if (spill === "spill1" && currentQuestionIndex < sporsmalListe1.length - 1) {
        currentQuestionIndex++;
        visSporsmal(currentQuestionIndex, sporsmalListe1);
    } else if (spill === "spill2" && currentQuestionIndex < sporsmalListe2.length - 1) {
        currentQuestionIndex++;
        visSporsmal(currentQuestionIndex, sporsmalListe2);
    }
});

// Legg til klikkhendelse for "Forrige" -knapp
document.getElementById("forrigeKnapp").addEventListener("click", function () {
    var spill = document.body.className; // Henter klassenavnet til body-elementet
    if (spill === "spill1" && currentQuestionIndex > 0) {
        currentQuestionIndex--;
        visSporsmal(currentQuestionIndex, sporsmalListe1);
    } else if (spill === "spill2" && currentQuestionIndex > 0) {
        currentQuestionIndex--;
        visSporsmal(currentQuestionIndex, sporsmalListe2);
    }
});

// Legg til klikkhendelse for "Tilbake til hovedsiden" -knapp
document.getElementById("tilbakeTekst").addEventListener("click", function () {
    window.location.href = "index.html"; // Sender brukeren tilbake til hovedsiden
});






