"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KillerBees extends UnimplementedCard {
  constructor(game) {
    super(game, "Killer Bees", "Fifth Edition", "5ED");
  }
}

module.exports = KillerBees;
