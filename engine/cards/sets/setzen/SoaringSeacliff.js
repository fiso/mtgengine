"use strict";
const Constants = require ("../../../Constants");
const SoaringSeacliffBase = require("../setDDI/SoaringSeacliff");

class SoaringSeacliff extends SoaringSeacliffBase {
  constructor(game) {
    super(game, "Soaring Seacliff", "Zendikar", "ZEN");
  }
}

module.exports = SoaringSeacliff;
