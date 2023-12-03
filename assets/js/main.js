
let url=window.location.pathname;
console.log(window.location)

getHeader();
getNavigation();
getArrow();
getFooter();

function getHeader(){
    var header=document.getElementById("header");

    var row=document.createElement('div');
    row.setAttribute('class','row justify-content-between align-items-center');

    // logo
    var logo=document.createElement('div');
    logo.setAttribute('class','col-5 col-sm-3 col-md-2');
    var logoLink=document.createElement('a');
    logoLink.setAttribute('href','index.html');
    var imgLogo=document.createElement('img');
    imgLogo.setAttribute('src','assets/images/logo.svg');
    imgLogo.setAttribute('alt','Regal Theatre Logo');

    //nav
    var nav=document.createElement("div");
    nav.setAttribute('class','col-8 navigationHolder');
    var navList=document.createElement('ul');
    navList.setAttribute('class','d-flex align-items-center m-0 justify-content-between');
    navList.setAttribute('id','navigation');
     

    //nav mobile
    var navMobile=document.createElement('div');
    navMobile.setAttribute('class','col-6');
    navMobile.setAttribute('id','navigationMobileHolder');
    var navigationButton=document.createElement('a');
    navigationButton.setAttribute('href','#');
    navigationButton.setAttribute('class','float-end');
    navigationButton.setAttribute('id','btnNavigation');
    var navigationButtonIcon=document.createElement('i');
    navigationButton.setAttribute('class','fa fa-bars orangeLinks fs-3');
    var navListMobile=document.createElement('ul');
    navListMobile.setAttribute('class','navbar-nav align-items-center');
    navListMobile.setAttribute('id','navigationMobile');


    header.appendChild(row);

    row.appendChild(logo);
    row.appendChild(nav);
    row.appendChild(navMobile);

    logo.appendChild(logoLink);
    logoLink.appendChild(imgLogo);
    nav.appendChild(navList);
    navMobile.appendChild(navigationButton)
    navigationButton.appendChild(navigationButtonIcon)
    navMobile.appendChild(navListMobile)


    
    $("#btnNavigation").click(function(e){ 
        e.preventDefault();
        $(this).next().slideToggle();
    })

}

var linksNames=['Home','Theatres','Movies','Events','Contact','Author'];
var links=['index.html','theatres.html','movies.html','events.html','contact.html','author.html'];
function getNavigation(){

    var linksNames=['Home','Theatres','Movies','Events','Contact','Author'];
    var links=['index.html','theatres.html','movies.html','events.html','contact.html','author.html'];

    let print='';
    for(let i=0;i<linksNames.length;i++){
        print+="<li class='my-2'><a href='"+links[i]+"' class='text-decoration-none text-light";
        if(links[i]==url.split('/')[1]){
            print+=" orangeLinks";
        }
        if(links[i]=='index.html' && url=='/'){
            print+=" orangeLinks";
        }
        print+="'>"+linksNames[i]+"</a></li>";
    }

    document.getElementById("navigation").innerHTML=print;
    document.getElementById("navigationMobile").innerHTML=print;


}
if(url!='/test/index.html' && url!='/test/'){
    let curentUrl=url.split('/test/')[1];
    console.log(currentUrl);
    // let index=links.indexOf(curentUrl);

    // document.getElementById('currentPage').innerHTML=linksNames[index];
}
if(url=='/test/index.html' || url=='/test/'){
    var moviesNow=['The Marvels','Five Nights at Freddy\'s','Priscilla','Killers Of The Flower Moon'];
    var imagesNow=['marvel.jpeg','fiveNights.jpeg','priscila.jpeg','killers.png'];


    var newMovies=['Killers Of The Flower Moon','Medicine Man: The Stan Brock Story','Saving Private Ryan 25th Anniversary','Priscilla'];
    var newImages=['killers.png','medicineMan.png','savingPrivate.png','priscila.jpeg'];


    getMovies(moviesNow,imagesNow,'nowPlaying');
    getMovies(newMovies,newImages,'newMovies');
}

function getMovies(movies,images,divForPrint){
    let print='';
    for(let i=0;i<movies.length;i++){
        print+=`<div class="col-5 col-md-3 movie`;
        
                if(url=='/test/movies.html'){
                    print+=` mx-3`;
                }
        
                print+=`">
                <img src="assets/images/${images[i]}" alt="${movies[i]}"/>
                <h3 class='text-light my-2'>${movies[i]}</h3>
            </div>`;
    }

    document.getElementById(divForPrint).innerHTML=print;

    if(url=='/test/movies.html'){
    
        $('#movies').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            // arrows: false,
            dots: false,
            autoplay: true,
            responsive: [
              {
                breakpoint: 604,
                settings: {
                  slidesToShow: 2,
                  infinite: true,
                  dots: true
                }
              },
            ]
          });
        }

    
}


var theatres=['Regal Manassas','Regal Virginia Gateway','Regal Fox 4DX & IMAX','Regal Fairfax Towne Center','Regal Dulles Town Center'];
if(url=='/test/theatres.html'){
    var theatres=['Regal Manassas','Regal Virginia Gateway','Regal Fox 4DX & IMAX','Regal Fairfax Towne Center','Regal Dulles Town Center'];
    var locations=['11380 Bulloch Dr, Manassas, VA, 20109','8001 Gateway Promenade Place, Gainesville, VA, 20155','22875 Brambleton Plaza, Ashburn, VA, 20148 ','4110 West Ox Rd, Suite 12110, Fairfax, VA, 22033','21100 Dulles Town Cir, Ste 203, Sterling, VA, 20164'];
    var distance=[11.5,15.3,17.6,20.5,20.6,22.9];

    let print='';
    for(let i=0;i<theatres.length;i++){
        print+=`<div class="col-12 borderOrange my-3 py-3">
        <h2 class='text-white'>${theatres[i]}</h2>
        <a href="#" class='orangeLinks text-decoration-none'><i class="fas fa-map-marker-alt"></i> ${locations[i]}</a> &nbsp;&nbsp;&nbsp; <span class='text-light'> ${distance[i]} miles from you</span>
    </div>`;

    document.querySelector("#locations").innerHTML=print;
    }
}

if(url=='/test/movies.html'){
    var movies=['The Marvels','Five Nights at Freddy\'s','Priscilla','Killers Of The Flower Moon','Medicine Man: The Stan Brock Story','Saving Private Ryan 25th Anniversary'];
    var images=['marvel.jpeg','fiveNights.jpeg','priscila.jpeg','killers.png','medicineMan.png','savingPrivate.png'];

    getMovies(movies,images,'movies');
}


if(url=='/test/events.html'){
    let events=['Educational and Field Trips','Film Festivals','Birthday Parties'];
    let text=['Regal partners with IMAX to offer larger-than-life learning experiences. Educational movies on a huge IMAX screen perfectly blend fun and learning for your next field trip.','Learn more about the film festivals Regal hosts every year and fill out the request form if you\'re interested in hosting your own!','Some Regal theatres have space for birthday parties. To inquire about a birthday party, click the button below and fill out a form.']
    let images=['trips.png','festivals.jpeg','birthdays.png'];
    let longText=['Regal and IMAX are proud to bring you an unforgettable, larger-than-life learning experience. These documentaries, presented in incredible scope and detail on an IMAX screen, will educate and entertain.','Regal Cinemas is proud to host over 50 film festivals nationwide each year. If you are interested in hosting your upcoming film festival at a Regal theatre near you, please be sure to contact us.',''];

    let print='';
    for(let i=0;i<events.length;i++){
        print+=`<div class="col-12 col-md-5 my-5">
                    <h2 class='text-light'>${events[i]}</h2>
                    <p class='text-light my-4'>${text[i]}</p>
                    <div class='aditionalText'>
                        <p class='text-light'>${longText[i]}</p>
                    </div>`
                    if(longText[i]!=''){
                        print+=`<div>
                            <a href='#' data-id='${i}' class='orangeLinks text-decoration-none show showMore'>Show More</a>
                            <a href='#' data-id='${i}' class='orangeLinks text-decoration-none d-none show showLess'>Show Less</a>
                        </div>`
                    }
                    print+=`</div>
                <div class="col-12 col-md-6 my-5">
                    <img src='assets/images/${images[i]}' alt='${events[i]}'/>
                </div>
        `;
    }

    $("#events").html(print);


    $(".aditionalText").hide();

    $('.show').click(show);
}

function show(e){
    e.preventDefault();
    $(this).parent().prev().slideToggle();
    if($(this).hasClass('showMore')){
        $(this).next().removeClass('d-none');
    }
    else{
        $(this).prev().removeClass('d-none');
    }
    $(this).addClass('d-none');

}

// console.log(url.split('/')[1])

function getArrow(){
    let link=document.createElement('a');
    link.setAttribute('href','#');
    link.setAttribute('class','scroll orangeLinks d-none')
    let icon=document.createElement('i');
    icon.setAttribute('class','fas fa-chevron-up fs-2')

    link.appendChild(icon);

    let script=document.getElementsByTagName('script')[0];
    document.body.insertBefore(link,script);




    $(".scroll").on("click",function(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
    });



}


$(window).scroll(function(){
    if(window.pageYOffset>50){
    
        $(".scroll").removeClass("d-none");
    
    }
    else{
        
        $(".scroll").addClass("d-none");
    }
})


function getTheatresContact(){
    let print='';
    for(let t in theatres){
        print+=`<option value="${t}">${theatres[t]}</option>`;
    }
    document.getElementById('theatreName').innerHTML+=print;
}

if(url=='/test/contact.html'){
    getTheatresContact();
    getSlider();
}

$("#name").keyup(checkName);


function checkName(){
    let nameRegex=/^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}(\s[A-Z][a-z]{2,})?$/;
    //ovde dodati srpske karaktere

    let nameValue=$("#name").val(); 

    if(nameRegex.test(nameValue)){
        $("#name").next().addClass('d-none');
        return 0;
    }
    else{
        $("#name").next().removeClass('d-none');
        return 1;
    }

}

$("#theatreName").change(checkTheatre);

function checkTheatre(){
    let theatreName=$("#theatreName").val(); 


    
    if(theatreName!=""){
        $("#theatreName").next().addClass('d-none');
        return 0;
    }
    else{
        $("#theatreName").next().removeClass('d-none');
        return 1;
    }
    
}


$("#email").keyup(checkEmail);


function checkEmail(){
    let emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    let emailValue=$("#email").val(); 

    if(emailRegex.test(emailValue)){
        $("#email").next().addClass('d-none');
        return 0;
    }
    else{
        $("#email").next().removeClass('d-none');
        return 1;
    }

}
$("#message").keyup(checkMessage);

function checkMessage(){
    let message=$("#message").val().trim(); 

    
    if(message.split(" ").length<10){
        $("#message").next().removeClass('d-none');
        return 1;
    }
    else{
        $("#message").next().addClass('d-none');
        return 0;
    }
}

$(".contact").change(checkContactInfo)

function checkContactInfo(){
    let contact=$(".contact:checked");

    if(contact.length==0){
        $("#contact").removeClass('d-none');
        return 1;
    }
    else{
        $("#contact").addClass('d-none');
        return 0;
    }
}

$("#terms").change(checkTerms);

function checkTerms(){
    let terms=$("#terms:checked").val();
    if(terms){
        $("#terms").next().next().addClass('d-none');
        return 0;
    }
    else{
        $("#terms").next().next().removeClass('d-none');
        return 1;
    }
}

$("#sendMessage").click(checkAll);

function checkAll(){
    let errorCounter=0;
    errorCounter+=checkName();
    errorCounter+=checkEmail();
    errorCounter+=checkTheatre();
    errorCounter+=checkMessage();
    errorCounter+=checkContactInfo();
    errorCounter+=checkTerms();

    if(errorCounter==0){
        $("input[type='text']").val("");
        $(".contact").prop("checked",false);
        $("#terms").prop("checked",false);
        $("#theatreName").val("");
        $("#message").val("");

        $("#modal").removeClass("d-none");
        setTimeout(function(){
            $("#modal").addClass("d-none");

        },2500);
    }
}

$("#closeModalBtn").click(closeModal);

function closeModal(e){
    e.preventDefault();
    $("#modal").addClass("d-none");
}


function getSlider(){
    let slider=document.querySelector("#slider");
    var images=["theatre1.avif","theatre2.jpeg","theatre3.avif"];
    var i=0;
    function sliderTheatres(){
        slider.src="assets/images/"+images[i];
        if(i<images.length-1) i++;
        else i=0;
        setTimeout(sliderTheatres, 3000);
    };
    sliderTheatres();
}

function getFooter(){
    let divFooter=document.getElementById('footer');

    let divLogo=document.createElement("div");
    divLogo.setAttribute('class','col-9 col-md-2 mx-auto mx-md-0 my-2');
    let imageLogo=document.createElement('img');
    imageLogo.setAttribute('src','assets/images/logo.svg');
    imageLogo.setAttribute('alt','Logo Regal Theatre');


    let divMiddle=document.createElement("div");
    divMiddle.setAttribute('class','col-9 col-md-4 mx-auto mx-md-0 my-2');
    let divMiddleHeading='Have A Question?';
    let divMiddlePhone='Phone: 12 345 67890';
    let divMiddleEmail='regal@gmail.com';

    let pTagPhone=document.createElement('p');
    let pTagEmail=document.createElement('p');
    let headingFooter=document.createElement('h3');

    pTagPhone.innerHTML=divMiddlePhone;
    pTagEmail.innerHTML=divMiddleEmail;
    headingFooter.innerHTML=divMiddleHeading;


    let divLastFooter=document.createElement("div");
    divLastFooter.setAttribute('class','col-9 col-md-2 mx-auto mx-md-0 my-2 text-center');
    let textLastFooter='Documentation';
    let aTagDoc=document.createElement('a');
    aTagDoc.setAttribute('href','doc.pdf');
    aTagDoc.innerText=textLastFooter;

    let divSocial=document.createElement('div');
    divSocial.setAttribute('class','mx-auto text-center mt-3');

    let instagram=document.createElement('a');
    instagram.setAttribute('href','https://www.instagram.com/');
    instagram.setAttribute('class','mx-2');
    let instagramIcon=document.createElement('i');
    instagramIcon.setAttribute('class','fab fa-instagram fs-3')
    instagram.appendChild(instagramIcon);


    let facebook=document.createElement('a');
    facebook.setAttribute('href','https://www.facebook.com/');
    facebook.setAttribute('class','mx-2');
    let facebookIcon=document.createElement('i');
    facebookIcon.setAttribute('class','fab fa-facebook-square fs-3')
    facebook.appendChild(facebookIcon);


    let youtube=document.createElement('a');
    youtube.setAttribute('href','https://www.youtube.com/');
    let youtubeIcon=document.createElement('i');
    youtubeIcon.setAttribute('class','fab fa-youtube fs-3')
    youtube.appendChild(youtubeIcon);

    divSocial.appendChild(instagram);
    divSocial.appendChild(facebook);
    divSocial.appendChild(youtube);



    divMiddle.appendChild(headingFooter);
    divMiddle.appendChild(pTagPhone);
    divMiddle.appendChild(pTagEmail);


    divFooter.appendChild(divLogo);
    divLogo.appendChild(imageLogo);

    divLastFooter.appendChild(aTagDoc);

    divFooter.appendChild(divMiddle);
    divFooter.appendChild(divLastFooter);


    divLastFooter.appendChild(divSocial);
}
