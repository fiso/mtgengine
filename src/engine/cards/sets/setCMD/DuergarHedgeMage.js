"use strict";
const Constants = require ("../../../Constants");
const DuergarHedgeMageBase = require("../setCMA/DuergarHedgeMage");

class DuergarHedgeMage extends DuergarHedgeMageBase {
  constructor (game) {
    super(game, "Duergar Hedge-Mage", "Commander 2011", "CMD");
  }
}

module.exports = DuergarHedgeMage;
