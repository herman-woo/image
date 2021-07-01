const greeting = 'Hello: ';
const myName = 'Herman';

const intro = (first: string, name: string): string => {
  return `${first}${name}`;
};

console.log(intro(greeting, myName));
