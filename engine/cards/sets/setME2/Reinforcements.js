"use strict";
const Constants = require ("../../../Constants");
const ReinforcementsBase = require("../setALL/Reinforcements");

class Reinforcements extends ReinforcementsBase {
  constructor(game) {
    super(game, "Reinforcements", "Masters Edition II", "ME2");
  }
}

module.exports = Reinforcements;
