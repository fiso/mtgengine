"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlimmeringAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Glimmering Angel", "Invasion", "INV");
  }
}

module.exports = GlimmeringAngel;
