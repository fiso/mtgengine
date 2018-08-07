"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoxPearl extends UnimplementedCard {
  constructor (game) {
    super(game, "Mox Pearl", "Vintage Masters", "VMA");
  }
}

module.exports = MoxPearl;
