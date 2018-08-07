"use strict";
const Constants = require ("../../../Constants");
const SarcomiteMyrBase = require("../setHOP/SarcomiteMyr");

class SarcomiteMyr extends SarcomiteMyrBase {
  constructor (game) {
    super(game, "Sarcomite Myr", "Future Sight", "FUT");
  }
}

module.exports = SarcomiteMyr;
