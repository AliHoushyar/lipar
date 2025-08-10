let selectedItems = [];
let totalQuantity = 0;
let totalPrice = 0;

// Handle "Add to Cart" button click
$('.foodBtn').on('click', function() {
  const menuItem = $(this).closest('.singleMenuFood');
  const foodName = menuItem.find('.foodName').text();
  const foodPrice = menuItem.find('.foodPriceText').text();
  
  // Hide the main button and show counter
  $(this).css('display' , 'none');
  menuItem.find('.foodBtnAfter').css('display' , 'flex');
  
  // Add item to the array (initial quantity: 1)
  selectedItems.push({
    name: foodName,
    price: foodPrice,
    quantity: 1
  });
  
  console.log("Added:", selectedItems);

  totalQuantity++;
  totalPrice += parseInt(foodPrice.replace(/,/g, ''), 10);
  $('#BMenuTQ').text(totalQuantity)
  $('#BMenuTP').text(totalPrice.toLocaleString())

});

// Handle "+" button click
$(document).on('click', '.foodBtnAfterMore', function() {
  const menuItem = $(this).closest('.singleMenuFood');
  const foodName = menuItem.find('.foodName').text();
  const foodPrice = menuItem.find('.foodPriceText').text();
  const quantityText = menuItem.find('.foodBtnAfterTxt');
  
  let quantity = parseInt(quantityText.text());
  quantity++;
  quantityText.text(quantity);
  
  // Update quantity in selectedItems
  const itemIndex = selectedItems.findIndex(item => item.name === foodName);
  if (itemIndex !== -1) {
    selectedItems[itemIndex].quantity = quantity;
  }
  
  console.log("Increased:", selectedItems);
  totalQuantity++;
  totalPrice += parseInt(foodPrice.replace(/,/g, ''), 10);
  $('#BMenuTQ').text(totalQuantity)
  $('#BMenuTP').text(totalPrice.toLocaleString())
});

// Handle "-" button click
$(document).on('click', '.foodBtnAfterLess', function() {
  const menuItem = $(this).closest('.singleMenuFood');
  const foodName = menuItem.find('.foodName').text();
  const foodPrice = menuItem.find('.foodPriceText').text();
  const quantityText = menuItem.find('.foodBtnAfterTxt');
  
  let quantity = parseInt(quantityText.text());
  quantity--;
  
  if (quantity <= 0) {
    // Remove item from array
    selectedItems = selectedItems.filter(item => item.name !== foodName);
    
    // Hide counter and show main button
    menuItem.find('.foodBtnAfter').css('display' , 'none');
    menuItem.find('.foodBtn').css('display' , 'flex');
  } else {
    quantityText.text(quantity);
    
    // Update quantity in selectedItems
    const itemIndex = selectedItems.findIndex(item => item.name === foodName);
    if (itemIndex !== -1) {
      selectedItems[itemIndex].quantity = quantity;
    }
  }
  
  console.log("Updated:", selectedItems);
  totalQuantity--;
  totalPrice -= parseInt(foodPrice.replace(/,/g, ''), 10);
  $('#BMenuTQ').text(totalQuantity)
  $('#BMenuTP').text(totalPrice.toLocaleString())
});