## Splatter App!
---
#### About this project:
This project is a fun app used to create simple splatter art. The core functionality is based on a series of random attribute generators to create unique boxes and place them in a random location on the canvas.

#### ***Creating boxes***:
```
// Initialze Box
function boxInitialize(){

  colorGenerator();
  widthGenerator();
  cssGenerator();
  zIndexGenerator();
}

function boxGenerator(w, color){
  // Create new box
  var div = $("<div class='box' id='" + id +"'></div>");
  $("#container").append(div);

  // Create new box values
  boxInitialize();
  id += 1;

}

```

#### Technologies Used:
* HTML
* CSS
* JavaScript
