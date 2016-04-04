"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SummonersEgg extends Card {
  constructor(game) {
    super(game, "Summoner's Egg", "Fifth Dawn", "5DN");
  }
}

module.exports = SummonersEgg;
