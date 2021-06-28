let currentIndex = 0;
let customerImages = ['customer-0.jpg', 'customer-1.jpg', 'customer-2.jpg', 'customer-3.jpg', 'customer-4.jpg'];
let customerNames = [' john', 'sandy', 'amy', 'tyrell', 'wanda'];
let customerTestimonials = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit voluptatum illo? Quae fugiat aspernatur harum aperiam, quis eos officia.', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'];

document.querySelector('.fa-chevron-right').addEventListener('click', () => buttonClicked((currentIndex + 1) % customerNames.length));
document.querySelector('.fa-chevron-left').addEventListener('click', () => buttonClicked((currentIndex + (customerNames.length - 1)) % customerNames.length));

function buttonClicked(newIndex) {
    document.querySelector('#customer-img').src = 'img/' + customerImages[newIndex];
    document.querySelector('#customer-name').innerText = customerNames[newIndex];
    document.querySelector('#customer-text').innerText = customerTestimonials[newIndex];
    currentIndex = newIndex;
}
