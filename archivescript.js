let resourcesHTML = "" //En variabel som starter tom som er den all teksten blir skrivet inn i for å så bli vist på siden til slutt.

const HTML = document.getElementById("HTML")
const CSS = document.getElementById("CSS")
const JS = document.getElementById("JS")
const REACT = document.getElementById("REACT")
const SHCMS = document.getElementById("SHCMS")

document.getElementById("HTML").addEventListener("click", function() { //Sjekker om HTML knappen har blitt trykket, og hvis den er det fjerner den "current" klassen fra alle andre knapper og legger den til HTML knappen.
    HTML.classList.add("current")
    CSS.classList.remove("current")
    JS.classList.remove("current")
    REACT.classList.remove("current")
    SHCMS.classList.remove("current")

    //Jeg skal være ærlig å si at dette er langt fra den beste løsningen, men den virker uten noen problemer og kan utvides (med litt jobb) så jeg ser på det som en suksess.

    const firstTitle = resources[0].sources.map(source => source.title)[0];
    const firstUrl = resources[0].sources.map(source => source.url)[0]; //for å få tilgang til arrayene innenfor source arrayen måtte jeg lage en ny variabel for å faktisk kunne bruke det på denne måten. Jeg lagde en egen variabel for hver array som jeg brukte senere for å skrive på siden.

    //igjen, det er defintivt en bedre løsning og hvis du vev om en med en gang vil jeg gjerne høre den :D
    
    //siden denne løsningen er så hard kodet er det vanskligere å implementere nye kategorier eller lenker og kan bli sett på som vanskligere enn å bare skrive det rett inn her.

    const secondTitle = resources[0].sources.map(source => source.title)[1];
    const secondUrl = resources[0].sources.map(source => source.url)[1];

    const thirdTitle = resources[0].sources.map(source => source.title)[2];
    const thirdUrl = resources[0].sources.map(source => source.url)[2];

    resources.map(resource => resourcesHTML = `<main><h2>${resources[0].category}</h2>
    <p>${resources[0].text}</p>
    <ul>
    <li><a href=` + firstUrl + `>` + firstTitle  +`</a></li>
    <li><a href=` + secondUrl + `>` + secondTitle  +`</a></li>
    <li><a href=` + thirdUrl + `>` + thirdTitle  +`</a></li>
    </ul></main>`)
    //Bruker en blanding av template literals og variabler som jeg definerte tidligere for å lage HTML koden som går inn i resourcesHTML variablen som definert i starten av koden og skriver det på siden i "container" diven.

    document.getElementById("container").innerHTML = resourcesHTML
})



document.getElementById("CSS").addEventListener("click", function() {
    HTML.classList.remove("current")
    CSS.classList.add("current")
    JS.classList.remove("current")
    REACT.classList.remove("current")
    SHCMS.classList.remove("current")

    const firstTitle = resources[1].sources.map(source => source.title)[0];
    const firstUrl = resources[1].sources.map(source => source.url)[0];

    const secondTitle = resources[1].sources.map(source => source.title)[1];
    const secondUrl = resources[1].sources.map(source => source.url)[1];

    const thirdTitle = resources[1].sources.map(source => source.title)[2];
    const thirdUrl = resources[1].sources.map(source => source.url)[2];

    const fourthTitle = resources[1].sources.map(source => source.title)[3];
    const fourthUrl = resources[1].sources.map(source => source.url)[3];

    resources.map(resource => resourcesHTML = `<main><h2>${resources[1].category }</h2>
    <p>${resources[1].text }</p>
    <ul>
    <li><a href=` + firstUrl + `>` + firstTitle  +`</a></li>
    <li><a href=` + secondUrl + `>` + secondTitle  +`</a></li>
    <li><a href=` + thirdUrl + `>` + thirdTitle  +`</a></li>
    <li><a href=` + fourthUrl + `>` + fourthTitle  +`</a></li>
    </ul></main>`)
    

    document.getElementById("container").innerHTML = resourcesHTML
})

document.getElementById("JS").addEventListener("click", function() {
    HTML.classList.remove("current")
    CSS.classList.remove("current")
    JS.classList.add("current")
    REACT.classList.remove("current")
    SHCMS.classList.remove("current")

    const firstTitle = resources[2].sources.map(source => source.title)[0];
    const firstUrl = resources[2].sources.map(source => source.url)[0];

    const secondTitle = resources[2].sources.map(source => source.title)[1];
    const secondUrl = resources[2].sources.map(source => source.url)[1];

    const thirdTitle = resources[2].sources.map(source => source.title)[2];
    const thirdUrl = resources[2].sources.map(source => source.url)[2];

    resources.map(resource => resourcesHTML = `<main><h2>${resources[2].category }</h2>
    <p>${resources[2].text }</p>
    <ul>
    <li><a href=` + firstUrl + `>` + firstTitle  +`</a></li>
    <li><a href=` + secondUrl + `>` + secondTitle  +`</a></li>
    <li><a href=` + thirdUrl + `>` + thirdTitle  +`</a></li>
    </ul></main>`)
    

    document.getElementById("container").innerHTML = resourcesHTML
})

document.getElementById("REACT").addEventListener("click", function() {
    HTML.classList.remove("current")
    CSS.classList.remove("current")
    JS.classList.remove("current")
    REACT.classList.add("current")
    SHCMS.classList.remove("current")

    const firstTitle = resources[3].sources.map(source => source.title)[0];
    const firstUrl = resources[3].sources.map(source => source.url)[0];

    const secondTitle = resources[3].sources.map(source => source.title)[1];
    const secondUrl = resources[3].sources.map(source => source.url)[1];

    const thirdTitle = resources[3].sources.map(source => source.title)[2];
    const thirdUrl = resources[3].sources.map(source => source.url)[2];

    resources.map(resource => resourcesHTML = `<main><h2>${resources[3].category }</h2>
    <p>${resources[3].text }</p>
    <ul>
    <li><a href=` + firstUrl + `>` + firstTitle  +`</a></li>
    <li><a href=` + secondUrl + `>` + secondTitle  +`</a></li>
    <li><a href=` + thirdUrl + `>` + thirdTitle  +`</a></li>
    </ul></main>`)
    

    document.getElementById("container").innerHTML = resourcesHTML
})

document.getElementById("SHCMS").addEventListener("click", function() {
    HTML.classList.remove("current")
    CSS.classList.remove("current")
    JS.classList.remove("current")
    REACT.classList.remove("current")
    SHCMS.classList.add("current")

    const firstTitle = resources[4].sources.map(source => source.title)[0];
    const firstUrl = resources[4].sources.map(source => source.url)[0];

    const secondTitle = resources[4].sources.map(source => source.title)[1];
    const secondUrl = resources[4].sources.map(source => source.url)[1];

    const thirdTitle = resources[4].sources.map(source => source.title)[2];
    const thirdUrl = resources[4].sources.map(source => source.url)[2];

    resources.map(resource => resourcesHTML = `<main><h2>${resources[4].category }</h2>
    <p>${resources[4].text }</p>
    <ul>
    <li><a href=` + firstUrl + `>` + firstTitle  +`</a></li>
    <li><a href=` + secondUrl + `>` + secondTitle  +`</a></li>
    <li><a href=` + thirdUrl + `>` + thirdTitle  +`</a></li>
    </ul></main>`)
    

    document.getElementById("container").innerHTML = resourcesHTML
})