"use strict";
const Constants = require ("../../../Constants");
const GwyllionHedgeMageBase = require("../setCMA/GwyllionHedgeMage");

class GwyllionHedgeMage extends GwyllionHedgeMageBase {
  constructor (game) {
    super(game, "Gwyllion Hedge-Mage", "Eventide", "EVE");
  }
}

module.exports = GwyllionHedgeMage;
