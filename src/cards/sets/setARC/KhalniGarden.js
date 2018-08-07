"use strict";
const Constants = require ("../../../Constants");
const KhalniGardenBase = require("../setC18/KhalniGarden");

class KhalniGarden extends KhalniGardenBase {
  constructor (game) {
    super(game, "Khalni Garden", "Archenemy", "ARC");
  }
}

module.exports = KhalniGarden;
