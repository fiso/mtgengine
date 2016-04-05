"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarmsWay extends UnimplementedCard {
  constructor(game) {
    super(game, "Harm's Way", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = HarmsWay;
