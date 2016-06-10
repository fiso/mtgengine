"use strict";
const Constants = require ("../../../Constants");
const KrakensEyeBase = require("../setDST/KrakensEye");

class KrakensEye extends KrakensEyeBase {
  constructor (game) {
    super(game, "Kraken's Eye", "Ninth Edition", "9ED");
  }
}

module.exports = KrakensEye;
