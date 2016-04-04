"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThrullParasite extends Card {
  constructor(game) {
    super(game, "Thrull Parasite", "Gatecrash", "GTC");
  }
}

module.exports = ThrullParasite;
