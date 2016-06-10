"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrafMole extends UnimplementedCard {
  constructor (game) {
    super(game, "Graf Mole", "Shadows over Innistrad", "SOI");
  }
}

module.exports = GrafMole;
