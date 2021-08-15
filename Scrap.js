function readPosition1(data) {
     ball1 = data.val() //val()
     ball1.x = ball1.x;
     ball1.y = ball1.y;
 }
 
 function readPosition2(data) {
     ball2 = data.val() //val()
     ball2.x = ball2.x;
     ball2.y = ball2.y;
 }
 
 function showError(error) {
     console.log(error);
 }
 
 function changePosition1(changeInX,changeInY){
     // set() - writes data
     ballPosition.set({
         x : ball1.x + changeInX,
         y : ball1.y + changeInY
        })
    
 }
 
 function changePosition2(changeInX,changeInY){
     // set() - writes data
     ballPosition.set({
         x : ball2.x + changeInX,
         y : ball2.y + changeInY
        })
    
 }