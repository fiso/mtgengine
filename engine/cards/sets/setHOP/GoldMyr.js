"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoldMyrBase = require("../setMRD/GoldMyr.js");

class GoldMyr extends GoldMyrBase {
  constructor(game) {
    super(game, "Gold Myr", "Planechase", "HOP");
  }
}

module.exports = GoldMyr;
