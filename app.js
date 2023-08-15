'use scrict'

const switcher = document.querySelector(".btn");

switcher.addEventListener('click', function() {
  document.body.ClassList.toggle('dark-theme')

var className = document.body.className;
if(className == "light-theme") {
    this.textContent = "Dark";
}
else {
    this.textContent = "Light";
}

});