console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods


let favoriteFoods = ['Pierogies', 'Avaocado toast', 'Jamabaylaya', 'iced coffee' ];

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above

console.log('These are my favortie foods', favoriteFoods );

// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');


// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);


// 2.a. TODO: Log to the console the number of foods in your array

console.log('Length of my favorite food:', favoriteFoods.length); 
// expected to see 4 




// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 

console.log('second animal is', animalArray[1]);
//expected cat

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log('last animal is', animalArray[3]);
/// dog expected

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item

console.log('last animal but using length', animalArray.length); 
// getting 4 trying to get dog

console.log('looking for dog', );
// return to later


// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array

favoriteFoods.push('Breadsticks');
console.log('Added breadsticks', favoriteFoods );

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array

let removedFood = favoriteFoods.pop();

console.log('removed food is', removedFood ); //breadsticks
console.log('the food list now is:', favoriteFoods ); 
// pierogies, avovado toast, jamabalaya, iced coffee


// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array

favoriteFoods.unshift("salmon");
console.log('added salmon to the front', favoriteFoods );
//list should be: salmon, pierogies, avocado toast, jamabalay, iced cofeee


// Example: Remove the first animal using Array.shift

removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);


// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array

removedFood = favoriteFoods.shift();
console.log("removed first food item", removedFood ); // should be salmon
console.log('the list is now', favoriteFoods );



// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.

/// use splice? 



// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.


// put it alphabetical order first
let sortFoods = favoriteFoods.sort(); 
console.log('foods in alpha order', sortFoods );
 
// now reverse to go backwards

 let reverseFoods = sortFoods.reverse();
console.log('favortie foods in reverse', reverseFoods );



// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.
let stringList = favoriteFoods.toString();
console.log('testing string list', stringList );
// need to still add the 'and' between words


// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']


let newArray = favoriteFoods + animalArray; 
console.log('testing new array', newArray);