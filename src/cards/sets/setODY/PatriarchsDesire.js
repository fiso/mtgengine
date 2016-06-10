"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PatriarchsDesire extends UnimplementedCard {
  constructor (game) {
    super(game, "Patriarch's Desire", "Odyssey", "ODY");
  }
}

module.exports = PatriarchsDesire;
