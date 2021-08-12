/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import Person from './Person';

export default class Team {
  constructor(...args) {
    this.team = [];
    this.team.push(...args);
  }

  [Symbol.iterator]() {
    let count = 0;
    const { team } = this;
    return {
      next() {
        if (count >= team.length) {
          return { done: true, value: team[count] };

          // где done=true означает, что итерация закончена,
          // в противном случае value содержит очередное значение.
        }
        return { done: false, value: team[count++] };
      },
    };
  }
}
const char = new Person('Лучник', 'Bowman');
const char2 = new Person('Маг', 'Magician');
const char3 = new Person('Зомби', 'Zombie');

const teamPersons = new Team(char, char2, char3);

for (const per of teamPersons) {
  console.log(per);
}
