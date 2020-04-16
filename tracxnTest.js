/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const numberOfDays = parseInt(readline());
var inputs = readline().split(' ');
let result= [];
  var category=[];
 var listCategories=[]; 

for (let i = 0; i < numberOfDays; i++) {
    const ingredient = inputs[i];
      
    
        for (let j=0; j<ingredient.length;j++){
             
            if(isUpperCase(ingredient[j])){
                category.push(ingredient[j]);

            }
            else{
                continue;
            }
        
           
            
       
        }
         category.pop();
        listCategories.push(category.join('').toString());
        category=[];

    // }
    
}
let map={};
for(let i=0; i<listCategories.length; i++){
    if(map[listCategories[i]]>0){
        map[listCategories[i]]=1+map[listCategories[i]];
    }
    else{
        map[listCategories[i]]=1;
    }
    if(i ==0 || i==1){
        result.push(0);
    }
    else{
       if (Object.values(map).reduce((a,b)=> a + b,0)>=3 ){
           result.push(1);
        //    
        map={};
       }
       else{
           result.push(0);
       }
    }
   
}
// for(let i=0; i<listCategories.length; i++){
  
// }
console.log(result.join(''));
function isUpperCase(a){
    return (a>="A")&&(a<="Z")
}
