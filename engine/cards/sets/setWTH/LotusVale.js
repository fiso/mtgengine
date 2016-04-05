"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LotusVale extends UnimplementedCard {
  constructor(game) {
    super(game, "Lotus Vale", "Weatherlight", "WTH");
  }
}

module.exports = LotusVale;
