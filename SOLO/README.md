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


