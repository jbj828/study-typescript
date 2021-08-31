import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([4, 1, 3]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('Hello');
// const stringSorter = new Sorter(charactersCollection);
// stringSorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(3);
linkedList.add(2);
linkedList.add(50);
linkedList.add(1);

const sorter = new Sorter(linkedList);
sorter.sort();
console.log(linkedList.print());
