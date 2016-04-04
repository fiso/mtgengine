"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HarmsWay extends Card {
  constructor(game) {
    super(game, "Harm's Way", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = HarmsWay;
