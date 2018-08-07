"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KhalniGem extends UnimplementedCard {
  constructor (game) {
    super(game, "Khalni Gem", "Zendikar", "ZEN");
  }
}

module.exports = KhalniGem;
