// Constants 
const BASE_URL = 'https://restcountries.com/v3.1/all';

// State Variables
let apiData;
// Cached Element References
const $main = $('main');
//const $form = $('form');

//Event Listeners
//$form.on('submit', handleSubmit)
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

function handleSubmit() {
    console.log('Papa')
}

var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;

function render() {
   const photoFlags =  apiData.map(function(flagObject) {
        return `
<div class="content"> 
    <div class="content-overlay">
</div>

    <article class='content-image' style='background-image: url(${flagObject.flags.svg})'> </article>  


        <div class="content-details fadeIn-bottom">
        <h3 class="content-text"><i class=""></i> ${flagObject.name.common}</h3>
        <p class="content-text"><i class="bi bi-geo-alt-fill"></i> ${flagObject.region}</p>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
          More Infos
        </button>
         
        <!-- Modal -->
     

</div>
</div>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
  <div class="modal-content">
    <div class="modal-header bg-success text-center">
      <h5 class="modal-title text-light " id="exampleModalLongTitle">${flagObject.name.common}</h5>
    
    
    </div>
    <div class="modal-body">
      <p> Continent: ${flagObject.region}</p>
      <p> Capital: ${flagObject.capital} </p>
      <p> Continent: ${flagObject.region} </p>
      <p class= 'bi bi-people-fill'>  Population: ${flagObject.population} </p>
      <p class ='bi bi-geo-fill' > Location: <a href="${flagObject.maps.googleMaps}">link text</a></p>
      
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>


       
        
        `
    }).join('');
    console.log(photoFlags)
    $main.html(`<section>${photoFlags}</section>`);

}
