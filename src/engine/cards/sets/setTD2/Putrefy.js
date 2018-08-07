"use strict";
const Constants = require ("../../../Constants");
const PutrefyBase = require("../setC18/Putrefy");

class Putrefy extends PutrefyBase {
  constructor (game) {
    super(game, "Putrefy", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = Putrefy;
