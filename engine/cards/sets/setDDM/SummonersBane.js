"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SummonersBane extends Card {
  constructor(game) {
    super(game, "Summoner's Bane", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = SummonersBane;
