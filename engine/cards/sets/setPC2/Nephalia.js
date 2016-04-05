"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Nephalia extends UnimplementedCard {
  constructor(game) {
    super(game, "Nephalia", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Nephalia;
