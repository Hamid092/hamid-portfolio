
function myfun() {
    var menu = document.querySelector('.menu ').style.display = "block";

}
function cancel() {
    var menu = document.querySelector('.menu ').style.display = "none";
}


// function projectSutter(){
//     var prj = document.querySelectorAll('.project-box')[0].style.marginTop = "-100px";
// }
// function sutterDown(){
//     var prj = document.querySelectorAll('.project-box')[0].style.marginTop= "23px";

// }

// function projectSutter2(){
//     var prj = document.querySelectorAll('.project-box')[1].style.marginTop = "-100px";
// }
// function sutterDown2(){
//     var prj = document.querySelectorAll('.project-box')[1].style.marginTop= "23px";

// }

// function projectSutter3(){
//     var prj = document.querySelectorAll('.project-box')[2].style.marginTop = "-100px";
// }
// function sutterDown3(){
//     var prj = document.querySelectorAll('.project-box')[2].style.marginTop= "23px";

// }



var btn = document.getElementById('btnsub');
btn.addEventListener('click',function(e){
    e.preventDefault()

   var name = document.getElementById('name').Value;
   var mobil = document.getElementById('mobil').Value;
   var email = document.getElementById('email').Value;
   var message = document.getElementById('message').Value;

   var body = 'Name: ' + name + '<br/> Mobile No: ' + mobil + ' <br/> Email: ' + email + '<br/> Massage ' + message;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "hamidraza078600@gmail.com",
        Password : "Raza0786",
        To : 'hamidraza078600@gmail.com',
        From : email,
        Body : body
    }).then(
      message => alert(message)
    );
 })


