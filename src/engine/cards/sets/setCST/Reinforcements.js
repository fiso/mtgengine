"use strict";
const Constants = require ("../../../Constants");
const ReinforcementsBase = require("../setME2/Reinforcements");

class Reinforcements extends ReinforcementsBase {
  constructor (game) {
    super(game, "Reinforcements", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = Reinforcements;
