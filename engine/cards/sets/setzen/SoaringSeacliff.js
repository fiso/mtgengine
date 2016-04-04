"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoaringSeacliffBase = require("../setDDI/SoaringSeacliff.js");

class SoaringSeacliff extends SoaringSeacliffBase {
  constructor(game) {
    super(game, "Soaring Seacliff", "Zendikar", "ZEN");
  }
}

module.exports = SoaringSeacliff;
