"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NemesisMask extends UnimplementedCard {
  constructor (game) {
    super(game, "Nemesis Mask", "Darksteel", "DST");
  }
}

module.exports = NemesisMask;
