"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Misdirection extends UnimplementedCard {
  constructor(game) {
    super(game, "Misdirection", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Misdirection;
