"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KhalniGardenBase = require("../setARC/KhalniGarden.js");

class KhalniGarden extends KhalniGardenBase {
  constructor(game) {
    super(game, "Khalni Garden", "Commander 2013 Edition", "C13");
  }
}

module.exports = KhalniGarden;
