module.exports = function(paarl){
	var b = paarl.split(", ");
  	var one = [];
 for(var j in b){
   if(b[j].startsWith("CJ")){   
     one.push(b[j]);}
  }  
  return one.length;
}

