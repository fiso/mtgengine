"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KabiraVindicator extends Card {
  constructor(game) {
    super(game, "Kabira Vindicator", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = KabiraVindicator;
