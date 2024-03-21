const person: { name: string; age: number; hobbies: Array<string> } = {
  name: "Jerome",
  age: 30,
  hobbies: ["sex", "programming"],
};

//let favoriteActivities: any[];
// let favoriteActivities: Array<any>;
// favoriteActivities = [
//   {
//     id: 1,
//     title: "video games",
//   },
//   {
//     id: 2,
//     title: "programming",
//   },
// ];

type Activity = {
  id: number;
  title: string;
};

//let favoriteActivities: Activity[];
let favoriteActivities: Array<Activity>;
favoriteActivities = [
  {
    id: 1,
    title: "video games",
  },
  {
    id: 2,
    title: "programming",
  },
];

console.log(`favoriteActivities: ${favoriteActivities}`);

console.log(person.name);
