document.getElementById('aa').addEventListener('click', addData);
let arr = [];
let num = 1;
data1();
function data1() {
   const myheaders = new Headers();
//    myheaders.append('Authorization', 'Bearer sJk4VJYndzpZH7HGuQlJJ2aeXSCAbzA9rIzY');
   fetch('http://localhost:3000/photos?page=' + num, {
           method: 'GET',
           headers: myheaders,
       })
       .then(Response => Response.json())
       .then(result => {
           num++;
           arr = result.photos
        });
   const html = arr.map((item, index) => {
       return '<img class="img1" src="' + item.url + '" data-id="' + index + '" onClick="togglePhoto(event)">';
   });
   document.getElementById('add1').innerHTML += html.join('');
   num++;
}
// console.log(num);
function addData() {
   const html = arr.map((item, index) => {
       return '<img class="img1" src="' + item.thumbnail + '" data-id="' + index + '" onClick="togglePhoto(event)">';
   });
   document.getElementById('add1').innerHTML += html.join('');
}

function togglePhoto(event) {
   console.log(num);
   console.log(arr);
   document.getElementById("aa").style.visibility = "visible"
   const index = event.target.getAttribute('data-id');
   console.log(index)
   document.getElementById("add").innerHTML = '<div class= "imgDiv"><img   src="' + arr[index].url + '" class="img3"><div class="text-block">' + arr[index].title + ' </div></div>';
}
document.getElementById("close").addEventListener('click', close);
function close() {
   document.getElementById("aa").style.visibility = "hidden";
}
