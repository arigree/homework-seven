import * as $ from "jquery";
import { signUserUp, signUserOut, signUserIn } from "./model";
import { changePage } from "./model.js";

function route() {
  let hashTag = window.location.hash || "#";
  let pageID = hashTag.replace("#", "");
  console.log("Routing to:", pageID);
  changePage(pageID);
}

function initSite() {
  $(window).on("hashchange", route);
  route();
}

function initListeners() {
  $(".hamburgerMenu").on("click", () => {
    $(".nav").toggleClass("active");
  });

  $(document).on("click", "#submit", () => {
    console.log("Sign-up button clicked");
    const firstName = $("#fName").val();
    const lastName = $("#lName").val();
    const email = $("#email").val();
    const password = $("#password").val();
    signUserUp(firstName, lastName, email, password);
  });

  $(document).on("click", "#siSubmit", () => {
    console.log("Login button clicked");
    const siEmail = $("#siEmail").val();
    const siPassword = $("#siPassword").val();
    signUserIn(siEmail, siPassword);
  });

  $(document).on("click", "#so", () => {
    signUserOut();
  });
}

$(document).ready(function () {
  initSite();
  initListeners();
});


//graveyard

// const hamburgerMenu = document.querySelector(".hamburgerMenu");
// const nav = document.querySelector(".nav");

//   changePage(pageID);
// }
// function initSite() {
//   $(window).on("hashchange", route);
//   route();
// }

// hamburgerMenu.addEventListener("click", () => {
//   nav.classList.toggle("active");
// });

// function initListeners() {
//   $(document).on("click", "a", function (e) {
//     let id = e.currentTarget.id;
//     console.log(id);
//     window.location.hash = id;
//     nav.classList.toggle("active");
//   });
//   $("#signup-form form").on("submit", (e) => {
//     e.preventDefault();
//     console.log("signup form index.js");
//     const firstName = $("#fName").val();
//     const lastName = $("#lName").val();
//     const email = $("#email").val();
//     const password = $("#password").val();

//     signUserUp(firstName, lastName, email, password);
//     console.log(firstName, lastName, email, password)
//   });

//   $("#login-form form").on("submit", (e) => {
//     e.preventDefault();
//     console.log("login form index.js")
//     let siEmail = $("#siEmail").val();
//     let siPassword = $("#siPassword").val();
//     signUserIn(siEmail, siPassword);
//   });

// }

