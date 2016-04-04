"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoreSeeker extends UnimplementedCard {
  constructor(game) {
    super(game, "Lore Seeker", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = LoreSeeker;
