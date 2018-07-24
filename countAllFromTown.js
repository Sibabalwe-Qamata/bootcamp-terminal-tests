module.exports = function(town,locator){
  	var allTown = [];
	var x = town.split(",");
     for(var j in x){
       if(x[j].startsWith("CL")){   
         allTown.push(x[j]);
       }
      }  
  return allTown.length;
}
