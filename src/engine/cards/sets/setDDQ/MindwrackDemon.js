"use strict";
const Constants = require ("../../../Constants");
const MindwrackDemonBase = require("../setSOI/MindwrackDemon");

class MindwrackDemon extends MindwrackDemonBase {
  constructor (game) {
    super(game, "Mindwrack Demon", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = MindwrackDemon;
