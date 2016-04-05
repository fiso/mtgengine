"use strict";
const Constants = require ("../../../Constants");
const GwyllionHedgeMageBase = require("../setEVE/GwyllionHedgeMage");

class GwyllionHedgeMage extends GwyllionHedgeMageBase {
  constructor(game) {
    super(game, "Gwyllion Hedge-Mage", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = GwyllionHedgeMage;
