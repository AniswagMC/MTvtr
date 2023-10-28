function showImg() {
  fetch("https://catfact.ninja/fact")
  .then(res => res.json())
  .then(fact => console.log(fact.fact))
}

function bangerMusic() {
  chrome.windows.create({
    focused: true,
    state: 'maximized',
    url: 'https://www.youtube.com/playlist?list=PLci0CdPZ5bq56I-kUdxuKnBhyAPXv2Asi',
  })
}

// document.getElementById("hyper-btn").addEventListener("click", showImg)

chrome.action.onClicked.addListener(
  bangerMusic
)
