const itemsQuestionsAndAnswers = document.querySelectorAll('.item');

itemsQuestionsAndAnswers.forEach(function(item){
    item.addEventListener('click' , function(){

        const activeQuestion = item.classList.contains('active-faq')

        itemsQuestionsAndAnswers.forEach(function(item){
            item.classList.remove('active-faq')
        })

        if(!activeQuestion){

            item.classList.add('active-faq')

        } else {
            item.classList.remove('active-faq')
        }
          

    })
})



document.onkeydown = function(e){
    if(e.key === "Enter"){
        document.activeElement.click();
  }
}









