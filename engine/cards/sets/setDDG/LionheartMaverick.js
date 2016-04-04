"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LionheartMaverick extends UnimplementedCard {
  constructor(game) {
    super(game, "Lionheart Maverick", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = LionheartMaverick;
