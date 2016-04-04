"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WiltLeafCavaliers extends Card {
  constructor(game) {
    super(game, "Wilt-Leaf Cavaliers", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = WiltLeafCavaliers;
