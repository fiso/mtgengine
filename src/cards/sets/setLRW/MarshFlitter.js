"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarshFlitter extends UnimplementedCard {
  constructor (game) {
    super(game, "Marsh Flitter", "Lorwyn", "LRW");
  }
}

module.exports = MarshFlitter;
