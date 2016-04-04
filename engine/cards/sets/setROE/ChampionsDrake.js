"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChampionsDrake extends Card {
  constructor(game) {
    super(game, "Champion's Drake", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ChampionsDrake;
