"use strict";
const Constants = require ("../../../Constants");
const KhalniGardenBase = require("../setARC/KhalniGarden");

class KhalniGarden extends KhalniGardenBase {
  constructor(game) {
    super(game, "Khalni Garden", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = KhalniGarden;
