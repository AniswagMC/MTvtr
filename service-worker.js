function bangerMusic() {
  chrome.windows.create({
    focused: true,
    state: 'maximized',
    url: 'https://www.youtube.com/playlist?list=PLci0CdPZ5bq56I-kUdxuKnBhyAPXv2Asi',
  })
}

chrome.action.onClicked.addListener(
  bangerMusic
)
