"use strict";
const Constants = require ("../../../Constants");
const SarcomiteMyrBase = require("../setFUT/SarcomiteMyr");

class SarcomiteMyr extends SarcomiteMyrBase {
  constructor (game) {
    super(game, "Sarcomite Myr", "Planechase", "HOP");
  }
}

module.exports = SarcomiteMyr;
