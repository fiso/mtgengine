"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteelshapersGift extends UnimplementedCard {
  constructor(game) {
    super(game, "Steelshaper's Gift", "Fifth Dawn", "5DN");
  }
}

module.exports = SteelshapersGift;
