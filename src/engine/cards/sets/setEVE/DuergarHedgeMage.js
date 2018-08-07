"use strict";
const Constants = require ("../../../Constants");
const DuergarHedgeMageBase = require("../setCMA/DuergarHedgeMage");

class DuergarHedgeMage extends DuergarHedgeMageBase {
  constructor (game) {
    super(game, "Duergar Hedge-Mage", "Eventide", "EVE");
  }
}

module.exports = DuergarHedgeMage;
