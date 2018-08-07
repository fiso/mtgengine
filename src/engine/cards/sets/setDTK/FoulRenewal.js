"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoulRenewal extends UnimplementedCard {
  constructor (game) {
    super(game, "Foul Renewal", "Dragons of Tarkir", "DTK");
  }
}

module.exports = FoulRenewal;
