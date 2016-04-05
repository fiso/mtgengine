"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Jund extends UnimplementedCard {
  constructor(game) {
    super(game, "Jund", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Jund;
