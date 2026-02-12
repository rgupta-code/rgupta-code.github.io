// Set active nav link based on current page
(function () {
  var path = window.location.pathname;
  if (path.endsWith('/')) path = path + 'index.html';
  var segments = path.split('/').filter(Boolean);
  var page = segments.length ? segments[segments.length - 1] : 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(function (link) {
    var href = link.getAttribute('href');
    var linkPage = href && href.indexOf('/') === -1 ? href : (href ? href.split('/').pop() : '');
    if (linkPage === page || (page === 'index.html' && (linkPage === 'index.html' || linkPage === ''))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
})();

// Mobile menu toggle
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('hidden');
}
