import { User } from './models/User';

const user = new User({ name: 'jay', age: 20 });

user.on('change', () => {
  console.log('change!!');
});
user.on('change', () => {
  console.log('change2!!');
});
user.on('click', () => {
  console.log('click!!');
});

user.trigger('change');
user.trigger('sadfas');
