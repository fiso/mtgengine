"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArborArmament extends UnimplementedCard {
  constructor (game) {
    super(game, "Arbor Armament", "Dominaria", "DOM");
  }
}

module.exports = ArborArmament;
