function about() {
  let text = document.querySelector("#text");
  text.innerHTML =
    "Die Stelle ist für mich von großem Interesse, weil ich solide Grundkenntnisse in Programmiersprachen besitze. In der Schule habe ich zwei Jahre Java gelernt. Derzeit befinde ich mich ein Advance Frontend Developer Kurs bei SheCodes. Zurzeit entwickle ich eine Web-Applikationen und auch eine Website. Ich habe gute Kenntnisse auf HTML, CSS, JavaScript, Bootstrap und weiter lerne ich auch in der Kurz React und API. Ich habe meine Masterarbeit über das aktuelle Thema „Konsequenzanalyse der Megatrends Connected, autonomen Fahrens, Shared Services und Elektromobilität für die Automobilindustrie“ mit sehr gut Note (70%) abgeschlossen. Ich habe Fächer wie Projektmanagement und Leadership, Cross-Cultural Management und Accounting und Managerial Finance studiert. Während meines Bachelors, meine Leistung in allen Semestern beträgt im Durchschnitt 78%. Ich arbeite aktiv daran meine Deutschkenntnisse zu verbessern. Ich spreche Englisch, Deutsch und Hindi.";
}

let aboutMeElement = document.querySelector("#about-me");
aboutMeElement.addEventListener("click", about);

function work() {
  var str = "Here is my best work ☔️";
  var result = str.link("https://sad-babbage-b8d06f.netlify.app/");
  let text = document.querySelector("#text");
  text.innerHTML = result;
}
let myWorkElement = document.querySelector("#my-work");
myWorkElement.addEventListener("click", work);

function profile() {
  var str = "GitHub";
  var result1 = str.link("https://github.com/Pratibhatomar03");
  var str2 = "LinkedIn";
  var result2 = str2.link("linkedin.com/in/pratibha-tomar-0a220318b");

  let text = document.querySelector("#text");
  text.innerHTML = result1 + " & " + result2;
}

let myProfileElement = document.querySelector("#my-profile");
myProfileElement.addEventListener("click", profile);
