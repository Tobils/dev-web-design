# WEB DESIGN SOLO

---
## HTML CSS
- id -> uniq
- class -> tidak uniq

---
## CSS BOX Model
- urutan dari yang terluar, MBPC -> Margin -> Border -> Padding -> Content width/height
```css
/* Basic Box Model  */

h1 {
    width: 250px;
    height: 50px;
    padding: 10px 10px 10px 10px;
    /* Top   Right  Buttom Left */
    border: 5px solid green;
    margin: 20px 10px 60px 40px;
}
```
---
## CSS Positioning
```css
/* CSS Positioning */

#parent_div {
    width: 400px;
    height: 400px;
    background-color: red;
    margin: 100px auto;
}

#child_div {
    width: 200px;
    height: 200px;
    background-color: pink;
    position: fixed;
}

/* relatif terhadap parent div  */
position: relative;

/* absolute, terhadap halaman utama html bukan ke parent div  */
position: absolute;

/* fixed tidak berubah posisi saat di scroll  */
position: fixed;
/*
kesimpulannya :
- absolute positioning inside relative positioning
- fixed positioning tidak berubah posisi walaupun saat di scroll down
*/
```
---
## JQuery
```js
/**
 * How to use JQuery
 * $(selector).action()
 */

// document ready
$(function() {
    //  select Element
    $('h1').slideUp(1000).slideDown(1000)

    // select element by id 
    $('#main').css({
        color: 'red',
        fontSize: 25
    })


    // jquery event 
    $('h1').click(function() {
        // select Element by class 
        $('.content').css({
            color: 'blue',
            fontSize: 50
        })
    })
})

// window on load 
$(window).on("load", function() {
    alert("window is loaded")
})
```

---
## Bootstrap
- Grid System ada 4 pilihan
```css
.col-lg- /* large device */
.col-md- /* medium device */
.col-sm- /* small device */
.col-xs- /* extra small */
```
- example
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- importtant meta tag -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- title -->
    <title>Solo - Creative Website</title>

    <!-- favicon  -->
    <link rel="shortcut icon" href="img/favicon/favicon.ico" type="image/x-icon">

    <!-- Bootstrap CSS  -->
    <link rel="stylesheet" href="css/bootstrap/bootstrap.css">

    <!-- css  -->
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <!-- example mark up  -->
    <h1>
        Welcome to solo
    </h1>

    <h3>BS Grid System</h3>

    <h3>1 Column</h3>
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-bg-red">
                Content 1
            </div>
        </div>
    </div>


    <h3>2 Column</h3>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-bg-red">
                Content 1
            </div>
            <div class="col-md-6 col-bg-pink">
                Content 2
            </div>
        </div>
    </div>


    <h3>3 Column</h3>
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-bg-red">
                Content 1
            </div>
            <div class="col-md-4 col-bg-pink">
                Content 2
            </div>
            <div class="col-md-4 col-bg-blue">
                Content 3
            </div>
        </div>
    </div>


    <h3>4 Column</h3>
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-bg-red">
                Content 1
            </div>
            <div class="col-md-3 col-bg-pink">
                Content 2
            </div>
            <div class="col-md-3 col-bg-blue">
                Content 3
            </div>
            <div class="col-md-3 col-bg-yellow">
                Content 4
            </div>
        </div>
    </div>

    <!-- JQuer  -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap JS  -->
    <script src="js/bootstrap/bootstrap.js"></script>

    <!-- custom js  -->
    <script src="js/script.js"></script>

</body>

</html>
```
```css
/* Boostrap Grid Example */

.col-bg-red {
    background-color: red;
}

.col-bg-pink {
    background-color: pink;
}

.col-bg-blue {
    background-color: blue;
}

.col-bg-yellow {
    background-color: yellow;
}
```

---
## Color
cek on [this](coolors.co) dan [color-blindness](color-blindness.com) dan [loading.io]


