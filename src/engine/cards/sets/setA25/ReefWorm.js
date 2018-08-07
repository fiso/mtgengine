"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReefWorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Reef Worm", "Masters 25", "A25");
  }
}

module.exports = ReefWorm;
