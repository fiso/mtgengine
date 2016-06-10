"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientGrudge extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancient Grudge", "Friday Night Magic", "pFNM");
  }
}

module.exports = AncientGrudge;
