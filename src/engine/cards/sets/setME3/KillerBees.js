"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KillerBees extends UnimplementedCard {
  constructor (game) {
    super(game, "Killer Bees", "Masters Edition III", "ME3");
  }
}

module.exports = KillerBees;
