"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GnarlidPack extends UnimplementedCard {
  constructor(game) {
    super(game, "Gnarlid Pack", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = GnarlidPack;
