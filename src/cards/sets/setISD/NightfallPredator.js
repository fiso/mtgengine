"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightfallPredator extends UnimplementedCard {
  constructor (game) {
    super(game, "Nightfall Predator", "Innistrad", "ISD");
  }
}

module.exports = NightfallPredator;
