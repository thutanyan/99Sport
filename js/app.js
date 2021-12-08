
$(document).ready(function () {
    $('.venobox').venobox({
        framewidth: '400px',
        frameheight: 'auto',
        titleattr: 'data-title',
        numeratio: true,
        infinigall: true
    })
})


const outerbtn = document.querySelector('.outer-btn');
// console.log(outerbtn);

outerbtn.addEventListener('click', () => {
    // console.log('hay');

    if (outerbtn.classList.contains('active') === false) {
        outerbtn.classList.add('active');
    } else {
        setTimeout(() => {
            outerbtn.classList.remove('active')
        }, 30);

    }


});

const details_img = document.querySelector('.details-img');
const details_con = document.querySelector('.details-con');


const new_feature_h1 = document.querySelectorAll('.new-feature-h1');
// console.log(new_feature_h1);
const navbarpaddings = document.querySelector('.navbarpaddings');
window.addEventListener('scroll', () => {

    const scrollheight = window.scrollY;

    // console.log(scrollheight);
    if (scrollheight >= 100) {

        navbarpaddings.style.position = "fixed";
        navbarpaddings.style.width = '100%';
        navbarpaddings.classList.add('active');

    } else if (scrollheight < 100) {
        navbarpaddings.style.position = "sticky";
        navbarpaddings.classList.remove('active');
    };


    if (scrollheight === 657) {
        autocount();

    }


    if (scrollheight === 1057) {
        addactive();
    }


    if (window.innerWidth <= 650) {
        new_feature_h1.forEach(new_feature => {
            let newdata = new_feature.getAttribute('data-target');
            new_feature.innerText = newdata;
        });
    };
})


function addactive() {
    details_img.classList.add('active');
    details_con.classList.add('active');
}

addactive();

function autocount() {
    new_feature_h1.forEach(new_feature => {
        new_feature.innerText = '0';

        function firstcount() {

            const fromdom = +new_feature.innerText;

            const data = Number(new_feature.getAttribute('data-target'));
            const increase = data / 25;
            // console.log(increase);

            if (fromdom < data) {
                new_feature.innerText = Math.ceil(fromdom + increase);
                setTimeout(firstcount, 60);
            }


        }

        firstcount();
    })

}

autocount();















