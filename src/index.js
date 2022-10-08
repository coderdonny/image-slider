import hello from './hello';
import './styles/style.css';

console.log(hello());

const photoArray = [
	'./assets/jacobandboard.jpg',
	'./assets/jacobandboard2.0.jpg',
	'./assets/taylor skim.jpg',
	'./assets/taylorandjacob.jpg',
	'./assets/jacobblue.jpg',
	'./assets/couplesittingonbench2.0.jpg',
	'./assets/man walking his dog.jpg',
	'./assets/car shop.jpg',
	'./assets/garbage.jpg',
	'./assets/stang.jpg',
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
