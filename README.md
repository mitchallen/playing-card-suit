
@mitchallen/playing-card-suit
==
An enum-like object for representing the suits in a playing card deck.
--
* * *
## Installation

You must use __npm__ __2.7.0__ or higher because of the scoped package name.

    $ npm init
    $ npm install @mitchallen/playing-card-suit --save
  
* * *

## Usage

This module returns an object that has four frozen and unique properties that can be used to represent playing card suits:

* __HEART__
* __DIAMOND__
* __SPADE__
* __CLUB__

You can use them to define the suit of each card in a deck.

    var SUIT = require("@mitchallen/playing-card-suit");
    
	card[0].suit = SUIT.HEART;
	card[1].suit = SUIT.DIAMOND;
	card[2].suit = SUIT.SPADE;
	card[3].suit = SUIT.CLUB;
	
* * *
	
### .isSuit(value)

You can test if a value is a valid suit by passing it to the __isSuit__ method:

    if( SUIT.isSuit(card.suit) ) { ... }

* * *

### .isRed(value)

You can test if a value is a red playing card (__HEART__ or __DIAMOND__) by passing it to the __isRed__ method:

    if( SUIT.isRed(card.suit) ) { ... }
    
* * *

### .isBlack(value)

You can test if a value is a black playing card (__SPADE__ or __CLUB__) by passing it to the __isBlack__ method:

    if( SUIT.isBlack(card.suit) ) { ... }

* * *

### .isFirst(value)

For looping you can test to see if a suit is the first in the list:

    while( ! SUIT.isFirst(card.suit) ) { ... }

* * *

### .isLast(value)

For looping you can test to see if a suit is the last in the list:

    while( ! SUIT.isLast(card.suit) ) { ... }

* * *

### .first

For looping you can retrieve the first (lowest) value for the suits in the list.

	for( i = SUIT.first; ... ) { ... }
	
###

For looping you can retrieve the last (highest) value for the suits in the list.

	for( i = SUIT.first; i <= SUIT.last, i++ ) { ... }


* * *

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * *
 
## Repo(s)

* [bitbucket.org/mitchallen/playing-card-suit.git](https://bitbucket.org/mitchallen/playing-card-suit.git)
* [github.com/mitchallen/playing-card-suit.git](https://github.com/mitchallen/playing-card-suit.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

* * *

## Version History

#### Version 0.1.5

* added first and last parameters
* added isFirst and isLast methods

#### Version 0.1.4

* added __isRed__ method
* added __isBlack__ method

#### Version 0.1.3 

* added __isSuit__ method

#### Version 0.1.2 

* fixed type-o in readme instruction

#### Version 0.1.1 

* added description to package.json

#### Version 0.1.0 

* initial release

* * *
