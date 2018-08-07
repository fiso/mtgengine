"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SummonersBond extends UnimplementedCard {
  constructor (game) {
    super(game, "Summoner's Bond", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = SummonersBond;
