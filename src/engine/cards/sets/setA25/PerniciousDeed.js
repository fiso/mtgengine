"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PerniciousDeed extends UnimplementedCard {
  constructor (game) {
    super(game, "Pernicious Deed", "Masters 25", "A25");
  }
}

module.exports = PerniciousDeed;
