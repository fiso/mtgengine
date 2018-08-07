"use strict";
const Constants = require ("../../../Constants");
const AmbassadorOakBase = require("../setA25/AmbassadorOak");

class AmbassadorOak extends AmbassadorOakBase {
  constructor (game) {
    super(game, "Ambassador Oak", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = AmbassadorOak;
