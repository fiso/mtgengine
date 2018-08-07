"use strict";
const Constants = require ("../../../Constants");
const KrakensEyeBase = require("../setM12/KrakensEye");

class KrakensEye extends KrakensEyeBase {
  constructor (game) {
    super(game, "Kraken's Eye", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = KrakensEye;
