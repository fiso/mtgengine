"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrengthinNumbers extends UnimplementedCard {
  constructor (game) {
    super(game, "Strength in Numbers", "Modern Masters 2017", "MM3");
  }
}

module.exports = StrengthinNumbers;
