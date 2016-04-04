"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KhalniGardenBase = require("../setARC/KhalniGarden.js");

class KhalniGarden extends KhalniGardenBase {
  constructor(game) {
    super(game, "Khalni Garden", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = KhalniGarden;
