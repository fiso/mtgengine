"use strict";
const Constants = require ("../../../Constants");
const HumanBase = require("../setTEMN/Human");

class Human extends HumanBase {
  constructor (game) {
    super(game, "Human", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Human;
