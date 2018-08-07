"use strict";
const Constants = require ("../../../Constants");
const PhyrexianPlaguelordBase = require("../setCMA/PhyrexianPlaguelord");

class PhyrexianPlaguelord extends PhyrexianPlaguelordBase {
  constructor (game) {
    super(game, "Phyrexian Plaguelord", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = PhyrexianPlaguelord;
