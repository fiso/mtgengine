"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VelisVel extends UnimplementedCard {
  constructor (game) {
    super(game, "Velis Vel", "Planechase", "HOP");
  }
}

module.exports = VelisVel;
