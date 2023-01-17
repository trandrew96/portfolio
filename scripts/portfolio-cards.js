let list = document.getElementsByClassName("thumbnail");
console.log(list);

var hoverThumbnail = function () {
  let gif = this.getAttribute("data-gif");
  console.log("hello");
  console.log(this);
  console.log(gif);
  this.src = gif;
};

var mouseOutThumbnail = function () {
  let static_thumbnail = this.getAttribute("data-thumbnail");
  this.src = static_thumbnail;
};

for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("mouseover", hoverThumbnail, false);
}
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("mouseout", mouseOutThumbnail, false);
}
