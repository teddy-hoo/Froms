var TAGS = {
	"Input": {
					 	showOptions: false,
					 	options: [{
					 				key: 'placeholder',
					 				value: "Enter a placeholder"
					 			  }]
					 },
	"Gender"       : {
						html: '<div class="btn-group"><button type="button" ' +
				     		  'class="btn btn-default">Male</button>' +
				      		  '<button type="button" class="btn btn-default">' +
				     		  'Female</button></div>',
				     	showOptions: false
				     }
};

TAGS["Input"].html = '<div><input type="email" class="tag form-control"' +
					 ' placeholder="' + 
					 TAGS["Input"].options[0].value +
					 '"></div>';