"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlaringAegis extends UnimplementedCard {
  constructor(game) {
    super(game, "Glaring Aegis", "Dragons of Tarkir", "DTK");
  }
}

module.exports = GlaringAegis;
