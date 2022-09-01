import { helloworld } from './module';

const foobar: string = 'foobar';
console.log(foobar);
console.log(helloworld);

const obj = { name: 'foobar' }
const tempObj = { ...obj }

console.log(tempObj);
