/*Create Slideshow
* Allison Moore
* 7/23/20
*/
function CreateCaroMain(){
     console.log("platup");
     var myslidecontainer = document.getElementsByClassName("sample_caro")[0];
     var myslides = myslidecontainer.getElementsByClassName('mysamplecaro');
     var carousel = document.getElementsByClassName('caro');

     var newslidecontain = document.createElement("div");
     newslidecontain.className = "carousel js-flickity";

     for(let i = 0; i < myslides.length; i++){
          var newslide = document.createElement("div");
          newslide.className = "carousel-cell";
          newslide.innerHTML = myslides[i].innerHTML;
          newslidecontain.append(newslide);

          i++;
          if(i<myslides.length){
          var newslide2 = document.createElement("div");
          newslide2.className = "carousel-cell";
          newslide2.innerHTML = myslides[i].innerHTML;
          newslidecontain.append(newslide2);
          }
          i++;
          if(i<myslides.length){
          var newslide3 = document.createElement("div");
          newslide3.className = "carousel-cell";
          newslide3.innerHTML = myslides[i].innerHTML;
          newslidecontain.append(newslide3);
          }
          i++;
          if(i<myslides.length){
          var newslide4 = document.createElement("div");
          newslide4.className = "carousel-cell";
          newslide4.innerHTML = myslides[i].innerHTML;
          newslidecontain.append(newslide4);
          }
     }

     carousel[0].append(newslidecontain);
}
