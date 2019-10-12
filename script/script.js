  async function asyncMain() {
  const response = await fetch('https://api.github.com/users/Livanenkova/repos');
  const dataArray = await response.json();

  const div = document.getElementById('repos-list');
  const ul = document.createElement('ul');

  div.append(ul);


  for (let x = 0; x < dataArray.length; x += 1) {
    ul.append(dataArray[x].url + ' ');
  }
}

asyncMain();