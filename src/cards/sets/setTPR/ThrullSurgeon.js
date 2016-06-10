"use strict";
const Constants = require ("../../../Constants");
const ThrullSurgeonBase = require("../setEXO/ThrullSurgeon");

class ThrullSurgeon extends ThrullSurgeonBase {
  constructor (game) {
    super(game, "Thrull Surgeon", "Tempest Remastered", "TPR");
  }
}

module.exports = ThrullSurgeon;
