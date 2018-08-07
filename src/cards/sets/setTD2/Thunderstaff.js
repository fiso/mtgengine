"use strict";
const Constants = require ("../../../Constants");
const ThunderstaffBase = require("../setCMA/Thunderstaff");

class Thunderstaff extends ThunderstaffBase {
  constructor (game) {
    super(game, "Thunderstaff", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = Thunderstaff;
