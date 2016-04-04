"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SedgeTroll extends UnimplementedCard {
  constructor(game) {
    super(game, "Sedge Troll", "Collector's Edition", "CED");
  }
}

module.exports = SedgeTroll;
