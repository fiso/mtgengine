"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Paralyze extends UnimplementedCard {
  constructor (game) {
    super(game, "Paralyze", "Vintage Masters", "VMA");
  }
}

module.exports = Paralyze;
