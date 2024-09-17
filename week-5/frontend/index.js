let log = console.log;
async function evaluateLogin() {
  // document.body.removeChild(document.querySelector("button"));
  // renderPostLogin();
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;

  log(username, password);
  let response = await axios({
    method: "post",
    url: "http://localhost:8080/login",
    data: {
      username: username,
      password: password,
    },
  });
  // if(response)
}
async function evaluateSignup() {
  // document.body.removeChild(document.querySelector("button"));
  // renderPostLogin();
  let name = document.querySelector("#signup-name").value;
  let password = document.querySelector("#signup-password").value;
  let email = document.querySelector("#signup-email").value;
  // log(username, password);
  try {
    let response = await axios({
      method: "post",
      url: "http://localhost:8080/signup",
      data: {
        email: email,
        name: name,
        password: password,
      },
    });
    log(response);
  } catch (e) {
    log(`Failed signup. Error-> ${e}`);
  }
  // if(response)
}
