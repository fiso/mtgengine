"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VerdantHaven extends UnimplementedCard {
  constructor (game) {
    super(game, "Verdant Haven", "Magic 2015", "M15");
  }
}

module.exports = VerdantHaven;
