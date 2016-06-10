"use strict";
const Constants = require ("../../../Constants");
const KhalniGardenBase = require("../setARC/KhalniGarden");

class KhalniGarden extends KhalniGardenBase {
  constructor (game) {
    super(game, "Khalni Garden", "Commander 2013 Edition", "C13");
  }
}

module.exports = KhalniGarden;
