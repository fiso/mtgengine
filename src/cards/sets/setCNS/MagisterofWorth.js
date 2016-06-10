"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagisterofWorth extends UnimplementedCard {
  constructor (game) {
    super(game, "Magister of Worth", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = MagisterofWorth;
