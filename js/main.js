// GO!

var forEach = function(arr, func){
    for(var i = 0 ; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}

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


var optionEl = document.querySelectorAll('.option')
// console.log(optionEl);

forEach( optionEl , function( domEl, index, theArray ){
  domEl.addEventListener('click', function(event){
    // console.log('event heard')

    if( domEl.className === 'option' ){
      // apply class styles for '.option.selected'
      domEl.className = 'option selected'
    }
    else {
      // apply class styles for '.option'
      domEl.className = 'option'
    }
  })
})




// TASK 3 -- Move Item From List to List

var pointButtonEl = document.querySelectorAll('.point')

forEach( pointButtonEl , function( domEl, index, theArray ){

    // if '.point' button is clicked, then add '.point' button value to h4 '.total-points' (start value of 10)

  domEl.addEventListener('click',function(){
    // console.log('event heard');
    var totalPointsEl = document.querySelector('.total-points')
    // console.log(totalPointsEl);

    var newPointValue = pointButtonEl + totalPointsEl
    // do i need to use parseInt here to change the value to an integer?

  })
})




// TASK 4 -- Add Guest to List

var liEl = document.querySelectorAll('li')

forEach( liEl , function( domEl, index, theArray ){

  domEl.addEventListener('click',function(){
    // console.log('event heard');

    var goodStandingList = document.querySelector('.good-standing-list')
    console.log(goodStandingList);
    var probationList = document.querySelector('.probation-list')
    console.log(probationList);

    // if liEl is child of goodStandingList, then append to probationList, and vise-versa


    // if (liEl is child of goodStandingList) {
    //
    // } else {
    //
    // }

  })
})


// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List

// document.querySelector("#change-colors button").addEventListener('click',function(){
// })
