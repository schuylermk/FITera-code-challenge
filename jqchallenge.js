$("button#borderColor").click(function() {
  var borderClasses = [
    'border-red',
    'border-blue',
    'border-green',
    'border-yellow',
    'border-purple',
    'border-dark'
  ];
  var newRandomClass = borderClasses[Math.floor(Math.random() * borderClasses.length)];
  
  $(".change").removeClass("border-red border-blue border-green border-yellow border-purple border-dark")
              .addClass(newRandomClass);
  console.log(newRandomClass)
});