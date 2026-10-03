document.addEventListener('DOMContentLoaded', function () {

  /* ---------------------------------------------
     Sticky navbar: stronger background after scrolling
  --------------------------------------------- */
  var nav = document.getElementById('siteNav');
  function updateNavState() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  updateNavState();
  window.addEventListener('scroll', updateNavState, { passive: true });

  /* Close mobile menu after tapping a link */
  var navLinks = document.querySelectorAll('#navMain .nav-link, #navMain .btn-reserve');
  var navCollapseEl = document.getElementById('navMain');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navCollapseEl.classList.contains('show')) {
        var bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapseEl);
        bsCollapse.hide();
      }
    });
  });

  /* ---------------------------------------------
     Menu lightbox: populate modal with the clicked image
  --------------------------------------------- */
  var menuModal = document.getElementById('menuModal');
  if (menuModal) {
    menuModal.addEventListener('show.bs.modal', function (event) {
      var trigger = event.relatedTarget;
      if (!trigger) return;
      var imgSrc = trigger.getAttribute('data-img');
      var title = trigger.getAttribute('data-title') || 'Menu';
      document.getElementById('menuModalImg').setAttribute('src', imgSrc);
      document.getElementById('menuModalTitle').textContent = title;
    });
  }

  /* ---------------------------------------------
     Reservation form: front-end validation only.
     No backend is connected — this does NOT submit
     a real reservation anywhere. Replace this handler
     with a real request to your booking system/API.
  --------------------------------------------- */
  var form = document.getElementById('reservationForm');
  var note = document.getElementById('resFormNote');

  if (form) {
    // Prevent selecting a date in the past
    var dateInput = document.getElementById('resDate');
    if (dateInput) {
      var todayISO = new Date().toISOString().split('T')[0];
      dateInput.setAttribute('min', todayISO);
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        note.textContent = '';
        return;
      }

      form.classList.add('was-validated');

      // NOTE: no backend is wired up yet. This message confirms the form
      // is valid and ready to send — connect it to your reservation
      // system or a mailto/API endpoint to actually deliver requests.
      note.textContent = 'Thanks — your request looks good. Connect this form to a booking system to send it.';
    });
  }

  /* ---------------------------------------------
     Footer year
  --------------------------------------------- */
  var yearEl = document.getElementById('footerYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
