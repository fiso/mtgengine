"use strict";
const Constants = require ("../../../Constants");
const SelkieHedgeMageBase = require("../setEVE/SelkieHedgeMage");

class SelkieHedgeMage extends SelkieHedgeMageBase {
  constructor (game) {
    super(game, "Selkie Hedge-Mage", "Gateway 2008", "PG08");
  }
}

module.exports = SelkieHedgeMage;
