"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThornofAmethyst extends UnimplementedCard {
  constructor (game) {
    super(game, "Thorn of Amethyst", "Lorwyn", "LRW");
  }
}

module.exports = ThornofAmethyst;
