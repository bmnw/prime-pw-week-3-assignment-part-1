console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods

let favFoods = [ 'hamburger with fries', 'burrito bowls', 'bagel with cream cheese' ];
console.log(favFoods);

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above

console.log('Some of my favorite foods are:', favFoods);

// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array

console.log('Number of favorite foods:', favFoods.length);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 

console.log('The second animal is a', animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index 

console.log('The last animal in the array is', animalArray[3]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item

console.log('The last animal in the array is', animalArray[animalArray.length - 1]);

// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array

favFoods.push( 'granola' );
console.log(favFoods);

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array

let removedFood = favFoods.pop();
console.log('I removed the last food:', removedFood);
console.log('Updated favorite foods array:', favFoods);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array

favFoods.unshift( 'kouign amann' );
console.log('I added this food to the beginning:', favFoods);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array

removedFood = favFoods.shift();
console.log('Removed the tasty pastry called a', removedFood);
console.log('Now my favorite foods are only these:', favFoods);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.

favFoods[1] = 'blueberries';
console.log('The second food has changed, take a look:', favFoods);

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.

favFoods.sort();
console.log('sorted in abc order', favFoods);
favFoods.reverse();
console.log('These favorite food are in reverse abc order:', favFoods);

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.

let favFoodString = favFoods.join(' and ');
console.log('Some favorite foods as a string:', favFoodString);

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']

let comboArray = favFoods.concat(animalArray);
console.log('Here is the food array combined with the animal array:', comboArray);