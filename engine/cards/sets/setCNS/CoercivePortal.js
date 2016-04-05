"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoercivePortal extends UnimplementedCard {
  constructor(game) {
    super(game, "Coercive Portal", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CoercivePortal;
