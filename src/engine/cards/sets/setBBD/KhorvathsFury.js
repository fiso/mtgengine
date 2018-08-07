"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KhorvathsFury extends UnimplementedCard {
  constructor (game) {
    super(game, "Khorvath's Fury", "Battlebond", "BBD");
  }
}

module.exports = KhorvathsFury;
