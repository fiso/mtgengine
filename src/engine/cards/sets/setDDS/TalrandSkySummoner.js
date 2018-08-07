"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalrandSkySummoner extends UnimplementedCard {
  constructor (game) {
    super(game, "Talrand, Sky Summoner", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = TalrandSkySummoner;
