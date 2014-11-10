var TAGS = {
	"Input"        : {
					 	showOptions: false,
					 	options: [
					 		{
					 			key: "name",
					 			value: ""
					 		},
					 		{
					 			key: "tooltip",
					 			value: "Enter a tooltip"
					 		},
					 		{
					 			key: "placeholder",
					 			value: "Enter a placeholder"
					 		}
					 	]
					 	// {
					 	// 			placeholder: "Enter a placeholder",
					 	// 			name: "input",
					 	// 			tooltip: "Enter a tooltip"
					 	// 		  }
					 },
	"Radio Button" : {
				     	showOptions: false,
				     	options: [
				     		{
				     			key: "name",
				     			value: ""
				     		},
				     		{
				     			key: "tooltip",
				     			value: ""
				     		},
				     		{
				     			key: "buttons",
				     			value: "First,Second"
				     		}
				     	]
				     	// {
				     	// 	name: "radio-button",
				     	// 	tooltip: "Enter a tooltip",
				     	// 	buttons: "First,Second"
				     	// }
				     }
};

TAGS["Input"].html = '<div><input type="email" class="tag form-control"' +
					 'name="' + TAGS['Input'].options[0].value +
					 '" placeholder="' +  TAGS["Input"].options[2].value +
					 '"></div>';

var buttons = "";
TAGS["Radio Button"].options[2].value.split(',').forEach(
	function(b){
		b = b.trim();
		buttons += '<button type="button" class="btn btn-default">' +
				   b + '</button>';
	}
);

TAGS["Radio Button"].html = '<div name="' + TAGS["Radio Button"].options[0].value +
							'" class="btn-group">' + buttons + '</div>';
