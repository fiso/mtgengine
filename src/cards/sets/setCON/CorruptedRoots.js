"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorruptedRoots extends UnimplementedCard {
  constructor (game) {
    super(game, "Corrupted Roots", "Conflux", "CON");
  }
}

module.exports = CorruptedRoots;
