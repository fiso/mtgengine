"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrakensEye extends Card {
  constructor(game) {
    super(game, "Kraken's Eye", "Darksteel", "DST");
  }
}

module.exports = KrakensEye;
