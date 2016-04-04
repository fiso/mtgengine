"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VampiricSpiritBase = require("../set8ED/VampiricSpirit.js");

class VampiricSpirit extends VampiricSpiritBase {
  constructor(game) {
    super(game, "Vampiric Spirit", "Portal Second Age", "PO2");
  }
}

module.exports = VampiricSpirit;
