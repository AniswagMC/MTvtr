/**
 * Sample JavaScript code for youtube.playlists.list
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/code-samples#javascript
 */


// function authenticate() {
//   return gapi.auth2.getAuthInstance()
//       .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
//       .then(function() { console.log("Sign-in successful"); },
//             function(err) { console.error("Error signing in", err); });
// }
// function loadClient() {
//   gapi.client.setApiKey("AIzaSyC2alh69wGfgiHhYQGVUG2QwxTgJL2rgwk");
//   return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//       .then(function() { console.log("GAPI client loaded for API"); },
//             function(err) { console.error("Error loading GAPI client for API", err); });
// }
// // Make sure the client is loaded and sign-in is complete before calling this method.
// function execute() {
//   return gapi.client.youtube.playlists.list({
//     "part": [
//       "snippet,contentDetails"
//     ],
//     "maxResults": 25,
//     "mine": true
//   })
//       .then(function(response) {
//               // Handle the results here (response.result has the parsed body).
//               console.log("Response", response);
//             },
//             function(err) { console.error("Execute error", err); });
// }
// gapi.load("client:auth2", function() {
//   gapi.auth2.init({client_id: "545013444605-538l5pr78p3ljg6hq1hs4mtc58frp1a0.apps.googleusercontent.com"});
// });

// document.getElementById("hyper-btn").addEventListener("click", authenticate.then(loadClient).then(execute));

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