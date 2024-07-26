document.addEventListener("DOMContentLoaded", function () {
    var sporsmalListe3 = [
        "{deltaker}, drikk så mange tkd studenter det er i rommet",
        "{deltaker}, gi en shot til hosten",
        "{deltaker}, les opp søkelista di på instagram, eller 10 slurker",
        "{deltaker}, dm en kjendis",
        "{deltaker}, les opp den siste mld du mottatte",
        "{deltaker}, dans som om ingen ser på i 30 sekunder",
        "{deltaker}, har du noen gang ligget med 2 personer innen 24t",
        "{deltaker}, hva er første inntrykket ditt av personen til høyre",
        "{deltaker}, nødt eller sannhet",
        "{deltaker}, drikk 4 slurker",
        "{deltaker}, ta den største slurken du klarer",
        "{deltaker}, del ut 4 slurker",
        "{deltaker}, personen til høyre for deg bestemmer hvor mange slurker du skal ha",
        "{deltaker}, personen tvers over deg bestemmer antall slurker dere skal ta ilag",
        "{deltaker}, drikk antall slurker som aldern din halvert",
        "{deltaker}, 3 turn offs",
        "{deltaker}, ta en shot",
        "{deltaker}, løp en gang rundt huset eller ta 3 shots",
        "{deltaker}, finn på en setning og start hviskeleken- om siste mann sier rett setning deler den ut 5 slurker, om ikke deler du ut",
        "{deltaker}, du har ikke lov å si navnene på deltakerene de neste 10 min, chung om du feiler",


    ];

    var currentQuestionIndex = 0;
    var deltakere = [];
    var forrigeDeltaker = null;

    // Hent deltakere fra localStorage hvis tilgjengelig
    var lagredeDeltakere = localStorage.getItem("deltakere");
    if (lagredeDeltakere) {
        deltakere = JSON.parse(lagredeDeltakere);
        oppdaterNavneListe();
    }

    // Klikkhendelse for "Legg til navn" -knapp
    document.getElementById("leggTilNavnKnapp").addEventListener("click", function () {
        var navnInput = document.getElementById("navnInput").value.trim();
        if (navnInput !== "") {
            deltakere.push(navnInput);
            lagreDeltakere();
            oppdaterNavneListe();
            document.getElementById("navnInput").value = "";
        }
    });

    // Klikkhendelse for "Start spillet" -knapp
    document.getElementById("startSpillKnapp").addEventListener("click", function () {
        if (deltakere.length > 0) {
            // Skjul registreringselementer og vis spørsmålene for spill 3
            document.getElementById("registreringTekst").style.display = "none";
            document.getElementById("navnInputContainer").style.display = "none";
            document.getElementById("leggTilNavnKnapp").style.display = "none";
            document.getElementById("startSpillKnapp").style.display = "none";
            document.getElementById("spill3Sporsmal").style.display = "block";
            document.getElementById("tilbakeSpill3").style.display = "block"; // Vis tilbakeknappen

            blandSporsmalListe();
            visSporsmal(currentQuestionIndex);
        } else {
            alert("Legg til minst én deltaker før du starter spillet!");
        }
    });

    // Klikkhendelse for "Forrige" -knapp
    document.getElementById("forrigeKnapp").addEventListener("click", function () {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            visSporsmal(currentQuestionIndex);
        }
    });

    // Klikkhendelse for "Neste" -knapp
    document.getElementById("nesteKnapp").addEventListener("click", function () {
        if (currentQuestionIndex < sporsmalListe3.length - 1) {
            currentQuestionIndex++;
            visSporsmal(currentQuestionIndex);
        }
    });

    // Klikkhendelse for "Tilbake til hovedsiden" -knapp
    document.getElementById("tilbakeSpill3").addEventListener("click", function () {
        // Slett deltakerne fra localStorage før du går tilbake
        slettDeltakere();
        window.location.href = "index.html"; // Endre URLen til hovedsiden om nødvendig
    });

    // Funksjon for å oppdatere navnelisten
    function oppdaterNavneListe() {
        var navneListe = document.getElementById("navneListe");
        navneListe.innerHTML = "";
        deltakere.forEach(function (navn) {
            var liElement = document.createElement("li");
            liElement.textContent = navn;
            navneListe.appendChild(liElement);
        });
    }

    // Funksjon for å lagre deltakere i localStorage
    function lagreDeltakere() {
        localStorage.setItem("deltakere", JSON.stringify(deltakere));
    }

    // Funksjon for å slette deltakere fra localStorage
    function slettDeltakere() {
        localStorage.removeItem("deltakere");
        deltakere = [];
        oppdaterNavneListe();
    }

    // Funksjon for å blande spørsmålslisten
    function blandSporsmalListe() {
        for (let i = sporsmalListe3.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [sporsmalListe3[i], sporsmalListe3[j]] = [sporsmalListe3[j], sporsmalListe3[i]];
        }
    }

    // Funksjon for å velge et tilfeldig spørsmål og unngå samme deltaker to ganger på rad
    function velgTilfeldigSporsmal() {
        var availableQuestions = sporsmalListe3.slice(); // Kopier spørsmållisten

        // Velg et tilfeldig spørsmål fra listen
        var randomIndex = Math.floor(Math.random() * availableQuestions.length);
        var selectedQuestion = availableQuestions[randomIndex];

        // Finn et unikt navn for spørsmålet
        var randomDeltaker = velgUnikDeltaker();
        selectedQuestion = selectedQuestion.replace("{deltaker}", randomDeltaker);

        return selectedQuestion;
    }

    // Funksjon for å velge en tilfeldig deltaker som ikke er samme som forrige deltaker
    function velgUnikDeltaker() {
        var randomIndex = Math.floor(Math.random() * deltakere.length);
        var randomDeltaker = deltakere[randomIndex];

        // Sjekk om forrige deltaker er samme som nåværende, og bytt ut hvis det er tilfelle
        while (randomDeltaker === forrigeDeltaker) {
            randomIndex = Math.floor(Math.random() * deltakere.length);
            randomDeltaker = deltakere[randomIndex];
        }

        // Oppdater forrigeDeltaker til nåværende valg
        forrigeDeltaker = randomDeltaker;

        return randomDeltaker;
    }

    // Funksjon for å vise spørsmålet på skjermen
    function visSporsmal(index) {
        var sporsmalDiv = document.getElementById("sporsmal");
        sporsmalDiv.textContent = velgTilfeldigSporsmal();
    }
});


