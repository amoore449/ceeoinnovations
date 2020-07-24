function mySearchFunction() {
  var searchform = document.getElementById("search-container");
  var searchtext = document.getElementById("searchinput").value;
  searchtext = searchtext.toLowerCase();
  //console.log(document.getElementById("searchinput").value);
  //gatherallprojects
  var allprojects= document.getElementsByClassName("projectsegment");

  //for each projects
  for(let i = 0; i < allprojects.length; i++){
       let projecttags = allprojects[i].getElementsByClassName("hidden-tags")[0];
       projecttags = projecttags.innerHTML.toLowerCase();
       if(projecttags.includes(searchtext)){
            $(allprojects[i]).css({"display": "inline"});
       } else {
            $(allprojects[i]).css({"display": "none"});
       }

   }

}

function DisplayAllProjects() {
     var allprojects= document.getElementsByClassName("projectsegment");

     //for each projects
     for(let i = 0; i < allprojects.length; i++){
          $(allprojects[i]).css({"display": "inline"});
     }

}

function ButtonStart(){
     console.log("ButtonStart");
var my_button_array = document.getElementsByClassName("myButton");
for (let i = 0; i < my_button_array.length; i++){
    var mybuttontext = my_button_array[i].innerHTML;
    if(my_button_array[i].id != "All"){
         console.log("button_class");
         my_button_array[i].onclick = function() {ButtonAssigner(my_button_array[i])};
    } else{
         DisplayAllProjects();
    }
}
}
function ButtonAssigner(button) {

     document.getElementById('search-input').value="";

     for (let i = 0; i < my_button_array.length; i++){
          var mybutton_id = my_button_array[i].id;
          var button_class = document.getElementsByClassName(mybutton_id);
          console.log(button_class);
            $(button_class).css({"display": "none"});
       }
      var button_id = button.id;


      var class_arr = document.getElementsByClassName(button_id);
      $(class_arr).css({"display": "inline"});
}
