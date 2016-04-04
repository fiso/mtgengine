"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CinderShade extends Card {
  constructor(game) {
    super(game, "Cinder Shade", "Invasion", "INV");
  }
}

module.exports = CinderShade;
