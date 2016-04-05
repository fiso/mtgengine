"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KorOutfitter extends UnimplementedCard {
  constructor(game) {
    super(game, "Kor Outfitter", "Zendikar", "ZEN");
  }
}

module.exports = KorOutfitter;
