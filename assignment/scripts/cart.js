console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// - Create a function called `addItem`. It should:
// - take an input parameter for a string `item`
// - add the new item to the global array `basket`. 
// - return `true` indicating the item was added

// - Create a function called `listItems`. It should:
// - loop over the items in the `basket` array
// - console.log each individual item on a new line

// - Create a function called `empty`. It should:
// - reset the `basket` to an empty array

// - Add a global `const` named `maxItems` and set it to 5.

// - Create a function called isFull(). It should:
// - return `false` if the basket contains *less* than max number of items
// - return `true` otherwise (equal or more than maxItems)

// - Update the required `addItem` function to:
// - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
// - If an item was added to the array, return `true`
// - If there was no room and the item could not be added return `false`

let basket = [];

function addItem( item ) {
    basket.push( item )
    basket.sort()
    if( basket.includes( item ) )
        console.log( 'Added', item, 'to the basket:', true )
    else
        console.log( 'Added', item, 'to the basket:', false )
}
addItem( 'steak' )
addItem( 'apples' )
console.log( 'The basket now includes:', basket )

function listItems( list ) {
    list.sort()
     for( i in list )
        if(basket.includes( list[ i ] ))
            console.log( list[ i ], 'is checked off of the list' );
        else
            console.log( 'I still need to pick up', list[ i ] );
        
}
listItems( [ 'yogurt', 'apples', 'steak', 'cookies' ] )

function empty() {
    while(basket.length > 0) {
        basket.pop()
    }
    if(basket.length === 0) {
        console.log( 'Your basket is now empty' )
    }
}
empty()