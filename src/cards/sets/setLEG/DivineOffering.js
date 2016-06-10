"use strict";
const Constants = require ("../../../Constants");
const DivineOfferingBase = require("../setCHR/DivineOffering");

class DivineOffering extends DivineOfferingBase {
  constructor (game) {
    super(game, "Divine Offering", "Legends", "LEG");
  }
}

module.exports = DivineOffering;
