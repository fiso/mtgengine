"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlessingsofNature extends UnimplementedCard {
  constructor(game) {
    super(game, "Blessings of Nature", "Avacyn Restored", "AVR");
  }
}

module.exports = BlessingsofNature;
