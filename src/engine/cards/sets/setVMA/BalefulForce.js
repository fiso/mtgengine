"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalefulForce extends UnimplementedCard {
  constructor (game) {
    super(game, "Baleful Force", "Vintage Masters", "VMA");
  }
}

module.exports = BalefulForce;
