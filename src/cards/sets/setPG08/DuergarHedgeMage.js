"use strict";
const Constants = require ("../../../Constants");
const DuergarHedgeMageBase = require("../setCMA/DuergarHedgeMage");

class DuergarHedgeMage extends DuergarHedgeMageBase {
  constructor (game) {
    super(game, "Duergar Hedge-Mage", "Gateway 2008", "PG08");
  }
}

module.exports = DuergarHedgeMage;
