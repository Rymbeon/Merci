var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}

document.onload = function() {
  var userWidht = window.innerWidth;
  if (userWidht < 500) {
    document.getElementById('mobile').style.display = "block";
  } else {
    document.getElementById('no-mobile').style.display = "block";
  }
}