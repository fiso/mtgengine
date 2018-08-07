"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteelLeafChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Steel Leaf Champion", "Dominaria", "DOM");
  }
}

module.exports = SteelLeafChampion;
