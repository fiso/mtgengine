"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SummoningStation extends Card {
  constructor(game) {
    super(game, "Summoning Station", "Fifth Dawn", "5DN");
  }
}

module.exports = SummoningStation;
