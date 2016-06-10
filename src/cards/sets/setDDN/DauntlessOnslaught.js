"use strict";
const Constants = require ("../../../Constants");
const DauntlessOnslaughtBase = require("../setDDO/DauntlessOnslaught");

class DauntlessOnslaught extends DauntlessOnslaughtBase {
  constructor (game) {
    super(game, "Dauntless Onslaught", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = DauntlessOnslaught;
