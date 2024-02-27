
// Funksjon som kjøres når en spillknapp klikkes
function spillValgt(spillNavn) {
    alert("Du valgte " + spillNavn);
}

// Legg til klikk-hendelseslytter for hver spillknapp
document.getElementById("spill1").addEventListener("click", function () {
    spillValgt("Spill 1");
});

document.getElementById("spill2").addEventListener("click", function () {
    spillValgt("Spill 2");
});




