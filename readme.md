# What is the difference between getElementById, getElementsByClassName, and querySelector/quetySelectorAll?
## Ans: getElementById: It is a DOM selector component. By this we can find one element with given Id. Id is unique, so this wil always return  one element. One element or tag can have only one Id. 
For example: 
<p id=”title”>hello</p>;
<script> 
let title = document.getElementById(“title”);
Console.log(title);
</script>


# How do you create and insert a new element into the DOM?
## ans:
- To create a new element in JavaScript: document.createElement(“tagName”);
- To insert a new element in JavaScript: document.getElementById(“idName”).appenchild/append();


# What is Event Bubbling and how does it work? 
## Ans: 
Events propagation in the domain tree is called event bubbling. As an event (such as a click) occurs on an element, it initially executes the handler on that element . then the event bubbles up to its parent element then its parent element’s parent element etc, until it arrives at the root. The event begins, then, at the target element and travels up the DOM hierarchy.


# What is Event Delegation in JavaScript? Why is it useful?
## Ans: 
- Event Delegation is a JavaScript method where you can find a specific event. From huge element you can specifically choose on event by delegation of JavaScript and the event bubbling will be rest.  
- The way to write delegation: event.target.


# What is the difference between preventDefault() and stopPropagation() methods?
## Ans 
- preventDefault() means Stop default browser behavior. example: Event.preventDefault()
- stopPropagation() means Stop event for bubbling up the DOM tree. example: event.stopPropagration 



