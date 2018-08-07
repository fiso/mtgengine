"use strict";
const Constants = require ("../../../Constants");
const DuergarHedgeMageBase = require("../setCMA/DuergarHedgeMage");

class DuergarHedgeMage extends DuergarHedgeMageBase {
  constructor (game) {
    super(game, "Duergar Hedge-Mage", "Magic Online Promos", "PRM");
  }
}

module.exports = DuergarHedgeMage;
