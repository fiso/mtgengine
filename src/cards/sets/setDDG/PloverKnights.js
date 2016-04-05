"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PloverKnights extends UnimplementedCard {
  constructor(game) {
    super(game, "Plover Knights", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = PloverKnights;
