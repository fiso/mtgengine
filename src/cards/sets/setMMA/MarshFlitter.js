"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarshFlitter extends UnimplementedCard {
  constructor (game) {
    super(game, "Marsh Flitter", "Modern Masters", "MMA");
  }
}

module.exports = MarshFlitter;
