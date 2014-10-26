var removeFromArray = function(value, array){
	var index = -1;
	for(var i = 0; i < array.length; ++i){
		if(array[i] == value){
			index = i;
			break;
		}
	}
	array[index] = undefined;
	return array;
};