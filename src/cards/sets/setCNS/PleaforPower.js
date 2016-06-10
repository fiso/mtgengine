"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PleaforPower extends UnimplementedCard {
  constructor (game) {
    super(game, "Plea for Power", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PleaforPower;
