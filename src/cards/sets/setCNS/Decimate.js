"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Decimate extends UnimplementedCard {
  constructor(game) {
    super(game, "Decimate", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Decimate;
