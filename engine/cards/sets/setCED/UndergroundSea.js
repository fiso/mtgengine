"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndergroundSea extends UnimplementedCard {
  constructor(game) {
    super(game, "Underground Sea", "Collector's Edition", "CED");
  }
}

module.exports = UndergroundSea;
