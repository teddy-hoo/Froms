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

var refresh = function(array, index){
	if(array[index].name == "Input"){
		array[index].html = '<div><input type="email" class="tag form-control"' +
					 ' placeholder="' + 
					 array[index].options[0].value +
					 '"></div>'; 
	}
};