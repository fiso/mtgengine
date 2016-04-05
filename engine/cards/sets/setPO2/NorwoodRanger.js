"use strict";
const Constants = require ("../../../Constants");
const NorwoodRangerBase = require("../set8ED/NorwoodRanger");

class NorwoodRanger extends NorwoodRangerBase {
  constructor(game) {
    super(game, "Norwood Ranger", "Portal Second Age", "PO2");
  }
}

module.exports = NorwoodRanger;
