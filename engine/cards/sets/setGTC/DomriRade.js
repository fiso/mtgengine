"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DomriRade extends Card {
  constructor(game) {
    super(game, "Domri Rade", "Gatecrash", "GTC");
  }
}

module.exports = DomriRade;
