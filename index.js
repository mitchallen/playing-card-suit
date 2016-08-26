/**
    Module: @mitchallen/playing-card-suit
    Author: Mitch Allen
*/

/*jshint esversion: 6 */

"use strict";

module.exports = Object.freeze({
    HEART: 1,
    DIAMOND: 2,
    SPADE: 3,
    CLUB: 4,
    isSuit: function(value) {
        return (value >= 1 && value <= 4);
    }
});
