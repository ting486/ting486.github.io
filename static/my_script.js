const arr = [];
let counter = 1;
const languagesAll = document.querySelectorAll(".language");
var rad = document.projectFilterForm.myLanguage;


// open all external links in new tab
$("a:not(#nav a)").attr("target", "_blank");

// set up a list of skills used in projects
for (const lgg of languagesAll) {
    const lggClean = lgg.textContent.replace(/ *\([^)]*\) */g, "");
    const lList = lggClean.split(", ");

    arr.push({
        id: counter++,
        languages: lList
    });
}

// project filtering by programming language
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        const l = this.value;

        if (l != "All") {
            for (let i = 0; i < arr.length; i++) {
                const ar = arr[i];
                if (ar.languages.includes(l)) {
                    $(`#projects .card:nth-child(${i+1})`).css("display", "block");
                }
                else {
                    $(`#projects .card:nth-child(${i+1})`).css("display", "none");
                }
            }
        }
        else {
            $("#projects .card").css("display", "block");
        }
    });
}