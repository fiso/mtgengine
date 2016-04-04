"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DuergarHedgeMageBase = require("../setEVE/DuergarHedgeMage.js");

class DuergarHedgeMage extends DuergarHedgeMageBase {
  constructor(game) {
    super(game, "Duergar Hedge-Mage", "Planechase", "HOP");
  }
}

module.exports = DuergarHedgeMage;
