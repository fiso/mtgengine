"use strict";
const Constants = require ("../../../Constants");
const RashmiEternitiesCrafterBase = require("../setKLD/RashmiEternitiesCrafter");

class RashmiEternitiesCrafter extends RashmiEternitiesCrafterBase {
  constructor (game) {
    super(game, "Rashmi, Eternities Crafter", "Kaladesh Promos", "PKLD");
  }
}

module.exports = RashmiEternitiesCrafter;
