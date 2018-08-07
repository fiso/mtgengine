"use strict";
const Constants = require ("../../../Constants");
const ReinforcementsBase = require("../setME2/Reinforcements");

class Reinforcements extends ReinforcementsBase {
  constructor (game) {
    super(game, "Reinforcements", "Alliances", "ALL");
  }
}

module.exports = Reinforcements;
