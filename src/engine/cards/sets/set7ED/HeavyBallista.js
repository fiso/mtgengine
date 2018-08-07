"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeavyBallista extends UnimplementedCard {
  constructor (game) {
    super(game, "Heavy Ballista", "Seventh Edition", "7ED");
  }
}

module.exports = HeavyBallista;
