"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SolRing extends UnimplementedCard {
  constructor(game) {
    super(game, "Sol Ring", "Collector's Edition", "CED");
  }
}

module.exports = SolRing;
