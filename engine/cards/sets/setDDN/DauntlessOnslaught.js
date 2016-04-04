"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DauntlessOnslaughtBase = require("../setDDO/DauntlessOnslaught.js");

class DauntlessOnslaught extends DauntlessOnslaughtBase {
  constructor(game) {
    super(game, "Dauntless Onslaught", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = DauntlessOnslaught;
