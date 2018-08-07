"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientZiggurat extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancient Ziggurat", "Friday Night Magic 2010", "F10");
  }
}

module.exports = AncientZiggurat;
