"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagusoftheMirror extends UnimplementedCard {
  constructor(game) {
    super(game, "Magus of the Mirror", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = MagusoftheMirror;
