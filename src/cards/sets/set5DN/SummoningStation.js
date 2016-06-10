"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SummoningStation extends UnimplementedCard {
  constructor (game) {
    super(game, "Summoning Station", "Fifth Dawn", "5DN");
  }
}

module.exports = SummoningStation;
