"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeavyArbalest extends UnimplementedCard {
  constructor (game) {
    super(game, "Heavy Arbalest", "Masters 25", "A25");
  }
}

module.exports = HeavyArbalest;
