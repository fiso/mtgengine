"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaintedAether extends UnimplementedCard {
  constructor(game) {
    super(game, "Tainted Æther", "Seventh Edition", "7ED");
  }
}

module.exports = TaintedAether;
