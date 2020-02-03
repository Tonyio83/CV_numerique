var navActive = document.querySelectorAll('.nav-link');//déclare une variable pour récupérer les liens de la navbar
for (var i = 0; i < navActive.length; i++) {//crée une boucle avec les liens de la navbar
  navActive[i].addEventListener('mouseover', function(){//appel d'une fonction au placement de la souris sur le lien
  var current = document.getElementsByClassName('active')//récupère la classe active dans une variable
  current[0].className = current[0].className.replace(" active", "");//déplace la classe active en fonction du placement de la souris
    this.className += " active";//incrémente la classe active
  })
}
