$(document).ready(function(){
   $('input[name="toDoItem"]').keydown(function(event){
   	if(event.keyCode == 13){
       var toDoItem = $(this).val();
       console.log(!toDoItem || toDoItem.trim().length===0)

    	if(!(!toDoItem || toDoItem.trim().length===0)){
           addTask(toDoItem);
    	}
       
       clearInput($(this))
          
   	 	}
   })

   $(document).on('click', 'span.checkbox', function(){
   	    markComplete($(this))
	});
   
   $(document).on('mouseenter','ul.list li',function(){
       showDeleteBtn($(this))
   })

   $(document).on('mouseleave','ul.list li',function(){
       hideDeleteBtn($(this))
   })

   $(document).on('click', '.hideBtn', function(){
		removeListItem($(this))
	})


   $(document).on('click','.showAll', function(){
   	   showAllItems();
   })

  $(document).on('click','.showActive', function(){
   	   showActive();
   })

    $(document).on('click','.showCompleted', function(){
   	   showCompleted();
   })

   function addTask(taskname){

   	$('ul.list').append('<li> <span class="checkbox"></span><span class="text">' + taskname + '</span><button class="deleteItem"><i class="fa fa-times crossIcon" aria-hidden="true"></i></button></li>');
   
      checkListCount()
   }

   function checkListCount(){
     var count = $('ul.list li').length;
     if(count == 0){
     	$('.toDoFooter').addClass('hide');
     }
      else{
      		$('.toDoFooter').removeClass('hide');
      		itemCount(count)
      }
     
   }

   function itemCount(count){
      $('span.count strong').text(count);
   }

   function showAllItems() {
     $('ul.list li').removeClass('hide');
   }

   function showActive() {
   	  $('ul.list li').addClass('hide');
   	  $('ul.list li:not(.completed)').removeClass('hide');
   }

   function showCompleted(){
   	 $('ul.list li').addClass('hide');
   	 $('ul.list li.completed').removeClass('hide');
   }

   function clearInput(input) {
		input.val('');	
   }

   function markComplete(checkbox){
   	   checkbox.parent('li').toggleClass('completed');
       checkbox.toggleClass('fillCircle');
	   checkbox.siblings('span.text').toggleClass('strike');
   }
   
   function showDeleteBtn(listItem){
   	    listItem.children('button.deleteItem').addClass("hideBtn");
   }

   function hideDeleteBtn(listItem){
   	    listItem.children('button.deleteItem').removeClass("hideBtn");
   }
   
   function removeListItem(removeBtn) {
   	   removeBtn.parent().remove();
   	   checkListCount();
   }
	

	
});