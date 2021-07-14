// Instructions
// - Create an array with the following last names: Mason, Marcora, Rico, Neves, Ivanov
// - Have a prompt that adds your last name to the array
// - Have an output that sorts the names alphabetically
// - Have an output that tells you what is the position of your name in the sorted array
// - Have an output that Uppercase's all names

// 1. Create an array with the following last names: Mason, Marcora, Rico, Neves, Ivanov
const names = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"];
console.log(names);

// 2. Have a prompt that adds your last name to the array
const addLastName = prompt ();
names.push(addLastName);
console.log("Added Last Name: ", addLastName);

// 3. Have an output that sorts the names alphabetically
const sortLastName = names.sort();
console.log(sortLastName);

// 4. Have an output that tells you what is the position of your name in the sorted array
for (let j = 0; j < names.length; j++) {
    const positionOfMyLastName = names.indexOf("Atama");
    console.log(positionOfMyLastName);
  }
  
  // 5. Have an output that Uppercase's all names.
  for (let i = 0; i < names.length; i++) {
    const positionOfMyLastName = names[i].toUpperCase();
    console.log("Uppercase Last Names: ", positionOfMyLastName);
    //   console.log(i);
    //   console.log(names[i]);
    //   console.log(i + 1);
  }
  