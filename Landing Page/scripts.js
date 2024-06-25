document.querySelector('.menuBtn').addEventListener('click', function() {
    const nav = document.querySelector('.hidden-nav');
    nav.style.display = nav.style.display === 'grid' ? 'none' : 'grid';
});