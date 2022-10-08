import hello from './hello';
import './styles/style.css';
import './assets/jacobandboard.jpg';
import './assets/jacobandboard2.0.jpg';
import './assets/taylor skim.jpg';
import './assets/taylorandjacob.jpg';
import './assets/jacobblue.jpg';
import './assets/couplesittingonbench2.0.jpg';
import './assets/man walking his dog.jpg';
import './assets/car shop.jpg';
import './assets/garbage.jpg';
import './assets/stang.jpg';

console.log(hello());

const photoArray = [
	'/jacobandboard.jpg',
	'/jacobandboard2.0.jpg',
	'/taylor skim.jpg',
	'/taylorandjacob.jpg',
	'/jacobblue.jpg',
	'/couplesittingonbench2.0.jpg',
	'/man walking his dog.jpg',
	'/car shop.jpg',
	'/garbage.jpg',
	'/stang.jpg',
];

const nextBtn = document.querySelector('.next-button');
const backBtn = document.querySelector('.back-button');

nextBtn.addEventListener('click', function () {
	console.log('next');
	imgIndex++;
	console.log(imgIndex);
	showPhoto();
});
backBtn.addEventListener('click', function () {
	console.log('back');
	imgIndex--;
	console.log(imgIndex);
	showPhoto();
});

let imgIndex = 0;

const imageSlider = document.querySelector('.image-slider');
const placeholderImg = document.querySelector('#placeholderImg');

function showPhoto() {
	if (imgIndex >= photoArray.length) {
		imgIndex = 0;
	}
	if (imgIndex < 0) {
		imgIndex = photoArray.length - 1;
	}
	placeholderImg.src = photoArray[imgIndex];
}

function autoSlideShow() {
	imgIndex++;
	if (imgIndex >= photoArray.length) {
		imgIndex = 0;
	}
	if (imgIndex < 0) {
		imgIndex = photoArray.length - 1;
	}

	placeholderImg.src = photoArray[imgIndex];

	setTimeout(autoSlideShow, 2000);
}

autoSlideShow();
