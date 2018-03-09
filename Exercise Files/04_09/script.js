function Course(title, instructor, level, published, views) {
  this.title = title;
  this.instructor = instructor;
  this.level = published;
  this.views = views;
  this.updateViews = function() {
    return ++this.views;
  };
}
var courses = [
  new Course("Javascript essential training", "MRH", 1, true, 0),
 new Course("ES6", "EP", 1, true, 123456)
];
// course01 =

// console.log(course01);
// console.log(course02);
console.log(courses);
