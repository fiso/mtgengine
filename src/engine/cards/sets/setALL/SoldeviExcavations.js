"use strict";
const Constants = require ("../../../Constants");
const SoldeviExcavationsBase = require("../setME2/SoldeviExcavations");

class SoldeviExcavations extends SoldeviExcavationsBase {
  constructor (game) {
    super(game, "Soldevi Excavations", "Alliances", "ALL");
  }
}

module.exports = SoldeviExcavations;
