"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoldeviExcavationsBase = require("../setALL/SoldeviExcavations.js");

class SoldeviExcavations extends SoldeviExcavationsBase {
  constructor(game) {
    super(game, "Soldevi Excavations", "Masters Edition II", "ME2");
  }
}

module.exports = SoldeviExcavations;
