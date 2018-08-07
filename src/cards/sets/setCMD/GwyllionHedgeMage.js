"use strict";
const Constants = require ("../../../Constants");
const GwyllionHedgeMageBase = require("../setCMA/GwyllionHedgeMage");

class GwyllionHedgeMage extends GwyllionHedgeMageBase {
  constructor (game) {
    super(game, "Gwyllion Hedge-Mage", "Commander 2011", "CMD");
  }
}

module.exports = GwyllionHedgeMage;
