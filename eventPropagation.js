//Event Propagation:
//Blanket term for both bubbling and capturing
<ul>
    <li><a href="..."><img src="..." alt=""></a>
    <li><a href="..."><img src="..." alt=""></a>
    ...
    <li><a href="..."><img src="..." alt=""></a>
</ul>

//A click on an image does not only generate a click event for the corresponding IMG element, but also for the parent A,
for the grandfather LI and so on, going all the way up through all the element’s ancestors, before terminating at the window object.

//From the window to the event target parent: this is the capture phase
//The event target itself: this is the target phase
//From the event target parent back to the window: the bubble phase.
