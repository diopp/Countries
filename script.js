// Constants 
const BASE_URL = 'https://restcountries.com/v3.1/all';

// State Variables
let apiData;

// Cached Element References
const $main = $('main');

//Event Listeners
$main.on('mouseover', 'article', handleHover)
getData()
//Functions
function getData() {
    $.ajax(BASE_URL)
    .then(function(data)  {
    apiData = data;
    render();
}, function(error) {

});

}

function handleHover() {
    $(this).children('p').fadeOut(1500, function() {
        $(this).siblings().toggleClass('hidden')
    });
}



function render() {
   const photoFlags =  apiData.map(function(flagObject) {
        return `
        <article style='background-image: url(${flagObject.flags.svg})'>
        <p class="hidden">${flagObject.name.common} </p>

        </article>
        
        `
    }).join('');
    console.log(photoFlags)
    $main.html(`<section>${photoFlags}</section>`);

}
