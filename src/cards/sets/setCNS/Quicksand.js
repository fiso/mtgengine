"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Quicksand extends UnimplementedCard {
  constructor (game) {
    super(game, "Quicksand", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Quicksand;
