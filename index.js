// const cont = document.getElementById('logo-cont');
// const originalHTML = cont.innerHTML;
// const backdoor = document.getElementById('backdoor-logo');


// cont.addEventListener('mouseenter', () => {
//     const style = getComputedStyle(cont); // Get the style as in the web
//     let height = style.height; // Get the height of the container before we remove its content

//     cont.innerHTML = '';
//     cont.style.height = (`${height}`); // Restore the height for it not to jump.

//     backdoor.style.height = (`${height}`);
//     backdoor.style.bottom = '8rem';
// });

// cont.addEventListener('mouseleave', () => {
//     cont.innerHTML = originalHTML;
// });