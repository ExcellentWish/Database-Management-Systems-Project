document.addEventListener('DOMContentLoaded', function() {
    //sidenave initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

     let modal = document.querySelectorAll('.modal');
     M.Modal.init(modal);
  });