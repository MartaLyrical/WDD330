//read tasks that are in the local storage
export function readFromLS(key){
    console.log("reading task");
    return JSON.parse(localStorage.getItem(key));
}
//write tasks in the local storage
export function writeToLS(key, data){
    console.log("writing task");
    return localStorage.setItem(key, JSON.stringify(data)); 
}