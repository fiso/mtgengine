"use strict";
const Constants = require ("../../../Constants");
const KilnspireDistrictBase = require("../setPCA/KilnspireDistrict");

class KilnspireDistrict extends KilnspireDistrictBase {
  constructor (game) {
    super(game, "Kilnspire District", "Planechase 2012", "PC2");
  }
}

module.exports = KilnspireDistrict;
