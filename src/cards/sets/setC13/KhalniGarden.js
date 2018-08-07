"use strict";
const Constants = require ("../../../Constants");
const KhalniGardenBase = require("../setC18/KhalniGarden");

class KhalniGarden extends KhalniGardenBase {
  constructor (game) {
    super(game, "Khalni Garden", "Commander 2013", "C13");
  }
}

module.exports = KhalniGarden;
