const player_1 = {
  name: 'Nurik',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['knife', 'pistol', 'arrow'],
  attack: function () {
    console.log('Fight ' + this.name);
  },
};

const player_2 = {
  name: 'Vladik',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['knife', 'pistol', 'arrow'],
  attack: function () {
    console.log('Fight ' + this.name);
  },
};

function createPlayer(className, player) {
  const $player = document.createElement('div');
  $player.classList.add(className);

  const $arenas = document.querySelector('.arenas');
  $arenas.appendChild($player);

  const $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');
  const $character = document.createElement('div');
  $character.classList.add('character');

  $player.appendChild($progressbar);
  $player.appendChild($character);

  const $life = document.createElement('div');
  $life.classList.add('life');
  const $name = document.createElement('div');
  $name.classList.add('name');

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  const $img = document.createElement('img');
  $character.appendChild($img);
  $img.src = player.img;

  $life.style.width = '100%';
  $name.innerHTML = player.name;
}

createPlayer('player1', player_1);
createPlayer('player2', player_2);
