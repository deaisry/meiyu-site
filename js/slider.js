$(document).ready(function() {
    // Initialize variables
    var currentImg = 1;
    var totalImg = 3;
  
    // When right arrow is clicked
    $('.fa-arrow-right').click(function() {
      if (currentImg < totalImg) {
        currentImg++;
      } else {
        currentImg = 1;
      }
      updateImage();
    });
  
    // When left arrow is clicked
    $('.fa-arrow-left').click(function() {
      if (currentImg > 1) {
        currentImg--;
      } else {
        currentImg = totalImg;
      }
      updateImage();
    });
  
    // Function to update image based on currentImg variable
    function updateImage() {
      $('.image-container img').hide();
      $('.image-container img[data-index="' + currentImg + '"]').show();
    }
  });

  
  