"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KamahlsDesire extends UnimplementedCard {
  constructor (game) {
    super(game, "Kamahl's Desire", "Odyssey", "ODY");
  }
}

module.exports = KamahlsDesire;
