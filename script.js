'use strict';
 const model =  document.querySelector('.modal');
 const overlay = document.querySelector('.overlay');
 const btnCloseModel = document.querySelector('.close-modal');
 const btnsOpenModel  = document.querySelectorAll('.show-modal'); //  querySelectorAll with it we select multipl elements they have same classs
 console.log(btnsOpenModel);
 console.log(btnCloseModel);

 for(let i = 0; i < btnsOpenModel.length; i++)  { // with loo we show on concole as a loop array like that 
btnsOpenModel[i].addEventListener('click' , function(){
         model.classList.remove('hidden'); // jab remove kery gay hidden class ko tab jo b os class main howa show hojaye ga 
         overlay.classList.remove('hidden')  // same is ka b ya hi ha hidden ko remove kia show jaye gi wo cheez jis ki class ko remove kia ha 

    })
    }
       // btnCloseModel.addEventListener('click', function(){ // yahan button  jo ha close wala os main just ye add krna ha k jo class upr hiden sy remove ki thi yahan add kr deni  ha wo simple hde ho  jaye gi or lagay ga button nay kam kia ha wo asal main hide ho chuki hain
    //     model.classList.add('hidden')
    //     overlay.classList.add('hidden')
    // })


    // overlay.addEventListener('click' , function(){ // yahan overlay pay yani k seccren pay b just click hoya to hidden add ho jaye ga or show hoi class hide ho jaye gi 
    //     model.classList.add('hidden')
    //     overlay.classList.add('hidden')
    // })


      // ye hum nau 1 function bana lia ha is main hum nay hide buttn or over lay ko 1 sath kr diya ha 
      const closeing = function (){
        model.classList.add('hidden')
        overlay.classList.add('hidden')
      }
   btnCloseModel.addEventListener('click', closeing)
    overlay.addEventListener('click' , closeing)

// bilkul is trhn hum nay sath sath kr diya ha asy hi hum loop k andr jo func ha os ko 1 veriable bana k funchtion ka to wahan loop main jahan function banya ha wahan name add kr dena habs


// this is for button on keyboard 
document.addEventListener('keydown' , function(e){
console.log(e.key)
if(e.key == 'Escape') {
    if(!model.classList.contains('hidden')){
        closeing()
    }
}
})