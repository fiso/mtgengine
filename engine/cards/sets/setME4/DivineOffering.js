"use strict";
const Constants = require ("../../../Constants");
const DivineOfferingBase = require("../setCHR/DivineOffering");

class DivineOffering extends DivineOfferingBase {
  constructor(game) {
    super(game, "Divine Offering", "Masters Edition IV", "ME4");
  }
}

module.exports = DivineOffering;
