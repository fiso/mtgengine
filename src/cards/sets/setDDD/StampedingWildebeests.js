"use strict";
const Constants = require ("../../../Constants");
const StampedingWildebeestsBase = require("../setDD3_GVL/StampedingWildebeests");

class StampedingWildebeests extends StampedingWildebeestsBase {
  constructor (game) {
    super(game, "Stampeding Wildebeests", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = StampedingWildebeests;
