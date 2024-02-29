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
    "SHOT"
];

var currentQuestionIndex1 = -1; // Indeks for gjeldende spørsmål i spill 1, starter på -1 for å vise "Klar?" først
var currentQuestionIndex2 = -1; // Indeks for gjeldende spørsmål i spill 2, starter på -1 for å vise "Klar?" først
var questionsShown1 = 0; // Antall spørsmål vist for spill 1
var questionsShown2 = 0; // Antall spørsmål vist for spill 2

// Funksjon for å vise spørsmålet basert på hvilket spill det er
function visSporsmal(indeks, sporsmalListe) {
    if (indeks < sporsmalListe.length) {
        document.getElementById("sporsmal").innerHTML = "<p>" + sporsmalListe[indeks] + "</p>";
        if (sporsmalListe === sporsmalListe1) {
            questionsShown1++;
        } else if (sporsmalListe === sporsmalListe2) {
            questionsShown2++;
        }
    } else {
        if (sporsmalListe === sporsmalListe1 && questionsShown1 === sporsmalListe1.length) {
            document.getElementById("sporsmal").innerHTML += "<p>Skål, dere er ferdig med spill 1!</p>";
        } else if (sporsmalListe === sporsmalListe2 && questionsShown2 === sporsmalListe2.length) {
            document.getElementById("sporsmal").innerHTML += "<p>Skål, dere er ferdig med spill 2!</p>";
        }
    }
}

// Funksjon for å blande spørsmålslisten
function blandSporsmalListe(sporsmalListe) {
    for (var i = sporsmalListe.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [sporsmalListe[i], sporsmalListe[j]] = [sporsmalListe[j], sporsmalListe[i]];
    }
}

// Kall funksjonen når siden lastes inn for spill 1
window.onload = function () {
    var spill = document.body.className; // Henter klassenavnet til body-elementet
    if (spill === "spill1") {
        document.getElementById("sporsmal").innerHTML = "<p>Klar?</p>";
    } else if (spill === "spill2") {
        document.getElementById("sporsmal").innerHTML = "<p>Klar?</p>";
    }
};

// Legg til klikkhendelse for "Neste" -knapp
document.getElementById("nesteKnapp").addEventListener("click", function () {
    var spill = document.body.className; // Henter klassenavnet til body-elementet
    if (spill === "spill1") {
        currentQuestionIndex1++;
        visSporsmal(currentQuestionIndex1, sporsmalListe1);
    } else if (spill === "spill2") {
        currentQuestionIndex2++;
        visSporsmal(currentQuestionIndex2, sporsmalListe2);
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



