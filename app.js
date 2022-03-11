const listArray = ['item 1', 'item 2'];

let userInput = prompt('What do you want to do?').toLowerCase();

while (userInput !== 'quit' && userInput !== 'q') {
    if (userInput === 'list') {
        console.log('-----------------')

        for (let i = 0; i < listArray.length; i++) {
            console.log(`${i}: ${listArray[i]}`)
        }
        console.log('-----------------')
        alert('List view')
    }

    else if (userInput === 'new') {
        const addItem = prompt('What would you like to add?')
        listArray.push(addItem);
        alert(`${addItem} added`);
    }

    else if (userInput = 'delete') {
        const deleteItem = prompt('What would you like to delete?');
        listArray.splice(listArray.indexOf(deleteItem), 1);
        alert(`${deleteItem} removed`)
    }
    userInput = prompt('What would you like to do?')
}
console.log('You quit')