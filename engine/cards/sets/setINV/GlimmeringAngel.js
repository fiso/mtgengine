"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlimmeringAngel extends Card {
  constructor(game) {
    super(game, "Glimmering Angel", "Invasion", "INV");
  }
}

module.exports = GlimmeringAngel;
