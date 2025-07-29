$(document).ready(function() {
  // Initial margin-right
  let currentMargin = 0;
  const imageWidth = 145; // Gap between images
  const totalImages = $('.pointChooseImgSingle').length;
  let currentActiveIndex = 1; // Starting with firoz (index 1)
  
  // Left button click handler
  $('#pointChooseBtnL').click(function() {
    if (currentActiveIndex < totalImages - 1) {
      currentMargin -= imageWidth;
      $('.pointChooseImgs').css('margin-right', currentMargin + 'px');
      
      // Update active class
      currentActiveIndex++;
      $('.pointChooseImgSingle').removeClass('active');
      $('.pointChooseImgSingle').eq(currentActiveIndex).addClass('active');
      
      // Update text
      updateText();
    }
  });
  
  // Right button click handler
  $('#pointChooseBtnR').click(function() {
    if (currentActiveIndex > 0) {
      currentMargin += imageWidth;
      $('.pointChooseImgs').css('margin-right', currentMargin + 'px');
      
      // Update active class
      currentActiveIndex--;
      $('.pointChooseImgSingle').removeClass('active');
      $('.pointChooseImgSingle').eq(currentActiveIndex).addClass('active');
      
      // Update text
      updateText();
    }
  });
  
  // Function to update the displayed text
  function updateText() {
    const activeText = $('.pointChooseImgSingle.active').attr('alt');
    $('.pointChooseTxt span').text(activeText);
  }
});