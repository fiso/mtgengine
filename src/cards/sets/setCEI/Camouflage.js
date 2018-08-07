"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Camouflage extends UnimplementedCard {
  constructor (game) {
    super(game, "Camouflage", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Camouflage;
