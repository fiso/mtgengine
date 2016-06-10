"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurnAway extends UnimplementedCard {
  constructor (game) {
    super(game, "Burn Away", "Khans of Tarkir", "KTK");
  }
}

module.exports = BurnAway;
