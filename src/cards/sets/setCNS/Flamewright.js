"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flamewright extends UnimplementedCard {
  constructor(game) {
    super(game, "Flamewright", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Flamewright;
