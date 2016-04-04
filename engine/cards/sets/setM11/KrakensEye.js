"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KrakensEyeBase = require("../setDST/KrakensEye.js");

class KrakensEye extends KrakensEyeBase {
  constructor(game) {
    super(game, "Kraken's Eye", "Magic 2011", "M11");
  }
}

module.exports = KrakensEye;
