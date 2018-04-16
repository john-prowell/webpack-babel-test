const person = {
    name: 'Andrew',
    age: 26,
    sport: 'Football'
};

const sayHello = (name) => {
    console.log(`Hello my name is ${name}`);
};

const getBooks = () => {
    const response = fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = response.json();
    console.log(data);
};

module.exports = {
    person,
    sayHello
};