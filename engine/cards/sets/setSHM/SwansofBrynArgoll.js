"use strict";
const Constants = require ("../../../Constants");
const SwansofBrynArgollBase = require("../setMM2/SwansofBrynArgoll");

class SwansofBrynArgoll extends SwansofBrynArgollBase {
  constructor(game) {
    super(game, "Swans of Bryn Argoll", "Shadowmoor", "SHM");
  }
}

module.exports = SwansofBrynArgoll;
