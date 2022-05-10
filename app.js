const items = document.querySelectorAll('img');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 0;

nextItem.addEventListener('click' , function(){
    items[count].classList.remove('active')
    if(count < itemCount - 1){
        count ++
    } else{
        count = 0
    }
    items[count].classList.add('active')
    // console.log(count)
})
previousItem.addEventListener('click' , function(){
    items[count].classList.remove('active')
    if(count > 0){
        count --;
    } else{
        count = itemCount - 1
    }
    items[count].classList.add('active')
})