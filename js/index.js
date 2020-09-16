//Init tooltips
tippy('.link', {
    placement: 'bottom'
})

const toggle = document.querySelector('.js-change-theme');
const body = document.querySelector('body');
const profile = document.getElementById('profile');
const logo = document.getElementById('logo');
const content = document.getElementById('content');
const spinner = document.getElementById('spinner');


toggle.addEventListener('click', () => {

    if (body.classList.contains('text-gray-900')) {
        toggle.innerHTML = "<i class='fas fa-sun text-yellow-500 text-3xl'></i>";
        logo.innerHTML = "<img src='http://cristopherps.com/wp-content/uploads/2019/01/cropped-Logo-CristopherPS-white-1.png' class='rounded-none lg:rounded-lg lg:rounded-l-none lg:block'>";
        body.classList.remove('text-gray-900');
        body.classList.add('text-gray-100');
        profile.classList.remove('bg-white');
        profile.classList.add('bg-gray-900');
    } else {
        toggle.innerHTML = "<i class='fas fa-moon text-white text-3xl'></i>";
        logo.innerHTML = "<img src='https://cristopherps.com/wp-content/uploads/2020/09/Logo-CristopherPS-Black.png' class='rounded-none lg:rounded-lg lg:rounded-l-none lg:block'>";
        body.classList.remove('text-gray-100');
        body.classList.add('text-gray-900');
        profile.classList.remove('bg-gray-900');
        profile.classList.add('bg-white');

    }
});

function goToLink(route = 'https://cristopherps.com') {
    content.classList.add('hidden');
    spinner.classList.remove('hidden');
    window.location = route;
}
