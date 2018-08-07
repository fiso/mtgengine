"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KozileksPredator extends UnimplementedCard {
  constructor (game) {
    super(game, "Kozilek's Predator", "Modern Masters 2015", "MM2");
  }
}

module.exports = KozileksPredator;
