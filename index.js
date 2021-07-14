// 1. Create an array with the following last names: Mason, Marcora, Rico, Neves, Ivanov
const names = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"];

// 2. Have a prompt that adds your last name to the array
console.log(names);
const addLastName = prompt ();
names.push(addLastName);

// 3. Have an output that sorts the names alphabetically
const sortLastName = names.sort();
console.log(sortLastName);

// 4. Have an output that tells you what is the position of your name in the sorted array
const positionoOfMyLastName = names.indexOf("Atama");
console.log(positionoOfMyLastName);
// const positionoOfMyLastName = names[i];
// for (let i = 0; i < positionoOfMyLastName; i++);