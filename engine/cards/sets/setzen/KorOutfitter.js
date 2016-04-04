"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KorOutfitter extends Card {
  constructor(game) {
    super(game, "Kor Outfitter", "Zendikar", "ZEN");
  }
}

module.exports = KorOutfitter;
