"use strict";
const Constants = require ("../../../Constants");
const GhostlyFlickerBase = require("../setMM3/GhostlyFlicker");

class GhostlyFlicker extends GhostlyFlickerBase {
  constructor (game) {
    super(game, "Ghostly Flicker", "Avacyn Restored", "AVR");
  }
}

module.exports = GhostlyFlicker;
