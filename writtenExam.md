## Written Exam

How and when to use `.forEach`, `.map`, `.filter`, and `.find` in JavaScript?

Please give an as extensive explanation as possible with code examples and potential use cases. Write your answer below and use markdown to format your text.



.forEach
If i have an array like this 
myArray = ['sara', 'sebastian', 'jenny']

then i can use forEach to console log all the names thats in the array like this

myArray = ['sara', 'sebastian', 'jenny']
myArray.forEach(x => console.log(x));
> "sara"
> "sebastian"
> "jenny"


.map() function creates a new array with the results of what we are mapping over. In this project i am using the .map() to map over the state item and save the results into nameRegister

 nameRegister = this.state.items.map((item)


 .filter
can be used to filter out elements of interest within a array. For example only filter out
strings from a arrat that contains both strings and integers
or filter out words with a certain lenght

const words = ['sara', 'jenny', 'sebastian'];
const result = words.filter(word => word.length < 5);
console.log(result);
> 'sara'
here im filtering out only my own name as that word contains less than 5 characters. Jenny and Sebastian will therefot not be filtered out

.find() method returns the value of the FIRST element in the array that hits the provided testing function

const integers = [5, 12, 8, 130, 44];
const find = integers.find(element => element < 10);
console.log(find);
> 5

above is a array named integers with different values
Im using .find to get the FIRST integer in the array that is less than 10, which is 5. 
note that im not getting 8 back as well as the .find only provides the FIRST value that matches the expected outcome