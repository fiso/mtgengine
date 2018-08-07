"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WiltLeafCavaliers extends UnimplementedCard {
  constructor (game) {
    super(game, "Wilt-Leaf Cavaliers", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = WiltLeafCavaliers;
