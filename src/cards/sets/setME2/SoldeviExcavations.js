"use strict";
const Constants = require ("../../../Constants");
const SoldeviExcavationsBase = require("../setALL/SoldeviExcavations");

class SoldeviExcavations extends SoldeviExcavationsBase {
  constructor (game) {
    super(game, "Soldevi Excavations", "Masters Edition II", "ME2");
  }
}

module.exports = SoldeviExcavations;
