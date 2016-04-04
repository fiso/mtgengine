"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GwyllionHedgeMageBase = require("../setEVE/GwyllionHedgeMage.js");

class GwyllionHedgeMage extends GwyllionHedgeMageBase {
  constructor(game) {
    super(game, "Gwyllion Hedge-Mage", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = GwyllionHedgeMage;
