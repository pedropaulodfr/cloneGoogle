var inputSearch = document.querySelector("#text-area");
inputSearch.focus();

inputSearch.addEventListener("keypress", (e) =>{
    if (e.key == 'Enter') {
        go();
    }
});

function go() {
    window.location.href = "https://www.google.com/search?q=" + String(inputSearch.value);
}