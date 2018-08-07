"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tundra extends UnimplementedCard {
  constructor (game) {
    super(game, "Tundra", "Vintage Masters", "VMA");
  }
}

module.exports = Tundra;
