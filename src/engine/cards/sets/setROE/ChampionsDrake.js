"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChampionsDrake extends UnimplementedCard {
  constructor (game) {
    super(game, "Champion's Drake", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ChampionsDrake;
