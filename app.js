// Liste med spørsmål for spill 1
var sporsmalListe1 = [
    "Les opp den siste meldingen som kommer når du søker unnskyld i søkefeltet",
    "Drikk så mange slurker som det er folk her",
    "Alle drikker 5 slurker",
    "Hvem er mest lik deg? Klonen må ta 10 slurker",
    "Hvem er mest motsatt deg? (Kontrasten drikker 10 slurker)",
    "En runde med opus",
    "Etterlign en person her, om folk gjetter hvem det er kan du dele ut 10 slurker, hvis ikke må de drikkes selv",
    "Two truths, One lie (gjetter man feil, drikk, de som gjetter rett deler ut slurk",
    "Sett på en timer på egenvalgt tid som kun DU vet om. Når timeren går må alle ha drukket opp glasset sitt, hvis ikke må de chugge. Perfekt å ha i bakgrunnen.",
    "Drikk antall søsken du har",
    "Del ut 4 slurker",
    "Drikk 5 slurker",
    "Hvem skal bli full idag? SKÅÅÅL",
    "Drikk antall slurker som første siffer i tlf nummeret ditt",
    "Alle single drikker",
    "Hvem har det fineste smilet",
    "Høyeste jenta og laveste gutten tar bonski",
    "De som sitter på mobilen drikker",
    "Hvem har flest bilder i kamerarullen (den drikker)",
    "Hvem har flest selfies på kamerarullen (den drikker)",
    "Hvem er snaphoe (høyest score drikker 3 slurker)",
    "Hvem er tinderhoe",
    "thunder eller låne penga",
    "pisk meg",
    "velg en hemmelig drikkevenn, blir dere oppdaget må du chugge",
    "Alle med kjæreste drikker",
    "Alle i et situationship drikker",
    "Navneleken, går med klokka og må nevne alle navn før deg også ditt navn"





];

// Liste med spørsmål for spill 2
var sporsmalListe2 = [
    "FIREBALL🔥",
    "Gjør som Oda å CHUGGG!",
    "SHOT",
    "Its giving old, eldste drikker",
    "You are the dancing queen, vis ditt beste danse move💃",
    "Gris",
    "Hvem er den største fyllikeren",
    "Tenker det er på tide med litt musikk, sett på 'Rattlin'Bog'",
    "Sett på en timer på egenvalgt tid som kun DU vet om. Når timeren går må alle ha drukket opp glasset sitt, hvis ikke må de chugge. Perfekt å ha i bakgrunnen.",
    "Hvem fyllesnapper mest",
    "Drikk antall slurker du har har hooket med i rommet",
    "Alle tar en STOR slurk",
    "Du og naboene dine tar en slurk.",
    "Hvem får kjæreste ila året",
    "Ta en drikkesang",
    "googgo gaggaa, yngste drikker",







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






