"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CinderShade extends UnimplementedCard {
  constructor (game) {
    super(game, "Cinder Shade", "Invasion", "INV");
  }
}

module.exports = CinderShade;
