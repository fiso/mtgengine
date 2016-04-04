"use strict";
const Constants = require ("../../../Constants");
const DuergarHedgeMageBase = require("../setEVE/DuergarHedgeMage");

class DuergarHedgeMage extends DuergarHedgeMageBase {
  constructor(game) {
    super(game, "Duergar Hedge-Mage", "Gateway", "pGTW");
  }
}

module.exports = DuergarHedgeMage;
