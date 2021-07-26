//detected when the page is loaded and is ready
$(document).ready(function(){
    //actions goes here
});

// jQuery(document) = $(document)

//$('p,a,span') this select the <p></p> <span> <a>

// $('table tr') select the descendants of the table

//$('#myID') this select the <p id="myID">

//$('.myClass') select <p class="myClass"> elements
//$('p.myClass') select only <p> tags whit the class "myClass"

//$('a[attribute]')
//$('a[title]') select <a> elements whit a title 
//more can be specified $('a[title="Primary"]')

//$(':input') select all inputs
//more can be specified $(':input[type="radio"]')

//to be able to manipulate the values ​​of the inputs
//$(':input').each(function(){ var elem = $(this);alert(elem.val());}); can add #form to only change the elements of id="form"

//:contains() select elements than match the content
//$('div:contains("plralsight")') selected <div>Curse pluralsight 01</div>

// $('tr:odd') 1,3,5,7 select odd or even rows
// $('tr:even') 0,2,4,6

// $('element:first-child') select the firs match the same with :midle-child and :last-child

// [attribute^="value"] select all elements wiht an attribute than begins stated value
// [attribute$="value"] select all elements with an attribute than ends with stated value
//[attribute*="value"] select all elements with an attribute than contain the stated value
// ^=carrot simbol == start with $= end *= contains
// more can be specified by adding id = # class = . or others

//each(function(index,Element)) is used to iterated through Jquery objects. no need an additional counter
//$('div').each(function(index){ alert(index+'='+$(this).text());});
//this represent the DOM object $(element) is the same as declaring $(this)
// it's like a for loop

//var html = "";
//$('div.example').each(function(index){html +="<br>"+index+" "+$(this).text();});
// the best option is declare it out  var out = $('#OutDiv');
//out.html(html) this for is faster 

//this.propertyname $('div').each(function(i){this.title="my index="+i}) === my index 1, my index 2...
//this modifies the title or if not exist it will added

//to access attributes use attr():
//var val = $('#CustomDiv').attr('title');
//this retrives the value of the title

//$('img').attr('title','My Image');
//change the title attribute to "My Image"

/*
$('img').attr({title:'My image',style: 'border:5px solid;'});
change the title anthe border using a JSON
JSON delimits objects with {} and the : separe prpierties and values
you can use various CSS elements to define the style
*/

/*
Insert nodes into elements
.append() I will add it at the bottom
.appendTo() 
$('<span>(office)</span>').appendTo('.officePhone'); this add (office) in each element of the class "officePhone"
.prepend()I will add it at the beginning
.prependTo()
$('<span>Phone:</span>').prependTo('.phone'); this add Phone: in each element of the class "phone"
remove nodes from an elements 
.remove
*/

// $('.state').wrap('<div class="US_State" />'); this adds a div around the div with class=".state"

// $('.phone,.location').remove(); remove the elements that the classes have phone and location

// .css is used to modify an object's style
/*
can use JSON object
$('div').css({'color': 'gray','font-weight':'bold'});
*/

/*
methods for working with CSS Class attributes
.addClass() add a class or if you already have add a space and the class
$('div').addClass('classOne) or more classes ('class1 class2')
.hasClass() validates if the class exists using true or false
if ($('div').hasClass('ClassE')){ perform work}
.removeClass()remove all classes from a node or specify only one
$('div').removeClass(); delete all classes of divs or ('class1 class2'); delete this classes
.toggleClass() activates or deactivates a class, whether there is one or not
$('#PhoneDetails').toggleClass('styleOne);
*/

/* Handle events
this check if the browser support te API or not
 if (document.addEventListener){
     ('click', function() {alert('clicked button');}, false);
    }
    else{
        button.attachEvent('onclick', function () { alert('click en IE');});
    }
*/

/*
.click(handler(eventObject))is used to listen for a click event or clicks on the elements
$('#myId').click(function(){ alert('the element was clicked');});

inside $(document).ready --> function WireEvent();
the function is out
function WireEvent(){$('#IDbutton').click(function(){alert('Click?);});}
or instead of the alert collect the value of a variable and print in a div
var Name = $('#Name').val();  --print-- $('#DivOut').text('|' + name + '|');

change events works with select input controls or text blocks 
$('#SelectNumber').change(function(){alert($(this).val());});

$('#myDiv').mouseenter(function(){ $(this).toggleClass('Lights');}).mouseleave(function(){$(this).toggleClass('Lights');});
highlight an item when the mouse is over it
*/

/* Using on()
.on(eventType,handler(eventObject))

$('#myDiv').on('click', function(){ Handle click event})
multiple events .on('mouseenter moseleave', function)
.off(event) remove a handler
$('#test').click(handler);
$('#test').off(); disable any event of this id
$('#test').off('click');disable click event of this id
*/

/* live() delegate() on()

allow children to be added to a container without 
explicitly attaching an event handler to each child
live() removed
$('.someClass).live('click',someFunction) stop $('.someClass').die('click', someFunction)
delegate() new version of live()
$('#Div').delagate('div','click',someFunction) stop undelegate('div','click',someFunction)
detects when a child element of the div is clicked
on() can be use in remplace of live() and delegate
$('#myTable  tbody').on('click', 'tr', function(event))
multiple events using a map
$("#myMap").on({mouseenter: function(){$(this).addClass("over");}, mouseleave: function(){$(this).removeClass("out");}});
*/

/* is how to combine the functions mouseenter and mouseleave
hover()
$(selector).hover(handlerIn, handlerOut)
$('#target').hover( function(){$(this).css(); }, function(){$(this).css();} );
$(selector).hover(handlerInOut)
$('p').hover(function(){$(this).toggleClass('over'); })
*/


/* jQuery Ajax functions
$(selector).load() load HTML data from server
$(selectot).load(url,data,callback)

$(document).ready(function(){
    $('#HelpButton').click(function(){
        $('#MyDiv').load('HelpDatails.html'); // $('#MyDiv').load('HelpDetails.html #MainToc')
        $('#MyDiv').load('GetCustomers.aspx', {PageSize:25}); return only 25 costumers
    });

$('#OutDiv').load('NotFound.html', function(response, status, xhr){
    if (status == "error")
    {
        alert(xhr.statusText);
    }
});
});


$.get() get raw data from the server
$.get(url,data,callback,datatype)
$.get('HelpDetails.html',function(data){
    $('#OutDiv').html(data);
});
++++++++++++++++++++++++++++
$.getJSON() return a JSON
$getJSON(url,data,callback)
$.getJSON('CustomerJson.aspx',{id:1}, function(data){
    alert(data.FirstName + ' ' + data.LastName);
});
++++++++++++++++++++++++++++
$.post() get raw data from the server
$.post(url,data,callback,datatype)
$.post('GetCustomers.aspx', {PageSize:15}, function(data){
        $('#OutDiv').html(data);
    }
);
$.postJSON() return a JSON
$.ajax() provides a core functionality

$.ajax({
    url: '../Customers.svc/InsertCustomers',
    data: customer,
    dataType: 'json',
    success: function (data, status, xhr){
        alert("Insert status: " + data.d.Status + '\n' + data.d.Message);
    }
});
*/