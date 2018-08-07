"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EightandaHalfTails extends UnimplementedCard {
  constructor (game) {
    super(game, "Eight-and-a-Half-Tails", "Eternal Masters", "EMA");
  }
}

module.exports = EightandaHalfTails;
