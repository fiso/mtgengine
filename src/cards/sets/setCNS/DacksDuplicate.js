"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DacksDuplicate extends UnimplementedCard {
  constructor (game) {
    super(game, "Dack's Duplicate", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = DacksDuplicate;
