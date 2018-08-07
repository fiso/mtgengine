"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThallidGerminator extends UnimplementedCard {
  constructor (game) {
    super(game, "Thallid Germinator", "Modern Masters", "MMA");
  }
}

module.exports = ThallidGerminator;
