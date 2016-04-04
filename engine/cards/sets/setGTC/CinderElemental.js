"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CinderElemental extends Card {
  constructor(game) {
    super(game, "Cinder Elemental", "Gatecrash", "GTC");
  }
}

module.exports = CinderElemental;
