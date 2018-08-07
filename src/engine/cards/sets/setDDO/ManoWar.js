"use strict";
const Constants = require ("../../../Constants");
const ManoWarBase = require("../setA25/ManoWar");

class ManoWar extends ManoWarBase {
  constructor (game) {
    super(game, "Man-o'-War", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = ManoWar;
