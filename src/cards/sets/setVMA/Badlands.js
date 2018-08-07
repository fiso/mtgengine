"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Badlands extends UnimplementedCard {
  constructor (game) {
    super(game, "Badlands", "Vintage Masters", "VMA");
  }
}

module.exports = Badlands;
