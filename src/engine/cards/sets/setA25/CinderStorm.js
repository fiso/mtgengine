"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CinderStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Cinder Storm", "Masters 25", "A25");
  }
}

module.exports = CinderStorm;
