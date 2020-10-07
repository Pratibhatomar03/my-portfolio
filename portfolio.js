function about() {
  let text = document.querySelector("#text");
  text.innerHTML =
    "I am 24 years old and have completed my bachelors, master and a foreign language course. In school, I studied Java for 2 years and since that time I am interest in programming languages. I am a certificated Frontend developer. Currently, I have been enhancing my computer language skills by working on real-life projects." +
    " Also, I am interested in hot topic like Connected, Autonomous, Shared and Electric vehicle (CASE) in Automotive industry. CASE is going to change the automotive industry like never before. I wrote my thesis on the topic: Consequence Analysis of future megatrends CASE - Closure View at Shared Services, if you are interested in my master thesis write me and i’ll share my work with you 🙂";
}

let aboutMeElement = document.querySelector("#about-me");
aboutMeElement.addEventListener("click", about);

function work() {
  var str = "Click here to check my best work ☔️";
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
  var result2 = str2.link("https://linkedin.com/in/pratibha-tomar-0a220318b");
  var str3 = "Xing";
  var result3 = str3.link("https://www.xing.com/profile/Pratibha_Tomar");

  let text = document.querySelector("#text");
  text.innerHTML =
    "Find more about me on: " + result1 + " | " + result2 + " | " + result3;
}

let myProfileElement = document.querySelector("#my-profile");
myProfileElement.addEventListener("click", profile);
