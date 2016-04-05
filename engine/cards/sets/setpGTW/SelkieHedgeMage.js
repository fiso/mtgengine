"use strict";
const Constants = require ("../../../Constants");
const SelkieHedgeMageBase = require("../setEVE/SelkieHedgeMage");

class SelkieHedgeMage extends SelkieHedgeMageBase {
  constructor(game) {
    super(game, "Selkie Hedge-Mage", "Gateway", "pGTW");
  }
}

module.exports = SelkieHedgeMage;
