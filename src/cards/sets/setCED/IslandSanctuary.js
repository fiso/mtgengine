"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IslandSanctuary extends UnimplementedCard {
  constructor(game) {
    super(game, "Island Sanctuary", "Collector's Edition", "CED");
  }
}

module.exports = IslandSanctuary;
