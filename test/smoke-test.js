/**
    Module: @mitchallen/playing-card-suit
      Test: smoke-test
    Author: Mitch Allen
*/

"use strict";

var request = require('supertest'),
    should = require('should'),
    modulePath = "../index";

describe('module smoke test', function() {

    var SUIT = null;

    before(function(done) {
        // Call before all tests
        delete require.cache[require.resolve(modulePath)];
        let options = {};
        SUIT = require(modulePath);
        done();
    });

    after(function(done) {
        // Call after all tests
        done();
    });

    beforeEach(function(done) {
        // Call before each test
        done();
    });

    afterEach(function(done) {
        // Call after eeach test
        done();
    });

    it('first equals 1', function(done) {
        SUIT.first.should.eql(1);
        done();
    });

    it('last equals 4', function(done) {
        SUIT.last.should.eql(4);
        done();
    });


    it('1 is first', function(done) {
        SUIT.isFirst(1).should.eql(true);
        done();
    });

    it('4 is not first', function(done) {
        SUIT.isFirst(4).should.eql(false);
        done();
    });

    it('1 is not last', function(done) {
        SUIT.isLast(1).should.eql(false);
        done();
    });

    it('4 is last', function(done) {
        SUIT.isLast(4).should.eql(true);
        done();
    });

    it('HEART suit should exist', function(done) {
        should.exist(SUIT);
        should.exist(SUIT.HEART);
        done();
    });

    it('HEART suit should have a unique value', function(done) {
        SUIT.HEART.should.not.eql(SUIT.DIAMOND);
        SUIT.HEART.should.not.eql(SUIT.SPADE);
        SUIT.HEART.should.not.eql(SUIT.CLUB);
        done();
    });

    it('DIAMOND suit should exist', function(done) {
        should.exist(SUIT);
        should.exist(SUIT.DIAMOND);
        done();
    });

    it('DIAMOND suit should have a unique value', function(done) {
        SUIT.DIAMOND.should.not.eql(SUIT.HEART);
        SUIT.DIAMOND.should.not.eql(SUIT.SPADE);
        SUIT.DIAMOND.should.not.eql(SUIT.CLUB);
        done();
    });

    it('SPADE suit should exist', function(done) {
        should.exist(SUIT);
        should.exist(SUIT.SPADE);
        done();
    });

    it('SPADE suit should have a unique value', function(done) {
        SUIT.SPADE.should.not.eql(SUIT.HEART);
        SUIT.SPADE.should.not.eql(SUIT.DIAMOND);
        SUIT.SPADE.should.not.eql(SUIT.CLUB);
        done();
    });

    it('CLUB suit should exist', function(done) {
        should.exist(SUIT);
        should.exist(SUIT.CLUB);
        done();
    });

    it('CLUB suit should have a unique value', function(done) {
        SUIT.CLUB.should.not.eql(SUIT.HEART);
        SUIT.CLUB.should.not.eql(SUIT.DIAMOND);
        SUIT.CLUB.should.not.eql(SUIT.SPADE);
        done();
    });

    it('HEART is suit', function(done) {
        SUIT.isSuit(SUIT.HEART).should.eql(true);
        done();
    });

    it('DIAMOND is suit', function(done) {
        SUIT.isSuit(SUIT.DIAMOND).should.eql(true);
        done();
    });

    it('SPADE is suit', function(done) {
        SUIT.isSuit(SUIT.SPADE).should.eql(true);
        done();
    });

    it('CLUB is suit', function(done) {
        SUIT.isSuit(SUIT.CLUB).should.eql(true);
        done();
    });

    it('invalid value is not suit', function(done) {
        SUIT.isSuit(-1).should.eql(false);
        SUIT.isSuit(0).should.eql(false);
        SUIT.isSuit(5).should.eql(false);
        SUIT.isSuit(null).should.eql(false);
        done();
    });

    it('HEART is red', function(done) {
        SUIT.isRed(SUIT.HEART).should.eql(true);
        done();
    });

    it('HEART is not black', function(done) {
        SUIT.isBlack(SUIT.HEART).should.eql(false);
        done();
    });

    it('DIAMOND is red', function(done) {
        SUIT.isRed(SUIT.DIAMOND).should.eql(true);
        done();
    });

    it('DIAMOND is not black', function(done) {
        SUIT.isBlack(SUIT.DIAMOND).should.eql(false);
        done();
    });

    it('SPADE is black', function(done) {
        SUIT.isBlack(SUIT.SPADE).should.eql(true);
        done();
    });

    it('SPADE is not red', function(done) {
        SUIT.isRed(SUIT.SPADE).should.eql(false);
        done();
    });

    it('CLUB is black', function(done) {
        SUIT.isBlack(SUIT.CLUB).should.eql(true);
        done();
    });

    it('CLUB is not red', function(done) {
        SUIT.isRed(SUIT.CLUB).should.eql(false);
        done();
    });

    it('invalid value is not red', function(done) {
        SUIT.isRed(-1).should.eql(false);
        SUIT.isRed(0).should.eql(false);
        SUIT.isRed(5).should.eql(false);
        SUIT.isRed(null).should.eql(false);
        done();
    });

    it('invalid value is not black', function(done) {
        SUIT.isBlack(-1).should.eql(false);
        SUIT.isBlack(0).should.eql(false);
        SUIT.isBlack(5).should.eql(false);
        SUIT.isBlack(null).should.eql(false);
        done();
    });

});
