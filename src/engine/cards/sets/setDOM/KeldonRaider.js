"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeldonRaider extends UnimplementedCard {
  constructor (game) {
    super(game, "Keldon Raider", "Dominaria", "DOM");
  }
}

module.exports = KeldonRaider;
