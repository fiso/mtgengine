"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Conversion extends UnimplementedCard {
  constructor(game) {
    super(game, "Conversion", "Collector's Edition", "CED");
  }
}

module.exports = Conversion;
