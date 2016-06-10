"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IllusionaryMask extends UnimplementedCard {
  constructor (game) {
    super(game, "Illusionary Mask", "Collector's Edition", "CED");
  }
}

module.exports = IllusionaryMask;
