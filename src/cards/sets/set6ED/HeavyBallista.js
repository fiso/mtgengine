"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeavyBallista extends UnimplementedCard {
  constructor (game) {
    super(game, "Heavy Ballista", "Classic Sixth Edition", "6ED");
  }
}

module.exports = HeavyBallista;
