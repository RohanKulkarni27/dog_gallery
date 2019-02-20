
$(document).ready(function(){
    // This function is used for rendering the photo gallery on page load.
    renderGallery();
});



function renderGallery(){
    var str="";
    $(document).ready(function(){
        var str='';
        // Ajax call is made to the json file everytime page is loaded.
        $.ajax({
            url: './assets/data/dogs.json',
        
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            data:{
                format:"json"
            },
            success:function(data){
                console.log(data.dogs.length);
                console.log(data.dogs[0].image);
               
                for(var i=0;i<data.dogs.length;i++){
                    
                        
                        str=str+'<div class="mainDiv2 col-md-3 col-lg-3">';
                        str=str+'<div class="card border-0 transform-on-hover">';
                        str=str+'<div class="thumbnail">';
                        
                        str=str+'<img onClick="Popup(\'' + data.dogs[i].image + '\')" data-toggle="modal" data-target="#myModal" class="card-img-top dogImage img-responsive" src=".'+data.dogs[i].image+'">';
                        
                        str=str+'</div>'
                        str=str+'<div class="linkSection card-body">';
                        str=str+'<p class="text-muted card-text"><a href="'+data.dogs[i].source+'" target="_blank">Adopt me here</a></p>'
                        str=str+'</div>'
                        str=str+'</div>'
                        str=str+'</div>'
                    
                    
                }
              // Appending the images on the div with className 'mainDiv'
                $(".mainDiv").append(str);
            }
        });
    })
}
// Function for displaying a particular image on click event.
function Popup(imageUrl){
    $(".modal-dialog").empty();
    var str1="";
    // This is a Bootstrap Modal, with predifned classes
    str1=str1+'<div class="modal-content">';
    str1=str1+'<div >';
    str1=str1+'<img class="img-fluid" src=".'+imageUrl+'">';
    str1=str1+'</div>';
    str1=str1+'</div>';
    $(".modal-dialog").append(str1);
}