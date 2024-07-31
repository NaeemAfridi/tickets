// document.getElementById("menu-icon").addEventListener("click", function () {
//   var mobileNav = document.getElementById("mobile-nav");
//   if (mobileNav.style.left === "0px") {
//     mobileNav.style.left = "-100%";
//   } else {
//     mobileNav.style.left = "0px";
//     mobileNav.style.display = "block";
//   }
// });

document.getElementById("menu-icon").addEventListener("click", function () {
  let MobNav = document.getElementById("mobile-nav");
  MobNav.style.left = "0px";
  MobNav.style.display = "block";
});

document.getElementById("close-icon").addEventListener("click", function () {
  document.getElementById("mobile-nav").style.left = "-100%";
});
