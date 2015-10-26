/* your code goes here! */
var initialState = $('#container').text();
alert('initialState ' + initialState);
/* Use clever selections and event handlers to assign the described interactivity */

Parse.initialize('8NGkoUvgY2CcLcgRhxrujRq7t7KeJ7s9BdVu2dEu', 'UBD5kTCwOt6hOFLSTVnvB2SMZUA6dEauDXZkhXCu');

// Create a new sub-class of the Parse.Object, with name "Music"
var DOMManipulation = Parse.Object.extend('DOMManipulation');

$('#change-content').on('click',buttonClick(this.attr(id)));
$('#add-at-end').on('click',buttonClick(this.attr(id)));
$('#add-at-start').on('click',buttonClick(this.attr(id)));
$('#insert-before').on('click',buttonClick(this.attr(id)));
$('#move-after').on('click',buttonClick(this.attr(id)));
$('#surround-class').on('click',buttonClick(this.attr(id)));
$('#hide-text').on('click',buttonClick(this.attr(id)));

var buttonClick = function(id) {

    // Create a new instance of your Music class 
    var domManipulation = new DOMManipulation();

    // For each input element, set a property of your new instance equal to the input's value
    
    //gets selector & newContent
    $(this).find('input').each(function(){
        domManipulation.set($(this).attr('id'), $(this).val());
        $(this).val('');
    })

    domManipulation.set('change',id);

    // After setting each property, save your new instance back to your database
    domManipulation.save(null, {
        success:getData
    })
    return false
}



// Write a function to get data
var getData = function() {
    
    // Set up a new query for our Music class
    var query = new Parse.Query(DOMManipulation);

    // Set a parameter for your query -- where the website property isn't missing
    query.notEqualTo('website', '');

    /* Execute the query using ".find".  When successful:
        - Pass the returned data into your buildList function
    */
    query.find({
        success:function(results) {
            buildList(results);
        } 
    })
}

// A function to build your list
var buildList = function(data) {
    // Empty out your ordered list
    //$('#content') = initialState;

    // Loop through your data, and pass each element to the addItem function
    data.forEach(function(d){
        addItem(d);
    })
}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
    var selector = item.get('website')
    var newContent = item.get('band')
    var change = item.get('song')


}

// Call your getData function when the page loads

getData();