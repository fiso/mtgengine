"use strict";
const Constants = require ("../../../Constants");
const KhalniGardenBase = require("../setC18/KhalniGarden");

class KhalniGarden extends KhalniGardenBase {
  constructor (game) {
    super(game, "Khalni Garden", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = KhalniGarden;
