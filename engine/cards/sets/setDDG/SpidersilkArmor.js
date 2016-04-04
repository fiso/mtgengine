"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpidersilkArmor extends Card {
  constructor(game) {
    super(game, "Spidersilk Armor", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = SpidersilkArmor;
