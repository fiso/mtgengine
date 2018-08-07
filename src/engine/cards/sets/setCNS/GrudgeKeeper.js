"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrudgeKeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Grudge Keeper", "Conspiracy", "CNS");
  }
}

module.exports = GrudgeKeeper;
