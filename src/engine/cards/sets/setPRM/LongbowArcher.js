"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LongbowArcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Longbow Archer", "Magic Online Promos", "PRM");
  }
}

module.exports = LongbowArcher;
