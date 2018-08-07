"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpidersilkArmor extends UnimplementedCard {
  constructor (game) {
    super(game, "Spidersilk Armor", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = SpidersilkArmor;
