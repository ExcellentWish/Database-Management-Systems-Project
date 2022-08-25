document.addEventListener('DOMContentLoaded', function () {
    //sidenave initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
    // modal
    let modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
    // datepicker
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
    });
    // select in add task
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
});