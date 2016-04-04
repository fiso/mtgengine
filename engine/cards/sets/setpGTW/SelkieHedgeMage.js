"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SelkieHedgeMageBase = require("../setEVE/SelkieHedgeMage.js");

class SelkieHedgeMage extends SelkieHedgeMageBase {
  constructor(game) {
    super(game, "Selkie Hedge-Mage", "Gateway", "pGTW");
  }
}

module.exports = SelkieHedgeMage;
