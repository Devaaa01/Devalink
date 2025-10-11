
const button = document.querySelector('.link-button');
const loading = document.getElementById('loading-section');


window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        loading.classList.remove('active');
    }
});


if (button && loading) {
    button.addEventListener('click', (e) => {
        e.preventDefault();

   
        loading.classList.add('active');

     
        setTimeout(() => {
            window.location.href = 'link.html';
        }, 2000);
    });
}
