"use strict";
const Constants = require ("../../../Constants");
const VampiricSpiritBase = require("../set8ED/VampiricSpirit");

class VampiricSpirit extends VampiricSpiritBase {
  constructor(game) {
    super(game, "Vampiric Spirit", "Portal Second Age", "PO2");
  }
}

module.exports = VampiricSpirit;
