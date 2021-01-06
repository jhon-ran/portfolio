  //Get the button
  var mybutton = document.getElementById("myBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


//   var referenceList = document.querySelector('body');

//   var filter = document.getElementById('filter');
// //Filter event
// filter.addEventListener('keyup', filterItems);

// //Filter items
// function filterItems(e){
//   //convert to lowercase
//   var text = e.target.value.toLowerCase();
//   //get list
//   var items = referenceList.getElementsByTagName('p');
//   console.log(items);
//   //convert to array
//   Array.from(items).forEach(function(item){
//     var itemName = item.firstChild.textContent;
//     console.log(itemName);

//     if(itemName.toLowerCase().indexOf(text) != -1){
//       item.style.display = 'block';
//     }else{
//       item.style.display = 'none'
//     }
//   })
// }
