"use strict";
const Constants = require ("../../../Constants");
const PhyrexianPlaguelordBase = require("../setCMA/PhyrexianPlaguelord");

class PhyrexianPlaguelord extends PhyrexianPlaguelordBase {
  constructor (game) {
    super(game, "Phyrexian Plaguelord", "World Championship Decks 1999", "WC99");
  }
}

module.exports = PhyrexianPlaguelord;
