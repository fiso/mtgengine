"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SarcomiteMyrBase = require("../setFUT/SarcomiteMyr.js");

class SarcomiteMyr extends SarcomiteMyrBase {
  constructor(game) {
    super(game, "Sarcomite Myr", "Planechase", "HOP");
  }
}

module.exports = SarcomiteMyr;
