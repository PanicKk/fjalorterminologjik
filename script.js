$(document).ready(function() {

    var dictionary
    
    $.getJSON("words.json", function(json) {
        dictionary = json;
    });
    
    
     $(document).on('keyup', '#search-input', function() {
        word = capitalizeFirstLetter($('#search-input').val().toLowerCase());
        if (dictionary.hasOwnProperty(word)) {
            $("#meaning").text(dictionary[word].meaning);
        }
        else {
            $("#meaning").text('');
            $("#example").text('');
        }
      });
    
    });
    
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }



    