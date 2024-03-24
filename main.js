// Q no 52
// let smartPhone ={
//     make:"Techno",
//     model:"Sparkhot10",
//     spec:{
//         storage:"128Gb",
//         screensize:"5.3 inches",
//         baterylife:"12 hours"
//     }
// }
// console.log(smartPhone);
//  Q no 53
// let developerSkills ={
//     languages:["Javascript","Typescript","Python"],
//     frameworks:["React","Angular","Vue"],
//     tools:["Git","Webpack","Doger"]
// };
// let {languages,frameworks,tools}=developerSkills;
// console.log(`Language: ${languages[0]},Framework: ${frameworks[0]},Tool: ${tools[0]}`);
//  Q no 54
function createObjectWithDynamicKey(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
var userPreference = createObjectWithDynamicKey("theme", "Dark");
console.log(userPreference);
