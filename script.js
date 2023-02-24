function addToList(){
    let itemCount = parseInt(prompt("Enter the number of item you want in your list.."))
    while(isNaN(itemCount) || itemCount < 1){
        itemCount = parseInt(prompt("Incorrect input..Plese enter the number of items you want in your list"))
    }
    let itemList = [];
    for (let index = 0; index < itemCount; index++) {
        itemList.push(prompt(`Enter the ${index+1}th item in List`)) 
    }
    // console.log(itemList)

    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
    <h3>Your List of Items</h3>
    <ul>
        ${itemList.map(item => `<li>${item}</li>`).join('')}
    </ul>
    <p>Items list will be cleared in <span id='countdown'>10</span> seconds.</p>
    `;
    document.body.appendChild(modal);

    countdownTimer(10, modal);
}

function countdownTimer(seconds, modal){
    let timer = document.getElementById('countdown');
    timer = setInterval(() => {
        seconds--;
        document.getElementById('countdown').innerHTML = seconds;
        if(seconds === 0){
            document.body.removeChild(modal);
            clearInterval(timer);
        }
    }, 1000);
}

let button = document.createElement('button');

const btn = document.getElementById('addList');
btn.addEventListener('click', addToList);