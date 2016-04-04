"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LionheartMaverick extends Card {
  constructor(game) {
    super(game, "Lionheart Maverick", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = LionheartMaverick;
