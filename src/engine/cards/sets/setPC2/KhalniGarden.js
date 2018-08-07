"use strict";
const Constants = require ("../../../Constants");
const KhalniGardenBase = require("../setC18/KhalniGarden");

class KhalniGarden extends KhalniGardenBase {
  constructor (game) {
    super(game, "Khalni Garden", "Planechase 2012", "PC2");
  }
}

module.exports = KhalniGarden;
