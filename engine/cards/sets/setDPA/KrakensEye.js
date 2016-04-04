"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KrakensEyeBase = require("../setDST/KrakensEye.js");

class KrakensEye extends KrakensEyeBase {
  constructor(game) {
    super(game, "Kraken's Eye", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = KrakensEye;
