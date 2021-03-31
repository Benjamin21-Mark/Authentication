window.snapKitInit = () => {
    snap.loginkit.mountButton("login-button", {
      clientId: "[INSERT YOUR CLIENT ID HERE]",
      redirectURI: "http://localhost:8000",
      scopeList: [
        "user.display_name",
        "user.bitmoji.avatar",
      ],
      handleResponseCallback: () => {
        snap.loginkit.fetchUserInfo().then(data => {
          document.getElementById("login-button").classList.add("hidden")
          document.getElementById("profile").classList.remove("hidden")

          document.getElementById("picture").src = data["data"]["me"]["bitmoji"]["avatar"]
          document.getElementById("welcome").innerHTML = "Welcome, " + data["data"]["me"]["displayName"] + "!"
        })
      },
    })
  }

  // Load the SDK asynchronously
  (function (d, s, id) {
    var js, sjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://sdk.snapkit.com/js/v1/login.js";
    sjs.parentNode.insertBefore(js, sjs);
  }(document, "script", "loginkit-sdk"));