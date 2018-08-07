"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IslandSanctuary extends UnimplementedCard {
  constructor (game) {
    super(game, "Island Sanctuary", "Masters Edition IV", "ME4");
  }
}

module.exports = IslandSanctuary;
