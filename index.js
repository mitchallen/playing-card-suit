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
    first: 1,
    last: 4,
    isFirst: function(value) {
        return (value == this.first);
    },
    isLast: function(value) {
        return (value == this.last);
    },
    isSuit: function(value) {
        return (value >= 1 && value <= 4);
    },
    isRed: function(value) {
        return (value == this.HEART || value == this.DIAMOND);
    },
    isBlack: function(value) {
        return (value == this.SPADE || value == this.CLUB);
    }
});
