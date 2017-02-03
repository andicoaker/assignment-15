// GO!

// TASK 1 -- Show/Hide Nav


document.querySelector("#hide-nav button").addEventListener('click',function(){

var navMenuEl = document.querySelector ('.nav-menu')
// console.log(navMenuEl);

var navMenuStyles = window.getComputedStyle(navMenuEl)
  // console.log(navMenuStyles);

if( navMenuEl.style.visibility === "visible" ) {
  navMenuEl.style.visibility = 'hidden'
} else {
    navMenuEl.style.visibility = 'visible'
  }

})


// TASK 2 -- Select an Icon

document.querySelector("#add-vals button").addEventListener('click',function(){
})

// TASK 3 -- Move Item From List to List

document.querySelector("#divider button").addEventListener('click',function(){
})

// TASK 4 -- Add Guest to List

document.querySelector("#list-2-list button").addEventListener('click',function(){
})

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List

document.querySelector("#change-colors button").addEventListener('click',function(){
})
