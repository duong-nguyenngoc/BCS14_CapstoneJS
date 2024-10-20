class Users {
  constructor() {
    this.email = "";
    this.password = "";
    this.name = "";
    this.phone = "";
    this.genders = "";
  }
}
document.querySelector(".btn_submit").onclick = function getUsersInfo() {
  let info = new Users();
  info.email = document.querySelector("#email").value;
  info.password = document.querySelector("#password").value;
  info.name = document.querySelector("#name").value;
  info.phone = document.querySelector("#phone").value;

  let genders = document.querySelectorAll("form > input");
  for (let i = 0; i < genders.length; i++) {
    if (genders[i].checked === true) {
      info.genders = genders[i].value;
    }
  }
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: info,
  });

  promise.then(function (result) {
    console.log("result", result.data);
    alert("Successfully registered! Continue shop.");
    window.location.href = "../index.html";
  });

  promise.catch(function (error) {
    console.log("error", error.response.data);
  });
  console.log("Users", info);
};
