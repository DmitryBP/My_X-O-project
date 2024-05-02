export let currenPlayer = true;

 export let changePlayer = () => {
  currenPlayer = !currenPlayer;
  console.log(`Ход преходит к "${currenPlayer?'x':'o'}"`);
};