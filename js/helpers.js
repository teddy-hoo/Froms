var removeFromArray = function(value, array) {
    var index = -1;
    for (var i = 0; i < array.length; ++i) {
        if (array[i] == value) {
            index = i;
            break;
        }
    }
    array[index] = undefined;
    return array;
};

var refresh = function(array, index) {
    if (array[index].name == "Input") {
        array[index].html = '<div><input type="email" class="tag form-control"' +
            'name="' + array[index].options[0].value +
            '" placeholder="' + array[index].options[2].value +
            '"></div>';
    } else if (array[index].name == "Radio Button") {
        var buttons = "";
        array[index].options[2].value.split(',').forEach(
            function(b) {
                b = b.trim();
                buttons += '<button type="button" class="btn btn-default">' +
                    b + '</button>';
            }
        );

        array[index].html = '<div name="' + array[index].options[0].value +
            '" class="btn-group">' + buttons + '</div>';
    }
};
