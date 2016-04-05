"use strict";
const Constants = require ("../../../Constants");
const KhalniGardenBase = require("../setARC/KhalniGarden");

class KhalniGarden extends KhalniGardenBase {
  constructor(game) {
    super(game, "Khalni Garden", "Worldwake", "WWK");
  }
}

module.exports = KhalniGarden;
