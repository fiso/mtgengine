"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SummonersBane extends UnimplementedCard {
  constructor(game) {
    super(game, "Summoner's Bane", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = SummonersBane;
