"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KhalniGem extends Card {
  constructor(game) {
    super(game, "Khalni Gem", "Zendikar", "ZEN");
  }
}

module.exports = KhalniGem;
