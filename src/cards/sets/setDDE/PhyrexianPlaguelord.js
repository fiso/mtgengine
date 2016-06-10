"use strict";
const Constants = require ("../../../Constants");
const PhyrexianPlaguelordBase = require("../setC15/PhyrexianPlaguelord");

class PhyrexianPlaguelord extends PhyrexianPlaguelordBase {
  constructor (game) {
    super(game, "Phyrexian Plaguelord", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = PhyrexianPlaguelord;
