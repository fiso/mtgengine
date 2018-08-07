"use strict";
const Constants = require ("../../../Constants");
const DemonBase = require("../setTDOM/Demon");

class Demon extends DemonBase {
  constructor (game) {
    super(game, "Demon", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = Demon;