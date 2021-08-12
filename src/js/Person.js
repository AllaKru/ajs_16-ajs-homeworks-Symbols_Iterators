const arr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
export default class Person {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Некорректные значения! Name должно быть строкой, длиной более 2 и менее 10 символов');
    } else if (arr.indexOf(type) === -1) {
      throw new Error('Некорректные значения! Нет такого типа персонажа');
    } else {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      if (type === 'Magician' || type === 'Daemon') {
        this.attack = 10;
        this.defence = 40;
      } else if (type === 'Bowman' || type === 'Undead') {
        this.attack = 25;
        this.defence = 25;
      } else {
        this.attack = 40;
        this.defence = 10;
      }
    }
  }
}
